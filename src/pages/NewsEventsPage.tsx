import { CalendarDays, Newspaper, Radio, ArrowUpRight } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';

const contentTypes = [
  {
    icon: Newspaper,
    title: 'News',
    description:
      'Official announcements, organisational updates and approved stories from across the STAND & STEP network.',
  },
  {
    icon: CalendarDays,
    title: 'Events',
    description:
      'Approved conferences, workshops, committee sessions, public engagements and other scheduled activities.',
  },
  {
    icon: Radio,
    title: 'Media & Updates',
    description:
      'Approved media appearances, public statements and other communications when available.',
  },
] as const;

export default function NewsEventsPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>NEWS &amp; EVENTS</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Updates from the network.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            This section will publish approved news, announcements, events and public updates
            from STAND &amp; STEP as official information becomes available.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>PUBLIC UPDATES</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                A clear home for verified organisational information.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#66706b]">
              No dates, events, venues or announcements are being invented for the website.
              Published entries should come from approved STAND &amp; STEP information only.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {contentTypes.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="border border-[#16352b]/15 bg-[#e8e6df] p-7"
              >
                <span className="grid h-11 w-11 place-items-center bg-[#16352b] text-[#c89b3c]">
                  <Icon size={18} />
                </span>
                <h3 className="display mt-8 text-3xl text-[#16352b]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#66706b]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e6df] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel>COMING SOON</SectionLabel>
          <h2 className="display mt-5 max-w-3xl text-4xl leading-tight text-[#16352b] sm:text-5xl">
            Official stories and events will appear here when approved.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <article className="border border-[#16352b]/15 bg-[#f4f0e6] p-7 sm:p-9">
              <span className="mono text-[9px] text-[#227a5b]">NEWS / COMING SOON</span>
              <h3 className="display mt-8 text-3xl text-[#16352b]">
                No official news items published yet.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#66706b]">
                Approved announcements, milestones, partnership updates and network stories can
                be added here later.
              </p>
            </article>

            <article className="border border-[#16352b]/15 bg-[#f4f0e6] p-7 sm:p-9">
              <span className="mono text-[9px] text-[#227a5b]">EVENTS / COMING SOON</span>
              <h3 className="display mt-8 text-3xl text-[#16352b]">
                No official events published yet.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#66706b]">
                Approved dates, venues, registration information and event notices can be
                published once confirmed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel light>STAY INFORMED</SectionLabel>
          <h2 className="display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
            Follow verified updates as the platform grows.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#b6c0b8]">
            Subscription and notification features can be connected during the backend phase.
          </p>
          <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#c89b3c]">
            BACKEND CONNECTION LATER <ArrowUpRight size={13} />
          </span>
        </div>
      </section>
    </div>
  );
}
