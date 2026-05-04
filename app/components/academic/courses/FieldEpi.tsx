"use client";

import React from "react";

const MastersTab = () => {
    return (
        <div>
            {/* Heading */}
            <h2 className="text-3xl  font-bold text-brand-900 mb-6">
                Field Epidemiology
            </h2>

            <p className="mb-6 text-md text-slate-600">
                Comprehensive training focused on the practical application of epidemiological methods in field settings. This program is designed for health professionals involved in disease surveillance and outbreak investigation.
            </p>


            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className=" p-5 border border-slate-200 rounded-lg shadow-sm">
                    <h4 className="font-bold text-brand-800 mb-2">
                        Outbreak Investigation
                    </h4>
                    <p className="text-sm text-slate-600">
                        Hands-on training in detecting, investigating, and responding to disease outbreaks in various settings.
                    </p>
                </div>

                <div className=" p-5 border border-slate-200 rounded-lg shadow-sm">
                    <h4 className="font-bold text-brand-800 mb-2">
                        Surveillance
                    </h4>
                    <p className="text-sm text-slate-600">
                        Skills to design, implement, and evaluate public health surveillance systems for early warning.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MastersTab;