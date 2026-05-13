import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import publications from "@/data/publications.json";
import Image from "next/image";

interface Publication {
    id: string;
    title: string;
    slug?: string;
    year?: string;
    journal?: string;
    authors?: string;
    abstract?: string;
    suggested_citation?: string;
    cover_image?: string;
    pdf_url?: string;
    created_at?: string;
}

export default async function PublicationDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // Await params in Next.js 16
    const { id } = await params;

    const publication = (publications as Publication[]).find(
        (item) => item.id === id
    );

    if (!publication) {
        notFound();
    }

    const authorsArray = publication.authors
        ? publication.authors.split(",")
        : [];

    return (
        <main className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="border-b border-slate-100 bg-white py-6">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <Link href="/">Home</Link>

                        <span>•</span>

                        <Link href="/publications">Publications</Link>

                        <span>•</span>

                        <span className="line-clamp-1 max-w-50 text-slate-900">
                            {publication.title}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main */}
            <section className="py-20 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-16 lg:grid-cols-12">
                        {/* Content */}
                        <article className="lg:col-span-7">
                            <header className="mb-12">
                                <div className="mb-8 flex flex-wrap gap-3">
                                    <span className="rounded-full bg-slate-900 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                                        Publication
                                    </span>

                                    <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                        {publication.journal}
                                    </span>
                                </div>

                                <h1 className="mb-8 font-serif text-4xl font-bold leading-none tracking-tight text-slate-900 md:text-6xl">
                                    {publication.title}
                                </h1>
                            </header>

                            <div className="space-y-12">
                                {/* Abstract */}
                                <div>
                                    <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent-500">
                                        Abstract
                                    </h3>

                                    <p className="text-xl md:text-2xl font-light text-slate-600 leading-[1.35] italic border-l-4 border-slate-200 pl-6">
                                        “{publication.abstract}”
                                    </p>
                                </div>

                                {/* Authors */}
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div>
                                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent-500">
                                            Authors
                                        </h3>

                                        <ul className="space-y-2">
                                            {authorsArray.map((author, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-3 font-semibold text-slate-700"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-transparent"></span>

                                                    {author}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Date */}
                                    <div>
                                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent-500">
                                            Date
                                        </h3>

                                        <p className="font-serif text-lg font-bold text-slate-900">
                                            {new Date(
                                                publication.created_at || ""
                                            ).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/* Citation */}
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                                    <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                        Suggested Citation
                                    </h3>

                                    <p className="select-all font-mono text-sm leading-relaxed text-slate-600">
                                        {publication.suggested_citation}
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-5">
                            <div className="sticky top-32">
                                <div className="rounded-[40px] border border-slate-100 bg-white p-8 text-center shadow-2xl shadow-slate-200/50">
                                    {/* Image */}
                                    <div className="group relative mb-8 aspect-[1/1.4] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">

                                        {/* Thumbnail */}
                                        <Image
                                            src={
                                                publication.cover_image ||
                                                "/images/pdf-placeholder.jpg"}
                                            alt={publication.title}
                                            fill
                                            className="w-full h-full object-cover opacity-50 blur-sm group-hover:blur-0 group-hover:opacity-80 transition-all duration-700"
                                        />

                                        {/* Center Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl text-red-500 group-hover:scale-110 transition-transform">

                                                <svg
                                                    className="h-10 w-10"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H8z"
                                                    />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    {publication.pdf_url ? (
                                        <>
                                            <a
                                                href={publication.pdf_url}
                                                target="_blank"
                                                className="block w-full py-5 bg-brand-900 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-red-600 transition-colors shadow-xl shadow-brand-900/20 mb-4"
                                            >
                                                View PDF Document
                                            </a>

                                            <a
                                                href={publication.pdf_url}
                                                target="_blank"
                                                download
                                                className="block w-full py-5 bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-100 transition-colors">
                                                Download File
                                            </a>

                                            {/* Bottom Text */}
                                            <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                PDF • English • 2.4 MB
                                            </p>
                                        </>
                                    ) : (
                                        <div className="rounded-2xl bg-slate-100 py-5 text-xs font-bold uppercase tracking-widest text-slate-500">
                                            PDF Not Available
                                        </div>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}