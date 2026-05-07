"use client";

import React from "react";

const Lamp = () => {
    return (
        <div>

            {/* Header & Intro */}
            <div className="mb-10">
                <h3 className="text-3xl font-serif font-bold text-brand-900 mb-2 mt-0">
                    Leadership and Management Program (LAMP)
                </h3>

                <p className="mb-8 text-slate-700 leading-relaxed">
                    The Leadership and Management Program (LAMP) is INCLEN’s flagship capacity-building initiative, running successfully since 2012, with a clear mission: to nurture the next generation of leaders in health research.
                </p>

                <div className="bg-blue-50/50 rounded-2xl p-6 md:p-8 border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg className="w-16 h-16 text-brand-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01697C7.9124 16 7.01697 16.8954 7.01697
               18V21H14.017ZM24.017 21V18C24.017 16.8954 23.1216 16 22.017 16H19.017C17.9124 16 17.017 16.8954 17.017 
               18V21H24.017ZM17.017 2C17.017 0.895431 17.9124 0 19.017 0H22.017C24.017 4.3 22.017 5 19.017 5H17.017V2ZM7.01697 
               2C7.01697 0.895431 7.9124 0 9.01697 0H12.017C14.017 4.3 12.017 5 9.01697 5H7.01697V2Z" />
                        </svg>
                    </div>

                    <p className="text-lg font-serif text-brand-900 leading-relaxed text-center italic relative z-10">
                        &quot;LAMP is designed to strengthen national health research capacity by equipping mid-career and emerging professionals with the leadership, strategic management, and research skills required to drive impactful health outcomes and influence policy.&quot;
                    </p>
                </div>
            </div>

            {/* Program Overview */}
            <div className="mb-12">
                <h4 className="text-2xl font-serif font-bold text-brand-900 mb-4">
                    Program Overview
                </h4>

                <p className="text-slate-600 mb-8">
                    LAMP is an intensive 15-day residential program that follows a proven{" "}
                    <span className="font-bold text-brand-700">“Fact – Reflect – Act”</span> learning framework.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Fact */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-brand-300 transition-colors group">
                        <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors">
                            <svg className="w-6 h-6 text-brand-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h5 className="text-lg font-serif font-bold text-brand-900 mb-2">Fact</h5>
                        <p className="text-sm text-slate-600">
                            Participants are introduced to contemporary leadership concepts, strategic management principles, and global best practices.
                        </p>
                    </div>

                    {/* Reflect */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-brand-300 transition-colors group">
                        <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors">
                            <svg className="w-6 h-6 text-brand-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h5 className="text-lg font-serif font-bold text-brand-900 mb-2">Reflect</h5>
                        <p className="text-sm text-slate-600">
                            Through guided exercises and group work, participants critically reflect on their leadership styles and challenges.
                        </p>
                    </div>

                    {/* Act */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-brand-300 transition-colors group">
                        <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors">
                            <svg className="w-6 h-6 text-brand-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h5 className="text-lg font-serif font-bold text-brand-900 mb-2">Act</h5>
                        <p className="text-sm text-slate-600">
                            Each participant develops a personal leadership development plan to translate insights into actionable strategies.
                        </p>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                {/* Unique Learning Experience */}
                <div>
                    <h4 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-accent-500 rounded-full"></span>
                        Unique Learning Experience
                    </h4>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-full">
                        <p className="text-sm text-slate-700 leading-relaxed mb-6">
                            A distinctive highlight is the{" "}
                            <span className="font-bold text-brand-700">“Meet the Leader”</span>{" "}
                            series, engaging directly with eminent leaders from India and across the globe.
                        </p>

                        <div className="grid grid-cols-2 gap-4">

                            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-center">
                                <span className="block text-2xl font-bold text-accent-500 mb-1">
                                    6-8
                                </span>
                                <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
                                    Leaders
                                </span>
                            </div>

                            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-center">
                                <span className="block text-2xl font-bold text-accent-500 mb-1">
                                    Global
                                </span>
                                <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
                                    Perspectives
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Course Structure */}
                <div>
                    <h4 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-accent-500 rounded-full"></span>
                        Course Structure
                    </h4>

                    <div className="space-y-3">

                        {/* Item 1 */}
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center shrink-0 text-brand-700">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <span className="font-semibold text-slate-800 text-sm">
                                Pre-course assignments
                            </span>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center shrink-0 text-brand-700">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <span className="font-semibold text-slate-800 text-sm">
                                14 modules on leadership
                            </span>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center shrink-0 text-brand-700">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <span className="font-semibold text-slate-800 text-sm">
                                Research methodology module
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-brand-900 rounded-xl p-8 text-center text-white">
                <h3 className="text-2xl font-serif font-bold mb-3">
                    Transform Your Leadership Journey
                </h3>
                <p className="text-blue-100 mb-6 text-sm max-w-lg mx-auto">
                    Apply for LAMP to lead innovative, ethical, and impactful health research.
                </p>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-accent-600 transition-colors"
                >
                    Apply for LAMP →
                </a>
            </div>

        </div>
    );
};

export default Lamp;