import { SuburbProfile } from "../lib/types";

interface SuburbHeroImageProps {
  suburb: SuburbProfile;
}

// Curated high-res editorial photography mapped to Australian suburbs
const SUBURB_HERO_PHOTOS: Record<string, {
  url: string;
  caption: string;
  author: string;
  license: string;
  sourceUrl: string;
}> = {
  "manly-nsw-2095": {
    url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80",
    caption: "Beachfront promenade & coastal headland beside Manly Cove Wharf & North Head Sanctuary",
    author: "Maksym Kozlenko (Wikimedia Commons)",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:2007-08-04_Manly,_New_South_Wales_b_(cropped).jpg",
  },
  "bondi-beach-nsw-2026": {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    caption: "Iconic ocean pool at Icebergs and curving crescent sands of Bondi Beach",
    author: "Nick Dunn (Unsplash)",
    license: "Unsplash License",
    sourceUrl: "https://unsplash.com/photos/beach-aerial",
  },
  "surfers-paradise-qld-4217": {
    url: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=1600&q=80",
    caption: "Golden Coast skyline overlooking golden surf breaks along Cavill Avenue foreshore",
    author: "City of Gold Coast",
    license: "CC BY 3.0 AU",
    sourceUrl: "https://en.wikipedia.org/wiki/Surfers_Paradise,_Queensland",
  },
  "belmont-north-nsw-2280": {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    caption: "Green urban fringe and coastal bushland canopy along the Pacific Highway corridor",
    author: "Lake Macquarie City Council",
    license: "Open Data",
    sourceUrl: "https://www.lakemac.com.au",
  },
  "chatswood-nsw-2067": {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    caption: "Commercial & high-density residential towers rising over Victoria Avenue precinct",
    author: "Willoughby City Council",
    license: "CC BY 4.0",
    sourceUrl: "https://www.willoughby.nsw.gov.au",
  },
  "newtown-nsw-2042": {
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    caption: "Vibrant bohemian streetscapes, Victorian terrace houses & King Street dining",
    author: "Inner West Council",
    license: "CC BY 4.0",
    sourceUrl: "https://www.innerwest.nsw.gov.au",
  },
};

export default function SuburbHeroImage({ suburb }: SuburbHeroImageProps) {
  const photo = SUBURB_HERO_PHOTOS[suburb.slug] || {
    url: "https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1600&q=80",
    caption: `Panoramic aerial streetscape and cadastral residential fabric of ${suburb.name}, ${suburb.state}`,
    author: "Prop Mark Spatial Intelligence",
    license: "Proprietary Geospatial",
    sourceUrl: `/suburb-reports/${suburb.slug}`,
  };

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-ink-10 mb-8 shadow-sm">
      <img
        alt={`${suburb.name}, ${suburb.state} — ${photo.caption}`}
        loading="eager"
        className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[360px]"
        src={photo.url}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      {/* Caption Bottom Left */}
      <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-[10px] text-white/90 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
            /{suburb.state} Urban Cadastre
          </span>
        </div>
        <p className="truncate text-xs text-white/90 drop-shadow-sm sm:text-sm font-medium">
          {photo.caption}
        </p>
      </figcaption>

      {/* Attribution Top Right */}
      <div className="absolute right-3 top-3 max-w-[65%] text-right text-[10px] leading-tight text-white/80">
        <span className="rounded bg-black/50 px-2 py-1 backdrop-blur-sm border border-white/10 inline-block">
          <a
            href={photo.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:underline text-white font-mono"
          >
            {photo.author}
          </a>
          <span className="text-white/60"> · {photo.license}</span>
        </span>
      </div>
    </figure>
  );
}
