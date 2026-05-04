"use client";

import React from "react";

const InternshipTab = () => {
  return (
    <div>
      {/* Heading */}
      <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">
        Internship
      </h2>

      <div className="prose max-w-none text-slate-700">

        {/* Intro */}
        <p className="mb-4">
          INCLEN Institute of Global Health (IIGH) invites students across the globe to do internships in our projects.
          The overarching goal is to promote academic, career and personal developments.
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-800 mb-4">
          Internship Tracks
        </h3>

        {/* Tracks */}
        <div className="space-y-4 mb-8">

          {/* Track 1 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold">
              1
            </div>
            <div>
              <h4 className="font-bold text-gray-900">
                Work Experience Internship (Mid Career Internship)
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                The placement can be from 3 months to 24 months. During this period the candidate is expected to enhance the skills he/she acquired in their career (work experience) and tailor it towards real life global health situations. This program helps candidate to identify his/her personal development plan and equip them with skills to pursue independent research in future. This program is also ideal for candidates who want to establish a career as faculty members.
              </p>
            </div>
          </div>

          {/* Track 2 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold">
              2
            </div>
            <div>
              <h4 className="font-bold text-gray-900">
                Dissertation Internship
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                The placement can be from 4 weeks to 12 weeks. This internship is primarily oriented for students from different academic backgrounds. During this internship a student is expected to do research under supervision as per the priority of the IIGH activities. The student can choose a topic within the thematic areas or on an area outside the purview of IIGH, with prior approval. Graduates, post graduates or doctoral students from any discipline related to health or public health are eligible to apply under this stream.
              </p>
            </div>
          </div>

        </div>

        {/* Button */}
        <a
          href="#"
          className="inline-block px-6 py-3 bg-brand-600 text-white rounded font-bold hover:bg-brand-700 transition-colors"
        >
          Apply for Internship
        </a>

      </div>
    </div>
  );
};

export default InternshipTab;