"use client";

import React from "react";
import Link from "next/link";
import headlines from "@/data/headlines.json";

interface HeadlineItem {
    id: string;
    title: string;
    image: string;
    content: string;
    heading_type: string;
    created_at: string;
}

export default function HeadlinesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-brand-900 text-white py-22 px-6 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none">
                        <path
                            d="M0 100 C 20 0 50 0 100 100 Z"
                            fill="currentColor" />
                    </svg>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto z-10 w-full">
                    <div className="max-w-3xl">
                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight "
                            style={{ fontFamily: "'Lora', Georgia, serif" }}>
                            Headlines
                        </h1>

                        {/* Description */}
                        <p className="text-brand-100 text-lg md:text-xl font-roboto">
                            Demographic Development and Environmental Surveillance Site (DDESS)
                            <br />
                        </p>

                        <div className="inline-flex items-center gap-2 py-2 text-white/60 font-roboto rounded-full text-16 uppercase tracking-widest mb-6">
                            Surveillance • Synergy • Sustainability
                        </div>
                    </div>
                </div>
            </section>

            {/* Headlines */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl space-y-8">
                    {(headlines as HeadlineItem[]).map((item) => {
                        const formattedDate = new Date(
                            item.created_at
                        ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        });

                        // Remove HTML Tags
                        const cleanContent = item.content.replace(/<[^>]*>?/gm, "");

                        return (
                            <article
                                key={item.id}
                                className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl md:flex-row"
                            >
                                {/* Image */}
                                <div className="relative h-[260px] overflow-hidden md:h-auto md:w-2/5">
                                    <div className="absolute inset-0 z-10 bg-slate-900/10 transition-colors group-hover:bg-slate-900/0"></div>

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Mobile Date */}
                                    <div className="absolute left-4 top-4 z-20 rounded-md bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm backdrop-blur md:hidden">
                                        {formattedDate}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-8 md:p-10">
                                    {/* Top Meta */}
                                    <div className="mb-4 flex items-center gap-4">
                                        <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 md:inline-block">
                                            {formattedDate}
                                        </span>

                                        <span className="inline-block rounded bg-blue-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
                                            {item.heading_type}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="mb-4 font-serif text-2xl font-bold leading-tight text-slate-800 transition-colors group-hover:text-blue-700 md:text-3xl">
                                        {item.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="line-clamp-4 text-base leading-relaxed text-slate-600 md:text-lg">
                                        {cleanContent}
                                    </p>

                                    {/* Read More */}
                                    <div className="mt-8">
                                        <Link
                                            href={`/headlines/${item.id}`}
                                            className="inline-flex items-center text-sm font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1"
                                        >
                                            Read Story

                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Animation */}
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
        </main>
    );
}



