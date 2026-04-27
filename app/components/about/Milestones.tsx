'use client';

import { useRef } from 'react';

interface Milestone {
  id: number;
  year: string;
  yearShort: string;
  title: string;
  description: string;
  tag: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    year: '1980',
    yearShort: '80',
    title: 'Foundation',
    description:
      'Established as a "Network of Networks" to build research capacity in the developing world, originally funded by the Rockefeller Foundation.',
    tag: 'The Beginning',
  },
  {
    id: 2,
    year: '1995',
    yearShort: '95',
    title: 'Global Expansion',
    description:
      'Expanded to 7 regional networks (INCLEN-Africa, INCLEN-Asia, INCLEN-Latin America), creating a truly global south-to-south collaboration platform.',
    tag: 'Scale Up',
  },
  {
    id: 3,
    year: '2009',
    yearShort: '09',
    title: 'SOMAARTH Launched',
    description:
      'Establishment of the Demographic, Development, and Environmental Surveillance Site (DDESS) in Palwal, Haryana, covering 200,000 lives.',
    tag: 'Infrastructure',
  },
  {
    id: 4,
    year: '2013',
    yearShort: '13',
    title: 'INDT-NMI Innovation',
    description:
      'Developed and validated the INCLEN Diagnostic Tool for Neuro-Developmental Disorders, setting a new standard for low-resource settings.',
    tag: 'Technology',
  },
  {
    id: 5,
    year: '2024',
    yearShort: '24',
    title: 'Future Focused',
    description:
      'Leading the charge on climate health, precision public health, and AI-driven epidemiological surveillance.',
    tag: 'Vision',
  },
];

export default function MilestonesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="py-20 bg-white relative overflow-hidden scroll-mt-20"
      id="milestones"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top-right -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent-500 font-bold tracking-widest uppercase text-xs font-roboto">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mt-3">
              Decades of Impact
            </h2>
            <p className="text-slate-500 mt-4 text-lg font-roboto">
              From a single idea in 1980 to a global force for health equity today.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-50 hover:text-brand-900 transition-colors"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="h-10 w-10 rounded-full bg-brand-900 flex items-center justify-center text-white shadow-lg hover:bg-brand-800 transition-colors"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto overflow-x-hidden pb-12 gap-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
        >
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className="min-w-[300px] md:min-w-[350px] snap-center"
            >
              <div className="relative group h-full">
                {/* Shadow/3D Effect */}
                <div className="absolute inset-0 bg-brand-900 rounded-2xl transform translate-y-2 translate-x-2 transition-transform group-hover:translate-y-4 group-hover:translate-x-4"></div>

                {/* Card */}
                <div className="relative bg-white border border-slate-200 p-8 rounded-2xl h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                  <div>
                    {/* Year Badge */}
                    <span className="text-6xl font-serif font-bold text-slate-100 absolute top-4 right-4 z-0">
                      {milestone.yearShort}
                    </span>

                    <div className="relative z-10">
                      <div className="text-accent-500 font-bold text-xl mb-2 font-roboto">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-brand-900 mb-4 font-serif">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm font-roboto">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-900 font-roboto">
                      {milestone.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}