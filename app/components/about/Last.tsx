"use client";

import Link from "next/link";

export default function JoinNetworkSection() {
  return (
    <section className="py-20 bg-brand-900 relative overflow-hidden text-center">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
          Join Our Global Network
        </h2>

        {/* Description */}
        <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto font-roboto">
          Collaborate with us to generate high-quality evidence and drive
          policy changes for a healthier world.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center font-roboto">
          <Link
            href="/contact"
            className="px-8 py-4 bg-accent-500 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/30"
          >
            Contact Us
          </Link>

          <Link
            href="/publications"
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-colors"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </section>
  );
}