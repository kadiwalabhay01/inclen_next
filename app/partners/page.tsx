import React from 'react'

const page = () => {
    return (
        <div className="bg-white min-h-screen">


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
                            Partners
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
        </div>
    )
}

export default page
