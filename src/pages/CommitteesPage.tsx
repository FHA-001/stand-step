import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { committees } from '@/data/site';
import SectionLabel from '@/components/shared/SectionLabel';

const filters = ['All', 'Science', 'Technology', 'Engineering', 'Perspectives'] as const;

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function CommitteesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const visibleCommittees = useMemo(
    () =>
      filter === 'All'
        ? committees
        : committees.filter((committee) => committee.pillar === filter),
    [filter],
  );

  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>THE NETWORK / 20 STRATEGIC COMMITTEES</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Organised around the work.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            Each strategic committee brings together specialists around a defined area of
            development and provides a structure for moving from knowledge to practical action.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>COMMITTEE DIRECTORY</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                Twenty areas of focused technical work.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#66706b]">
              The committees are grouped under the four official pillars: Science, Technology,
              Engineering and Perspectives. Use the filter to explore each pillar, then open a
              committee to view its approved focus areas and operating structure.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-b border-[#16352b]/15 pb-6">
            {filters.map((value) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`border px-4 py-2 text-[10px] font-bold tracking-[.1em] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#227a5b] ${
                  filter === value
                    ? 'border-[#227a5b] bg-[#227a5b] text-white'
                    : 'border-[#16352b]/20 text-[#66706b] hover:border-[#227a5b]'
                }`}
                data-testid={`button-filter-${value.toLowerCase()}`}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {visibleCommittees.map((committee) => {
              const globalIndex = committees.findIndex((item) => item.title === committee.title) + 1;

              return (
                <Link
                  key={committee.title}
                  href={`/committees/${toSlug(committee.title)}`}
                  className="group flex min-h-[230px] flex-col justify-between border border-[#16352b]/15 bg-[#e8e6df] p-7 transition-colors hover:bg-[#16352b] hover:text-[#f4f0e6]"
                  data-testid={`link-committee-${globalIndex}`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="mono text-[9px] text-[#227a5b] group-hover:text-[#c89b3c]">
                      {committee.pillar} / COMMITTEE {String(globalIndex).padStart(2, '0')}
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-[#227a5b] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c89b3c]"
                    />
                  </div>

                  <div>
                    <h3 className="display text-3xl leading-tight text-[#16352b] group-hover:text-[#f4f0e6]">
                      {committee.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#66706b] group-hover:text-[#b6c0b8]">
                      {committee.focus}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#227a5b] group-hover:text-[#c89b3c]">
                      VIEW COMMITTEE <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-20 text-[#f4f0e6] sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel light>FROM COMMITTEES TO ACTION</SectionLabel>
          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
            {['Identify', 'Research', 'Recommend', 'Partner', 'Implement', 'Measure'].map(
              (step, index) => (
                <div key={step} className="bg-[#16352b] p-6">
                  <span className="mono text-[9px] text-[#c89b3c]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-8 text-sm font-semibold">{step}</p>
                </div>
              ),
            )}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#b6c0b8]">
            The objective is not simply to discuss Northern Nigeria&apos;s problems, but to develop
            credible solutions that can be taken forward by relevant institutions and partners.
          </p>
        </div>
      </section>
    </div>
  );
}
