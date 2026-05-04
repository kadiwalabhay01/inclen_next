"use client";

import React from "react";

const MastersTab = () => {
    return (
        <div>
            {/* Heading */}
            <h2 className="text-3xl  font-bold text-brand-900 mb-6">
                Qualitative Research Methods
            </h2>

            <p className="mb-6 text-md text-slate-600">
                A deep dive into qualitative inquiry to understand the &apos;why&apos; and &apos;how&apos; of health behaviors and systems.
            </p>


            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-6">
                <p className="text-orange-900 italic font-medium">&quot;Not everything that counts can be counted.&quot;</p>
            </div>

            <h4 className="font-bold text-brand-800 mt-6 mb-3">Training Areas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                    <span>In-Depth Interviews (IDI)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                    <span>Focus Group Discussions (FGD)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                    <span>Thematic Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                    <span>Qualitative Software (e.g., NVivo)</span>
                </div>
            </div>
        </div>
    );
};

export default MastersTab;