"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Research = {
    title: string;
    desc: string;
    img: string;
    tag: string;
    tagColor: string;
    meta: string;
};

const researchAreas: Research[] = [
    {
        title: "Mental Health Awareness",
        desc: "Promoting mental well-being in rural communities through counseling and support networks.",
        img: "/images/project_mental_health.png",
        tag: "Mental Health",
        tagColor: "bg-purple-600",
        meta: "Ongoing Study • Updated Oct 2025"
    },
    {
        title: "Community Safety & First Aid",
        desc: "Educating on prevention and immediate care for injuries and violence in remote areas.",
        img: "/images/project_injuries.png",
        tag: "Injuries & Violence",
        tagColor: "bg-orange-600",
        meta: "Field Report • Updated Nov 2025"
    },
    {
        title: "Combating Neonatal Mortality",
        desc: "Through the SOMAARTH cohort studies, we provide critical evidence on sepsis and early childhood development.",
        img: "/images/project_child_health.png",
        tag: "Child Health",
        tagColor: "bg-emerald-600",
        meta: "Ongoing Study • Updated Oct 2025"
    },
    {
        title: "Improving Quality of Care",
        desc: "Large-scale surveillance and anemia prevention programs (IRADA) focusing on maternal health outcomes.",
        img: "/images/project_maternal.png",
        tag: "Reproductive Health",
        tagColor: "bg-rose-600",
        meta: "Field Report • Updated Nov 2025"
    },
    {
        title: "Metabolic Health & DAPHNE",
        desc: "Exploring environmental factors, metabolic health, and lifestyle diseases in rapidly urbanizing populations.",
        img: "/images/project_diabetes.png",
        tag: "Diabetes & Metabolic",
        tagColor: "bg-sky-600",
        meta: "Research Paper • Published Dec 2025"
    }
];

export default function ResearchSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);

    // ✅ Responsive items
    useEffect(() => {
        const updateItems = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
            } else if (window.innerWidth >= 640) {
                setItemsToShow(2);
            } else {
                setItemsToShow(1);
            }
        };

        updateItems();
        window.addEventListener("resize", updateItems);

        return () => window.removeEventListener("resize", updateItems);
    }, []);

    // ✅ Get visible cards
    const visibleItems = Array.from({ length: itemsToShow }, (_, i) => {
        return researchAreas[(currentIndex + i) % researchAreas.length];
    });

    // ✅ Next button
    // ✅ Next (1 step only)
    const nextPage = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % researchAreas.length
        );
    };

    // ✅ Prev (1 step only)
    const prevPage = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + researchAreas.length) % researchAreas.length
        );
    };


    return (
        <section className="bg-gray-50 py-20 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-roboto">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Key Research Areas
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                    {visibleItems.map((item, index) => (
                        <article
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition group flex flex-col">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                <div
                                    className={`absolute top-4 left-4 ${item.tagColor} text-white text-[10px] font-bold uppercase px-2 py-1 rounded`}
                                >
                                    {item.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h4 className="text-20 font-merri font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition">
                                    {item.title}
                                </h4>

                                <p className="text-14 text-gray-600 mb-4 line-clamp-3 flex-grow font-roboto">
                                    {item.desc}
                                </p>

                                <div className="text-12 text-gray-400 mt-auto font-roboto font-semibold">
                                    {item.meta}
                                </div>
                            </div>
                            
                        </article>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-end gap-3 mt-8 ">
                    <button
                        onClick={prevPage}
                        className="text-gray-800 w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-brand-50 cursor-pointer transition active:scale-95"
                    >
                        ←
                    </button>

                    <button
                        onClick={nextPage}
                        className="text-gray-800 w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-brand-50 cursor-pointer transition active:scale-95"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
