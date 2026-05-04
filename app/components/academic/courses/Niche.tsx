"use client";

import React from "react";

const MastersTab = () => {
    return (
        <div>
            {/* Heading */}
            <h2 className="text-3xl  font-bold text-brand-900 mb-6">
                Niche Training
            </h2>

            <p className="mb-6 text-md text-slate-600">
                Specialized workshops addressing specific, high-demand areas in health research and policy.
            </p>


            <div className="grid gap-4 mt-6">

                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg">
                    <div className="bg-white p-2 rounded shadow-sm shrink-0">
                        <svg
                            className="w-6 h-6 text-brand-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-sm m-0">
                            Systematic Reviews & Meta-Analysis
                        </h4>
                        <p className="text-xs text-slate-600 mt-1">
                            Conducting rigorous evidence synthesis to inform guidelines.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg">
                    <div className="bg-white p-2 rounded shadow-sm shrink-0">
                        <svg
                            className="w-6 h-6 text-brand-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                        </svg>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-sm m-0">
                            Bioethics in Research
                        </h4>
                        <p className="text-xs text-slate-600 mt-1">
                            Navigating ethical challenges in human subject research.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );

};

export default MastersTab;