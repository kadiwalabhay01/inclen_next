"use client";

import React from "react";

const MastersTab = () => {
  return (
    <div>
      {/* Heading */}
      <h2 className="text-3xl  font-bold text-brand-900 mb-6">
        Masters Program
      </h2>

      <p className="mb-6 text-md text-slate-600">
        INCLEN collaborates with various universities to offer dissertation support and practical training for Masters students in Public Health, Epidemiology, and Biostatistics.
      </p>


      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className=" p-5 rounded-lg border">
          <h4 className="font-bold text-brand-800 mb-2">
            MPH Dissertation
          </h4>
          <p className="text-sm text-slate-600">
            Complete your Master of Public Health dissertation with guidance from our experienced mentors.
          </p>
        </div>

        <div className=" p-5 rounded-lg border">
          <h4 className="font-bold text-brand-800 mb-2">
            Field Attachments
          </h4>
          <p className="text-sm text-slate-600">
           Short-term field exposures to understand data collection and community engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MastersTab;