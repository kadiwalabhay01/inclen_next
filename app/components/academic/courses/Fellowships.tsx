"use client";

import React from "react";

const MastersTab = () => {
    return (
        <div>
            {/* Heading */}
            <h2 className="text-3xl  font-bold text-brand-900 mb-6">
                Fellowships
            </h2>

            <p className="mb-6 text-md text-slate-600">
                Opportunities for researchers, students, and professionals to spend time at INCLEN institutions to gain specific skills or exposure.
            </p>

            <div className="space-y-4">

                <div className="border border-slate-200 rounded-lg p-5 hover:border-brand-300 transition-colors">
                    <h4 className="font-bold text-brand-800 mt-0 mb-1">
                        Short-Term Observership
                    </h4>

                    <p className="text-sm text-slate-600 m-0 mb-3">
                        For professionals seeking brief exposure (2-4 weeks) to specific research projects or laboratory techniques.
                    </p>

                    <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-bold">
                        Duration: 2-4 Weeks
                    </span>
                </div>

                <div className="border border-slate-200 rounded-lg p-5 hover:border-brand-300 transition-colors">
                    <h4 className="font-bold text-brand-800 mt-0 mb-1">
                        Research Fellowships
                    </h4>

                    <p className="text-sm text-slate-600 m-0 mb-3">
                        Longer-term engagements for conducting substantial research work under mentorship.
                    </p>

                    <a
                        href="#"
                        className="text-accent-600 text-sm font-bold hover:underline"
                    >
                        View Fellowship Opportunities →
                    </a>
                </div>

            </div>
        </div>
    );
};

export default MastersTab;