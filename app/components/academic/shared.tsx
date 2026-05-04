import React from "react";

// ─── Badge ────────────────────────────────────────────────────────────────────

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
    {children}
  </span>
);

// ─── SectionHeading ───────────────────────────────────────────────────────────

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 leading-snug">
    {children}
  </h2>
);

// ─── SubHeading ───────────────────────────────────────────────────────────────

export const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-slate-800 mb-3">{children}</h3>
);

// ─── Lead ─────────────────────────────────────────────────────────────────────

export const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-600 leading-relaxed mb-6">{children}</p>
);

// ─── Divider ──────────────────────────────────────────────────────────────────

export const Divider = () => <hr className="border-gray-100 my-8" />;

// ─── InfoCard ─────────────────────────────────────────────────────────────────

export const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
    <div className="text-blue-600 mt-0.5 shrink-0">{icon}</div>
    <div>
      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-slate-800 font-semibold text-sm">{value}</p>
    </div>
  </div>
);

// ─── CheckList ────────────────────────────────────────────────────────────────

export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        {item}
      </li>
    ))}
  </ul>
);

// ─── ClockIcon ────────────────────────────────────────────────────────────────

export const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// ─── ArrowRightIcon ───────────────────────────────────────────────────────────

export const ArrowRightIcon = ({ size = "w-4 h-4" }: { size?: string }) => (
  <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);