"use client";

import { useState, useMemo } from "react";
import type { Job } from "@/types/job";

// ─── Data import (swap for API call later) ───────────────────────────────────
// To connect to the real API later, replace this import with a fetch call:
//   const jobs: Job[] = await fetch("https://inclen.oakyweb.com/admin/wp-json/currentopening/v1/all-openings").then(r => r.json());
import jobsData from "@/data/careers.json";

const JOB_TYPES = [
    "Freelance",
    "Full Time",
    "Internship",
    "Part Time",
    "Temporary",
    "Contractual",
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDate(dateStr: string): string {
    try {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });
    } catch {
        return "";
    }
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
        </svg>
    );
}

function LocationIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    );
}

function SearchIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    );
}

// ─── Job Card ────────────────────────────────────────────────────────────────
function JobCard({ job }: { job: Job }) {
    return (
        <div className="job-card group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 hover:border-brand-100 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                    {/* Badges row */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
                        <span className="px-3 py-1 rounded-full text-orange-600 border border-orange-100">
                            {job.employment_type}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400">
                            <LocationIcon className="w-3.5 h-3.5" />
                            {job.location || "NA"}
                        </span>
                        {job.created_at && (
                            <>
                                <div className="flex items-center gap-2 whitespace-nowrap">
                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                    <span className="text-slate-400">
                                        Posted {formatDate(job.created_at)}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 group-hover:text-slate-700 transition-colors capitalize">
                        {job.title}
                    </h3>
                </div>
                {/* CTA */}
                <a
                    href={job.pdf || "#"} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center gap-3 md:justify-end group/btn shrink-0">

                    <span className="text-sm font-bold uppercase tracking-widest text-slate-500 group-hover/btn:text-orange-500 transition-colors whitespace-nowrap">
                        View Description
                    </span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:bg-orange-500 group-hover/btn:border-orange-500 text-black/80 group-hover/btn:text-white transition-all duration-300">
                        <ArrowIcon className="w-4 h-4 transform group-hover/btn:-rotate-45 transition-transform duration-300" />
                    </div>
                </a>
            </div>
        </div>
    );
}

// ─── Sidebar Filters ─────────────────────────────────────────────────────────
interface FiltersProps {
    keyword: string;
    location: string;
    selectedTypes: string[];
    onKeywordChange: (v: string) => void;
    onLocationChange: (v: string) => void;
    onTypeToggle: (type: string) => void;
    onReset: () => void;
}

function SidebarFilters({
    keyword,
    location,
    selectedTypes,
    onKeywordChange,
    onLocationChange,
    onTypeToggle,
    onReset,
}: FiltersProps) {
    return (
        <aside className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-24 space-y-6">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                    Filter Openings
                </h3>

                {/* Keywords */}
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Keywords
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={keyword}
                            onChange={(e) => onKeywordChange(e.target.value)}
                            placeholder="e.g. Data, Research..."
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-slate-700 placeholder:text-slate-400"
                        />
                        <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Location */}
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Location
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => onLocationChange(e.target.value)}
                            placeholder="e.g. New Delhi, Palwal"
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-slate-700 placeholder:text-slate-400"
                        />
                        <LocationIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Job Type */}
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                        Job Type
                    </label>
                    <div className="space-y-3">
                        {JOB_TYPES.map((type) => (
                            <label
                                key={type}
                                className="flex items-center gap-3 group cursor-pointer"
                            >
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedTypes.includes(type)}
                                        onChange={() => onTypeToggle(type)}
                                        className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-orange-500 checked:border-orange-500 transition-all cursor-pointer"
                                    />
                                    {/* Checkmark */}
                                    <svg
                                        className="absolute w-3 h-3 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                                    {type}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Reset */}
                <button
                    onClick={onReset}
                    className="w-full cursor-pointer py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-orange-500 transition-colors border-t border-slate-100 pt-6"
                >
                    Reset All Filters
                </button>
            </div>
        </aside>
    );
}

// ─── Empty State ─────────────────────────────────────────────────────────────
function EmptyState() {
    return (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                <SearchIcon className="w-7 h-7 text-slate-400" />
            </div>
            <h4 className="text-lg font-serif font-bold text-slate-700 mb-2">
                No positions found
            </h4>
            <p className="text-sm text-slate-400">
                Try adjusting your filters or search terms.
            </p>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CareersPage() {
    const jobs = jobsData as Job[];

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    const toggleType = (type: string) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const resetFilters = () => {
        setKeyword("");
        setLocation("");
        setSelectedTypes([]);
    };

    const filteredJobs = useMemo(() => {
        const kw = keyword.toLowerCase().trim();
        const loc = location.toLowerCase().trim();

        return jobs.filter((job) => {
            const matchesKeyword =
                !kw ||
                job.title.toLowerCase().includes(kw) ||
                (job.keyword ?? "").toLowerCase().includes(kw);
            const matchesLocation =
                !loc || job.location.toLowerCase().includes(loc);
            const matchesType =
                selectedTypes.length === 0 ||
                selectedTypes.includes(job.employment_type);

            return matchesKeyword && matchesLocation && matchesType;
        });
    }, [jobs, keyword, location, selectedTypes]);

    return (
        <main className="bg-white min-h-screen font-sans">
            {/* ── Hero ───────────────────────────────────────────────────────── */}
            <section className="relative bg-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden border-b border-slate-100">
                {/* Background decorations */}
                <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
                    <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[120%] opacity-[0.02] mix-blend-multiply">
                        <img src="/images/map_network.png" className="w-full h-full object-contain rotate-12" />
                    </div>
                    <div className="absolute top-1/2 left-[-5%] w-[40rem] h-[40rem] bg-orange-500/5 rounded-full blur-[120px] -translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="max-w-4xl lg:max-w-none">
                            {/* Eyebrow */}
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <span className="w-8 md:w-12 h-1 md:h-1.5 bg-orange-500 rounded-full" />
                                <nav className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-slate-900/60">
                                    Join Our Team
                                </nav>
                            </div>

                            {/* Headline */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-900 font-bold leading-[0.95] tracking-tighter mb-8 md:mb-10">
                                Shape the Future of <br />
                                <span className="italic font-light pr-4 text-orange-500">
                                    Global Health
                                </span>
                            </h1>

                            {/* Body */}
                            <div className="text-slate-500 font-light leading-relaxed max-w-2xl space-y-4">
                                <p>
                                    Experience a dynamic, multi-disciplinary environment rooted in
                                    mentorship and &ldquo;Learning by Doing.&rdquo; We are
                                    committed to shaping future research leaders by offering
                                    hands-on training and professional growth across diverse
                                    fields.
                                </p>
                                <p className="text-slate-900 font-medium border-l-4 border-orange-500 pl-4 italic">
                                    Presently, we invite applications from highly motivated
                                    professionals for the following positions:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Listings ───────────────────────────────────────────────────── */}
            <section className="py-16 bg-slate-50/50 min-h-[600px]" id="openings">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Sidebar */}
                        <SidebarFilters
                            keyword={keyword}
                            location={location}
                            selectedTypes={selectedTypes}
                            onKeywordChange={setKeyword}
                            onLocationChange={setLocation}
                            onTypeToggle={toggleType}
                            onReset={resetFilters}
                        />

                        {/* Job list */}
                        <div className="flex-grow">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-serif font-bold text-slate-900">
                                    Current Openings
                                </h2>
                                <span className="text-sm font-medium text-slate-500">
                                    <span>{filteredJobs.length}</span> positions found
                                </span>
                            </div>

                            {filteredJobs.length === 0 ? (
                                <EmptyState />
                            ) : (
                                <div className="space-y-4">
                                    {filteredJobs.map((job) => (
                                        <JobCard key={job.id} job={job} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}