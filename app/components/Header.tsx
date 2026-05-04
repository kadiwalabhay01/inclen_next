'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const BRAND   = '#c95714';   // hover / active link color
const CTA_BG  = '#F7610C';   // "Contact Us" button background



const NAV_ITEMS = [
 
  // ── ABOUT ──────────────────────────────────────────────────
  {
    label: 'About',
    href:  '/about',
    columns: [
      {
        heading: 'Organization',
        links: [
          { label: 'Who We Are',            href: '/about#who-we-are' },
          { label: 'Mission & Vision',       href: '/about#what-we-do' },
          { label: 'Global Presence',        href: '/about#presence' },
        ],
      },
      {
        heading: 'Leadership',
        links: [
          { label: 'Board of Trustees',      href: '/about#team' },
          { label: 'Our Journey',            href: '/about#milestones' },
          { label: 'Academic Collaborators', href: '/about#collaborators' },
        ],
      },
    ],
    // Side promo card (gray style)
    promo: {
      variant:     'gray' as const,           // 'gray' or 'brand'
      title:       'Empowering Global Health',
      description: 'Learn how INCLEN is working with global health stakeholders to drive meaningful change.',
      href:        '/about',
      ctaLabel:    'Read More',               // leave empty '' to hide button
      image:       'images/team_collaboration.png',
      imageAlt:    'Team collaboration',
    },
  },

  // ── OUR WORK ───────────────────────────────────────────────
  {
    label: 'Our Work',
    href:  '#',
    columns: [
      {
        heading: 'Focus Areas',
        links: [
          { label: 'Area of Work',           href: '#',                   desc: 'Explore our key focus areas and strategic impact domains.' },
          { label: 'Research Projects',      href: '#',           desc: 'Cutting-edge health research, synthesis and analysis.' },
        ],
      },
      {
        heading: 'Key Initiatives',
        links: [
          { label: 'Somarth Sites',          href: '/somarth-sites',      desc: 'Demographic Development & Environmental Surveillance.' },
          { label: 'Capacity Building',      href: '/capacity-building',  desc: 'Strengthening healthcare systems and leadership capabilities.' },
        ],
      },
      {
        heading: 'Outreach',
        links: [
          { label: 'Engagement & Advocacy',  href: '/engagement-advocacy', desc: 'Policy advocacy and multi-stakeholder engagement.' },
          { label: 'Community Activities',   href: '/community-activities', desc: 'Community activities and engagement.' },
        ],
      },
    ],
    // No promo / imageCard for this item
  },

  // ── OUR IMPACT ─────────────────────────────────────────────
  {
    label: 'Our Impact',
    href:  '/our-impact',
    columns: [
      {
        heading: 'Overview',
        links: [
          { label: 'Impact Summary',         href: '/our-impact' },
          { label: 'Statistics',             href: '/statistics' },
          { label: 'Partners',               href: '/partners' },
        ],
      },
      {
        heading: 'Achievements',
        links: [
          { label: 'Key Research Findings',  href: '/key-research-findings' },
          { label: 'Device Products',        href: '/device-products' },
          { label: 'Policy Influence',       href: '/policy-influence' },
        ],
      },
    ],
    // Side promo card (brand/blue style, with a CTA button)
    promo: {
      variant:     'brand' as const,
      title:       'Transforming Lives',
      description: 'See how our research translates into real-world health solutions.',
      href:        '/our-impact',
      ctaLabel:    'Explore Impact',
      image:       'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg',
      imageAlt:    'Health impact',
    },
  },

  // ── CAREERS ────────────────────────────────────────────────
  {
    label: 'Careers',
    href:  '/careers',
    columns: [
      {
        heading: 'Opportunities',
        links: [
          { label: 'Current Openings',       href: '/careers' },
          { label: 'Fellowships',            href: '/fellowship' },
          { label: 'Internships',            href: '/internships' },
        ],
      },
    ],
    // Wide image banner (spans 3 columns next to the links column)
    heroBanner: {
      image:       'images/hero_village_data.png',
      title:       'Shape the Future of Health',
      description: 'Join a team of dedicated professionals working towards global health equity.',
      ctaLabel:    'View All Openings',
      ctaHref:     '/careers',
    },
  },

  // ── GET INVOLVED ───────────────────────────────────────────
  {
    label: 'Get Involved',
    href:  '#',
    columns: [
      {
        heading: 'Academic & Research Calls',
        links: [
          { label: 'Academic Association',   href: '/academic-association', desc: 'Join our global network of academic professionals and researchers.' },
          { label: 'Research Partnership',   href: '/partnership',          desc: 'Collaborate with INCLEN on groundbreaking health studies.' },
        ],
      },
      {
        heading: 'Strategic Partnerships',
        links: [
          { label: 'Industry Partnership',   href: '/industry-partnership', desc: 'Strategic alliances for healthcare innovation and delivery.' },
          { label: 'Community Services',     href: '/community-services',   desc: 'Programs dedicated to community health and support.' },
        ],
      },
    ],
  },

  // ── INSIGHTS ───────────────────────────────────────────────
  {
    label: 'Insights',
    href:  '#',
    columns: [
      {
        heading: 'Updates',
        links: [
          { label: 'News',                   href: '/news',          desc: 'Latest updates and press releases from INCLEN.' },
          { label: 'Events',                 href: '/events',        desc: 'Upcoming conferences, workshops, and webinars.' },
        ],
      },
      {
        heading: 'Media',
        links: [
          { label: 'Announcements',          href: '/announcements', desc: 'Official notifications and public notices.' },
          { label: 'Headlines',              href: '/headlines',     desc: 'INCLEN in the news and media features.' },
        ],
      },
    ],
  },

  // ── RESOURCES ──────────────────────────────────────────────
  {
    label: 'Resources',
    href:  '#',
    columns: [
      {
        heading: 'Publications',
        links: [
          { label: 'All Publications',       href: '/publications' },
          { label: 'Annual Reports',         href: '/annual-reports' },
          { label: 'Newsletters',            href: '/newsletters' },
        ],
      },
      {
        heading: 'Tools & Data',
        links: [
          { label: 'Data Repository',        href: '/data-repository' },
          { label: 'Research Tools',         href: '/research-tools' },
          { label: 'Training Materials',     href: '/training-materials' },
        ],
      },
    ],
    // Full image card on the right (no button, just image + text overlay)
    imageCard: {
      image:       'images/publication_hero.jpg',
      title:       'Knowledge Hub',
      description: 'Access our extensive library of research and resources.',
    },
  },

];

// ================================================================
// TYPE — derived from the data above (no need to edit this)
// ================================================================
type NavItem = typeof NAV_ITEMS[0];

// ================================================================
// SMALL HELPER: Animated chevron arrow
// ================================================================
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className="w-3.5 h-3.5 ml-1 flex-shrink-0 transition-transform duration-200"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ================================================================
// LOGO — change src to your image path
// ================================================================
function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick}>
      <img
        src="/inclen_new.png"
        alt="INCLEN Trust"
        className="h-16 w-auto object-contain"
      />
    </Link>
  );
}

// ================================================================
// DROPDOWN CONTENT
// Renders: columns + optional promo card / image card / hero banner
// ================================================================
function DropdownContent({ item }: { item: NavItem }) {

  // ── Layout with HERO BANNER (Careers style) ──
  // Left: 1 column of links | Right: wide image banner
  if ('heroBanner' in item && item.heroBanner) {
    const banner = item.heroBanner;
    return (
      <div className="grid grid-cols-4 gap-8">

        {/* Left: links column */}
        <div className="col-span-1">
          {item.columns[0] && (
            <>
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 pb-2 border-b border-gray-100">
                {item.columns[0].heading}
              </p>
              <div className="space-y-3">
                {item.columns[0].links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm font-semibold text-gray-800 transition-colors hover:text-[--brand]"
                    style={{ '--brand': BRAND } as React.CSSProperties}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: hero image banner */}
        <div className="col-span-3">
          <div className="relative rounded-xl overflow-hidden h-36">
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gray-800/65" />
            {/* Text on top of image */}
            <div className="relative z-10 flex flex-col justify-center h-full px-7">
              <h4 className="text-white font-bold text-lg mb-1">{banner.title}</h4>
              <p className="text-white/75 text-xs mb-3 max-w-sm">{banner.description}</p>
              <Link
                href={banner.ctaHref}
                className="text-white text-xs font-bold underline hover:text-blue-300 w-fit"
              >
                {banner.ctaLabel}
              </Link>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // ── Layout with PROMO CARD or IMAGE CARD on the right ──
  const hasRightPanel = ('promo' in item && item.promo) || ('imageCard' in item && item.imageCard);

  // How many columns for the links section
  const linkColsClass =
    item.columns.length === 1 ? 'col-span-2 grid grid-cols-1' :
    item.columns.length === 2 ? 'col-span-2 grid grid-cols-2' :
    'col-span-3 grid grid-cols-3';                                   // 3 columns → takes 3/4 width

  return (
    <div className={`grid gap-8 ${hasRightPanel ? 'grid-cols-4' : 'grid-cols-' + item.columns.length}`}>

      {/* Left: link columns */}
      <div className={`${linkColsClass} gap-8`}>
        {item.columns.map((col) => (
          <div key={col.heading}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 pb-2 border-b border-gray-100">
              {col.heading}
            </p>
            <div className="space-y-3">
              {col.links.map((link) => (
                <Link key={link.label} href={link.href} className="block group">
                  <span
                    className="text-sm font-semibold text-gray-800 transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.color = BRAND)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  >
                    {link.label}
                  </span>
                  {'desc' in link && link.desc && (
                    <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right: PROMO CARD */}
      {'promo' in item && item.promo && (
        <div className="col-span-2">
          <PromoCard promo={item.promo} />
        </div>
      )}

      {/* Right: IMAGE CARD */}
      {'imageCard' in item && item.imageCard && (
        <div className="col-span-2">
          <ImageCard card={item.imageCard} />
        </div>
      )}

    </div>
  );
}

function PromoCard({ promo }: { promo: NonNullable<(typeof NAV_ITEMS[0] & { promo?: unknown })['promo']> }) {
  const isBrand = promo.variant === 'brand';

  return (
    <div className={`rounded-xl p-5 flex items-start gap-4 border h-full ${
      isBrand ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-200'
    }`}>

      {/* Text side */}
      <div className="flex-1 min-w-0">
        <h4 className={`font-bold text-sm mb-1 ${isBrand ? 'text-blue-900' : 'text-gray-900'}`}>
          {promo.title}
        </h4>
        <p className={`text-xs mb-4 leading-relaxed ${isBrand ? 'text-blue-700/80' : 'text-gray-500'}`}>
          {promo.description}
        </p>
        {promo.ctaLabel && (
          isBrand ? (
            // Brand variant: solid button
            <Link
              href={promo.href}
              className="inline-block text-white text-xs font-bold px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              {promo.ctaLabel}
            </Link>
          ) : (
            // Gray variant: text link
            <Link
              href={promo.href}
              className="text-xs font-bold transition-colors"
              style={{ color: BRAND }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {promo.ctaLabel} →
            </Link>
          )
        )}
      </div>

      {/* Image side */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={promo.image}
          alt={promo.imageAlt || ''}
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}

// ================================================================
// IMAGE CARD — full image with text overlay at the bottom
// Used in: Resources
// ================================================================
function ImageCard({ card }: { card: NonNullable<(typeof NAV_ITEMS[0] & { imageCard?: unknown })['imageCard']> }) {
  return (
    <div className="relative rounded-xl overflow-hidden h-full min-h-[140px] group">
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h4 className="text-white font-bold text-sm mb-1">{card.title}</h4>
        <p className="text-white/75 text-xs">{card.description}</p>
      </div>
    </div>
  );
}

// ================================================================
// MAIN HEADER
// ================================================================
export default function Header() {

  // Which desktop dropdown is currently open (stores the nav label e.g. "About")
  const [openMenu, setOpenMenu]     = useState<string | null>(null);

  // Is the mobile side drawer open?
  const [mobileOpen, setMobileOpen] = useState(false);

  // Which mobile accordion sections are expanded
  const [openMobile, setOpenMobile] = useState<Record<string, boolean>>({});

  // Timer used to delay closing the dropdown (prevents flicker when cursor moves between nav and panel)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Hover handlers ──
  function showMenu(label: string) {
    if (timer.current) clearTimeout(timer.current);
    setOpenMenu(label);
  }
  function startHideTimer() {
    timer.current = setTimeout(() => setOpenMenu(null), 200);
  }
  function cancelHideTimer() {
    if (timer.current) clearTimeout(timer.current);
  }

  // ── Mobile accordion ──
  function toggleSection(label: string) {
    setOpenMobile((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  const activeItem = NAV_ITEMS.find((n) => n.label === openMenu);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

      {/* ── TOP BAR ── */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-24">

        <Logo />

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden lg:flex items-center h-full gap-0.5">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="h-full flex items-center"
              onMouseEnter={() => showMenu(item.label)}
              onMouseLeave={startHideTimer}
            >
              <Link
                href={item.href}
                className="flex items-center text-14 font-semibold font-roboto px-2 xl:px-3 py-2 transition-colors text-gray-700"
                style={{ color: openMenu === item.label ? BRAND : undefined }}
              >
                {item.label}
                <Chevron open={openMenu === item.label} />
              </Link>
            </div>
          ))}

          <Link
            href="/contact"
            className="xl:ml-3 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white opacity-90 hover:opacity-100 transition-opacity"
            style={{ backgroundColor: CTA_BG }}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded text-gray-500 hover:bg-gray-100"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      {/* ── DESKTOP DROPDOWN ── */}

      {/*
        Invisible bridge: fills the pixel gap between the header bottom edge and the
        dropdown panel so the cursor doesn't briefly "leave" and close the menu.
      */}
      <div
        className="hidden lg:block absolute left-0 w-full z-40"
        style={{ top: '80px', height: '6px' }}
        onMouseEnter={cancelHideTimer}
        onMouseLeave={startHideTimer}
      />

      {/* Dropdown panel */}
      <div
        className="hidden lg:block absolute left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-40"
        style={{
          top:           '',
          opacity:       activeItem ? 1 : 0,
          transform:     activeItem ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: activeItem ? 'auto' : 'none',
          transition:    'opacity 0.18s ease, transform 0.18s ease',
        }}
        onMouseEnter={cancelHideTimer}
        onMouseLeave={startHideTimer}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          {activeItem && <DropdownContent item={activeItem} />}
        </div>
      </div>

      {/* ── MOBILE BACKDROP ── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── MOBILE DRAWER ── */}
      <div
        className="lg:hidden fixed right-0 top-0 h-full w-full sm:w-[360px] bg-white shadow-2xl z-50 overflow-y-auto"
        style={{
          transform:  mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Drawer header: logo + X button */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <Logo onClick={() => setMobileOpen(false)} />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded text-gray-400 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <div className="px-3 py-3 space-y-0.5">

          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Home
          </Link>

          {NAV_ITEMS.map((item) => (
            <div key={item.label}>

              {/* Section toggle */}
              <button
                onClick={() => toggleSection(item.label)}
                className="w-full flex justify-between items-center px-3 py-2.5 rounded text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                <span>{item.label}</span>
                <Chevron open={!!openMobile[item.label]} />
              </button>

              {/* Expanded sub-links */}
              {openMobile[item.label] && (
                <div className="pl-4 pb-1 space-y-0.5">
                  {item.columns.map((col) => (
                    <div key={col.heading} className="">
                     
                      {col.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-1.5 rounded text-sm text-gray-600 hover:bg-gray-50"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 mx-3 px-3 py-2.5 rounded text-center text-sm font-bold text-white"
            style={{ backgroundColor: CTA_BG }}
          >
            Contact Us
          </Link>

        </div>
      </div>

    </header>
  );
}