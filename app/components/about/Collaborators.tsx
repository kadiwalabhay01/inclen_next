'use client';

import { useState, useEffect } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Collaborator {
  name: string;
  location: string;
  initial: string;
}

type TabKey = 'national' | 'international';

interface CollaboratorsData {
  tabs: { key: TabKey; label: string }[];
  collaborators: Record<TabKey, Collaborator[]>;
}

// ─── Data Source ──────────────────────────────────────────────────────────────
//
//  ✅ NOW    → fetches from public/data/collaborators-data.json
//  🔜 FUTURE → swap this one line to your API URL:
//              const DATA_URL = 'https://your-api.com/api/collaborators';
//
const DATA_URL = '/data/collaborators-data.json';

// ─── Custom Hook ──────────────────────────────────────────────────────────────

function useCollaboratorsData() {
  const [data, setData] = useState<CollaboratorsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(DATA_URL);
        if (!res.ok) throw new Error(`Failed to fetch collaborators data (${res.status})`);
        const json: CollaboratorsData = await res.json();
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

// ─── CollaboratorCard ─────────────────────────────────────────────────────────

function CollaboratorCard({ item }: { item: Collaborator }) {
  return (
    <div
      className="group bg-slate-50 hover:bg-white p-6 sm:p-8 rounded-2xl
                 border border-transparent hover:border-slate-100 hover:shadow-xl
                 transition-all duration-300 text-center flex flex-col
                 items-center justify-center h-full"
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-white rounded-full shadow-sm
                   flex items-center justify-center mb-4 sm:mb-6
                   group-hover:scale-110 transition-transform ring-1 ring-slate-100"
      >
        <span className="font-serif font-bold text-base sm:text-lg text-slate-900">
          {item.initial}
        </span>
      </div>

      <h4
        className="font-bold text-slate-900 text-xs sm:text-sm leading-tight
                   group-hover:text-accent-500 transition-colors mb-2 font-roboto"
      >
        {item.name}
      </h4>

      <span
        className="inline-block px-2 py-0.5 bg-brand-100 text-brand-700 font-roboto
                   text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full"
      >
        {item.location}
      </span>
    </div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function GridSkeleton() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="rounded-2xl bg-slate-100 animate-pulse h-36" />
      ))}
    </div>
  );
}

// ─── Error State ──────────────────────────────────────────────────────────────

function ErrorState({ message }: { message: string }) {
  return (
    <div className="py-16 text-center">
      <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71
               c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898
               0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      </div>
      <p className="text-slate-500 text-sm">{message}</p>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function AcademicCollaborators() {
  const { data, loading, error } = useCollaboratorsData();
  const [activeTab, setActiveTab] = useState<TabKey>('international');

  const tabs = data?.tabs ?? [];

  const resolvedActiveTab: TabKey =
    tabs.some((t) => t.key === activeTab)
      ? activeTab
      : (tabs[0]?.key as TabKey) ?? 'international';

  const items = data?.collaborators?.[resolvedActiveTab] ?? [];

  return (
    <section
      id="collaborators"
      className="py-20 bg-white border-t border-slate-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-accent-500 font-bold tracking-widest uppercase text-xs font-roboto">
              Global Network
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
              Academic Collaborators
            </h2>
          </div>

          {/* Tab switcher — skeleton while loading */}
          <div className="flex justify-center md:justify-end">
            {loading ? (
              <div className="h-10 w-56 rounded-full bg-slate-100 animate-pulse" />
            ) : (
              <div
                role="tablist"
                aria-label="Collaborator regions"
                className="flex items-center gap-1 bg-slate-100 border border-slate-200
                           rounded-full p-1 overflow-x-auto
                           [scrollbar-width:none] [-ms-overflow-style:none]
                           [&::-webkit-scrollbar]:hidden"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    role="tab"
                    id={`collab-tab-${tab.key}`}
                    aria-selected={resolvedActiveTab === tab.key}
                    aria-controls={`collab-panel-${tab.key}`}
                    onClick={() => setActiveTab(tab.key)}
                    className={[
                      'whitespace-nowrap px-5 sm:px-6 py-2 rounded-full',
                      'text-[10px] sm:text-xs font-bold uppercase tracking-widest',
                      'transition-all duration-200 focus:outline-none font-roboto',
                      'focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-1',
                      resolvedActiveTab === tab.key
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800',
                    ].join(' ')}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Panels */}
        <div className="min-h-[220px]">
          {loading && <GridSkeleton />}
          {error && <ErrorState message={error} />}

          {!loading && !error && tabs.map((tab) => (
            <div
              key={tab.key}
              id={`collab-panel-${tab.key}`}
              role="tabpanel"
              aria-labelledby={`collab-tab-${tab.key}`}
              hidden={resolvedActiveTab !== tab.key}
            >
              {resolvedActiveTab === tab.key && (
                <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {items.map((item, idx) => (
                    <CollaboratorCard key={`${item.name}-${item.location}-${idx}`} item={item} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}