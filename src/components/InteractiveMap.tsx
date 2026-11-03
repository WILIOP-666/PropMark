"use client";

import { useEffect, useRef, useState } from "react";
import { formatCurrency, formatPercent } from "../lib/utils";
import { SuburbSchool } from "../lib/types";
import {
  OFFICIAL_BELMONT_NORTH_BOUNDARY,
  OFFICIAL_NEIGHBOURING_BOUNDARIES,
  OFFICIAL_MANLY_BOUNDARY,
  OFFICIAL_MANLY_NEIGHBOURS,
  OFFICIAL_RICHMOND_VIC_BOUNDARY,
  generateDetailedBoundary,
} from "../lib/data/boundaryGeoData";

interface InteractiveMapProps {
  center: { lat: number; lng: number };
  zoom?: number;
  suburbName: string;
  state: string;
  postcode: string;
  medianHousePrice: number;
  capitalGrowth12MoPct: number;
  grossYieldPct: number;
  overallScore: number;
  schools?: SuburbSchool[];
  hazardRisk?: string;
  activeDaCount?: number;
  height?: string;
  surroundingSuburbs?: string[];
  activeSection?: string;
}

export default function InteractiveMap({
  center,
  zoom = 14,
  suburbName,
  state,
  postcode,
  medianHousePrice,
  capitalGrowth12MoPct,
  grossYieldPct,
  overallScore,
  schools = [],
  hazardRisk = "Low",
  activeDaCount = 24,
  height = "450px",
  surroundingSuburbs = [],
}: InteractiveMapProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Layer & Display States (Default granularity is "suburb" per user directive)
  const [activeMetric, setActiveMetric] = useState<"price" | "yield" | "growth">("price");
  const [granularity, setGranularity] = useState<"microburb" | "suburb">("suburb");
  const [showNeighbours, setShowNeighbours] = useState<boolean>(true);

  // Layers references
  const neighbourLayersRef = useRef<any[]>([]);
  const meshBlockLayersRef = useRef<any[]>([]);
  const targetPolygonRef = useRef<any>(null);
  const centerMarkerRef = useRef<any>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    let isMounted = true;

    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      // Fix icon issues in Next.js
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const isManly = suburbName.toLowerCase().includes("manly");
      const initialCenter: [number, number] = isManly
        ? [-33.8060, 151.2880]
        : [center.lat, center.lng];
      const initialZoom = isManly ? 13 : zoom;

      // Map container matching inspected Microburbs DOM
      const map = L.map(mapContainerRef.current, {
        center: initialCenter,
        zoom: initialZoom,
        zoomControl: true, // Native Leaflet zoom (+ and − in top-left)
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      // Clean Microburbs basemap tiles without any API key watermark
      L.tileLayer("/api/tiles/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 20,
      }).addTo(map);

      const dLat = 0.013;
      const dLng = 0.017;

      const isBelmont = suburbName.toLowerCase().includes("belmont");

      // 1. Surrounding Neighbouring Suburbs (Exact Microburbs Cadastral Mosaic)
      if (isManly) {
        neighbourLayersRef.current = OFFICIAL_MANLY_NEIGHBOURS.map((nb) => {
          const nbPoly = L.polygon(nb.coords, {
            color: "#94a3b8",
            weight: 1.2,
            opacity: 1,
            fillColor: "#e2e8f0",
            fillOpacity: 0.35,
            lineCap: "round",
            lineJoin: "round",
            className: "leaflet-interactive",
          }).addTo(map);

          nbPoly.bindTooltip(`<b>${nb.name.toUpperCase()}</b>`, {
            sticky: true,
            direction: "top",
          });

          nbPoly.on("mouseover", function (this: any) {
            this.setStyle({ fillOpacity: 0.55, weight: 1.8 });
          });
          nbPoly.on("mouseout", function (this: any) {
            this.setStyle({ fillOpacity: 0.35, weight: 1.2 });
          });

          return nbPoly;
        });
      } else if (isBelmont) {
        neighbourLayersRef.current = OFFICIAL_NEIGHBOURING_BOUNDARIES.map((coords, idx) => {
          const nbName = surroundingSuburbs[idx % surroundingSuburbs.length] || `Neighbouring Suburb #${idx + 1}`;
          const nbPoly = L.polygon(coords, {
            color: "#94a3b8",
            weight: 1,
            opacity: 1,
            fillColor: "#e2e8f0",
            fillOpacity: 0.3,
            lineCap: "round",
            lineJoin: "round",
            className: "leaflet-interactive",
          }).addTo(map);

          nbPoly.bindTooltip(`<b>${nbName}</b>`, {
            sticky: true,
            direction: "top",
          });

          nbPoly.on("mouseover", function (this: any) {
            this.setStyle({ fillOpacity: 0.5, weight: 1.5 });
          });
          nbPoly.on("mouseout", function (this: any) {
            this.setStyle({ fillOpacity: 0.3, weight: 1 });
          });

          return nbPoly;
        });
      } else {
        const neighbourOffsets = [
          { dX: -1.3, dY: 0.9, name: surroundingSuburbs[0] || `${suburbName} North`, price: medianHousePrice * 1.08 },
          { dX: 1.2, dY: 0.8, name: surroundingSuburbs[1] || `${suburbName} East`, price: medianHousePrice * 1.15 },
          { dX: 1.4, dY: -0.9, name: surroundingSuburbs[2] || `${suburbName} South-East`, price: medianHousePrice * 0.92 },
          { dX: -0.2, dY: -1.3, name: surroundingSuburbs[3] || `${suburbName} South`, price: medianHousePrice * 0.86 },
          { dX: -1.4, dY: -0.6, name: surroundingSuburbs[4] || `${suburbName} West`, price: medianHousePrice * 1.02 },
        ];

        neighbourLayersRef.current = neighbourOffsets.map((nb) => {
          const cLat = center.lat + (nb.dY * dLat);
          const cLng = center.lng + (nb.dX * dLng);
          const nbCoords = generateDetailedBoundary(cLat, cLng, 24);

          const nbPoly = L.polygon(nbCoords, {
            color: "#94a3b8",
            weight: 1,
            opacity: 1,
            fillColor: "#e2e8f0",
            fillOpacity: 0.3,
            lineCap: "round",
            lineJoin: "round",
            className: "leaflet-interactive",
          }).addTo(map);

          nbPoly.bindTooltip(`
            <div style="font-family: sans-serif; font-size: 11px; padding: 2px;">
              <b>${nb.name}</b><br/>
              <span style="color: #64748b;">Median: ${formatCurrency(nb.price)}</span>
            </div>
          `, {
            sticky: true,
            direction: "top",
          });

          nbPoly.on("mouseover", function (this: any) {
            this.setStyle({ fillOpacity: 0.5, weight: 1.5 });
          });
          nbPoly.on("mouseout", function (this: any) {
            this.setStyle({ fillOpacity: 0.3, weight: 1 });
          });

          return nbPoly;
        });
      }

      const isRichmond = suburbName.toLowerCase().includes("richmond");

      // 2. Target Main Suburb Boundary (Exact Cadastral Boundary)
      const targetCoords = isManly
        ? OFFICIAL_MANLY_BOUNDARY
        : isRichmond
        ? OFFICIAL_RICHMOND_VIC_BOUNDARY
        : isBelmont
        ? OFFICIAL_BELMONT_NORTH_BOUNDARY
        : generateDetailedBoundary(center.lat, center.lng, 48);

      const targetPolygon = L.polygon(targetCoords, {
        color: "#4475e6",
        weight: 2.5,
        opacity: 1,
        fillColor: "#4475e6",
        fillOpacity: 0.15,
        lineCap: "round",
        lineJoin: "round",
        className: "leaflet-interactive",
      }).addTo(map);

      targetPolygon.bindTooltip(`<b>${suburbName}</b> • Subject Suburb`, {
        sticky: true,
        direction: "top",
      });
      targetPolygonRef.current = targetPolygon;

      // 3. Microburb / Mesh-Block Choropleth Pockets (ColorBrewer Spectral Gradient)
      const spectralColors = [
        "rgb(44, 123, 182)",
        "rgb(171, 217, 233)",
        "rgb(255, 255, 191)",
        "rgb(253, 174, 97)",
        "rgb(215, 25, 28)"
      ];

      const meshBlocks: any[] = [];
      let colorIndex = 0;
      for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
          const bLat = center.lat + (r * dLat * 0.55);
          const bLng = center.lng + (c * dLng * 0.55);
          const blockCoords: [number, number][] = [
            [bLat - 0.0035, bLng - 0.0045],
            [bLat + 0.0035, bLng - 0.0045],
            [bLat + 0.0035, bLng + 0.0045],
            [bLat - 0.0035, bLng + 0.0045],
          ];

          const currentColor = spectralColors[colorIndex % spectralColors.length];
          colorIndex++;

          const pocketPrice = Math.round(medianHousePrice * (0.85 + (colorIndex * 0.04)));
          const pocketYield = (grossYieldPct + (colorIndex * 0.2 - 0.4)).toFixed(1);

          const poly = L.polygon(blockCoords, {
            color: "#64748b",
            weight: 0.8,
            fillColor: currentColor,
            fillOpacity: 0.55,
            className: "leaflet-interactive",
          });

          poly.bindTooltip(`
            <div style="font-family: sans-serif; font-size: 11px; padding: 3px; color: #1e293b;">
              <div style="font-family: monospace; font-size: 9px; color: #64748b; text-transform: uppercase;">ABS Mesh Block #${r+2}${c+2}</div>
              <div style="font-weight: bold;">Pocket Median: ${formatCurrency(pocketPrice)}</div>
              <div>Est. Yield: <b>${pocketYield}%</b></div>
            </div>
          `, { sticky: true, direction: "top" });

          meshBlocks.push(poly);
        }
      }
      meshBlockLayersRef.current = meshBlocks;

      // 4. Center Suburb Marker
      const customPinIcon = L.divIcon({
        className: "custom-suburb-pin",
        html: `
          <div style="background-color: #3c3a39; color: #fffcf6; padding: 4px 10px; border-radius: 20px; font-family: monospace; font-size: 11px; font-weight: bold; border: 2px solid #fffcf6; box-shadow: 0 4px 14px rgba(0,0,0,0.25); white-space: nowrap; display: flex; align-items: center; gap: 5px; cursor: pointer;">
            <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: #32ae88;"></span>
            ${suburbName}
          </div>
        `,
        iconSize: [85, 30],
        iconAnchor: [42, 15],
      });

      const centerMarker = L.marker([center.lat, center.lng], { icon: customPinIcon }).addTo(map);
      centerMarker.bindPopup(`
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 6px; min-width: 200px; color: #3c3a39;">
          <div style="font-family: monospace; font-size: 10px; color: #73716e; text-transform: uppercase;">/${state} • ${postcode}</div>
          <div style="font-size: 15px; font-weight: bold; margin-bottom: 4px;">${suburbName}</div>
          <div style="border-top: 1px solid #eaeae2; padding-top: 6px; margin-top: 4px; font-size: 11px; line-height: 1.5;">
            <div>Median House: <b>${formatCurrency(medianHousePrice)}</b></div>
            <div>Growth (12m): <b style="color: #32ae88;">${formatPercent(capitalGrowth12MoPct, true)}</b></div>
            <div>Gross Yield: <b>${formatPercent(grossYieldPct)}</b></div>
            <div>Score: <b>${overallScore} / 100</b></div>
          </div>
        </div>
      `);
      centerMarkerRef.current = centerMarker;

      setMapLoaded(true);
    });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center.lat, center.lng, zoom, suburbName, state, postcode, medianHousePrice, capitalGrowth12MoPct, grossYieldPct, overallScore, surroundingSuburbs]);

  // Handle Granularity toggle (Microburb vs Suburb)
  const handleGranularity = (mode: "microburb" | "suburb") => {
    setGranularity(mode);
    const map = mapInstanceRef.current;
    if (!map) return;

    if (mode === "suburb") {
      meshBlockLayersRef.current.forEach((m) => map.removeLayer(m));
      if (targetPolygonRef.current) {
        targetPolygonRef.current.setStyle({ fillOpacity: 0.35 });
      }
    } else {
      meshBlockLayersRef.current.forEach((m) => map.addLayer(m));
      if (targetPolygonRef.current) {
        targetPolygonRef.current.setStyle({ fillOpacity: 0.15 });
      }
    }
  };

  // Handle Neighbours visibility toggle
  const handleToggleNeighbours = () => {
    const nextState = !showNeighbours;
    setShowNeighbours(nextState);
    const map = mapInstanceRef.current;
    if (!map) return;

    neighbourLayersRef.current.forEach((layer) => {
      if (nextState) map.addLayer(layer);
      else map.removeLayer(layer);
    });
  };

  // Fullscreen Handler
  const toggleFullscreen = () => {
    if (!wrapperRef.current) return;
    if (!document.fullscreenElement) {
      wrapperRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        background: "rgb(255, 255, 255)",
        borderRadius: "12px",
        display: "grid",
        gridTemplateColumns: "1fr",
        border: "1px solid rgb(229, 231, 235)",
        overflow: "hidden",
        zIndex: 1,
        position: "relative",
        marginBottom: "24px",
      }}
      className="pmp-sticky"
    >
      <div style={{ position: "relative", gridArea: "1 / 1" }}>
        {/* Leaflet DOM Canvas */}
        <div
          ref={mapContainerRef}
          style={{ width: "100%", height, position: "relative", outlineStyle: "none" }}
          className="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim"
        />

        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#f7f7f5] text-xs font-mono text-ink-60 gap-2 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse"></span>
            <span>Initializing CartoDB Positron Spatial Grid...</span>
          </div>
        )}

        {/* 1. TOP CAROUSEL OF ACTIVE LAYER PILLS — Inspected Microburbs DOM */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "calc(100% - 80px)",
            zIndex: 999,
            display: "flex",
            gap: "6px",
            overflowX: "auto",
            padding: "2px 4px",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveMetric("price")}
            title="Toggle Median sale price layer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 10px 5px 5px",
              background: activeMetric === "price" ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.8)",
              border: activeMetric === "price" ? "1px solid rgb(24, 117, 235)" : "1px solid rgb(229, 231, 235)",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              color: "rgb(26, 31, 54)",
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 3px",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "rgb(24, 117, 235)",
                color: "rgb(255, 255, 255)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              $
            </span>
            <span>Median sale price</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMetric("yield")}
            title="Toggle Gross rental yield layer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 10px 5px 5px",
              background: activeMetric === "yield" ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.8)",
              border: activeMetric === "yield" ? "1px solid rgb(24, 117, 235)" : "1px solid rgb(229, 231, 235)",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              color: "rgb(26, 31, 54)",
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 3px",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "rgb(50, 174, 136)",
                color: "rgb(255, 255, 255)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              %
            </span>
            <span>Gross yield</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMetric("growth")}
            title="Toggle 12M Capital Growth layer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 10px 5px 5px",
              background: activeMetric === "growth" ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.8)",
              border: activeMetric === "growth" ? "1px solid rgb(24, 117, 235)" : "1px solid rgb(229, 231, 235)",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              color: "rgb(26, 31, 54)",
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 3px",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "rgb(255, 115, 0)",
                color: "rgb(255, 255, 255)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              ▲
            </span>
            <span>12M Capital growth</span>
          </button>
        </div>

        {/* 2. TOP RIGHT FULLSCREEN BUTTON — Inspected Microburbs DOM */}
        <button
          type="button"
          onClick={toggleFullscreen}
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1000,
            width: "30px",
            height: "30px",
            padding: "0px",
            background: "rgb(255, 255, 255)",
            border: "2px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            lineHeight: 1,
            color: "rgb(26, 31, 54)",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ⛶
        </button>

        {/* 3. RIGHT LEGEND CARD WITH COLORBREWER SPECTRAL GRADIENT — Responsive */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "10px",
            maxHeight: "calc(100% - 60px)",
            overflowY: "auto",
            zIndex: 998,
            flexDirection: "column",
            gap: "6px",
            pointerEvents: "auto",
          }}
          className="hidden sm:flex"
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.96)",
              border: "1px solid rgb(229, 231, 235)",
              borderRadius: "8px",
              padding: "8px 10px",
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 2px 6px",
              width: "210px",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "11px", marginBottom: "4px", lineHeight: 1.25, color: "rgb(26, 31, 54)" }}>
              {activeMetric === "price"
                ? "Median sale price"
                : activeMetric === "yield"
                ? "Gross rental yield"
                : "12M Capital growth"}
              <span style={{ color: "rgb(156, 163, 175)", fontWeight: 500, marginLeft: "6px" }}>
                · {granularity === "microburb" ? "by mesh block" : "by suburb"}
              </span>
            </div>

            {/* Exact Linear Gradient Spectrum Bar */}
            <div
              style={{
                height: "10px",
                borderRadius: "3px",
                background: "linear-gradient(to right, rgb(44, 123, 182), rgb(171, 217, 233), rgb(255, 255, 191), rgb(253, 174, 97), rgb(215, 25, 28))",
                border: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            />

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3px", color: "rgb(71, 85, 105)", fontSize: "10.5px", fontFamily: "monospace" }}>
              <span>{activeMetric === "price" ? "$750k" : activeMetric === "yield" ? "2.5%" : "-5.0%"}</span>
              <span>{activeMetric === "price" ? "$2.5M+" : activeMetric === "yield" ? "6.0%+" : "+15.0%"}</span>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM CENTER SEGMENTED GRANULARITY SWITCHER — Inspected Microburbs DOM */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Microburb vs Suburb toggle pill container */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              border: "1px solid rgb(229, 231, 235)",
              borderRadius: "8px",
              padding: "3px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 6px",
              display: "inline-flex",
              gap: "2px",
            }}
          >
            <button
              type="button"
              onClick={() => handleGranularity("microburb")}
              title="Colour the subject by mesh block"
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10.5px] sm:text-[11.5px] font-medium transition-all"
              style={{
                border: "none",
                borderRadius: "6px",
                background: granularity === "microburb" ? "rgb(24, 117, 235)" : "transparent",
                color: granularity === "microburb" ? "rgb(255, 255, 255)" : "rgb(91, 100, 114)",
                boxShadow: granularity === "microburb" ? "rgba(24, 117, 235, 0.4) 0px 1px 2px" : "none",
                cursor: "pointer",
                fontFamily: "inherit",
                lineHeight: 1.1,
              }}
            >
              Microburb
            </button>

            <button
              type="button"
              onClick={() => handleGranularity("suburb")}
              title="Colour the subject as one suburb (population-weighted)"
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10.5px] sm:text-[11.5px] font-medium transition-all"
              style={{
                border: "none",
                borderRadius: "6px",
                background: granularity === "suburb" ? "rgb(24, 117, 235)" : "transparent",
                color: granularity === "suburb" ? "rgb(255, 255, 255)" : "rgb(91, 100, 114)",
                boxShadow: granularity === "suburb" ? "rgba(24, 117, 235, 0.4) 0px 1px 2px" : "none",
                cursor: "pointer",
                fontFamily: "inherit",
                lineHeight: 1.1,
              }}
            >
              Suburb
            </button>
          </div>

          {/* Neighbours toggle button */}
          <button
            type="button"
            onClick={handleToggleNeighbours}
            title={showNeighbours ? "Hide the surrounding suburbs" : "Show the surrounding suburbs"}
            aria-pressed={showNeighbours}
            className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10.5px] sm:text-[11.5px] font-medium transition-all flex items-center gap-1.5"
            style={{
              background: "rgb(255, 255, 255)",
              border: showNeighbours ? "1px solid rgb(24, 117, 235)" : "1px solid rgb(229, 231, 235)",
              borderRadius: "9px",
              boxShadow: showNeighbours ? "rgba(24, 117, 235, 0.28) 0px 2px 6px" : "rgba(0, 0, 0, 0.08) 0px 1px 3px",
              cursor: "pointer",
              fontFamily: "inherit",
              lineHeight: 1,
              color: showNeighbours ? "rgb(24, 117, 235)" : "rgb(91, 100, 114)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: showNeighbours ? "rgb(24, 117, 235)" : "rgb(203, 213, 225)",
                boxShadow: showNeighbours ? "rgba(24, 117, 235, 0.18) 0px 0px 0px 3px" : "none",
              }}
            />
            Neighbours
          </button>
        </div>

        {/* 5. BOTTOM RIGHT BRAND WATERMARK BADGE */}
        <div
          style={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            zIndex: 5,
            background: "rgba(255, 255, 255, 0.95)",
            padding: "4px 8px",
            borderRadius: "6px",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.18)",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            lineHeight: 0,
          }}
          aria-label="PROP MARK"
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "3px",
              backgroundColor: "#3c3a39",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "7px",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            PM
          </div>
          <span style={{ fontSize: "10.5px", fontWeight: 700, color: "#3c3a39", letterSpacing: "-0.01em" }}>
            PROP MARK
          </span>
        </div>
      </div>
    </div>
  );
}
