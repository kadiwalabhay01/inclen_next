"use client";

import Link from "next/link";
import Image from "next/image";
import researchData from "@/data/research.json";
import { ResearchProject } from "@/types/research";

const projects: ResearchProject[] = researchData as ResearchProject[];

export default function ResearchPage() {
    return (
        <main className="bg-white min-h-screen font-sans selection:bg-accent-500 selection:text-white">
            {/* Header Section */}
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
                                    Scientific Inquiry
                                </nav>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-900 font-bold leading-[0.95] tracking-tighter mb-8 md:mb-10">
                                Research{" "}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-500 to-orange-400 italic font-light pr-4">
                                    Projects
                                </span>
                            </h1>

                            <p className="text-slate-500 text-lg md:text-xl font-light leading-tight max-w-xl opacity-80">
                                Advancing global health through rigorous surveillance,
                                collaborative synergy, and sustainable research frameworks.
                            </p>
                        </div>

                        {/* Right Side Visual */}
                        <div className="hidden lg:block relative">
                            <div className="relative z-10 ml-auto w-fit">
                                {/* Main Image */}
                                <div className="w-[500px] h-[400px] rounded-[40px] overflow-hidden shadow-2xl shadow-slate-900/20 border-[6px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 relative">
                                    <Image
                                        src="/images/research_projects/research_projects.jpg"
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
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24">

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-500">
                                            Network
                                        </div>
                                    </div>
                                    <div className="text-5xl font-serif font-bold text-slate-900 mb-2 leading-none">
                                        100+
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium leading-relaxed">
                                        Major research initiatives completed across 50 countries.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Projects List */}
            <section className="py-16 bg-slate-50/30">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    {/* List Header (Desktop Only) */}
                    <div className="hidden lg:grid grid-cols-12 gap-6 px-10 py-4 bg-sky-500 text-white rounded-t-2xl font-bold uppercase tracking-widest text-[10px]">
                        <div className="col-span-1">Sr.No.</div>
                        <div className="col-span-5">Project Title</div>
                        <div className="col-span-2">Year of Completion</div>
                        <div className="col-span-2">Principal Investigator</div>
                        <div className="col-span-2 text-right pr-4">Action</div>
                    </div>

                    <div className="flex flex-col gap-px bg-slate-100 border-x border-b border-slate-100 rounded-b-2xl overflow-hidden shadow-xl shadow-slate-200/50">
                        {projects.length === 0 ? (
                            <div className="bg-white p-20 text-center">
                                <p className="text-slate-400 font-medium">
                                    No research projects found.
                                </p>
                            </div>
                        ) : (
                            projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="bg-white hover:bg-slate-50 transition-colors group border-b border-slate-100 last:border-0 cursor-pointer"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-6 lg:px-10 py-8">
                                        {/* Sr. No */}
                                        <div className="col-span-1 flex items-center gap-2">
                                            <span className="lg:hidden text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                No.
                                            </span>
                                            <span className="text-lg font-serif font-black text-slate-900 opacity-20 group-hover:opacity-40 transition-opacity">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Project Title */}
                                        <div className="col-span-5">
                                            <h3 className="text-lg font-serif font-bold text-slate-900 leading-tight transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Year of Completion */}
                                        <div className="col-span-2">
                                            <div className="flex flex-col">
                                                <span className="lg:hidden text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                                    Year of Completion
                                                </span>
                                                <span className="text-sm font-semibold text-slate-600">
                                                    {project.period || "-"}
                                                </span>
                                            </div>
                                        </div>

                                        {/* PI */}
                                        <div className="col-span-2">
                                            <div className="flex flex-col">
                                                <span className="lg:hidden text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                                    Principal Investigator
                                                </span>
                                                <span className="text-sm font-semibold text-slate-800/80">
                                                    {project.pi || "-"}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <div className="col-span-2 text-right">
                                            <Link
                                                href={`/research/${project.id}`}
                                                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5"
                                            >
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}