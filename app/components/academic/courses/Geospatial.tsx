"use client";

import React from "react";

const MastersTab = () => {
    return (
        <div>
            {/* Heading */}
            <h2 className="text-3xl  font-bold text-brand-900 mb-6">
                Geospatial Epidemiology
            </h2>

            <p className="mb-6 text-md text-slate-600">
                Comprehensive training focused on the practical application of epidemiological methods in field settings. This program is designed for health professionals involved in disease surveillance and outbreak investigation.
            </p>

            <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold text-brand-800 mt-0 mb-3">Core Modules</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 m-0">
                    <li>Introduction to GIS software (QGIS/ArcGIS)</li>
                    <li>Spatial data collection and management</li>
                    <li>Mapping disease distribution and health resources</li>
                    <li>Spatial statistics and cluster analysis</li>
                </ul>
            </div>

        </div>
    );

};

export default MastersTab;