"use client";

import { useEffect, useRef } from "react";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Filler,
    Tooltip,
    Legend,
    ChartConfiguration,
    PieController,
    LineController,
    BarController,
} from "chart.js";

// Register all controllers + elements
Chart.register(
    PieController,
    LineController,
    BarController,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Filler,
    Tooltip,
    Legend
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface Finding {
    id: string;
    category: string;
    title: string;
    titleHighlight: string;
    description: string;
    stat: string;
    statLabel: string;
    chartId: string;
    accentColor: string; // "brand" | "accent"
    tags?: string[];
    extraCard?: React.ReactNode;
}

// ─── Chart Configurations ─────────────────────────────────────────────────────

const BRAND_BLUE = "#00558F";
const ACCENT_ORANGE = "#f7610c";
const SLATE_LIGHT = "#F1F5F9";

function buildNeuroChart(canvas: HTMLCanvasElement): Chart {
    return new Chart(canvas, {
        type: "pie",
        data: {
            labels: ["Impacted", "Others"],
            datasets: [
                {
                    data: [12, 88],
                    backgroundColor: [ACCENT_ORANGE, BRAND_BLUE],
                    borderColor: "#ffffff",
                    borderWidth: 4,
                    hoverOffset: 15,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: { usePointStyle: true, padding: 20, font: { size: 12, weight: "bold" } },
                },
            },
        },
    } as ChartConfiguration<"pie">);
}

function buildInjectionChart(canvas: HTMLCanvasElement): Chart {
    return new Chart(canvas, {
        type: "line",
        data: {
            labels: ["Public", "Private", "Outreach", "Overall"],
            datasets: [
                {
                    label: "Unsafe Practices %",
                    data: [45, 78, 52, 63],
                    borderColor: ACCENT_ORANGE,
                    backgroundColor: "rgba(247, 97, 12, 0.1)",
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: "#ffffff",
                    pointBorderColor: ACCENT_ORANGE,
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    borderWidth: 3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: (value) => value + "%" },
                },
                x: { grid: { display: false } },
            },
            plugins: { legend: { display: false } },
        },
    } as ChartConfiguration<"line">);
}

function buildZoonoticChart(canvas: HTMLCanvasElement): Chart {
    return new Chart(canvas, {
        type: "bar",
        data: {
            labels: ["Leptospirosis", "Scrub Typhus", "Other Zoonotic", "Non-Zoonotic"],
            datasets: [
                {
                    label: "Prevalence %",
                    data: [8, 7, 5, 80],
                    backgroundColor: [BRAND_BLUE, BRAND_BLUE, BRAND_BLUE, SLATE_LIGHT],
                    borderRadius: 8,
                    barThickness: 45,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: (value) => value + "%" },
                },
                x: { grid: { display: false } },
            },
            plugins: { legend: { display: false } },
        },
    } as ChartConfiguration<"bar">);
}

function buildPolioChart(canvas: HTMLCanvasElement): Chart {
    return new Chart(canvas, {
        type: "bar",
        data: {
            labels: ["North", "Central", "South", "East", "West"],
            datasets: [
                {
                    label: "Reached",
                    data: [72, 78, 85, 68, 77],
                    backgroundColor: SLATE_LIGHT,
                    borderRadius: 0,
                },
                {
                    label: "Missed",
                    data: [28, 22, 15, 32, 23],
                    backgroundColor: ACCENT_ORANGE,
                    borderRadius: 8,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, grid: { display: false } },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: (value) => value + "%" },
                },
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: { usePointStyle: true, padding: 15, font: { size: 11, weight: "bold" } },
                },
            },
        },
    } as ChartConfiguration<"bar">);
}

// ─── ChartBox Component ────────────────────────────────────────────────────────

interface ChartBoxProps {
    chartId: string;
    accentColor: "brand" | "accent";
}

function ChartBox({ chartId, accentColor }: ChartBoxProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        if (chartRef.current) {
            chartRef.current.destroy();
            chartRef.current = null;
        }

        const canvas = canvasRef.current;
        if (chartId === "neuroChart") chartRef.current = buildNeuroChart(canvas);
        else if (chartId === "injectionChart") chartRef.current = buildInjectionChart(canvas);
        else if (chartId === "zoonoticChart") chartRef.current = buildZoonoticChart(canvas);
        else if (chartId === "polioChart") chartRef.current = buildPolioChart(canvas);

        return () => {
            chartRef.current?.destroy();
            chartRef.current = null;
        };
    }, [chartId]);

    const bgClass = accentColor === "brand" ? "bg-[#00558F]/5" : "bg-[#f7610c]/5";

    return (
        <div className="relative group mx-4">
            <div
                className={`absolute -inset-4 ${bgClass} rounded-[2rem] transform group-hover:scale-105 transition-transform duration-500`}
            />
            <div className="relative rounded-2xl overflow-hidden bg-slate-50 p-4 md:p-8 shadow-xl border border-slate-100">
                <div className="relative h-[300px] md:h-[350px] w-full">
                    <canvas ref={canvasRef} />
                </div>
            </div>
        </div>
    );
}

// ─── Main Page Component ───────────────────────────────────────────────────────

export default function KeyResearchFindingsPage() {
    return (
        <main className="bg-white min-h-screen pb-20">

            {/* ── Hero ── */}
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-accent-400 rounded-full text-[10px] font-bold font-roboto uppercase tracking-widest mb-6">
                            Research • Evidence • Impact
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"
                            style={{ fontFamily: "'Lora', Georgia, serif" }}>
                            Key Research Findings
                        </h1>

                        {/* Description */}
                        <p className="text-brand-100 text-lg md:text-xl leading-relaxed font-roboto">
                            Evidence that Drives Change
                            <br />
                            <span className="text-white/60 text-base font-sans mt-2 block italic">
                                Data-Led Insights for Better Health Outcomes.
                            </span>
                        </p>

                    </div>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="relative py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white pointer-events-none" />

                <div className="relative ">
                    <div className="flex flex-col items-center">
                        <div className="relative">

                            {/* Vertical Line */}
                            <div className="absolute -left-8 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00558F] to-transparent opacity-30 rounded-full hidden md:block" />

                            {/* Heading */}
                            <p className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-snug text-center md:text-left">
                                Our research translates complex{" "}
                                <span className="text-[#f7610c]">
                                    public health challenges
                                </span>{" "}
                                into actionable, evidence-based solutions.
                            </p>

                            {/* Subtext */}
                            <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
                                <div className="w-12 h-px bg-slate-200 hidden md:block" />

                                <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl text-center md:text-left">
                                    We bridge the gap between scientific investigation and implementation to ensure
                                    national health priorities are met with data-driven precision.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── Findings Grid ── */}
            <section className="py-2 mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* Finding 1 — Neurodevelopmental Disorders */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#00558F] text-xs font-bold font-roboto uppercase tracking-widest rounded-full mb-6 italic">
                                Child Health Research
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                High Burden of <br />
                                <span className="text-[#00558F] wrap-break-word hyphens-auto">Neurodevelopmental Disorders</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Approximately <strong>12% of children</strong> under 12 years of age are affected by
                                neurodevelopmental disorders, highlighting the critical need for early screening and
                                intervention strategies.
                            </p>
                            <div className="flex items-center gap-8">
                                <div className="flex flex-col">
                                    <span className="text-5xl font-serif font-bold text-[#f7610c]">12%</span>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                                        Incidence Rate
                                    </span>
                                </div>
                                <div className="w-px h-12 bg-slate-200" />
                                <div className="max-w-[180px]">
                                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                        Underlining the need for scaled screening infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <ChartBox chartId="neuroChart" accentColor="accent" />
                        </div>
                    </div>

                    {/* Finding 2 — Unsafe Injection Practices */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
                        <div className="order-1">
                            <ChartBox chartId="injectionChart" accentColor="brand" />
                        </div>
                        <div className="order-2">
                            <div className="inline-block px-4 py-1.5 bg-orange-50 text-gray-900 text-xs font-bold font-roboto uppercase tracking-widest rounded-full mb-6 italic">
                                Infection Control
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Unsafe <br />
                                <span className="text-[#f7610c]">Injection Practices</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-roboto">
                                Nearly <strong>63% of injections</strong> were found to be unsafe, significantly
                                contributing to the transmission of blood-borne infections such as Hepatitis B and HIV.
                            </p>
                            <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div>
                                    <span className="text-3xl font-serif font-bold text-[#00558F]">63%</span>
                                    <p className="text-xs font-bold text-slate-500 uppercase mt-1">Unsafe Rate</p>
                                </div>
                                <div>
                                    <span className="text-3xl font-serif font-bold text-[#f7610c]">Critical</span>
                                    <p className="text-xs font-bold text-slate-500 uppercase mt-1">Public Health Alert</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Finding 3 — Zoonotic Causes of Fever */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#00558F] text-xs font-bold font-roboto uppercase tracking-widest rounded-full mb-6 italic">
                                Emerging Infections
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Zoonotic <br />
                                <span className="text-[#00558F]">Causes of Fever</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-roboto">
                                Around <strong>20% of acute undifferentiated fever</strong> cases are attributed to
                                infections such as leptospirosis and scrub typhus, which can lead to serious
                                complications like encephalopathy.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Leptospirosis", "Scrub Typhus"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-5 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase border border-slate-200 tracking-wider"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <ChartBox chartId="zoonoticChart" accentColor="accent" />
                        </div>
                    </div>

                    {/* Finding 4 — Polio Coverage Gaps */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1">
                            <ChartBox chartId="polioChart" accentColor="brand" />
                        </div>
                        <div className="order-2">
                            <div className="inline-block px-4 py-1.5 bg-orange-50 text-gray-900 text-xs font-bold uppercase tracking-widest rounded-full mb-6 italic">
                                Immunization Strategy
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                Gaps in{" "}
                                <span className="block text-[#f7610c] mt-2">Polio Coverage</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-roboto">
                                Approximately <strong>24% of children</strong> were missed during Pulse Polio
                                campaigns, revealing critical gaps that informed targeted immunization interventions.
                            </p>
                            <div className="bg-[#00558F] text-white p-8 rounded-3xl shadow-xl">
                                <div className="text-6xl font-serif font-bold mb-2">24%</div>
                                <div className="text-sm font-bold text-blue-200 uppercase tracking-widest leading-relaxed">
                                    Children Missed during <br />
                                    Pulse Polio Campaigns
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}