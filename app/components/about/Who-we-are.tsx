'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAreSection() {
  return (
    <section
      className="py-20 bg-white overflow-hidden scroll-mt-20"
      id="who-we-are"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: Typography & Story */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[2px] bg-accent-500"></span>
              <span className="text-accent-500 font-bold font-roboto tracking-widest uppercase text-xs">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-[1.1]">
              A Global Network Acting for <br />
              <span className="text-brand-900 decoration-accent-200 leading-[1.1] underline decoration-4 underline-offset-4">
                Healthier Communities
              </span>
            </h2>

            <div className="prose prose-lg text-slate-600 space-y-6 font-roboto">
              <p>
                The <strong className="text-slate-900">INCLEN Trust International</strong> bridges the critical gap
                between academic research and public health implementation. We operate not as a distant entity,
                but as a deeply embedded network of local experts.
              </p>
              <p>
                Our power lies in our decentralized structure:{' '}
                <strong className="text-slate-900">
                  Clinical Epidemiology Units (CEUs)
                </strong>{' '}
                and{' '}
                <strong className="text-slate-900">
                  Research Training Centres (CERTCs)
                </strong>{' '}
                located within 89 premier academic institutions across 34
                countries. This ensures that our evidence is not just scientifically rigorous, but locally
                relevant and actionable.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="#milestones"
                className="inline-flex items-center gap-2 text-brand-900 border-b-2 border-accent-500 pb-1 font-bold font-roboto text-sm tracking-widest uppercase hover:text-accent-500 transition-colors"
              >
                Explore Our Journey
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl shadow-slate-200">
              <div className="relative w-full h-96 md:h-[380px]">
                <Image
                  src="/images/about.avif"
                  alt="Team collaboration"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-brand-900 text-white p-6 md:p-8 max-w-[280px] md:max-w-xs shadow-2xl z-20">
              <p className="italic text-base md:text-lg leading-relaxed opacity-100 font-merriweather">
                &ldquo;From local insights to global policy, we build the evidence base for a healthier world.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs font-bold font-roboto uppercase tracking-widest text-accent-400">
                Since 1980
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-slate-100 -z-0 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}