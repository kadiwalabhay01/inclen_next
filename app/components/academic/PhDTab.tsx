"use client";

import React from "react";

const PhDTab = () => {
  return (
    <div>
      {/* Heading */}
      <h2 className="text-3xl  font-bold text-brand-900 mb-6">
        PhD Program
      </h2>

      <p className="mb-6 font-medium text-lg text-slate-600">
        IIGH through its collaborating partners facilitate PhD programs. Interested candidates are encouraged to visit INCLEN research themes and identify an area of their interest. They could either contact the faculty members directly by visiting our network directory or through Executive Office by filling the application form below.
      </p>

      {/* ✅ Collaborating Universities */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
        <h3 className="text-xl  font-bold text-brand-900">
          Collaborating Universities
        </h3>
        <p className="py-4 text-gray-700">Presently in India, IIGH is collaborating with the following universities for hosting PhD or postdoctoral programs:</p>

        <div className="grid sm:grid-cols-2 gap-4 text-slate-800">
          <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            <span className="font-semibold text-sm">
              Jamia Hamdard University, New Delhi
            </span>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            <span className="font-semibold text-sm">
              Sri Ram Chandra University, Chennai
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Program Features */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border">
          <h4 className="font-bold text-brand-800 mb-2">
            Research Linkage
          </h4>
          <p className="text-sm text-slate-600">
            Students are linked to any one of the ongoing research projects of IIGH and are encouraged to frame their thesis aligned with project objectives.
          </p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border">
          <h4 className="font-bold text-brand-800 mb-2">
            JRF Candidates
          </h4>
          <p className="text-sm text-slate-600">
            Students with Junior Research Fellowships (JRF) are encouraged to develop a synopsis/research idea in agreement with IIGH objectives.
          </p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border md:col-span-2">
          <h4 className="font-bold text-brand-800 mb-2">
            IGNOU Recognized Research Centre
          </h4>
          <p className="text-sm text-slate-600">
            In addition we are also recognized as a research center (RRC) by Indira Gandhi National Open University (IGNOU) and will be supporting student thesis.
          </p>
        </div>
      </div>

      {/* ✅ Important Note */}
      <div className="bg-red-50 border-l-4 border-red-500 p-5 mb-8 rounded-r-lg">
        <h4 className="font-bold text-red-900 mb-1">Kindly Note</h4>
        <p className="text-red-800 text-sm italic">
          “Those who are interested in pursuing a PhD must work in one of INCLEN research project for a minimum of One Year as a Research Staff.”
        </p>
      </div>

      {/* ✅ How to Apply */}
      <div className="bg-brand-900 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold  mb-4">
          How to Apply
        </h3>

        <ul className="space-y-4 mb-6">
          <li className="flex gap-3 text-sm">
            <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
              1
            </span>
            <span>
              Contact faculty members directly via the Network Directory.
            </span>
          </li>

          <li className="flex gap-3 text-sm">
            <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
              2
            </span>
            <span>
              Apply through the IIGH Executive Office.
            </span>
          </li>
        </ul>

        <button className="px-6 py-3 bg-white text-brand-900 font-bold uppercase text-xs rounded hover:bg-gray-100">
          Apply Here
        </button>
      </div>
    </div>
  );
};

export default PhDTab;