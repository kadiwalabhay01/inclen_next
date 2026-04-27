"use client";

import React from "react";

type Partner = {
    name: string;
    img: string;
};

const partners: Partner[] = [
    { name: 'World Health Organization', img: '/images/collabortor_logo/who.webp' },
    { name: 'ICMR India', img: '/images/collabortor_logo/icmr_logo_new.webp' },
    { name: 'Public Health Foundation of India', img: '/images/collabortor_logo/phfi.webp' },
    { name: 'World Health Organization', img: '/images/collabortor_logo/who.webp' },
    { name: 'ICMR India', img: '/images/collabortor_logo/icmr_logo_new.webp' },
    { name: 'Public Health Foundation of India', img: '/images/collabortor_logo/phfi.webp' },
];

// ✅ triple for smooth infinite loop (same as PHP)
const displayPartners = [...partners, ...partners, ...partners];

const PartnersSpotlight = () => {
    return (
        <section
            className="py-16 bg-slate-50 relative overflow-hidden"
            id="partners"
        >
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand-100/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-accent-100/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-xl font-roboto">
                            Our Global Network
                        </div>

                        <h2 className="text-72 font-serif font-bold text-brand-900 mb-6 leading-[1.1]">
                            Strategic{" "}
                            <span className="relative inline-block">
                                Collaborators
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 300 20"
                                    fill="none"
                                >
                                    <path
                                        d="M5 15C50 5 150 5 295 15"
                                        stroke="#f7610c"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h2>
                    </div>

                    <p className="text-gray-500 max-w-sm text-lg leading-relaxed border-l-4 border-gray-200 pl-6 mb-2">
                        Empowering global healthcare through multi-disciplinary research
                        and high-impact partnerships.
                    </p>
                </div>
            </div>

            {/* Marquee */}
            <div className="relative py-2">
                {/* Blur edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

                <div className="overflow-hidden relative">
                    <div className="flex items-center gap-20 mt-4 sm:mt-10 md:mt-16 whitespace-nowrap animate-marquee">
                        {displayPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-auto h-24 flex items-center justify-center p-2"
                            >
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                    title={partner.name}
                                    className="max-w-full max-h-full object-contain transition-all duration-500 transform hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animation */}
            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default PartnersSpotlight;