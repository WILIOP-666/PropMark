"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { SuburbProfile } from "../lib/types";
import { formatCurrency, formatPercent } from "../lib/utils";

interface MultiSuburbMapProps {
  suburbs: SuburbProfile[];
  height?: string;
  onSelectSuburb?: (suburb: SuburbProfile) => void;
}

export default function MultiSuburbMap({
  suburbs,
  height = "600px",
  onSelectSuburb,
}: MultiSuburbMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    import("leaflet").then((L) => {
      // Fix icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      if (!mapInstanceRef.current) {
        const defaultCenter: [number, number] = suburbs.length > 0
          ? [suburbs[0].coordinates.lat, suburbs[0].coordinates.lng]
          : [-33.8688, 151.2093];

        const map = L.map(mapContainerRef.current!, {
          center: defaultCenter,
          zoom: 11,
          zoomControl: false,
        });

        mapInstanceRef.current = map;

        // Clean Microburbs basemap tiles without API key watermark
        L.tileLayer("/api/tiles/{z}/{x}/{y}.png", {
          attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
          maxZoom: 19,
        }).addTo(map);

        markersLayerRef.current = L.layerGroup().addTo(map);
      }

      // Update pins whenever suburbs list changes
      if (markersLayerRef.current && mapInstanceRef.current) {
        markersLayerRef.current.clearLayers();

        const bounds = L.latLngBounds([]);
        const displaySuburbs = suburbs.slice(0, 100); // Render up to 100 on screen for fast 60fps performance

        displaySuburbs.forEach((sub) => {
          const latLng: [number, number] = [sub.coordinates.lat, sub.coordinates.lng];
          bounds.extend(latLng);

          // Color based on Yield vs Growth
          let pinColor = "#3c3a39";
          if (sub.market.grossHouseYieldPct >= 4.0) pinColor = "#32ae88"; // High yield emerald
          else if (sub.market.capitalGrowth12MoPct >= 5.0) pinColor = "#2677ff"; // High growth blue

          const icon = L.divIcon({
            className: "multi-suburb-pin",
            html: `
              <div style="background-color: ${pinColor}; color: white; padding: 3px 7px; border-radius: 14px; font-family: monospace; font-size: 10px; font-weight: bold; border: 1.5px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.25); white-space: nowrap; cursor: pointer;">
                ${sub.name}
              </div>
            `,
            iconSize: [60, 24],
            iconAnchor: [30, 12],
          });

          const marker = L.marker(latLng, { icon });

          const popupHtml = `
            <div style="font-family: sans-serif; padding: 6px; min-width: 200px; color: #3c3a39;">
              <div style="font-family: monospace; font-size: 10px; color: #73716e; text-transform: uppercase;">/${sub.state} • ${sub.postcode}</div>
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 2px;">${sub.name}</div>
              <div style="font-size: 11px; color: #73716e; margin-bottom: 6px;">${sub.lga}</div>
              <div style="border-top: 1px solid #eaeae2; padding-top: 6px; font-size: 11px; line-height: 1.5;">
                <div>Median House: <b>${formatCurrency(sub.market.medianHousePrice)}</b></div>
                <div>12M Capital Growth: <b style="color: #32ae88;">${formatPercent(sub.market.capitalGrowth12MoPct, true)}</b></div>
                <div>Gross Yield: <b>${formatPercent(sub.market.grossHouseYieldPct)}</b> (${sub.market.medianHouseRentWeek}/wk)</div>
                <div>Prop Mark Score: <b>${sub.scores.overallScore} / 100</b></div>
              </div>
              <div style="margin-top: 8px;">
                <a href="/suburb-reports/${sub.slug}" style="display: block; text-align: center; background-color: #3c3a39; color: #fffcf6; padding: 5px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; text-decoration: none;">
                  View Full Report →
                </a>
              </div>
            </div>
          `;

          marker.bindPopup(popupHtml);
          markersLayerRef.current.addLayer(marker);
        });

        if (displaySuburbs.length > 1) {
          mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
        }
      }
    });
  }, [suburbs]);

  return (
    <div className="card-editorial p-0 overflow-hidden relative border border-ink-10 rounded-2xl shadow-subtle">
      {/* Legend Top Overlay */}
      <div className="absolute top-4 left-4 z-[400] bg-[#fffcf6ee] backdrop-blur-md p-2.5 rounded-xl border border-ink-10 shadow-sm text-xs font-mono flex items-center gap-4">
        <span className="eyebrow-mono text-[11px] text-ink-80">/PIN CLUSTERS:</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald"></span>
          <span>Yield &ge;4.0%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-blue"></span>
          <span>Growth &ge;5.0%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-ink"></span>
          <span>Balanced Core</span>
        </div>
      </div>

      <div
        ref={mapContainerRef}
        style={{ height, width: "100%", background: "#f7f7f5" }}
        className="z-0"
      />

      <div className="p-3 bg-surface-light border-t border-ink-10 flex items-center justify-between text-xs text-ink-60 font-mono">
        <span>Displaying {Math.min(suburbs.length, 100)} Suburb Spatial Locations on Australia Positron Grid</span>
        <span>Click pin to inspect instantaneous yield &amp; navigate</span>
      </div>
    </div>
  );
}
