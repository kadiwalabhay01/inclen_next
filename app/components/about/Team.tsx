'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  role: string;
  designation: string;
  image?: string;
  bio: string;
}

type TabKey = 'board' | 'leadership' | 'research' | 'ethics' | 'scientific';

interface Tab {
  key: TabKey;
  label: string;
}

interface TeamData {
  tabs: Tab[];
  members: Record<TabKey, TeamMember[]>;
}

// ─── Data Source ──────────────────────────────────────────────────────────────
//
//  ✅ NOW  → fetches from public/data/team-data.json (static file)
//  🔜 FUTURE → just swap this one line to your API URL:
//              const DATA_URL = 'https://your-api.com/api/team';
//              The rest of the component stays exactly the same.
//
const DATA_URL = '/data/team-data.json';

// ─── Custom Hook: useTeamData ─────────────────────────────────────────────────

function useTeamData() {
  const [data, setData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(DATA_URL);
        if (!res.ok) throw new Error(`Failed to fetch team data (${res.status})`);

        const json: TeamData = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

// ─── Loading Skeleton ─────────────────────────────────────────────────────────

function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-slate-100 overflow-hidden animate-pulse">
      <div className="w-full aspect-[3/4] bg-slate-200" />
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)}
    </div>
  );
}

// ─── Error State ──────────────────────────────────────────────────────────────

function ErrorState({ message }: { message: string }) {
  return (
    <div className="py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71
               c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898
               0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      </div>
      <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
        Could not load team data
      </h3>
      <p className="text-slate-500 text-sm max-w-sm mx-auto">{message}</p>
    </div>
  );
}

// ─── MemberCard ───────────────────────────────────────────────────────────────

function MemberCard({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick: (m: TeamMember) => void;
}) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-slate-100
                 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
      role="button"
      tabIndex={0}
      aria-label={`View biography of ${member.name}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick(member)}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-200">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-600 to-accent-500">
            <span className="font-serif text-4xl text-emerald-100 select-none">
              {getInitials(member.name)}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-serif text-18 font-bold text-white leading-tight">
            {member.name}
          </h3>
          <p className="mt-1 text-10 font-bold font-roboto uppercase tracking-widest text-accent-500">
            {member.role}
          </p>
          <p className="mt-1 text-11 text-slate-300 leading-snug
                        hidden sm:block max-h-0 overflow-hidden opacity-0
                        transition-all duration-300
                        group-hover:max-h-16 group-hover:opacity-100 font-roboto">
            {member.designation}
          </p>
          <p className="mt-1 text-11 text-slate-300 leading-snug sm:hidden font-roboto">
            {member.designation}
          </p>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onClick(member); }}
          className="absolute bottom-6 right-3 cursor-pointer
                     w-8 h-8 rounded-full bg-white/20 hover:bg-white
                     flex items-center justify-center
                     text-white hover:text-brand-900 text-xl leading-none
                     opacity-0 translate-y-2
                     group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300 shadow-md
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          aria-label={`Open bio for ${member.name}`}
        >
          +
        </button>
      </div>
    </article>
  );
}

// ─── MemberModal ──────────────────────────────────────────────────────────────

function MemberModal({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = member ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [member]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    if (member) dialogRef.current?.focus();
  }, [member]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-member-name"
    >
      <div
        className="absolute inset-0 bg-slate-900/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto
                   bg-white rounded-2xl shadow-2xl outline-none">

        <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block z-10">
          <button
            onClick={onClose}
            className="rounded-full bg-white text-slate-400 hover:text-brand-600 cursor-pointer"
            aria-label="Close modal"   >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8">
          <div className="shrink-0 self-center sm:self-start
                          w-48 sm:w-1/3 rounded-xl overflow-hidden
                          aspect-[3/4] relative bg-slate-200 shadow-lg">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 144px, 176px"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-600 to-accent-500">
                <span className="font-serif text-4xl text-emerald-100">
                  {getInitials(member.name)}
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-700
                             text-[10px] font-bold uppercase tracking-widest mb-4 font-roboto">
              {member.role}
            </span>
            <h2
              id="modal-member-name"
              className="font-roboto text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-1"
            >
              {member.name}
            </h2>
            <p className="text-xs md:text-sm font-bold text-accent-500 uppercase tracking-wider mb-6">
              {member.designation}
            </p>
            <hr className="border-slate-200 mb-5" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-roboto">
              {member.bio}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex justify-end rounded-b-2xl">
          <button
            onClick={onClose}
            className="inline-flex w-full cursor-pointer justify-center rounded-full bg-brand-900 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg hover:bg-brand-800 transition-all sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function ResearchEmptyState() {
  return (
    <div className="py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-8 h-8 text-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0
               0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9
               m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125
               1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      </div>
      <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
        Research &amp; Implementation
      </h3>
      <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
        Our Research &amp; Implementation team focuses on bridging scientific discovery
        with practical health applications. Member details will be updated soon.
      </p>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Team() {
  const { data, loading, error } = useTeamData();
  const [activeTab, setActiveTab] = useState<TabKey>('board');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = useCallback((member: TeamMember) => setSelectedMember(member), []);
  const closeModal = useCallback(() => setSelectedMember(null), []);

  // Derive active tab — default to first tab key once data loads,
  // but only if current activeTab isn't already in the loaded tabs list.
  const resolvedActiveTab: TabKey =
    data?.tabs?.some((t) => t.key === activeTab)
      ? activeTab
      : (data?.tabs?.[0]?.key as TabKey) ?? 'board';

  const tabs = data?.tabs ?? [];
  const members = data?.members?.[resolvedActiveTab] ?? [];

  return (
    <section id="team" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-accent-500 font-bold tracking-widest uppercase text-xs font-roboto">
            Our People
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Governance &amp; Team
          </h2>
        </div>

        {/* Tab bar — shows skeleton while loading */}
        {loading ? (
          <div className="flex justify-center mb-12">
            <div className="h-11 w-96 rounded-full bg-slate-100 animate-pulse" />
          </div>
        ) : (
          <div className="flex justify-center mb-12 px-2">
            <div
              role="tablist"
              aria-label="Team categories"
              className="flex items-center gap-1 bg-slate-100 border border-slate-200
                         rounded-full p-1 sm:p-1.5 overflow-x-auto max-w-full
                         [scrollbar-width:none] [-ms-overflow-style:none]
                         [&::-webkit-scrollbar]:hidden font-roboto"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={resolvedActiveTab === tab.key}
                  aria-controls={`panel-${tab.key}`}
                  id={`tab-${tab.key}`}
                  onClick={() => setActiveTab(tab.key as TabKey)}
                  className={[
                    'whitespace-nowrap px-3 sm:px-5 md:px-7 py-2 sm:py-2.5 rounded-full cursor-pointer',
                    'text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest',
                    'transition-all duration-200 focus:outline-none',
                    'focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-1',
                    resolvedActiveTab === tab.key
                      ? 'bg-white text-slate-900 shadow-md'
                      : 'text-slate-500 hover:text-slate-800',
                  ].join(' ')}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Panels */}
        {loading && <GridSkeleton />}
        {error && <ErrorState message={error} />}

        {!loading && !error && tabs.map((tab) => (
          <div
            key={tab.key}
            id={`panel-${tab.key}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.key}`}
            hidden={resolvedActiveTab !== tab.key}
          >
            {resolvedActiveTab === tab.key && (
              members.length === 0
                ? <ResearchEmptyState />
                : (
                  <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {members.map((member) => (
                      <MemberCard key={member.name} member={member} onClick={openModal} />
                    ))}
                  </div>
                )
            )}
          </div>
        ))}
      </div>

      <MemberModal member={selectedMember} onClose={closeModal} />
    </section>
  );
}