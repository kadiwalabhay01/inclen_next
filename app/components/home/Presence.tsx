"use client";

import { useEffect, useRef, useState } from "react";
import type L from "leaflet";
import countriesData from "@/data/countries.json";
import networksData from "@/data/networks.json";
import institutionsData from "@/data/institutions.json";

// ─── Types ────────────────────────────────────────────────────────────────────
type FilterType = "networks" | "countries" | "institutions";

interface MapPoint {
  lat: number;
  lng: number;
  name: string;
}

interface LayersMap {
  networks: L.LayerGroup | null;
  countries: L.LayerGroup | null;
  institutions: L.LayerGroup | null;
}

// ─── Pill position helper ─────────────────────────────────────────────────────
const PILL_POSITIONS: Record<FilterType, string> = {
  networks: "left: 0.5%;   width: 33%",
  countries: "left: 33.5%;  width: 33%",
  institutions: "left: 66.5%;  width: 33%",
};

// ─── Component ────────────────────────────────────────────────────────────────
interface PresenceSectionProps {
  /** Pre-fetched data (pass from your server component / getServerSideProps) */
  countriesData?: MapPoint[];
  networksData?: MapPoint[];
  institutionsData?: MapPoint[];
}

export default function PresenceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("networks");
  const [mapReady, setMapReady] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<L.Map | null>(null);
  const layersRef = useRef<LayersMap>({
    networks: null,
    countries: null,
    institutions: null,
  });

  // ── Load Leaflet (client-only) and initialise the map once ─────────────────
  useEffect(() => {
    if (!mapRef.current || mapReady) return;

    // Dynamically import Leaflet so SSR never touches it
    import("leaflet").then((leafletModule) => {
      const L = leafletModule.default || leafletModule;

      // Leaflet CSS — inject once
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Inline style block for map tweaks
      if (!document.getElementById("inclen-map-style")) {
        const style = document.createElement("style");
        style.id = "inclen-map-style";
        style.textContent = `
          #inclen-map .leaflet-tile-pane { filter: none; }
          #inclen-map .leaflet-marker-icon,
          #inclen-map .leaflet-marker-shadow { filter: none !important; }
          .inclen-marker-pulse {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .inclen-marker-ping {
            position: absolute;
            width: 32px;
            height: 32px;
            border-radius: 9999px;
            background: rgba(234,88,12,0.4);
            animation: inclenPing 1.4s cubic-bezier(0,0,0.2,1) infinite;
          }
          .inclen-marker-dot {
            position: relative;
            width: 14px;
            height: 14px;
            border-radius: 9999px;
            background: #ea580c;
            border: 2px solid #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          }
          @keyframes inclenPing {
            0%   { transform: scale(0.6); opacity: 0.9; }
            100% { transform: scale(1.8); opacity: 0; }
          }
          @media (max-width: 640px) {
            .map-control-btn {
              min-width: 80px !important;
              padding: 6px 4px !important;
              font-size: 8px !important;
            }
          }
        `;
        document.head.appendChild(style);
      }

      // ── Initialise map ────────────────────────────────────────────────────
      const map = L.map("inclen-map", {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 10,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      L.tileLayer(
        "https://mt1.google.com/vt/lyrs=m&gl=IN&x={x}&y={y}&z={z}",
        { maxZoom: 20, attribution: "© Google" }
      ).addTo(map);

      leafletRef.current = map;

      // ── Icon factory ──────────────────────────────────────────────────────
      const makeIcon = () =>
        L.divIcon({
          className: "",
          html: `<div class="inclen-marker-pulse">
                   <span class="inclen-marker-ping"></span>
                   <span class="inclen-marker-dot"></span>
                 </div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

      const tooltipClass =
        "px-2 py-1 bg-black/80 text-white text-[10px] font-bold uppercase tracking-wider rounded border-none shadow-xl";

      const makeLayer = (points: MapPoint[]): L.LayerGroup =>
        L.layerGroup(
          points.map((p) =>
            L.marker([p.lat, p.lng], { icon: makeIcon() }).bindTooltip(
              p.name,
              { direction: "top", offset: [0, -12], className: tooltipClass }
            )
          )
        );

      layersRef.current = {
        networks: makeLayer(networksData),
        countries: makeLayer(countriesData),
        institutions: makeLayer(institutionsData),
      };

      // Add default layer with proper null check
      const networksLayer = layersRef.current.networks;
      if (networksLayer) {
        networksLayer.addTo(map);
      }

      setMapReady(true);
    });

    // Cleanup
    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove();
        leafletRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Swap active layer whenever filter changes ──────────────────────────────
  useEffect(() => {
    if (!mapReady || !leafletRef.current) return;
    const map = leafletRef.current;
    const layers = layersRef.current;

    Object.values(layers).forEach((l) => {
      if (l && map.hasLayer(l)) map.removeLayer(l);
    });

    const active = layers[activeFilter];
    if (active) active.addTo(map);
  }, [activeFilter, mapReady]);

  // ── Handle filter click ───────────────────────────────────────────────────
  const handleFilter = (filter: FilterType) => setActiveFilter(filter);

  // ── Stats ─────────────────────────────────────────────────────────────────
  const stats = [
    { value: "34", label: "Countries", sub: "Global Coverage" },
    { value: "89", label: "Institutions", sub: "Academic Partners" },
    { value: "07", label: "Regional Networks", sub: "Coordinated Hubs" },
  ];

  const filters: { key: FilterType; label: string }[] = [
    { key: "networks", label: "Networks" },
    { key: "countries", label: "Countries" },
    { key: "institutions", label: "Institutes" },
  ];

  return (
    <section
      id="presence"
      className="py-24 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="text-12 uppercase text-accent-500 font-roboto font-semibold">
            Global Footprint
          </span>
          <h2 className="text-48 font-bold text-brand-900 font-merri pt-3 pb-6 leading-none">
            Our Presence
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-roboto">
            With a decentralized network structure, INCLEN ensures local
            relevance with global impact.
          </p>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-brand-50 p-4 md:p-8 rounded-2xl border border-slate-100 text-center hover:scale-105 transition-transform duration-300${i === 2 ? " col-span-2 md:col-span-1" : ""
                }`}
            >
              <div className="text-48 font-bold text-primary font-merri mb-2 leading-none">
                {s.value}
              </div>
              <div className="text-12 text-[#032d4c] uppercase font-roboto font-bold">
                {s.label}
              </div>
              <div className="text-14 text-slate-500 font-roboto mt-1 md:mt-4">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* ── Map Container ── */}
        <div className="relative bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 w-full h-[400px] md:h-auto md:aspect-video group isolate">
          {/* Leaflet target */}
          <div
            id="inclen-map"
            ref={mapRef}
            className="absolute inset-0 z-0 bg-slate-50"
          />

          {/* Depth shadow overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />

          {/* ── Filter Controls ── */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[1000] pointer-events-auto w-max max-w-[98%] px-2">
            <div className="flex bg-white/95 backdrop-blur-md border border-slate-200 p-1 rounded-full relative shadow-xl overflow-hidden">
              {/* Sliding pill */}
              <div
                className="absolute top-1 bottom-1 rounded-full bg-orange-500 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-md"
                style={{ ...parsePillStyle(PILL_POSITIONS[activeFilter]) }}
              />

              {filters.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => handleFilter(key)}
                  className={`map-control-btn relative z-10 px-2 md:px-5 py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 min-w-[85px] md:min-w-[130px] text-center cursor-pointer ${activeFilter === key
                      ? "text-white"
                      : "text-slate-500 hover:text-orange-600"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Utility: parse "left: X; width: Y" into React inline style ──────────────
function parsePillStyle(styleStr: string): React.CSSProperties {
  return Object.fromEntries(
    styleStr
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => {
        const [prop, val] = s.split(":").map((x) => x.trim());
        // Convert CSS property to camelCase (e.g. "left" → "left")
        const camel = prop.replace(/-([a-z])/g, (_, c: string) =>
          c.toUpperCase()
        );
        return [camel, val];
      })
  ) as React.CSSProperties;
}