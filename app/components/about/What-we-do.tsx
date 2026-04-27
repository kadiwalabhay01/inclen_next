'use client';

interface Objective {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

function ResearchIcon() {
  return (
    <svg
      className="w-8 h-8 text-brand-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );
}

function CapacityIcon() {
  return (
    <svg
      className="w-8 h-8 text-brand-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

function PolicyIcon() {
  return (
    <svg
      className="w-8 h-8 text-brand-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

const objectives: Objective[] = [
  {
    id: 1,
    title: 'Research Excellence',
    description:
      'Conducting multidisciplinary studies on high-priority health issues, including child health, mental health, reproductive health, diabetes, and metabolic disorders.',
    icon: <ResearchIcon />,
    items: ['SOMAARTH Surveillance', 'Multi-Centric Trials'],
  },
  {
    id: 2,
    title: 'Capacity Building',
    description:
      'Developing the next generation of global health leaders through our unique centers of excellence and training programs.',
    icon: <CapacityIcon />,
    items: ['Research Training (CERTCs)', 'LAMP'],
  },
  {
    id: 3,
    title: 'Policy Advocacy',
    description:
      'By bringing together strong evidence and the voices of stakeholders, we help transform research into policies that improve health systems and lives.',
    icon: <PolicyIcon />,
    items: ['Evidence Synthesis', 'Stakeholder Engagement'],
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="py-20 bg-white scroll-mt-20" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-bold tracking-widest uppercase text-xs font-roboto">
            Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mt-3 mb-6">
            Strategic Objectives
          </h2>
          <p className="text-slate-600 text-lg font-roboto">
            INCLEN works to generate scientific evidence, train health researchers, and support policies that
            strengthen health systems and improve the wellbeing of populations, particularly in low- and
            middle-income countries.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((objective) => (
            <div
              key={objective.id}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {objective.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-brand-900 mb-4 font-roboto">
                {objective.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed mb-6 font-roboto">
                {objective.description}
              </p>

              {/* Items List */}
              <ul className="space-y-2 text-sm text-slate-600 font-roboto">
                {objective.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}