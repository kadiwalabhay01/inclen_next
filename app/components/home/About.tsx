"use client";

import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT: IMAGE */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">

                            <Image
                                src="/images/village_women_health.png"
                                alt="Community Health"
                                width={800}
                                height={500}
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#032d4c]/70 to-transparent" />

                            {/* Quote */}
                            <div className="absolute bottom-8 left-8 text-white max-w-sm">
                                <p className="font-serif italic text-lg leading-relaxed">
                                    &quot;Global health solutions must be rooted in local realities.&quot;
                                </p>
                                <p className="text-12 mt-4 font-bold uppercase tracking-wider text-accent-500 font-roboto">
                                    — Established 1980
                                </p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-[#F7610C] hidden md:block">
                            <div className="text-4xl font-merri font-bold text-secondary">
                                4+
                            </div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                                Decades of <br /> Excellence
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: CONTENT */}
                    <div className="lg:w-1/2">
                        <span className="inline-block text-primary font-bold uppercase tracking-widest text-xs mb-4 font-roboto">
                            About INCLEN
                        </span>

                        <h2 className="text-48 font-merri font-bold text-secondary mb-6 leading-none">
                            Global Health Research{" "}
                            <span className="relative inline-block">
                                Organization
                                <span className="absolute bottom-1 left-0 w-full h-2 bg-accent-100 -z-10" />
                            </span>
                        </h2>

                        <div className="text-gray-600 mb-8 space-y-4 leading-normal text-16 font-roboto">
                            <p>
                                The INCLEN Trust International is a non-profit research organization driving collaborative, multi-disciplinary solutions to global health challenges. Its network spans 89 academic institutions across 34 countries, supported by Clinical Epidemiology Units and Research Training Centres.
                            </p>
                            <p>
                                Based in New Delhi, the INCLEN Executive Office (IEO) partners with 218+ institutions in India and works closely with national agencies including MoHFW and ICMR. INCLEN is recognized as a SIRO and holds FCRA approval.
                            </p>
                            <p>
                                In 2009, INCLEN launched SOMAARTH, a Demographic, Development and Environmental Surveillance Site in Palwal, Haryana, serving 51 villages and over 200,000 people, generating evidence to inform health and development policies.
                            </p>
                        </div>

                        {/* Logos */}
                        <div className="flex flex-col sm:flex-row gap-6">

                            {/* SOMAARTH */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/images/logos/Somaarth_logo (2).png"
                                    alt="SOMAARTH"
                                    width={100}
                                    height={50}
                                    className="h-12 w-auto object-contain"
                                />
                                <div className="font-roboto">
                                    <h4 className="font-bold text-brand-900 hover:text-orange-500 border-b-2 border-orange-200 hover:border-orange-500 transition-colors inline-block pb-1 cursor-pointer">
                                        SOMAARTH DDESS
                                    </h4>
                                    <p className="text-14 text-gray-500 mt-1">
                                        Demographic Development & Environmental Surveillance Site.
                                    </p>
                                </div>
                            </div>

                            {/* IIGH */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/images/logos/iigh-logo.png"
                                    alt="IIGH"
                                    width={100}
                                    height={50}
                                    className="h-12 w-auto object-contain"
                                />
                                <div className="font-roboto">
                                    <h4 className="font-bold text-brand-900 hover:text-orange-500 border-b-2 border-orange-200 hover:border-orange-500 transition-colors inline-block pb-1 cursor-pointer">
                                        IIGH
                                    </h4>
                                    <p className="text-14 text-gray-500 mt-1">
                                        Umbrella structure for fostering Research & Training to address global Health Challenges
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <a
                                href="#about"
                                className="text-brand-600 font-bold border-b-2 border-brand-200 hover:border-brand-600 pb-1 transition-colors"
                            >
                                Learn More About Our History →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}