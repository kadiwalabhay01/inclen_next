"use client";

import React from "react";

export default function ContactPage() {
    return (
        <main className="bg-slate-50/100">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-brand-900 pb-36 pt-24">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero_bg.png"
                        alt="Background"
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/70 to-brand-900/30"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6">
                    <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl">
                        Let&apos;s start a <br className="hidden md:block" />

                        <span className="bg-gradient-to-r from-accent-500 to-amber-400 bg-clip-text font-light italic text-transparent">
                            Conversation
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/70">
                        Connect with the INCLEN Executive Office. Whether it&apos;s data
                        access, institutional partnership, or global research
                        inquiries.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-6 pb-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

                    {/* Left Form */}
                    <div className="lg:col-span-8">
                        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50 md:p-12">

                            {/* Heading */}
                            <div className="mb-10">
                                <h2 className="font-serif text-3xl font-bold text-slate-900">
                                    Send a Message
                                </h2>

                                <div className="mt-3 h-1 w-12 bg-accent-500"></div>
                            </div>

                            {/* Form */}
                            <form className="space-y-8">

                                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">

                                    {/* Full Name */}
                                    <div className="group relative">
                                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-brand-600">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            className="w-full border-b-2 border-slate-100 bg-transparent pb-3 text-slate-800 outline-none transition-all placeholder:text-slate-300 focus:border-brand-600"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="group relative">
                                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-brand-600">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            className="w-full border-b-2 border-slate-100 bg-transparent pb-3 text-slate-800 outline-none transition-all placeholder:text-slate-300 focus:border-brand-600"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="group relative">
                                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-brand-600">
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="+91..."
                                            className="w-full border-b-2 border-slate-100 bg-transparent pb-3 text-slate-800 outline-none transition-all placeholder:text-slate-300 focus:border-brand-600"
                                        />
                                    </div>

                                    {/* Inquiry */}
                                    <div className="group relative">
                                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-brand-600">
                                            Inquiry Type
                                        </label>

                                        <select className="w-full cursor-pointer appearance-none border-b-2 border-slate-100 bg-transparent pb-3 text-slate-800 outline-none transition-all focus:border-brand-600">
                                            <option>Research Collaboration</option>
                                            <option>Data Access Request</option>
                                            <option>Technical Support</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="group relative">
                                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-brand-600">
                                        How can we help?
                                    </label>

                                    <textarea
                                        rows={4}
                                        placeholder="Describe your request..."
                                        className="w-full rounded-xl border-2 border-slate-100 bg-slate-50/50 px-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-300 focus:border-brand-600 focus:bg-white"
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="group inline-flex items-center justify-center rounded-full bg-brand-900 px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-white shadow-xl shadow-brand-900/20 transition-all hover:scale-105 hover:bg-brand-800 active:scale-95"
                                >
                                    Send Message

                                    <svg
                                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex h-full flex-col lg:col-span-4">

                        {/* Map Card */}
                        <div className="mb-6 flex-grow overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50">

                            {/* Map */}
                            <div className="mb-6 h-72 overflow-hidden rounded-2xl border border-slate-100 grayscale transition-all duration-500 hover:grayscale-0">
                                <iframe
                                    className="h-full w-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2977430684233!2d77.27870007533777!3d28.621289975664894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3547b463aa3%3A0xa5130e4dca8d1b22!2sF-1%2F5%2C%202nd%20Floor%2C%20Okhla%20Industrial%20Estate%20Phase%20I%2C%20Okhla%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1705236680246!5m2!1sen!2sin"
                                    loading="lazy"
                                ></iframe>
                            </div>

                            {/* Address */}
                            <div className="px-2">
                                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                                    Executive Office
                                </h4>

                                <p className="text-[13px] leading-relaxed text-slate-500">
                                    F-1/5, 2nd Floor, Okhla Industrial Area Phase - 1,
                                    New Delhi - 110020
                                </p>
                            </div>
                        </div>

                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                            {/* Email */}
                            <div className="group rounded-3xl bg-brand-900 p-6 text-white transition-colors hover:bg-brand-800">
                                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-transform group-hover:scale-110">

                                    <svg className="h-4 w-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>

                                <p className="text-[9px] font-bold uppercase tracking-widest text-white/50">
                                    Email Us
                                </p>

                                <p className="truncate text-[11px] font-medium">
                                    ieodelhi@inclentrust.org
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50 transition-colors hover:border-brand-200">

                                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-brand-50">

                                    <svg
                                        className="h-4 w-4 text-brand-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>

                                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                    Call Us
                                </p>

                                <p className="text-[11px] font-bold text-slate-900">
                                    +91-11-47730000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="relative overflow-hidden border-t border-slate-50 bg-white py-16">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="mb-6 font-serif text-3xl font-bold text-slate-900">
                        A Global Research Infrastructure
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-slate-500">
                        With 89 Clinical Epidemiology Units across 34 countries,
                        our network provides a unique platform for high-impact
                        multicentric studies.
                    </p>

                    <div className="flex flex-wrap justify-center gap-12 opacity-80">

                        <div className="text-center">
                            <span className="mb-1 block font-serif text-4xl font-bold text-brand-900">
                                34
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                Countries Connected
                            </span>
                        </div>

                        <div className="text-center">
                            <span className="mb-1 block font-serif text-4xl font-bold text-brand-900">
                                89
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                Partner Institutes
                            </span>
                        </div>

                        <div className="text-center">
                            <span className="mb-1 block font-serif text-4xl font-bold text-brand-900">
                                400k+
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                Population Monitored
                            </span>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}