"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import announcements from "@/data/announcements.json";

type Announcement = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  purpose: string;
  created_at: string;
};

export default function AnnouncementsPage() {
  // Future API compatible
  const allNews: Announcement[] = announcements;

  // Dynamic Categories
  const categories = useMemo(() => {
    const unique = ["All"];

    allNews.forEach((item) => {
      const category = item.purpose || "General";

      if (!unique.includes(category)) {
        unique.push(category);
      }
    });

    return unique;
  }, [allNews]);

  const [activeCategory, setActiveCategory] = useState("All");

  // Filtered News
  const filteredNews =
    activeCategory === "All"
      ? allNews
      : allNews.filter(
        (item) => (item.purpose || "General") === activeCategory
      );

  return (

    <main className="bg-gray-50 min-h-screen">
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
              Announcements
            </h1>

            {/* Description */}
            <p className="text-brand-100 text-lg md:text-xl font-roboto">
              Demographic Development and Environmental Surveillance Site (DDESS)
              <br />
            </p>

            <div className="inline-flex items-center gap-2 py-2 text-white/60 font-roboto rounded-full text-16 uppercase tracking-widest mb-6">
              Surveillance • Synergy • Sustainability
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 pb-4 mb-12 justify-start md:justify-center flex-nowrap md:flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-semibold border transition duration-300 cursor-pointer ${activeCategory === category
                ? "bg-brand-900 text-white border-brand-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500">
              No announcements available.
            </p>
          ) : (
            filteredNews.map((item) => {
              const cleanText = item.content
                ? item.content.replace(/(<([^>]+)>)/gi, "")
                : "";

              const shortText = cleanText.substring(0, 140);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative">
                    <div className="relative w-full h-64">
                      <Image
                        src={item.image || "/images/placeholder.jpg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <span className="absolute top-4 left-4 bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1 rounded-full shadow-sm uppercase tracking-wide">
                      {item.purpose || "General"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Date */}
                    <div className="flex items-center text-gray-500 text-sm font-medium mb-4">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3M16 7V3M7 11H17M5 21H19A2 2 0 0 0 21 19V7A2 2 0 0 0 19 5H5A2 2 0 0 0 3 7V19A2 2 0 0 0 5 21Z"
                        />
                      </svg>

                      {new Date(item.created_at).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base">
                      {shortText}...
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}