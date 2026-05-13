import { News } from '@/types/news';
import newsData from '@/data/news.json';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function NewsDetail({ params }: Props) {
    const { slug } = await params;
    const news: News[] = newsData;
    const article = news.find((n) => n.slug === slug);

    if (!article) {
        notFound();
    }

    // Format date (similar to dayjs)
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }).format(new Date(article.created_at));

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
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


                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight "
                            style={{ fontFamily: "'Lora', Georgia, serif" }}>
                            Latest News
                        </h1>

                        {/* Description */}
                        <p className="text-brand-100 text-lg md:text-xl font-roboto">
                            Demographic Development and Environmental Surveillance Site (DDESS)
                        </p>
                        <div className="inline-flex items-center gap-2 py-2 text-white/60 font-roboto rounded-full text-16 uppercase tracking-widest">
                            Surveillance • Synergy • Sustainability
                        </div>

                    </div>
                </div>
            </section>


            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Back Link */}
                <Link
                    href="/news"
                    className="inline-flex items-center text-sm text-brand-800 font-medium mb-8 hover:underline"
                >
                    ← Back to News
                </Link>

                <article className="bg-white rounded-3xl overflow-hidden">

                    {/* Top Section */}
                    <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">

                        {/* Left Image */}
                        <div className="relative overflow-hidden rounded-3xl">

                            {/* Badge */}
                            <div className="absolute top-5 left-5 z-10">
                                <span className="bg-brand-900 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                                    Breaking News
                                </span>
                            </div>

                            <Image
                                src={article.image}
                                alt={article.title}
                                width={1200}
                                height={800}
                                priority
                                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                            />

                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col h-full md:py-8 px-4">

                            {/* Title */}
                            <h1
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-none mb-6"
                                style={{ fontFamily: "'Lora', Georgia, serif" }}
                            >
                                {article.title}
                            </h1>

                            {/* Author */}
                            <div className="flex items-center gap-2 mb-6">

                                <span className="text-xl md:text-2xl xl:text-3xl text-gray-500">
                                    By -
                                </span>

                                <span className="text-xl md:text-2xl xl:text-3xl font-semibold text-gray-800">
                                    {article.author}
                                </span>

                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-sm text-gray-500">

                                <span className="text-xl md:text-2xl xl:text-3xl text-gray-500">Date - </span>

                                <span className="text-xl md:text-2xl xl:text-3xl font-semibold text-gray-800">
                                    {formattedDate}
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Full Width Content */}
                    <div className="mt-10 border-t border-gray-200">

                        <div
                            className="prose prose-lg max-w-none text-gray-700 leading-relaxed px-4 py-4"
                            dangerouslySetInnerHTML={{
                                __html: article.content,
                            }}
                        />

                    </div>

                </article>
            </div>
        </main>
    );
}