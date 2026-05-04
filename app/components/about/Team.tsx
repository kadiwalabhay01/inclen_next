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

// ─── Static Data ──────────────────────────────────────────────────────────────

const TABS: Tab[] = [
  { key: 'board', label: 'Board of Trustees' },
  { key: 'leadership', label: 'Leadership & Management' },
  { key: 'research', label: 'Research & Implementation' },
  { key: 'ethics', label: 'Ethics Committee' },
  { key: 'scientific', label: 'Scientific Advisory Group' },
];

const TEAM_DATA: Record<TabKey, TeamMember[]> = {
  board: [
    {
      name: 'Dr. Virander Singh Chauhan',
      role: 'Chairperson',
      designation: 'Emeritus Scientist, ICGEB & EC Chairman, NAAC',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Dr. Virander Singh Chauhan is a distinguished scientist serving as the Chairperson. He is an Emeritus Scientist at ICGEB, New Delhi, and EC Chairman of NAAC. He previously served as Chairman of the University Grants Commission (UGC) and Director of ICGEB. A Padma Shri awardee, his work focuses on vaccine development (Malaria), biological standards, and higher education reform. Qualification: PhD (Chemistry), Postdoc Fellow, Rhodes Scholar.',
    },
    {
      name: 'Dr. K. Srinath Reddy',
      role: 'Member',
      designation: 'Honorary Distinguished Professor, PHFI',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Dr. K. Srinath Reddy is a Padma Bhushan awardee and Honorary Distinguished Professor at the Public Health Foundation of India (PHFI). Formerly the President of PHFI and Head of Cardiology at AIIMS, he has also served as an Adjunct Professor at Harvard and Emory. He has chaired major health expert groups, including the High Level Expert Group on UHC. Specialisation: Non-communicable diseases and health policy. Qualification: MBBS, MD, MSc.',
    },
    {
      name: 'Mr. C. N. Raghupathi',
      role: 'Member',
      designation: 'Head, India Business, Infosys',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Mr. C. N. Raghupathi leads the India Business for Infosys. He is a member of the Standards Committee at the Bureau of Industrial Standards and a visiting faculty at various universities. He has made significant program and policy contributions through government committees on Energy & Sustainability. Specialisation: Information and Technology EPC, Energy & Utilities, and manufacturing. Qualification: BE, MSc.',
    },
    {
      name: 'Dr. Sanjay Madhav Mehendale',
      role: 'Member',
      designation: 'Director Research, Hinduja Hospital & Research',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Dr. Sanjay Madhav Mehendale is the Director of Research at Hinduja Hospital, Mumbai. His career includes roles as Additional Director General at ICMR and Director of the ICMR-National Institute of Epidemiology. He advises several government bodies, contributing to infectious disease epidemiology, HIV/AIDS research, and health systems. Specialisation: Infectious diseases, HIV/AIDS, and medical informatics. Qualification: MBBS, MD, MPH.',
    },
    {
      name: 'Dr. Anurag Agrawal',
      role: 'Member',
      designation: 'Dean, BioSciences and Health Research, Ashoka University',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Dr. Anurag Agrawal is the Dean of BioSciences and Health Research at Ashoka University. Formerly the Director of CSIR-IGIB, he is a leading expert in pulmonology and public health informatics. His research focuses on the pathobiological genesis of lung diseases and using AI and digital data for universal health coverage. Qualification: MBBS, MD, PhD.',
    },
    {
      name: 'Mr. Anil Wadhwa',
      role: 'Member',
      designation: 'Former Indian Ambassador & Secretary, MEA',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Mr. Anil Wadhwa is a distinguished former Indian diplomat and Secretary at the Ministry of External Affairs. He served as the Indian Ambassador to Italy, Thailand, Oman, and Poland, and represented India at numerous international summits. He leads the CII task force on Economic Strategy for the Indian government. Specialisation: Diplomacy and External Affairs. Qualification: MA.',
    },
  ],
  leadership: [
    {
      name: 'Dr. N.K. Arora',
      role: 'Executive Director',
      designation: "Steering INCLEN's global vision",
      image: '/images/dr_naresh_gupta.png',
      bio: "Dr. N.K. Arora is the Executive Director of INCLEN. A renowned leader in public health policy and implementation research, he steers the organization's global vision and strategic initiatives.",
    },
    {
      name: 'Dr. Manoj Kumar Das',
      role: 'Director (Projects)',
      designation: 'Leading large-scale clinical projects',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Dr. Manoj Kumar Das directs projects at INCLEN, leading large-scale clinical projects and fostering research excellence across the network. His expertise lies in clinical trials and public health interventions.',
    },
    {
      name: 'Amit Juneja',
      role: 'Finance & Administration',
      designation: 'Finance Lead',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Amit Juneja leads the Finance and Administration department, ensuring robust financial management and operational efficiency for the organization.',
    },
    {
      name: 'Gaurav Bansal',
      role: 'Info. Technology (IT)',
      designation: 'IT Lead',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Gaurav Bansal heads the Information Technology division, overseeing digital infrastructure, data security, and IT support systems.',
    },
    {
      name: 'Sunita Joti',
      role: 'Project Manager',
      designation: 'Project Management',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Sunita Joti serves as Project Manager, coordinating various research projects and ensuring timely delivery of milestones and objectives.',
    },
  ],
  research: [],
  ethics: [
    {
      name: 'Dr. Kusum Verma',
      role: 'Chairperson',
      designation: 'Basic Scientist/Medical Ethics Expert',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Sr. Consultant & Chairperson, Department of Cytopathology, Sir GangaRam Hospital, Old Rajinder Nagar, New Delhi. Email: kusumv1943@gmail.com',
    },
    {
      name: 'Dr. Jenifer Lobo',
      role: 'Member',
      designation: 'Clinician, Public Health Specialist',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Retired, Ex-Medical superintendent, Holy Family Hospital, Okhla Main Road, Jamia nagar, Delhi-110025. Email: drloboj@gmail.com',
    },
    {
      name: 'Dr. Nalin Mehta',
      role: 'Member',
      designation: 'Basic Scientist/Biomedical Ethics Expert',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Professor, Department of Physiology, All India Institute of Medical Sciences, Ansari Nagar, New Delhi-110029. Email: nalinaiims.mehta@gmail.com',
    },
    {
      name: 'Dr. Roli Mathur',
      role: 'Member',
      designation: 'Basic Scientist/Biomedical Ethics Expert',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Scientist E & Head, ICMR Bioethics Unit, National Center for Disease Informatics and Research, Nirmal Bhawan, Kannamangala, Bangalore-562 110. Email: rolimath@gmail.com',
    },
    {
      name: 'Dr. Naresh Gupta',
      role: 'Member',
      designation: 'Alternate Chairperson, Clinician',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Medical Consultant and Advisor for Hemophilia, Maulana Azad Medical College & LNJP Hospital, New Delhi-110002. Email: doctornaresh@gmail.com',
    },
  ],
  scientific: [
    {
      name: 'Dr Renu Swarup',
      role: 'External Member',
      designation: 'Former Secretary to Government of India',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Department of Biotechnology, Ministry of Science & Technology, Government of India. Address: CGO Complex, Lodhi Road, New Delhi - 110 003.',
    },
    {
      name: 'Prof. Naveet Wig',
      role: 'External Member',
      designation: 'Professor & Head, AIIMS',
      image: '/images/dr_naresh_gupta.png',
      bio: 'AIIMS, Ansari Nagar, New Delhi 110029 INDIA',
    },
    {
      name: 'Dr. R.M. Pandey',
      role: 'External Member',
      designation: 'Prof. in Charge, AIIMS',
      image: '/images/dr_naresh_gupta.png',
      bio: 'AIIMS, Ansari Nagar, New Delhi 110029 INDIA',
    },
    {
      name: 'Dr. Tavpritesh Sethi',
      role: 'External Member',
      designation: 'Associate Professor',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Institute of Information Technology, Okhla Industrial Estate, Phase-III, New Delhi - 110 020',
    },
    {
      name: 'Prof. Prashant Mathur',
      role: 'External Member',
      designation: 'Director, ICMR',
      image: '/images/dr_naresh_gupta.png',
      bio: 'Indian Council of Medical Research, Nirmal Bhawan-ICMR Complex (II Floor), Poojanahalli, Bengaluru – 562 110',
    },
  ],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
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
      className="group relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer
                 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={() => onClick(member)}
      role="button"
      tabIndex={0}
      aria-label={`View biography of ${member.name}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick(member)}
    >
      {/* Image — 3:4 aspect ratio */}
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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />

        {/* Info over image */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-serif text-18 font-bold text-white leading-tight">
            {member.name}
          </h3>
          <p className="mt-1 text-10 font-bold font-roboto uppercase tracking-widest text-accent-500">
            {member.role}
          </p>
          {/* Slides in on hover — desktop only */}
          <p className="mt-1 text-11 text-slate-300 leading-snug
                        hidden sm:block
                        max-h-0 overflow-hidden opacity-0
                        transition-all duration-300
                        group-hover:max-h-16 group-hover:opacity-100 font-roboto">
            {member.designation}
          </p>
          {/* Always visible on mobile */}
          <p className="mt-1 text-11 text-slate-300 leading-snug sm:hidden font-roboto">
            {member.designation}
          </p>
        </div>

        {/* Plus button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClick(member); }}
          className="absolute top-3 right-3
                     w-8 h-8 rounded-full bg-white/80 hover:bg-white 
                     flex items-center justify-center
                     text-accent-500 text-xl leading-none
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto
                   bg-white rounded-2xl shadow-2xl outline-none"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 
                     w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200
                     flex items-center justify-center text-slate-500 hover:text-slate-800
                     transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Body */}
        <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8">
          {/* Photo */}
          <div className="flex-shrink-0 self-center sm:self-start
                          w-36 sm:w-44 rounded-xl overflow-hidden
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

          {/* Content */}
          <div className="flex-1 min-w-0">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-accent-500
                             text-[10px] font-bold uppercase tracking-widest mb-4 font-roboto">
              {member.role}
            </span>
            <h2
              id="modal-member-name"
              className=" font-roboto text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-1"
            >
              {member.name}
            </h2>
            <p className="text-xs font-bold uppercase tracking-wider text-accent-500 mb-6 font-roboto">
              {member.designation}
            </p>
            <hr className="border-slate-200 mb-5" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-roboto">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex justify-end rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-700
                       text-white text-xs font-bold uppercase tracking-widest
                       transition-colors focus:outline-none focus-visible:ring-2
                       focus-visible:ring-offset-2 focus-visible:ring-slate-900"
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
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-8 h-8 text-slate-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0
               0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9
               m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125
               1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
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
  const [activeTab, setActiveTab] = useState<TabKey>('board');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = useCallback((member: TeamMember) => setSelectedMember(member), []);
  const closeModal = useCallback(() => setSelectedMember(null), []);

  const members = TEAM_DATA[activeTab];

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

        {/* Tab bar */}
        <div className="flex justify-center mb-12 px-2">
          <div
            role="tablist"
            aria-label="Team categories"
            className="flex items-center gap-1 bg-slate-100 border border-slate-200 
                       rounded-full p-1 sm:p-1.5 overflow-x-auto max-w-full
                       [scrollbar-width:none] [-ms-overflow-style:none]
                       [&::-webkit-scrollbar]:hidden font-roboto"
          >
            {TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-controls={`panel-${tab.key}`}
                id={`tab-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  'whitespace-nowrap px-3 sm:px-5 md:px-7 py-2 sm:py-2.5 rounded-full cursor-pointer',
                  'text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest',
                  'transition-all duration-200 focus:outline-none',
                  'focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-1',
                  activeTab === tab.key
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-500 hover:text-slate-800',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Panels */}
        {TABS.map((tab) => (
          <div
            key={tab.key}
            id={`panel-${tab.key}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.key}`}
            hidden={activeTab !== tab.key}
          >
            {activeTab === tab.key && (
              tab.key === 'research' && members.length === 0
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

      {/* Modal */}
      <MemberModal member={selectedMember} onClose={closeModal} />
    </section>
  );
}