import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import researchData from "@/data/research.json";
import { ResearchProject } from "@/types/research";

const projects: ResearchProject[] = researchData as ResearchProject[];

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}


// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | INCLEN Trust`,
    description: project.summary.slice(0, 160),
  };
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const metaFields = [
    { label: "Principal Investigator", value: project.pi },
    { label: "Funder", value: project.funder },
    { label: "Study Period", value: project.period },
    { label: "Study Sites", value: project.sites },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <Link
              href="/research"
              className="hover:text-slate-900 transition-colors"
            >
              Research Projects
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-slate-900 line-clamp-1 max-w-50">
              {project.title}
            </span>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Details */}
            <article className="lg:col-span-12">
              <header className="mb-12">
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl shadow-slate-900/10">
                    Research Project
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                  {project.title}
                </h1>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Left: Content */}
                <div className="lg:col-span-8">
                  <div className="space-y-12">
                    {/* Key Information Grid */}
                    <div className="grid md:grid-cols-2 gap-8 py-8 border-y border-slate-100">
                      {metaFields.map(
                        (field) =>
                          field.value && (
                            <div key={field.label}>
                              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                {field.label}
                              </h3>
                              <p className="text-lg font-serif text-slate-900 font-bold">
                                {field.value}
                              </p>
                            </div>
                          )
                      )}
                    </div>

                    {/* Summary */}
                    {project.summary && (
                      <div className="prose prose-slate max-w-none">
                        <h3 className="text-xs font-bold text-accent-500 uppercase tracking-widest mb-6">
                          Summary
                        </h3>
                        <div className="text-slate-600 leading-relaxed space-y-6 text-lg font-light whitespace-pre-line">
                          {project.summary}
                        </div>

                        {/* Share Section */}
                        <div className="pt-12 mt-12 border-t border-slate-100">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div>
                              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                Spread the knowledge
                              </h4>
                              <p className="text-lg font-serif font-bold text-slate-900">
                                Share this Research
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              {/* Twitter/X */}
                              <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300"
                                aria-label="Share on Twitter"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                              </a>
                              {/* LinkedIn */}
                              <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourdomain.com/research/${project.id}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                                aria-label="Share on LinkedIn"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.23 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.41v1.56h.05c.47-.9 1.63-1.84 3.36-1.84 3.59 0 4.26 2.36 4.26 5.43v6.3z" />
                                </svg>
                              </a>
                              {/* WhatsApp */}
                              <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(project.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white transition-all duration-300"
                                aria-label="Share on WhatsApp"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                              </a>

                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Sidebar: Visual + Download */}
                <aside className="lg:col-span-4">
                  <div className="sticky top-32 space-y-8">
                    <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-2xl shadow-slate-200/50">
                      {/* Thumbnail */}
                      <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-lg mb-8 relative">
                        <Image
                          src={
                            project.thumbnail ||
                            "/images/research-placeholder.jpg"
                          }
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Download Button */}
                      {project.pdf_url && project.pdf_url !== "#" && (
                        <>
                          <a
                            href={project.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full py-5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-sky-600 transition-all duration-300 shadow-xl shadow-slate-900/20 items-center justify-center gap-3 group"
                          >
                            <svg
                              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download Project PDF
                          </a>
                          <p className="mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
                            PDF • Project Summary • 1.2 MB
                          </p>
                        </>
                      )}
            
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}