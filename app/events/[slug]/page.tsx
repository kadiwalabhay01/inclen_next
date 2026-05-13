import { Event } from '@/types/event';
import eventsData from '@/data/events.json';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EventDetail({ params }: Props) {
  const { slug } = await params;
  const events: Event[] = eventsData;
  const event = events.find((e) => e.slug === slug);

  if (!event) notFound();

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(event.created_at));

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");

    return new Date(0, 0, 0, Number(hour), Number(minute))
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .toUpperCase();
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link href="/" className="hover:text-brand-900">Home</Link>
            <span>•</span>
            <Link href="/events" className="hover:text-brand-900">News & Events</Link>
            <span>•</span>
            <span className="text-brand-900">{event.purpose}</span>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Main Content */}
            <article className="lg:col-span-8">
              <div className="flex gap-3 mb-8">
                <span className="px-4 py-1.5 bg-brand-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl shadow-brand-900/10">
                  {event.purpose}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                {event.title}
              </h1>

              <p className="text-2xl font-light text-slate-500 italic border-l-4 border-accent-500 pl-8 mb-12">
                {event.content.replace(/<[^>]+>/g, '').substring(0, 160)}...
              </p>

              {/* Featured Image */}
              <div className="relative aspect-[16/9] rounded-[48px] overflow-hidden shadow-2xl mb-16">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Full Content */}
              <div
                className="prose prose-slate prose-xl max-w-none text-slate-600 leading-[1.8]"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />

              {/* Strategic Inquiry Box */}
              <div className="bg-brand-50 rounded-[40px] p-12 my-16">
                <h4 className="text-2xl font-serif font-bold text-brand-900 mb-6">Strategic Inquiry</h4>
                <p className="text-slate-600 text-lg mb-10">
                  For institutional collaboration, data access requests, or specific inquiries regarding this initiative, please connect with the Executive Office.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-brand-900 text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-black transition-all hover:scale-105 shadow-2xl shadow-brand-900/20"
                >
                  Connect with IEO Delhi →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
                  <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-500 mb-8 pb-4 border-b border-slate-50">Event Date</h5>

                  <div className="space-y-10">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-900">
                        <svg
                          className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>

                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Occurrence</p>
                        <p className="font-bold text-slate-900">{formattedDate}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-900">⏰</div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Time</p>
                        <p className="font-bold text-slate-900">
                          {formatTime(event.start_time)} - {formatTime(event.end_time)}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-900">
                        <svg
                          className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9A1.998 1.998 0 0 1 10.587 20.9L6.343 16.657A8 8 0 1 1 17.657 16.657Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11A3 3 0 1 1 9 11A3 3 0 0 1 15 11Z" />
                        </svg>

                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Venue / Hub</p>
                        <p className="font-bold text-slate-900">{event.author}</p>
                      </div>
                    </div>
                  </div>

                  {event.pdf && (
                    <a
                      href={event.pdf}
                      target="_blank"
                      className="inline-block w-full mt-12 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-accent-500 transition-colors text-center no-underline"
                    >
                      Download Article PDF
                    </a>
                  )}
                </div>

                <div className="bg-accent-500 rounded-[40px] p-10 text-white shadow-2xl shadow-accent-500/20">
                  <h5 className="text-2xl font-serif font-bold mb-4">Support Our Research</h5>
                  <p className="text-white/80 text-sm mb-6">Drive innovation in clinical epidemiology. Explore partnership frameworks today.</p>
                  <Link
                    href="/#partners"
                    className="block w-full text-center py-4 bg-white text-accent-500 font-bold text-[10px] uppercase tracking-widest rounded-2xl hover:bg-brand-900 hover:text-white transition-all">
                    Partner Network →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}