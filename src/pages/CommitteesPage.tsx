import { useState } from 'react';
import { committees } from '@/data/site';
import SectionLabel from '@/components/shared/SectionLabel';

export default function CommitteesPage() {
  const [filter, setFilter] = useState('All');
  const list =
    filter === 'All'
      ? committees
      : committees.filter((item) => item.pillar === filter);

  return (
    <div className="bg-[#f4f0e6]">
      <section className="bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel light>THE NETWORK / 20 COMMITTEES</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Organised around the work.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#b6c0b8]">
            The approved committee directory is grouped under the four official pillars. Committee profiles and membership details will be added when publicly approved information is available.
          </p>
        </div>
      </section>

      <section className="site-grid py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 border-b border-[#16352b]/15 pb-6">
            {['All', 'Science', 'Technology', 'Engineering', 'Perspectives'].map(
              (value) => (
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
              ),
            )}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {list.map((committee, index) => (
              <div
                key={committee.title}
                className="group flex min-h-[180px] flex-col justify-between border border-[#16352b]/15 bg-[#e8e6df] p-7 transition-colors hover:bg-[#16352b] hover:text-[#f4f0e6]"
                data-testid={`card-committee-page-${index}`}
              >
                <div className="flex justify-between">
                  <span className="mono text-[9px] text-[#227a5b] group-hover:text-[#c89b3c]">
                    {committee.pillar} / COMMITTEE{' '}
                    {String(committees.indexOf(committee) + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: committee.color }}
                  />
                </div>

                <div>
                  <h3 className="display text-3xl">{committee.title}</h3>
                  <p className="mt-2 text-sm text-[#66706b] group-hover:text-[#b6c0b8]">
                    {committee.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
