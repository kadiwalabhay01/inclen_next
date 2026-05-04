"use client";

import { useState, type SVGProps, type ReactNode, JSX } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabKey = "palwal" | "bareilly" | "mawphlang";
type FacilityKey = "hospital" | "laboratory" | "biobank" | "geospatial";

interface SiteInfo {
    key: TabKey;
    label: string;
    name: string;
    established: string;
    state: string;
    distance: string;
    description: string;
    stats: { value: string; label: string; sub: string }[];
}

interface FacilityContent {
    title: string;
    description: string;
    items: string[];
}

interface DimensionCard {
    id: string;
    title: string;
    Icon: () => JSX.Element;
    points: string[];
    accent: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SITES: SiteInfo[] = [
    {
        key: "palwal",
        label: "Somaarth Palwal",
        name: "SOMAARTH – Palwal",
        established: "Est. 2009",
        state: "Haryana",
        distance: "60 Kms from New Delhi",
        description:
            "The first Demographic Development and Environmental Surveillance Site (DDESS) established by INCLEN. The site operates as a model for integrated surveillance systems in India.",
        stats: [
            { value: "51", label: "Contiguous Villages", sub: "Spanning across three administrative blocks" },
            { value: "200K+", label: "Population Coverage", sub: "Comprehensive demographic surveillance" },
        ],
    },
    {
        key: "bareilly",
        label: "Somaarth Bareilly",
        name: "SOMAARTH – Bareilly",
        established: "Est. 2018",
        state: "Uttar Pradesh",
        distance: "270 Km from New Delhi",
        description:
            "INCLEN's second surveillance site, extending the DDESS network into one of India's most populous states, providing critical data on health and development indicators.",
        stats: [
            { value: "45", label: "Contiguous Villages", sub: "Spanning across three blocks" },
            { value: "90K+", label: "Population Coverage", sub: "Active health monitoring" },
        ],
    },
    {
        key: "mawphlang",
        label: "Somaarth Mawphlang",
        name: "SOMAARTH – Mawphlang",
        established: "Est. 2020",
        state: "Meghalaya",
        distance: "East Khasi Hills District",
        description:
            "The third and most recent site in the North-Eastern region, focusing on the unique demographic and environmental challenges of the hill state.",
        stats: [
            { value: "206", label: "Contiguous Villages", sub: "Mawphlang and Sohiong Blocks" },
            { value: "100K+", label: "Population Coverage", sub: "Comprehensive tribal health surveillance" },
        ],
    },
];

const FACILITIES: Record<TabKey, Record<FacilityKey, FacilityContent>> = {
    palwal: {
        hospital: {
            title: "Hospital Linkages – Palwal",
            description:
                "SOMAARTH Palwal maintains active linkages with district and community health facilities, enabling real-time patient data flow and referral tracking.",
            items: [
                "District Hospital, Palwal — primary referral centre",
                "Community Health Centres across 3 blocks",
                "Sub-Health Centres for last-mile outreach",
                "Private facility mapping for comprehensive care coverage",
            ],
        },
        laboratory: {
            title: "Field Laboratory – Palwal",
            description:
                "A state-of-the-art field laboratory supports specimen collection and processing across the surveillance catchment area.",
            items: [
                "Haematology and biochemistry analysis",
                "Microbiology and rapid diagnostic testing",
                "Cold chain and specimen transport infrastructure",
                "Quality-assured SOPs compliant with NABL guidelines",
            ],
        },
        biobank: {
            title: "Biobank – Palwal",
            description:
                "A community biorepository enabling longitudinal research by storing biological specimens for future population health studies.",
            items: [
                "Blood, urine, and buccal swab storage",
                "–80°C ultra-low temperature preservation",
                "LIMS-integrated sample tracking system",
                "Ethics-compliant informed consent protocols",
            ],
        },
        geospatial: {
            title: "Geo-Spatial Laboratory – Palwal",
            description:
                "The geo-spatial lab maps every household in the catchment area, enabling granular spatial epidemiology and environmental analysis.",
            items: [
                "GIS-coded database of 51 villages",
                "Satellite imagery integration for built-environment monitoring",
                "Household-level coordinates for disease clustering",
                "Air and water quality spatial overlays",
            ],
        },
    },
    bareilly: {
        hospital: {
            title: "Hospital Linkages – Bareilly",
            description:
                "Strategic tie-ups with government and private hospitals facilitate population-level health tracking across Bareilly's surveillance zone.",
            items: [
                "District Hospital Bareilly — primary linkage",
                "Rural Hospital and PHC network across 3 blocks",
                "Outreach camps in underserved pockets",
                "Integrated HMIS data exchange protocols",
            ],
        },
        laboratory: {
            title: "Field Laboratory – Bareilly",
            description:
                "Mobile and static laboratory infrastructure supports comprehensive sample collection across a geographically dispersed cohort.",
            items: [
                "Point-of-care diagnostics for field deployment",
                "Centralised processing at Bareilly hub lab",
                "Pathogen surveillance and antimicrobial resistance profiling",
                "Inter-site specimen transfer with chain-of-custody documentation",
            ],
        },
        biobank: {
            title: "Biobank – Bareilly",
            description:
                "Longitudinal sample archival at Bareilly enables cross-site comparative analysis within the INCLEN DDESS network.",
            items: [
                "Multi-visit cohort specimen storage",
                "Linked phenotypic and genomic data repository",
                "Secure access framework for collaborative research",
                "Periodic inventory audits and viability checks",
            ],
        },
        geospatial: {
            title: "Geo-Spatial Laboratory – Bareilly",
            description:
                "Spatial intelligence tools track environmental exposures and infrastructure changes across 45 surveilled villages.",
            items: [
                "Dynamic GIS mapping with seasonal updates",
                "Urban-rural gradient analysis",
                "Pollution and industrial hazard proximity mapping",
                "Road network and healthcare accessibility analysis",
            ],
        },
    },
    mawphlang: {
        hospital: {
            title: "Hospital Linkages – Mawphlang",
            description:
                "Unique partnerships with district health authorities in Meghalaya support surveillance in a geographically challenging tribal region.",
            items: [
                "East Khasi Hills District Hospital — primary referral",
                "Community and sub-health centres across 2 blocks",
                "Traditional healer network documentation",
                "Telemedicine integration for remote hamlets",
            ],
        },
        laboratory: {
            title: "Field Laboratory – Mawphlang",
            description:
                "Mobile laboratory units navigate difficult terrain to ensure equitable specimen collection across 206 villages.",
            items: [
                "Portable diagnostic equipment for hilly terrain",
                "Tropical disease surveillance panel",
                "Waterborne pathogen testing linked to water-body monitoring",
                "Sample stabilisation kits for long-distance transport",
            ],
        },
        biobank: {
            title: "Biobank – Mawphlang",
            description:
                "The Mawphlang biobank captures specimens from an ethnically distinct population, offering unparalleled research value.",
            items: [
                "Tribal population-specific genomic repository",
                "Dietary biomarker profiling",
                "Longitudinal maternal and child health specimens",
                "Community consent model with local advisory board",
            ],
        },
        geospatial: {
            title: "Geo-Spatial Laboratory – Mawphlang",
            description:
                "Topographic and environmental mapping in Mawphlang integrates forest cover, water bodies, and climate data unique to the North-East.",
            items: [
                "High-resolution DEM and slope analysis",
                "Forest cover change detection",
                "Flood and landslide vulnerability mapping",
                "Sacred grove and biodiversity corridor documentation",
            ],
        },
    },
};

const FACILITY_TABS: { key: FacilityKey; label: string }[] = [
    { key: "hospital", label: "Hospital Linkages" },
    { key: "laboratory", label: "Laboratory" },
    { key: "biobank", label: "Bio Banking" },
    { key: "geospatial", label: "Geo-Spatial Lab" },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

// eslint-disable-next-line react/display-name
const ico = (paths: ReactNode) => () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {paths}
    </svg>
);

const GeographicIcon = ico(
    <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </>
);
const EnvironmentalIcon = ico(
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
);
const SocietalIcon = ico(
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
);
const HealthIcon = ico(
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
);
const DevelopmentalIcon = ico(
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
);
const DemographicIcon = ico(
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
);

const LocationPin = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ChevronRight = () => (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

// ─── Dimension Data ───────────────────────────────────────────────────────────

const DIMENSIONS: DimensionCard[] = [
    { id: "01", title: "Geographic", Icon: GeographicIcon, accent: true, points: ["Real-time updating of a geo-coded database (GIS)", "Establishing linkages with economic and health changes"] },
    { id: "02", title: "Environmental", Icon: EnvironmentalIcon, accent: false, points: ["Monitoring physical and structural changes", "Monitoring air quality and water bodies"] },
    { id: "03", title: "Societal", Icon: SocietalIcon, accent: true, points: ["Changes in individual behaviors and culture", "Peer influence in shaping social behavior"] },
    { id: "04", title: "Health", Icon: HealthIcon, accent: false, points: ["Recording chronic diseases and disabilities", "Mapping nutritional status and food environment"] },
    { id: "05", title: "Developmental", Icon: DevelopmentalIcon, accent: true, points: ["Changes in HDI and economic status", "Monitoring living standards and vulnerability"] },
    { id: "06", title: "Demographic", Icon: DemographicIcon, accent: false, points: ["Documentation of population distribution", "Tracking temporal birth and migration changes"] },
];

// ─── Utility ──────────────────────────────────────────────────────────────────

function cx(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(" ");
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="relative bg-brand-900 text-white py-22 px-6 overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 100 C 20 0 50 0 100 100 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto z-10 w-full">
                <div className="max-w-3xl">

                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-accent-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                        Surveillance • Synergy • Sustainability
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight "
                        style={{ fontFamily: "'Lora', Georgia, serif" }}>
                        SOMAARTH-DDESS
                    </h1>

                    {/* Description */}
                    <p className="text-brand-100 text-lg md:text-xl leading-relaxed">
                        Demographic Development and Environmental Surveillance Site (DDESS)
                        <br />
                        <span className="text-white/60 text-base font-sans mt-2 block">
                            A multidimensional community monitoring system established by INCLEN.
                        </span>
                    </p>

                </div>
            </div>
        </section>
    );
}

function ConceptSection() {
    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-70 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-20">

                    <h2
                        className="text-48 font-bold text-slate-900 mb-6 tracking-tight"
                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                    >
                        What is SOMAARTH?
                    </h2>
                    <div className="w-10 h-0.5 bg-accent-500 mx-auto mb-14" />

                    {/* Etymology */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                        {[
                            { word: "SOM", gloss: ["Holistic", "Wellbeing"], dark: true },
                            null,
                            { word: "ARTH", gloss: ["Resources &", "Prosperity"], dark: false },
                        ].map((item, i) =>
                            item === null ? (
                                <span key={i} className="text-slate-300 text-3xl hidden sm:block" style={{ fontFamily: "serif" }}>
                                    +
                                </span>
                            ) : (
                                <div
                                    key={i}
                                    className="flex items-center gap-5 bg-white border border-slate-100 rounded-2xl px-10 py-7 shadow-sm"
                                >
                                    <span
                                        className={cx(
                                            "text-4xl font-bold",
                                            item.dark ? "text-slate-900" : "text-accent-500"
                                        )}
                                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                                    >
                                        {item.word}
                                    </span>
                                    <div className="w-px h-10 bg-slate-200" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight text-left">
                                        {item.gloss[0]}
                                        <br />
                                        {item.gloss[1]}
                                    </span>
                                </div>
                            )
                        )}
                    </div>

                    <div className="max-w-4xl mx-auto text-gray-500  text-16 space-y-4">
                        <p>
                            This framework represents a{" "}
                            <strong className="text-slate-900 font-semibold">
                                multidimensional community monitoring system
                            </strong>{" "}
                            that integrates six interconnected domains—geographic, environmental, societal, health,
                            developmental, and demographic—to generate a comprehensive understanding of community dynamics.
                        </p>
                        <p>
                            By combining GIS-based spatial data, environmental monitoring, and health surveillance, the
                            system examines how changes in the built environment, social behavior, and economic conditions
                            influence population health over time.
                        </p>
                    </div>
                </div>

                {/* Dimension Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {DIMENSIONS.map((dim) => (
                        <div
                            key={dim.id}
                            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div
                                    className={cx(
                                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                                        dim.accent
                                            ? "bg-accent-500/10 text-accent-500"
                                            : "bg-slate-900/5 text-slate-700"
                                    )}
                                >
                                    <dim.Icon />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase block">
                                        {dim.id}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{dim.title}</h3>
                                </div>
                            </div>
                            <ul className="space-y-3 mt-auto">
                                {dim.points.map((point) => (
                                    <li key={point} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                                        <span className="text-slate-500 text-sm leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FacilityPanel({ title, description, items }: FacilityContent) {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 leading-relaxed mb-7 text-sm">{description}</p>
            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <div className="mt-1.5 w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                        </div>
                        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SitesSection() {
    const [activeTab, setActiveTab] = useState<TabKey>("palwal");
    const [activeFacility, setActiveFacility] = useState<FacilityKey>("hospital");

    const activeSite = SITES.find((s) => s.key === activeTab)!;
    const facilityData = FACILITIES[activeTab][activeFacility];

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="sticky lg:top-28 bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden text-sm">
                        <div className="hidden lg:block bg-slate-50 px-5 py-3 border-b border-slate-100 font-bold text-slate-400 text-[10px] uppercase tracking-widest">
                            DDESS Sites
                        </div>
                        <nav className="flex flex-row lg:flex-col overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                            {SITES.map((site) => (
                                <button
                                    key={site.key}
                                    onClick={() => setActiveTab(site.key)}
                                    className={cx(
                                        "text-left px-5 py-4 cursor-pointer font-semibold transition-all focus:outline-none flex justify-between items-center group whitespace-nowrap shrink-0 w-full",
                                        activeTab === site.key
                                            ? "bg-brand-600 text-white border-b-4 lg:border-b-0 lg:border-l-4 border-accent-500 "
                                            : "text-slate-600 hover:bg-slate-50 border-b-4 lg:border-b-0 lg:border-l-4 border-transparent"
                                    )}
                                >
                                    <span>{site.label}</span>
                                    <span
                                        className={cx(
                                            "hidden lg:block",
                                            activeTab === site.key ? "text-accent-500" : "text-slate-300 group-hover:text-slate-500"
                                        )}
                                    >
                                        <ChevronRight />
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Content */}
                <div className="lg:col-span-3 space-y-12">

                    {/* Site Card */}
                    <div key={activeTab} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="bg-brand-50 py-8 px-8">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                                <h2
                                    className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight"
                                    style={{ fontFamily: "'Lora', Georgia, serif" }}
                                >
                                    {activeSite.name}
                                </h2>
                                <span className="bg-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase w-fit tracking-widest">
                                    {activeSite.established}
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-slate-400 gap-2 sm:gap-4">
                                <span className="flex items-center gap-1.5 text-accent-500">
                                    <LocationPin />
                                    {activeSite.state}
                                </span>
                                <span className="hidden sm:block text-slate-700">|</span>
                                <span>{activeSite.distance}</span>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="text-slate-600 leading-relaxed mb-8">{activeSite.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {activeSite.stats.map((stat) => (
                                    <div key={stat.label} className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                                        <div
                                            className="text-4xl font-bold text-brand-600 mb-1"
                                            style={{ fontFamily: "'Lora', Georgia, serif" }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                            {stat.label}
                                        </div>
                                        <p className="text-xs text-slate-400">{stat.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Facilities */}
                    <div className="pt-4 border-t border-slate-100">
                        <div className="mb-8">
                            <p className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.35em] mb-2">
                                Infrastructure
                            </p>
                            <h2
                                className="text-3xl font-bold text-slate-900"
                                style={{ fontFamily: "'Lora', Georgia, serif" }}
                            >
                                Facilities &amp; Labs
                            </h2>
                            <p className="text-slate-400 mt-2 text-sm">
                                Core facilities available across all SOMAARTH-DDESS sites.
                            </p>
                        </div>

                        {/* Facility Tab Pills */}
                        <div className="flex flex-row flex-wrap gap-2 mb-8">
                            {FACILITY_TABS.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveFacility(tab.key)}
                                    className={cx(
                                        "px-5 py-2.5 rounded-full text-sm font-bold transition-all border whitespace-nowrap focus:outline-none",
                                        activeFacility === tab.key
                                            ? "bg-brand-600 text-white"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                                    )}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <FacilityPanel
                            key={`${activeTab}-${activeFacility}`}
                            title={facilityData.title}
                            description={facilityData.description}
                            items={facilityData.items}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SomaarthPage() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

            <main className="bg-white min-h-screen selection:bg-accent-500 selection:text-white">
                <HeroSection />
                <ConceptSection />
                <SitesSection />
            </main>
        </>
    );
}