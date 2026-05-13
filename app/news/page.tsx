import { News } from '@/types/news';
import newsData from '@/data/news.json';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
    const news: News[] = newsData;

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
                            News & Updates
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

            {/* News Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                    Latest News
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => {
                        const shortText = item.content
                            .replace(/(<([^>]+)>)/gi, "")
                            .substring(0, 140);

                        return (
                            <Link
                                key={item.id}
                                href={`/news/${item.slug}`}
                                className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden transform hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-brand-800 transition">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {shortText}...
                                    </p>

                                    <div className="mt-6 h-1 w-12 bg-brand-800 group-hover:w-20 transition-all duration-300 rounded-full" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}