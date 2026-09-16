import { ArrowLeft, ArrowRight, Users } from 'lucide-react';
import { Link, useRoute } from 'wouter';
import { committees } from '@/data/site';
import SectionLabel from '@/components/shared/SectionLabel';

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const actionSteps = ['Identify', 'Research', 'Recommend', 'Partner', 'Implement', 'Measure'];

const leadership = [
  {
    title: 'Chairman',
    description: 'Provides strategic leadership and coordinates the committee.',
  },
  {
    title: 'Sub-Committee Leads',
    description:
      'Lead specific technical areas and develop recommendations, programmes and projects.',
  },
  {
    title: 'Members & Experts',
    description:
      'Contribute technical knowledge, research, professional experience and networks.',
  },
];

export default function CommitteeDetailPage() {
  const [, params] = useRoute('/committees/:slug');
  const slug = params?.slug ?? '';
  const committee = committees.find((item) => toSlug(item.title) === slug);

  if (!committee) {
    return (
      <div className="min-h-screen bg-[#f4f0e6] px-5 pb-24 pt-36 sm:px-8">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>COMMITTEE NOT FOUND</SectionLabel>
          <h1 className="display mt-6 text-5xl text-[#16352b]">
            This committee page is not available.
          </h1>
          <Link
            href="/committees"
            className="mt-8 inline-flex items-center gap-2 border border-[#16352b] px-5 py-3 text-[11px] font-bold tracking-[.1em] text-[#16352b]"
          >
            <ArrowLeft size={14} /> RETURN TO COMMITTEES
          </Link>
        </div>
      </div>
    );
  }

  const globalIndex = committees.findIndex((item) => item.title === committee.title) + 1;
  const focusAreas = committee.focus
    .split('•')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-[1200px]">
          <Link
            href="/committees"
            className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#c89b3c]"
          >
            <ArrowLeft size={13} /> ALL COMMITTEES
          </Link>

          <SectionLabel light>
            {committee.pillar.toUpperCase()} / COMMITTEE {String(globalIndex).padStart(2, '0')}
          </SectionLabel>

          <h1 className="display mt-6 max-w-5xl text-5xl leading-[1.02] sm:text-7xl">
            {committee.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            A STAND &amp; STEP strategic committee organised around a defined area of development
            within the {committee.pillar} pillar.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel>FOCUS AREAS</SectionLabel>
            <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
              The technical areas covered by this committee.
            </h2>
          </div>

          <div className="grid gap-px bg-[#16352b]/15 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <div key={area} className="bg-[#e8e6df] p-6">
                <span className="mono text-[9px] text-[#227a5b]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-6 text-base font-semibold leading-7 text-[#16352b]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e6df] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <SectionLabel>COMMITTEE STRUCTURE</SectionLabel>
            <h2 className="display mt-5 text-4xl text-[#16352b] sm:text-5xl">
              Specialists organised around defined responsibilities.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {leadership.map((item) => (
              <article key={item.title} className="border border-[#16352b]/15 bg-[#f4f0e6] p-7">
                <span className="grid h-11 w-11 place-items-center bg-[#16352b] text-[#c89b3c]">
                  <Users size={18} />
                </span>
                <h3 className="display mt-8 text-2xl text-[#16352b]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#66706b]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-20 text-[#f4f0e6] sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel light>FROM COMMITTEE TO ACTION</SectionLabel>
          <h2 className="display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
            The committee process is designed to move knowledge toward implementation.
          </h2>

          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
            {actionSteps.map((step, index) => (
              <div key={step} className="bg-[#16352b] p-6">
                <span className="mono text-[9px] text-[#c89b3c]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-8 text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#b6c0b8]">
            Each committee is expected to identify, research, recommend, partner, implement and
            measure. The goal is to develop credible solutions that can be taken forward by
            relevant institutions and partners.
          </p>

          <Link
            href="/committees"
            className="mt-9 inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-[11px] font-bold tracking-[.1em] transition-colors hover:border-[#c89b3c] hover:text-[#c89b3c]"
          >
            EXPLORE OTHER COMMITTEES <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
