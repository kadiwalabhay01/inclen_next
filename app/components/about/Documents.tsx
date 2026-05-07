'use client';

import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Document {
  category: string;
  title: string;
  meta: string;
  size: string;
  href: string;
  iconColor: {
    bg: string;
    text: string;
    hoverBg: string;
  };
  icon: React.ReactNode;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const BarChartIcon = (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const GearIcon = (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const TrendIcon = (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const DownloadIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const DOCUMENTS: Document[] = [
  {
    category: 'Annual Report',
    title: 'INCLEN Report 2021-22',
    meta: 'Published: Mar 2022',
    size: 'PDF • 5.2 MB',
    href: '#',
    iconColor: {
      bg: 'bg-red-500/10',
      text: 'text-red-400',
      hoverBg: 'group-hover:bg-red-500',
    },
    icon: BarChartIcon,
  },
  {
    category: 'Technical Tool',
    title: 'INDT-NMI Manual',
    meta: 'Updated: Jan 2023',
    size: 'PDF • 2.4 MB',
    href: '#',
    iconColor: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      hoverBg: 'group-hover:bg-blue-500',
    },
    icon: GearIcon,
  },
  {
    category: 'Strategy',
    title: 'INCLEN Strategic Plan',
    meta: 'Period: 2021–2030',
    size: 'PDF • 1.8 MB',
    href: '#',
    iconColor: {
      bg: 'bg-accent-500/10',
      text: 'text-accent-500',
      hoverBg: 'group-hover:bg-accent-500',
    },
    icon: TrendIcon,
  },
];

// ─── DocumentCard ─────────────────────────────────────────────────────────────

function DocumentCard({ doc }: { doc: Document }) {
  const { iconColor } = doc;

  return (
    <Link
      href={doc.href}
      className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent-500/30
                 transition-all duration-300 flex flex-col backdrop-blur-sm relative overflow-hidden font-roboto">
      {/* Corner download icon — appears on hover */}
      <span
        className="absolute top-0 right-0 p-4 text-white
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        {DownloadIcon}
      </span>

      {/* Icon + meta */}
      <div className="flex items-start gap-4 mb-auto">
        <div
          className={[
            'p-3 rounded-xl shadow-inner transition-colors duration-300 shrink-0',
            iconColor.bg,
            iconColor.text,
            iconColor.hoverBg,
            'group-hover:text-white',
          ].join(' ')}
        >
          {doc.icon}
        </div>

        <div className="min-w-0">
          <span className="text-10 font-bold uppercase tracking-widest text-white/70 mb-1 block">
            {doc.category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug
                         group-hover:text-accent-500 transition-colors duration-300">
            {doc.title}
          </h3>
          <p className="text-xs text-white/60 mt-0.5">{doc.meta}</p>
        </div>
      </div>

      {/* Footer row */}
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center gap-2">
        <span className="text-xs font-mono text-white/50">{doc.size}</span>
        <span
          className="text-10 font-bold uppercase tracking-wider text-white
                     bg-white/10 px-3 py-1 rounded
                     group-hover:bg-accent-500 transition-colors duration-300
                     whitespace-nowrap"
        >
          Download
        </span>
      </div>
    </Link>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function DocumentLibrary() {
  return (
    <section
      id="documents"
      className="relative pt-20 bg-brand-900 overflow-hidden scroll-mt-20"
    >
      {/* Background Texture — using external pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
        aria-hidden="true"
      />

      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96
                   bg-accent-500 rounded-full mix-blend-multiply
                   filter blur-[128px] opacity-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96
                   bg-slate-500 rounded-full mix-blend-multiply
                   filter blur-[128px] opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-accent-500 font-bold tracking-widest uppercase text-xs font-roboto">
              Knowledge Hub
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
              Document Library
            </h2>
          </div>
          <p className="text-slate-300 max-w-sm text-sm leading-relaxed  font-roboto">
            Access our annual reports, technical tools, and strategic plans directly.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTS.map((doc) => (
            <DocumentCard key={doc.title} doc={doc} />
          ))}
        </div>

      </div>
    </section>
  );
}