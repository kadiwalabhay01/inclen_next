// app/impact/page.tsx
import React from 'react';

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
}

const ImpactCard = ({ icon, title, description, iconColor, bgColor }: ImpactCardProps) => {
  const iconBg = {
    brand: 'bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white',
    blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
    purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
  }[iconColor] || 'bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white';

  const accentBg = {
    brand: 'bg-brand-50',
    green: 'bg-green-50',
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    red: 'bg-red-50',
  }[bgColor] || 'bg-brand-50';

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
      <div className={`absolute top-0 right-0 ${accentBg} w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500 z-0`} />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${iconBg}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function OurImpactPage() {
  return (
    <main className="bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-brand-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Impact
          </h1>
          <p className="text-brand-100 text-lg max-w-4xl leading-relaxed">
            The INCLEN Trust measures its impact through large-scale research surveillance, 
            policy translation, and the development of diagnostic tools that influence national health programs.
            <br /><br />
            Key Impact Areas: Global Research Network, SOMAARTH Surveillance Site, Diagnostic Innovation, 
            Policy & Program Evaluation, National Research Priority Setting, Vaccine Research & COVID-19 Response.
          </p>
        </div>
      </section>

      {/* Key Impact Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Impact Areas
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImpactCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="Global Research Network"
              description="Operates across 34 countries with 89 academic institutions and over 1,800 members, creating a massive platform for interdisciplinary public health research."
              iconColor="brand"
              bgColor="brand"
            />

            <ImpactCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
              title="SOMAARTH Surveillance"
              description="Established one of the world's largest surveillance sites in Palwal, Haryana, covering 51 villages and a population exceeding 200,000 to monitor environmental and health transitions."
              iconColor="blue"
              bgColor="green"
            />

            <ImpactCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
              title="Diagnostic Innovation"
              description="Developed the widely used INCLEN diagnostic tool for neurodevelopmental disorders, validated and modified by AIIMS for nationwide child health assessments."
              iconColor="blue"
              bgColor="blue"
            />

            <ImpactCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Policy & Program Evaluation"
              description="Conducted critical evaluations of India's Universal Immunization Program (UIP) and implemented research on managing neonatal sepsis and pneumonia to guide national health policy."
              iconColor="green"
              bgColor="green"
            />

            <ImpactCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
              title="National Priority Setting"
              description="Led a massive 'crowd-sourced' initiative involving over 2,000 experts and 250+ institutions to define public health research priorities for the Government of India."
              iconColor="purple"
              bgColor="purple"
            />

            <ImpactCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
              title="Vaccine & COVID-19"
              description="Actively managed clinical trials for COVID-19 vaccines (including heterologous prime-boost combinations) and sero-surveillance for Dengue and Chikungunya."
              iconColor="red"
              bgColor="red"
            />
          </div>
        </div>
      </section>

      {/* Strategic Pathways Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Bridging Evidence & Action
            </h2>
            <p className="text-lg text-gray-600">
              INCLEN Trust bridges the gap between scientific evidence and public health action through 
              two primary pathways: translating research into national policies and programs, and 
              converting findings into clinical practice.
            </p>
          </div>

          {/* Pathway 1: Research to Policy */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">
            <div className="lg:w-1/3">
              <div className="sticky top-24 p-8 bg-gradient-to-br from-brand-900 to-brand-700 rounded-3xl text-white shadow-xl">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <span className="text-3xl font-bold">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Research to Policy & Program</h3>
                <p className="text-brand-100 leading-relaxed mb-6">
                  INCLEN acts as a strategic technical partner to the Government of India, ensuring that data drives national health strategies.
                </p>
                <div className="h-1 w-full bg-gradient-to-r from-brand-500 to-transparent rounded-full" />
              </div>
            </div>

            <div className="lg:w-2/3 grid gap-6">
              {[
                {
                  title: "National Research Priority Setting (RPS)",
                  desc: "Collaborated with the Indian Council of Medical Research (ICMR) to lead a nationwide crowd-sourced exercise involving 2,000+ experts to define research priorities for maternal and child health through 2025."
                },
                {
                  title: "Immunization Policy",
                  desc: "Evaluated the Universal Immunization Program (UIP) and provided the evidence base for the rollout of the Rotavirus Vaccine and the Intensified Mission Indradhanush (IMI)."
                },
                {
                  title: "National Health Programs",
                  desc: "Actively assists the government in adopting strategies for the National Program for Prevention & Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCD)."
                },
                {
                  title: "Childhood Pneumonia & Sepsis",
                  desc: "Generated evidence to assist national governments in adopting context-sensitive strategies to reduce under-five mortality from pneumonia."
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-500 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pathway 2: Research to Practice */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="sticky top-24 p-8 bg-gradient-to-br from-accent-600 to-accent-500 rounded-3xl text-white shadow-xl">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <span className="text-3xl font-bold">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Research to Practice</h3>
                <p className="text-accent-100 leading-relaxed mb-6">
                  The organization develops &quot;actionable tools&quot; that empower frontline health workers and primary care physicians to apply complex research in everyday settings.
                </p>
                <div className="h-1 w-full bg-gradient-to-r from-yellow-300 to-transparent rounded-full" />
              </div>
            </div>

            <div className="lg:w-2/3 grid gap-6">
              {[
                {
                  title: "INCLEN Diagnostic Tools (INDT)",
                  desc: "Developed validated diagnostic instruments for neurodevelopmental disorders (e.g., ADHD, Neuromotor Impairments) that primary care physicians can use with minimal training."
                },
                {
                  title: "Community Interventions",
                  desc: "Translates research into practice at the SOMAARTH site by engaging ASHA workers and Panchayati officers in dialogues about high-risk pregnancies and heart attack symptoms."
                },
                {
                  title: "Knowledge Translation Units",
                  desc: "Established the International Institute of Global Health (IIGH) which houses a 'Policy Unit' dedicated to turning network-generated evidence into clinical care tools and practice guidelines."
                },
                {
                  title: "Diagnostic Validation",
                  desc: "Partnered with AIIMS to modify and validate INCLEN tools for a wider age range (1 month to 18 years), ensuring they are practical for diverse clinical settings."
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border-l-4 border-accent-500 hover:bg-white hover:shadow-lg transition-all">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-brand-100 mb-10 text-lg leading-relaxed">
            Partner with INCLEN to drive global health innovation and policy change. 
            Together, we can build a healthier future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-brand-900 bg-white hover:bg-gray-100 transition-colors shadow-lg"
            >
              Partner With Us
            </a>
            <a
              href="/our-work"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-bold rounded-lg text-white hover:bg-white hover:text-brand-900 transition-colors"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}