'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-brand-900 py-32 lg:py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background Texture/Image */}
      <div className="absolute inset-0 z-0">
        {/* Subtle World Map Background */}
        <Image
          src="/images/map_network.png"
          alt="World Map Network"
          fill
          className="object-cover opacity-20 mix-blend-soft-light scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-brand-900/90 to-brand-900"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight animate-[fadeInUp_1s_ease-out_0.2s_both] drop-shadow-2xl">
          Research for Healthier <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-100 to-brand-300">
            Communities
          </span>
        </h1>

        <div className="w-24 h-1 bg-accent-500 mx-auto mb-10 rounded-full animate-[widthGrow_1s_ease-out_0.5s_both]"></div>

        <p className="text-24 text-slate-200/90 mb-10 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both] font-roboto">
          A pioneering network of academic institutions translating rigorous evidence into{' '}
          <span className="text-white font-medium border-b-2 border-accent-500/30 pb-0.5 transition-colors hover:border-accent-500">
            life-saving policy
          </span>{' '}
          across the developing world.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1s_ease-out_0.6s_both]">
          <Link
            href="#who-we-are"
            className="group relative px-8 py-4 bg-white text-brand-900 text-14 font-roboto font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:bg-brand-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Discover Our Story
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>

      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <svg
          className="w-5 h-5 text-white"
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
      </div>
    </section>
  );
}