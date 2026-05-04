"use client";

import React, { useState } from "react";
import Lamp from "./courses/Lamp";
import FieldEpi from "./courses/FieldEpi";
import Geospatial from "./courses/Geospatial"
import Niche from "./courses/Niche"
import Qualitative from "./courses/Qualitative"
import Fellowships from "./courses/Fellowships"

const TABS = [
  { id: "lamp", label: "LAMP" },
  { id: "field_epi", label: "Field Epidemiology" },
  { id: "geospatial", label: "Geospatial Epidemiology" },
  { id: "niche", label: "Niche Training" },
  { id: "qualitative", label: "Qualitative Research" },
  { id: "fellowships", label: "Fellowships" },
];

const CoursesTab = () => {
  const [courseTab, setCourseTab] = useState("lamp");

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">
          Courses & Training
        </h2>

        {/* Tabs */}
        <div className="border-b border-gray-200 overflow-x-auto no-scrollbar">
          <nav className="-mb-px flex space-x-8 min-w-max">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCourseTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 cursor-pointer border-b-2 font-medium text-sm transition-colors ${courseTab === tab.id
                    ? "border-brand-600 text-brand-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-gray-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="prose max-w-none text-slate-700">

        {courseTab === "lamp" && <Lamp />}

         {courseTab === "field_epi" && <FieldEpi />}

       {courseTab === "geospatial" && <Geospatial />}

        {courseTab === "niche" && <Niche />}

         {courseTab === "qualitative" && <Qualitative />}

       {courseTab === "fellowships" && <Fellowships />}

      </div>
    </div>
  );
};

export default CoursesTab;