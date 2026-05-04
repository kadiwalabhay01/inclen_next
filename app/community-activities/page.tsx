"use client";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Initiative {
    id: string;
    tag: string;
    tagStyle: "blue" | "amber";
    headline: string[];
    highlight: string;
    highlightColor: "blue" | "amber";
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageLeft: boolean;
    accent: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const INITIATIVES: Initiative[] = [
    {
        id: "clinics",
        tag: "Clinical Outreach",
        tagStyle: "blue",
        headline: ["Accessible Care via"],
        highlight: "INCLEN Clinics",
        highlightColor: "blue",
        description:
            "INCLEN operates clinics across multiple research sites such as in Palwal, Bareilly, and Mawphlang, providing accessible healthcare and supporting community-based clinical research.",
        imageSrc: "/images/community/clinics.png",
        imageAlt: "INCLEN Clinics",
        imageLeft: false,
        accent: (
            <div className="flex items-center gap-8">
                <div className="flex flex-col">
                    <span
                        className="text-5xl font-bold text-accent-500"
                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                    >
                        Global
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                        Standard Care
                    </span>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-[180px]">
                    Providing essential healthcare services at the heart of the community.
                </p>
            </div>
        ),
    },
    {
        id: "nikshay",
        tag: "Social Support",
        tagStyle: "amber",
        headline: ["Healing Communities:"],
        highlight: "Nikshay Mitra",
        highlightColor: "amber",
        description:
            "INCLEN is a Nikshay Mitra and provides nutritional support to TB patients at its research sites in Palwal, Bareilly, and Mawphlang, contributing to improved treatment adherence and patient well-being.",
        imageSrc: "/images/community/nikshay_mitra.png",
        imageAlt: "Nikshay Mitra",
        imageLeft: true,
        accent: (
            <div className="bg-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <div
                    className="text-4xl font-bold mb-2"
                    style={{ fontFamily: "'Lora', Georgia, serif" }}
                >
                    Nutritional Aid
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                    Supporting TB Patients with
                    <br />
                    Vital Food &amp; Medical Adherence
                </div>
            </div>
        ),
    },
    {
        id: "jansamvad",
        tag: "Community Dialogue",
        tagStyle: "blue",
        headline: ["Empowering People:"],
        highlight: "Jan Samvad",
        highlightColor: "blue",
        description:
            "INCLEN conducts community awareness programs to support the implementation of key national health initiatives such as immunization, RBSK (Rashtriya Bal Swasthya Karyakram), and tuberculosis control, empowering communities with knowledge and access.",
        imageSrc: "/images/community/jan_samvad.png",
        imageAlt: "Jan Samvad",
        imageLeft: false,
        accent: (
            <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div>
                    <span
                        className="text-3xl font-bold text-slate-900"
                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                    >
                        Knowledge
                    </span>
                    <p className="text-xs font-bold text-slate-500 uppercase mt-1">Impact Goal</p>
                </div>
                <div>
                    <span
                        className="text-3xl font-bold text-accent-500"
                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                    >
                        National
                    </span>
                    <p className="text-xs font-bold text-slate-500 uppercase mt-1">Focus Area</p>
                </div>
            </div>
        ),
    },
    {
        id: "blindness",
        tag: "Vision Care",
        tagStyle: "amber",
        headline: ["Restoring Sight:"],
        highlight: "Blindness Control",
        highlightColor: "amber",
        description:
            "Under the Government of India's National Programme for Control of Blindness, INCLEN organizes screening camps and facilitates the distribution of spectacles to elderly individuals in need, improving vision and quality of life.",
        imageSrc: "/images/community/blindness_programme.png",
        imageAlt: "Blindness Control Programme",
        imageLeft: true,
        accent: (
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-4 bg-blue-50 px-6 py-4 rounded-2xl border border-blue-100">
                    <span
                        className="text-3xl font-bold text-slate-900"
                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                    >
                        Vision
                    </span>
                    <div className="w-px h-8 bg-blue-200" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Focused Care
                    </span>
                </div>
                <div className="flex items-center gap-4 bg-[#feefe7] px-6 py-4 rounded-2xl border border-amber-100">
                    <span
                        className="text-3xl font-bold text-accent-500"
                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                    >
                        Impact
                    </span>
                    <div className="w-px h-8 bg-amber-200" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Restored Sight
                    </span>
                </div>
            </div>
        ),
    },
];

// ─── Utility ──────────────────────────────────────────────────────────────────

function cx(...cls: (string | boolean | undefined | null)[]): string {
    return cls.filter(Boolean).join(" ");
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="relative bg-brand-900 text-white py-22 px-6 overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 100 C 20 0 50 0 100 100 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto z-10 w-full">
                <div className="max-w-3xl">

                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-accent-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                        Outreach • Education • Prevention
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight "
                        style={{ fontFamily: "'Lora', Georgia, serif" }}>
                        Community Activities
                    </h1>

                    {/* Description */}
                    <p className="text-brand-100 text-lg md:text-xl leading-relaxed">
                        Strengthening Communities Through Care and Awareness
                        <br />
                        <span className="text-white/60 text-base font-sans mt-2 block">
                            Driving Impact via Outreach, Education, and Preventive Healthcare.
                        </span>
                    </p>

                </div>
            </div>
        </section>
    );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroSection() {
    return (
        <section className="relative pt-20 px-6 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/60 to-white pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <div className="relative w-full">
                        {/* Accent bar */}
                        <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-blue-600 to-transparent rounded-full hidden md:block opacity-40" />

                        <p
                            className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.3] md:leading-[1.2] tracking-tight text-center md:text-left"
                            style={{ fontFamily: "'Lora', Georgia, serif" }}
                        >
                            INCLEN is committed to{" "}
                            <span className="text-accent-500">improving public health</span> at
                            the grassroots level through meaningful community engagement.
                        </p>

                        <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-12 h-px bg-slate-200 hidden md:block shrink-0" />
                            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed text-center md:text-left">
                                By integrating research with outreach, we support national health
                                priorities while ensuring essential healthcare services reach
                                underserved populations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Initiative Card ──────────────────────────────────────────────────────────

function InitiativeSection({ initiative }: { initiative: Initiative }) {
    const { tag, tagStyle, headline, highlight, highlightColor, description, imageSrc, imageAlt, imageLeft, accent } =
        initiative;

    const textBlock = (
        <div className={cx("flex flex-col justify-center", imageLeft ? "order-2" : "order-2 lg:order-1")}>
            {/* Tag pill */}
            <div
                className={cx(
                    "inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-6 italic w-fit",
                    tagStyle === "blue"
                        ? "bg-blue-50 text-brand-600"
                        : "bg-[#feefe7] text-amber-700"
                )}
            >
                {tag}
            </div>

            {/* Headline */}
            <h2
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.1]"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
                {headline.map((line) => (
                    <span key={line}>
                        {line}
                        <br />
                    </span>
                ))}
                <span className={highlightColor === "blue" ? "text-brand-600" : "text-accent-500"}>
                    {highlight}
                </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">{description}</p>

            {accent}
        </div>
    );

    const imageBlock = (
        <div
            className={cx(
                "relative group mx-4",
                imageLeft ? "order-1" : "order-1 lg:order-2"
            )} >

            <div
                className={cx(
                    "absolute -inset-4 rounded-[2rem] transform group-hover:scale-105 transition-transform duration-500",
                    tagStyle === "blue" ? "bg-blue-500/5" : "bg-accent-500/5"
                )} />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder gradient when no image */}
                <div
                    className={cx(
                        "w-full h-[320px] min-[500px]:h-[360px] sm:h-[420px] flex items-center justify-center text-white/20 text-6xl font-bold select-none",
                        tagStyle === "blue"
                            ? "bg-gradient-to-br from-slate-800 to-blue-900"
                            : "bg-gradient-to-br from-slate-800 to-amber-900"
                    )}
                    style={{ fontFamily: "'Lora', Georgia, serif" }}
                >
                    {/* Replace with <Image> from next/image when real images are available */}
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-cover absolute inset-0"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                    />
                    {imageAlt[0]}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/50 to-transparent h-1/2 pointer-events-none" />
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {imageLeft ? (
                <>
                    {imageBlock}
                    {textBlock}
                </>
            ) : (
                <>
                    {textBlock}
                    {imageBlock}
                </>
            )}
        </div>
    );
}

// ─── Initiatives Section ──────────────────────────────────────────────────────

function InitiativesSection() {
    return (
        <section className="py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
                {INITIATIVES.map((initiative) => (
                    <InitiativeSection key={initiative.id} initiative={initiative} />
                ))}
            </div>
        </section>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CommunityActivitiesPage() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

            <main className="bg-white min-h-screen selection:bg-accent-500 selection:text-white">
                <HeroSection />
                <IntroSection />
                <InitiativesSection />
            </main>
        </>
    );
}