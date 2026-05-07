import Image from "next/image";
import Link from "next/link";
import type { Fellowship } from "@/types/fellowship";

// ─── Data import (swap for API call later) ───────────────────────────────────
// To connect to the real API later, replace this import with:
//   const res = await fetch("https://inclen.oakyweb.com/admin/wp-json/internship/v1/all");
//   const json = await res.json();
//   const fellowships: Fellowship[] = json.data ?? json.fellowships ?? json;
import fellowshipsData from "@/data/fellowships.json";

// ─── Color palettes (cycled per card) ────────────────────────────────────────
const ICON_COLORS = [
  { bg: "bg-blue-50", text: "text-blue-600" },
  { bg: "bg-orange-50", text: "text-orange-600" },
  { bg: "bg-emerald-50", text: "text-emerald-600" },
  { bg: "bg-purple-50", text: "text-purple-600" },
  { bg: "bg-sky-50", text: "text-sky-600" },
  { bg: "bg-rose-50", text: "text-rose-600" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

// ─── Fellowship Card ──────────────────────────────────────────────────────────
function FellowshipCard({
  item,
  index,
}: {
  item: Fellowship;
  index: number;
}) {
  const iconColor = ICON_COLORS[index % ICON_COLORS.length];
  const num = String(index + 1).padStart(2, "0");

  const hasMeta = item.duration || item.who_apply;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">

        {/* Number badge / Image */}
        {item.image ? (
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-sm relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${iconColor.bg} ${iconColor.text} flex items-center justify-center shrink-0 text-xl font-bold font-serif`}
          >
            {num}
          </div>
        )}

        <div className="grow">
          {/* Title + Subtitle */}
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
            {item.title}
            {item.subtitle && (
              <span className="text-orange-500 text-lg font-sans font-normal block md:inline md:ml-2">
                ({item.subtitle})
              </span>
            )}
          </h3>

          {/* Short description */}
          {item.short_description && (
            <p className="text-slate-600 mb-6 leading-relaxed">
              {item.short_description}
            </p>
          )}

          {/* Meta grid: Duration + Who Should Apply */}
          {hasMeta && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {item.duration && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                    Duration
                  </h4>
                  <p className="text-slate-600">{item.duration}</p>
                </div>
              )}
              {item.who_apply && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                    Who Should Apply
                  </h4>
                  <p className="text-slate-600">{item.who_apply}</p>
                </div>
              )}
            </div>
          )}

          {/* Key Focus Areas / Description */}
          {item.description && (
            <div className="mb-6">
              <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-orange-500" />
                Key Focus Areas
              </h4>
              {/* Renders HTML from the API/JSON safely via dangerouslySetInnerHTML */}
              <div
                className="prose prose-sm max-w-none text-slate-600 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_li]:text-slate-600 [&_p]:mb-3"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FellowshipPage() {
  const fellowships = fellowshipsData as Fellowship[];

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden border-b border-slate-100">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-1/2 left-[-5%] w-[40rem] h-[40rem] bg-orange-500/5 rounded-full blur-[120px] -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <span className="w-8 md:w-12 h-1 md:h-1.5 bg-orange-500 rounded-full" />
              <nav className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-slate-900/60">
                Get Involved
              </nav>
              <span className="w-8 md:w-12 h-1 md:h-1.5 bg-orange-500 rounded-full" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 font-bold leading-[1.1] tracking-tighter mb-8 md:mb-10">
              Fellowship Opportunities
              <span className="block mt-2 text-orange-500 italic font-light">
                at IIGH / INCLEN
              </span>
            </h1>

            {/* Body */}
            <p className="text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              The INCLEN Institute of Global Health (IIGH) invites students and
              professionals from across the globe to undertake internships within
              its diverse global health research programs. These internships are
              designed to foster academic growth, career advancement, and
              personal development through hands-on engagement in real-world
              health research and policy initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* ── Fellowship Cards ───────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Section heading */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Types of Fellowships
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
            </div>

            {/* Cards */}
            {fellowships.length === 0 ? (
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl px-5 py-4 text-sm">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                  />
                </svg>
                <span>No fellowship data available at the moment. Please check back later.</span>
              </div>
            ) : (
              <div className="space-y-12">
                {fellowships.map((item, index) => (
                  <FellowshipCard key={item.id} item={item} index={index} />
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-slate-600 mb-6">
                Interested in making an impact? Join us to learn, grow, and
                contribute to global health.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
              >
                Apply Now via Contact Form
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}