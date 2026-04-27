"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
    "hero_data_collection.png",
    "hero_data_calibration.png",
    "hero_analysis_expert.png",
    "hero_data_visualization.png",
    "hero_policy_design.png",
    "hero_implementation.png",
];

export default function HeroSection() {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const totalSlides = slides.length;

        const moveSlide = (index: number, withTransition = true) => {
            if (!track) return;

            track.style.transition = withTransition
                ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
                : "none";

            track.style.transform = `translateX(-${index * 100}%)`;
        };

        const nextSlide = () => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrentIndex((prev) => prev + 1);
        };

        const interval = setInterval(nextSlide, 5000);

        return () => clearInterval(interval);
    }, [isTransitioning]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const totalSlides = slides.length;

        track.style.transition =
            "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        const handleTransitionEnd = () => {
            setIsTransitioning(false);

            if (currentIndex === totalSlides) {
                track.style.transition = "none";
                track.style.transform = `translateX(0%)`;
                setCurrentIndex(0);
            }
        };

        track.addEventListener("transitionend", handleTransitionEnd);

        return () =>
            track.removeEventListener("transitionend", handleTransitionEnd);
    }, [currentIndex]);

    return (
        <section className="bg-brand-50 relative overflow-hidden">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <div ref={trackRef} className="flex h-full w-full">
                    {[...slides, slides[0]].map((slide, index) => (
                        <img
                            key={index}
                            src={`/images/home/${slide}`}
                            className="w-full h-full object-cover flex-shrink-0"
                            alt="Hero"
                        />
                    ))}
                </div>


                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/40 to-transparent z-10"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-36">
                <div className="max-w-2xl">
                    <h1 className="text-4xl lg:text-6xl font-serif text-white font-bold leading-none mb-6">
                        Data for <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-amber-400">Healthier
                            Communities</span>
                    </h1>

                    <p className="text-20 text-gray-200 mb-8 font-roboto font-light">
                        We follow a rigorous data-to-policy process—collecting and calibrating data, enabling expert dialogue, translating insights through visual tools, and shaping evidence-based policies that deliver real impact for people
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="px-6 py-3 bg-white text-brand-900 font-bold rounded shadow hover:bg-gray-100 transition-colors font-roboto"
                        >
                            Read the Annual Report
                        </a>

                        <a
                            href="#"
                            className="px-6 py-3 border border-white text-white font-roboto font-medium rounded hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            View Key Data →
                        </a>
                    </div>
                </div>
            </div>

            {/* News Ticker */}
            <div className="absolute bottom-0 w-full bg-brand-900/80 backdrop-blur border-t border-white/10 py-4 hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-white text-sm">
                    <div className="flex items-center gap-8">
                        <span className="font-bold text-accent-500 uppercase tracking-wider text-xs font-roboto">
                            Latest Updates:
                        </span>

                        <a href="#" className="hover:text-accent-500 flex items-center gap-2 font-roboto">
                            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span>
                            New surveillance site operational in Mawphlang
                        </a>

                        <a href="#" className="hover:text-accent-500 flex items-center gap-2 font-roboto">
                            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span>
                            WHO partnership extended for 2026
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}