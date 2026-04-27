"use client";

import React from "react";

type Card = {
  title: string;
  description: string;
  linkText: string;
  href: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "SOMAARTH Sites",
    description:
      "Access longitudinal health data from our demographic surveillance sites. Essential for trend analysis.",
    linkText: "Explore Database",
    href: "#",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Inclen Tools",
    description:
      "Download our validated mobile tools for field diagnosis of childhood epilepsy and neuro-development.",
    linkText: "View Tools",
    href: "#",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Policy Impact",
    description:
      "Synthesized evidence notes for policymakers, covering key findings from our multi-centric studies.",
    linkText: "Read All Briefs",
    href: "#",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    ),
  },
];

const ResearchIntelligence = () => {
  return (
    <section className="py-24 bg-white" id="data">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-500 font-bold tracking-widest uppercase text-xs font-roboto">
            Open Access
          </span>
          <h2 className="text-48 font-serif font-bold text-brand-900 mt-3">
            Research Intelligence
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white border border-brand-100 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-roboto">
                {card.description}
              </p>

              {/* Link */}
              <a
                href={card.href}
                className="inline-flex items-center text-sm font-bold text-brand-600 group-hover:text-accent-500 transition-colors font-roboto"
              >
                {card.linkText}
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchIntelligence;