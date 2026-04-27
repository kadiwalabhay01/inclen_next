'use client';

import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Collaborator {
  name: string;
  location: string;
  initial: string;
}

type TabKey = 'national' | 'international';

// ─── Data ─────────────────────────────────────────────────────────────────────

const COLLABORATORS: Record<TabKey, Collaborator[]> = {
  international: [
    { name: 'Johns Hopkins University', location: 'USA',    initial: 'JH' },
    { name: 'McMaster University',       location: 'Canada', initial: 'MU' },
    { name: 'McGill University',         location: 'Canada', initial: 'Mg' },
    { name: 'Boston University',         location: 'USA',    initial: 'BU' },
    { name: 'University of Tromsø',      location: 'Norway', initial: 'UT' },
  ],
  national: [
    { name: 'AIIMS',            location: 'New Delhi',   initial: 'AI' },
    { name: 'PHFI',             location: 'New Delhi',   initial: 'PH' },
    { name: 'KGMU',             location: 'Lucknow',     initial: 'KG' },
    { name: 'Jamia Hamdard',    location: 'New Delhi',   initial: 'JH' },
    { name: 'IGNOU',            location: 'New Delhi',   initial: 'IG' },
    { name: 'IIIT Delhi',       location: 'New Delhi',   initial: 'II' },
    { name: 'AIIMS Bhubaneswar',location: 'Bhubaneswar', initial: 'AI' },
    { name: 'KIMS Bhubaneswar', location: 'Bhubaneswar', initial: 'KI' },
    { name: 'AIIMS',            location: 'Patna',       initial: 'AI' },
    { name: 'AIIMS',            location: 'Madurai',     initial: 'AI' },
    { name: 'ICMR',             location: 'New Delhi',   initial: 'IC' },
    { name: 'PHFI',             location: 'New Delhi',   initial: 'PH' },
    { name: 'INDEPTH',          location: 'Delhi',       initial: 'IN' },
    { name: 'NII',              location: 'New Delhi',   initial: 'NI' },
    { name: 'SRU',              location: 'Tamil Nadu',  initial: 'SR' },
  ],
};

const TABS: { key: TabKey; label: string }[] = [
  { key: 'national',      label: 'National (India)' },
  { key: 'international', label: 'International'    },
];

// ─── CollaboratorCard ─────────────────────────────────────────────────────────

function CollaboratorCard({ item }: { item: Collaborator }) {
  return (
    <div
      className="group bg-slate-50 hover:bg-white p-6 sm:p-8 rounded-2xl
                 border border-transparent hover:border-slate-100 hover:shadow-xl
                 transition-all duration-300 text-center flex flex-col
                 items-center justify-center h-full"
    >
      {/* Avatar */}
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-white rounded-full shadow-sm
                   flex items-center justify-center mb-4 sm:mb-6
                   group-hover:scale-110 transition-transform ring-1 ring-slate-100"
      >
        <span className="font-serif font-bold text-base sm:text-lg text-slate-900">
          {item.initial}
        </span>
      </div>

      {/* Name */}
      <h4
        className="font-bold text-slate-900 text-xs sm:text-sm leading-tight
                   group-hover:text-accent-500 transition-colors mb-2 font-roboto"
      >
        {item.name}
      </h4>

      {/* Location badge */}
      <span
        className="inline-block px-2 py-0.5 bg-brand-100 text-brand-700 font-roboto
                   text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full"
      >
        {item.location}
      </span>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function AcademicCollaborators() {
  const [activeTab, setActiveTab] = useState<TabKey>('international');

  return (
    <section
      id="collaborators"
      className="py-20 bg-white border-t border-slate-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Title */}
          <div>
            <span className="text-accent-500 font-bold tracking-widest uppercase text-xs font-roboto">
              Global Network
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
              Academic Collaborators
            </h2>
          </div>

          {/* Tab switcher */}
          <div className="flex justify-center md:justify-end">
            <div
              role="tablist"
              aria-label="Collaborator regions"
              className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-full p-1 overflow-x-auto
                         [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  id={`collab-tab-${tab.key}`}
                  aria-selected={activeTab === tab.key}
                  aria-controls={`collab-panel-${tab.key}`}
                  onClick={() => setActiveTab(tab.key)}
                  className={[
                    'whitespace-nowrap px-5 sm:px-6 py-2 rounded-full',
                    'text-[10px] sm:text-xs font-bold uppercase tracking-widest',
                    'transition-all duration-200 focus:outline-none',
                    'focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-1 font-roboto',
                    activeTab === tab.key
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800',
                  ].join(' ')}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Panels */}
        <div className="min-h-[220px]">
          {TABS.map((tab) => (
            <div
              key={tab.key}
              id={`collab-panel-${tab.key}`}
              role="tabpanel"
              aria-labelledby={`collab-tab-${tab.key}`}
              hidden={activeTab !== tab.key}
            >
              {activeTab === tab.key && (
                <div
                  className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                >
                  {COLLABORATORS[tab.key].map((item, idx) => (
                    <CollaboratorCard key={`${item.name}-${item.location}-${idx}`} item={item} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}