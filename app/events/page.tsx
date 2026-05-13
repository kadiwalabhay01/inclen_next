import { Event } from '@/types/event';
import eventsData from '@/data/events.json';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  const events: Event[] = eventsData;

  // Separate upcoming and past (you can improve this logic later with real dates)
  const upcomingEvents = events.filter(e => new Date(e.created_at) > new Date());
  const pastEvents = events.filter(e => new Date(e.created_at) <= new Date());

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");

    return new Date(0, 0, 0, Number(hour), Number(minute)).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  }


  const newsItems = [
    {
      slug: "event-1",
      date: "JAN 12, 2026",
      title: "INCLEN to Support Ministry of Health on New Digital Health Mission",
      short_details: "A landmark partnership to integrate local surveillance data into national health dashboards.",
    },
  ];

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-24 md:pt-28 md:pb-40 overflow-hidden border-b border-slate-100">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">

          <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[120%] opacity-[0.02] mix-blend-multiply">
            <img src="/images/map_network.png" className="w-full h-full object-contain rotate-12" />
          </div>

          <div className="absolute top-1/2 left-[-5%] w-[40rem] h-[40rem] bg-accent-500/7 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute -bottom-10 -left-10 text-[120px] md:text-[200px] font-serif font-black text-slate-200/40 whitespace-nowrap -rotate-3 leading-none tracking-tighter">
            Global Network
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-end">

            <div className="max-w-3xl">

              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="w-8 md:w-12 h-1 md:h-1.5 bg-accent-500 rounded-full"></span>

                <nav className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-brand-900/60">
                  Frontiers of Research
                </nav>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-serif text-brand-900 font-bold leading-none tracking-tight mb-8 md:mb-10">
                News & <br />

                <span className="block italic font-light text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-orange-400">
                  Global Events
                </span>
              </h1>

              <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed max-w-2xl opacity-80">
                Synthesizing village-level surveillance with global policy shifts.
                Join our network of 34 countries in defining the future of
                clinical epidemiology.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 bg-white/60 md:bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-white/80 shadow-xl shadow-slate-200/40 w-full sm:w-fit">

              <div className="flex -space-x-4">

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[4px] md:border-[6px] border-white bg-slate-100 overflow-hidden shadow-md">
                  <img
                    src="https://i.pravatar.cc/150?u=researcher1"
                    className="w-full h-full object-cover"
                    alt="Researcher 1"
                  />
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[4px] md:border-[6px] border-white bg-slate-100 overflow-hidden shadow-md">
                  <img
                    src="https://i.pravatar.cc/150?u=researcher2"
                    className="w-full h-full object-cover"
                    alt="Researcher 2"
                  />
                </div>

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[4px] md:border-[6px] border-white bg-linear-to-br from-accent-500 to-orange-400 flex items-center justify-center text-[10px] md:text-[12px] font-bold text-white shadow-md">
                  400k+
                </div>

              </div>

              <div className="flex flex-col">

                <div className="text-[9px] md:text-[11px] uppercase font-black tracking-[0.2em] md:tracking-[0.3em] text-accent-500 mb-0.5 md:mb-1">
                  Current Outreach
                </div>

                <div className="text-xl md:text-2xl font-serif font-bold text-brand-900 leading-tight">
                  Population{" "}
                  <span className="italic font-light text-slate-400">
                    Monitored
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Upcoming Events */}
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="text-xs font-bold text-accent-500 uppercase mb-3 font-roboto tracking-[0.2em]">Technical Calendar</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900">Featured <span className="italic font-normal text-slate-400">Engagements</span></h3>
            </div>

            <div className="space-y-12">
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="group block bg-white rounded-[40px] border border-slate-100 hover:border-brand-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-64 h-56 lg:h-auto relative shrink-0 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      {/* Date Badge */}
                      <div className="absolute top-6 left-6 w-16 h-20 bg-white/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center shadow-xl">
                        <span className="text-xs font-bold text-accent-500 uppercase">
                          {new Date(event.created_at).toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="text-3xl font-serif font-bold text-slate-900">
                          {new Date(event.created_at).getDate()}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 md:p-10">
                      <div className="flex flex-wrap gap-3 mb-5">
                        <span className="px-3 py-1 bg-brand-900 text-white text-[9px] tracking-widest font-bold uppercase rounded-full">
                          {event.purpose}
                        </span>
                        <span className="text-slate-400 text-[10px] flex items-center gap-2 uppercase font-semibold tracking-widest">
                          <svg
                            className="w-3.5 h-3.5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path
                              strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg> {event.author}
                        </span>
                      </div>

                      <h4 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                        {event.title}
                      </h4>

                      <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3 italic">
                        &quot;{event.content.replace(/<[^>]+>/g, '').substring(0, 140)}...&quot;
                      </p>

                      <div className="flex justify-between items-center pt-6">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          {formatTime(event.start_time)} - {formatTime(event.end_time)}
                        </span>
                        <span className="font-bold text-brand-900 text-[12px]">Explore Event →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* Sidebar - News Feed */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 bg-brand-900 rounded-[40px] p-10 text-white shadow-2xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-500 mb-8 flex items-center gap-2">
                News Feed <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              </h3>
              <div className="space-y-8 md:space-y-10">
                {newsItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/event-details/${item.slug}`}
                    className="block group/item"
                  >
                    <span className="text-[8px] md:text-[9px] font-bold text-white/40 uppercase tracking-widest block mb-2">
                      {item.date}
                    </span>

                    <h4 className="text-lg md:text-xl font-serif font-bold text-white mb-3 md:mb-4 leading-tight group-hover/item:text-accent-500 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-brand-100 text-xs md:text-sm font-light leading-relaxed line-clamp-2 opacity-60 mb-4">
                      {item.short_details}
                    </p>

                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-accent-500 flex items-center gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      Full Report

                      <svg
                        className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-white hover:text-accent-500 transition-colors uppercase tracking-widest font-sans" >
                  Media Inquiries

                  <svg
                    className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round" strokeWidth={2} strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}