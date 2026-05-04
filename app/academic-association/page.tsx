"use client";

import React, { useState } from "react";

// ─── Tab imports — each at the point of use ───────────────────────────────────
import PhDTab from "@/app/components/academic/PhDTab";
import MastersTab from "@/app/components/academic/MastersTab";
import InternshipTab from "@/app/components/academic/InternshipTab";
import CoursesTab from "@/app/components/academic/CoursesTab";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabId = "phd" | "masters" | "internship" | "courses";

interface Tab {
    id: TabId;
    label: string;
}

// ─── Config ───────────────────────────────────────────────────────────────────

const TABS: Tab[] = [
    { id: "phd", label: "PhD Program" },
    { id: "masters", label: "Masters" },
    { id: "internship", label: "Internship" },
    { id: "courses", label: "Courses / Training" },
];

// ─── Tab → Component map (each import used exactly where declared) ─────────────

const TAB_PANELS: Record<TabId, React.ReactNode> = {
    phd: <PhDTab />,         // ← PhDTab
    masters: <MastersTab />,     // ← MastersTab
    internship: <InternshipTab />,  // ← InternshipTab
    courses: <CoursesTab />,     // ← CoursesTab
};

// ─── Sidebar Nav Item ─────────────────────────────────────────────────────────

const NavItem = ({
    tab,
    isActive,
    onClick,
}: {
    tab: Tab;
    isActive: boolean;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        role="tab"
        aria-selected={isActive}
        className={`w-full text-left px-5 py-4 font-semibold text-sm border-b border-gray-100 last:border-b-0 transition-colors focus:outline-none cursor-pointer flex justify-between items-center group ${isActive
            ? "bg-brand-600 text-white"
            : "text-slate-600 hover:bg-gray-50 hover:text-slate-900"
            }`}
    >
        <span>{tab.label}</span>
        <svg
            className={`w-4 h-4 transition-colors ${isActive ? "text-white" : "text-gray-300 group-hover:text-brand-600"
                }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </button>
);

// ─── Mobile Tab Bar ───────────────────────────────────────────────────────────

const MobileTabBar = ({
    activeTab,
    setActiveTab,
}: {
    activeTab: TabId;
    setActiveTab: (id: TabId) => void;
}) => (
    <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            <div className="flex min-w-max px-4 py-2 gap-2">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === tab.id
                            ? "bg-brand-600 text-white"
                            : "bg-gray-100 text-slate-600 hover:bg-gray-200"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    </div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
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


                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight "
                    style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    Academic Association
                </h1>

                {/* Description */}
                <p className="text-brand-100 text-lg md:text-xl font-roboto">
                    Nurturing the next generation of global health leaders through rigorous academic programs and hands-on training.
                </p>
            </div>
        </div>
    </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AcademicAssociationPage() {
    const [activeTab, setActiveTab] = useState<TabId>("phd");

    return (
        <main className="bg-white min-h-screen pb-20">
            <Hero />

            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
                            <nav role="tablist" aria-label="Academic programs">
                                {TABS.map((tab) => (
                                    <NavItem
                                        key={tab.id}
                                        tab={tab}
                                        isActive={activeTab === tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                    />
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* ── Content panel — renders whichever tab is active ── */}
                    <div className="lg:col-span-3">
                        <div className="bg-white  min-h-[600px]">
                            {TAB_PANELS[activeTab]}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}