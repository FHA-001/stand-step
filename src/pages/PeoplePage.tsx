import { useMemo, useState } from 'react';
import { ArrowUpRight, Filter, Search } from 'lucide-react';
import { members } from '@/data/site';
import SectionLabel from '@/components/shared/SectionLabel';

export default function PeoplePage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All pillars');

  const filtered = useMemo(
    () =>
      members.filter(
        (person) =>
          (filter === 'All pillars' || person.pillar === filter) &&
          `${person.name} ${person.role} ${person.specialisation}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [filter, query],
  );

  return (
    <div className="bg-[#f4f0e6]">
      <section className="bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel light>PEOPLE / MEMBER DIRECTORY</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            The people behind the progress.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#b6c0b8]">
            A growing network of scientists, engineers, medical professionals, technologists, researchers, entrepreneurs and public servants. Demo profiles are shown for illustration only.
          </p>
        </div>
      </section>

      <section className="site-grid py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex flex-col gap-4 border-b border-[#16352b]/15 pb-5 md:flex-row">
            <div className="flex flex-1 items-center gap-3 border-b border-[#16352b]/20 px-2 py-3">
              <Search size={17} className="text-[#227a5b]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Search demo profiles or areas of practice"
                data-testid="input-directory-search"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter size={15} className="text-[#227a5b]" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent py-3 text-sm outline-none"
                data-testid="select-directory-pillar"
              >
                {[
                  'All pillars',
                  'Science',
                  'Technology',
                  'Engineering',
                  'Perspectives',
                ].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-10 grid gap-px bg-[#16352b]/15 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((person, index) => (
              <div
                key={person.id}
                className="bg-[#f4f0e6] p-7"
                data-testid={`card-person-${index}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#227a5b] text-sm font-bold text-white">
                    D
                  </span>
                  <span className="mono text-[9px] text-[#66706b]">
                    {person.pillar}
                  </span>
                </div>

                <h3 className="display mt-9 text-2xl text-[#16352b]">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm text-[#66706b]">{person.role}</p>
                <p className="mt-4 text-xs text-[#66706b]">
                  {person.specialisation}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#227a5b]">
                  DEMO PROFILE <ArrowUpRight size={13} />
                </span>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-sm text-[#66706b]">
              No demo profiles match this search. Try a broader term.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
