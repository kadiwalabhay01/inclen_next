"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import publications from "@/data/publications.json";

interface Publication {
    id: string;
    title: string;
    slug?: string;
    year?: string;
    journal?: string;
    authors?: string;
    abstract?: string;
    suggested_citation?: string;
    cover_image?: string;
    pdf_url?: string;
    created_at?: string;
}

export default function PublicationsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedYear, setSelectedYear] = useState("all");

    const years = useMemo(() => {
        const uniqueYears = Array.from(
            new Set(
                (publications as Publication[])
                    .map((p) => p.year)
                    .filter(Boolean)
            )
        );

        return uniqueYears.sort((a, b) => Number(b) - Number(a));
    }, []);

    const filteredPublications = useMemo(() => {
        return (publications as Publication[]).filter((pub) => {
            const search = searchQuery.toLowerCase();

            const matchesSearch =
                pub.title?.toLowerCase().includes(search) ||
                pub.authors?.toLowerCase().includes(search);

            const matchesYear =
                selectedYear === "all" || pub.year === selectedYear;

            return matchesSearch && matchesYear;
        });
    }, [searchQuery, selectedYear]);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative bg-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden border-b border-slate-100">
                {/* Background decorations */}
                <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">

                    <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[120%] opacity-[0.02] mix-blend-multiply">
                        <img src="/images/map_network.png" className="w-full h-full object-contain rotate-12" />
                    </div>

                    <div className="absolute top-1/2 left-[-5%] w-[40rem] h-[40rem] bg-accent-500/7 rounded-full blur-[120px] -translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <span className="w-8 md:w-12 h-1 md:h-1.5 bg-accent-500 rounded-full" />
                                <nav className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-slate-900/60">
                                    Knowledge Dissemination
                                </nav>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-900 font-bold leading-[0.95] tracking-tighter mb-8 md:mb-10">
                                Our{" "}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-500 to-orange-400 italic font-light pr-4">
                                    Publications
                                </span>
                            </h1>

                            <p className="text-slate-500 text-lg md:text-xl font-light leading-tight max-w-xl opacity-80">
                                Evidence generated from our global network sites, contributing to the scientific community and informing policy frameworks.
                            </p>
                        </div>

                        {/* Right Side Visual */}
                        <div className="hidden lg:block relative">
                            <div className="relative z-10 ml-auto w-fit">
                                {/* Main Image */}
                                <div className="w-[500px] h-[400px] rounded-[40px] overflow-hidden shadow-2xl shadow-slate-900/20 border-[6px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 relative">
                                    <Image
                                        src="/images/publication_hero.jpg"
                                        alt="Research Projects"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-slate-900/40 to-transparent mix-blend-multiply pointer-events-none" />
                                </div>

                                {/* Floating Stat Card */}
                                <div className="absolute -bottom-10 -left-16 bg-white/90 backdrop-blur-xl p-8 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 max-w-[280px]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center text-accent-500">

                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 
                                                    4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>

                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-500">
                                            Impact
                                        </div>
                                    </div>
                                    <div className="text-5xl font-serif font-bold text-slate-900 mb-2 leading-none">
                                        450+
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium leading-relaxed">
                                        Peer-Reviewed Papers Published Globally since 2010.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="sticky top-20 z-40 border-b border-slate-100 bg-white py-8 shadow-sm">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="flex flex-col gap-6 md:flex-row">
                        {/* Search */}
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search by title or author..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-2xl border border-slate-100 bg-slate-50 py-4 pl-14 pr-6 font-medium text-slate-900 outline-none transition-all focus:ring-2 focus:ring-blue-500/20"
                            />

                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                                🔍
                            </div>
                        </div>

                        {/* Year Filter */}
                        <div className="w-full md:w-64">
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all font-bold uppercase tracking-widest text-[10px] appearance-none cursor-pointer text-black"
                            >
                                <option value="all">Filter by Year</option>

                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publications List */}
            <section className="min-h-[600px] bg-slate-50/30 py-16">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    {/* Desktop Header */}
                    <div className="hidden grid-cols-12 gap-6 rounded-t-2xl bg-sky-500 px-10 py-4 text-[10px] font-bold uppercase tracking-widest text-white lg:grid">
                        <div className="col-span-1">No.</div>
                        <div className="col-span-4">Publication Title</div>
                        <div className="col-span-1">Year</div>
                        <div className="col-span-2">Journal</div>
                        <div className="col-span-2">Authors</div>
                        <div className="col-span-2 text-right">Action</div>
                    </div>

                    <div className="overflow-hidden rounded-b-2xl border border-slate-100 bg-slate-100 shadow-xl">
                        {filteredPublications.length > 0 ? (
                            filteredPublications.map((pub, index) => (
                                <div
                                    key={pub.id}
                                    className="group border-b border-slate-100 bg-white transition-colors hover:bg-slate-50"
                                >
                                    <div className="grid grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-12 lg:px-10">
                                        {/* Number */}
                                        <div className="col-span-1">
                                            <span className="font-serif text-lg font-black text-slate-300">
                                                {(index + 1).toString().padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <div className="col-span-4">
                                            <h3 className="font-serif text-lg font-bold leading-tight text-slate-900 transition-colors">
                                                {pub.title}
                                            </h3>
                                        </div>

                                        {/* Year */}
                                        <div className="col-span-1">
                                            <span className="text-sm font-semibold text-slate-600">
                                                {pub.year || "-"}
                                            </span>
                                        </div>

                                        {/* Journal */}
                                        <div className="col-span-2">
                                            <span className="text-xs font-semibold italic text-accent-600">
                                                {pub.journal || "N/A"}
                                            </span>
                                        </div>

                                        {/* Authors */}
                                        <div className="col-span-2">
                                            <p className="line-clamp-2 text-xs font-medium text-slate-500">
                                                {pub.authors || "Unknown"}
                                            </p>
                                        </div>

                                        {/* Action */}
                                        <div className="col-span-2 text-right">
                                            <Link
                                                href={`/publications/${pub.id}`}
                                                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                                            >
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white py-32 text-center">
                                <h3 className="mb-2 font-serif text-2xl font-bold text-slate-900">
                                    No publications found
                                </h3>

                                <p className="text-slate-500">
                                    Try adjusting your search or filters.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}