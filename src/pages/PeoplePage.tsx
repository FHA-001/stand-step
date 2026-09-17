import { useMemo, useState } from 'react';
import { ArrowUpRight, Filter, Search, ShieldCheck, Users } from 'lucide-react';
import { members } from '@/data/site';
import SectionLabel from '@/components/shared/SectionLabel';

const leadershipGroups = [
  {
    title: 'National / Strategic Leadership',
    roles: ['Patron / Advisers', 'Coordinating Leadership', 'Secretariat'],
  },
  {
    title: 'Pillar Leadership',
    roles: ['Science', 'Technology', 'Engineering', 'Perspectives'],
  },
  {
    title: 'Committee Leadership',
    roles: ['20 Strategic Committees', 'Committee Chairmen', 'Sub-Committee Leads'],
  },
] as const;

const filters = {
  pillar: ['All pillars', 'Science', 'Technology', 'Engineering', 'Perspectives'],
  committee: ['All committees'],
  profession: ['All professions'],
  organisation: ['All organisations'],
  location: ['All locations'],
};

export default function PeoplePage() {
  const [query, setQuery] = useState('');
  const [pillar, setPillar] = useState('All pillars');
  const [committee, setCommittee] = useState('All committees');
  const [profession, setProfession] = useState('All professions');
  const [organisation, setOrganisation] = useState('All organisations');
  const [location, setLocation] = useState('All locations');

  const filtered = useMemo(
    () =>
      members.filter((person) => {
        const matchesQuery = `${person.name} ${person.role} ${person.specialisation} ${person.pillar}`
          .toLowerCase()
          .includes(query.toLowerCase());

        const matchesPillar = pillar === 'All pillars' || person.pillar === pillar;

        // Current demo data does not yet include approved public committee,
        // profession, organisation or location fields. These filters are
        // structurally present and will become active when real member data
        // is connected later.
        const matchesCommittee = committee === 'All committees';
        const matchesProfession = profession === 'All professions';
        const matchesOrganisation = organisation === 'All organisations';
        const matchesLocation = location === 'All locations';

        return (
          matchesQuery &&
          matchesPillar &&
          matchesCommittee &&
          matchesProfession &&
          matchesOrganisation &&
          matchesLocation
        );
      }),
    [committee, location, organisation, pillar, profession, query],
  );

  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>PEOPLE / LEADERSHIP / EXPERT NETWORK</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            The people behind the progress.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            STAND &amp; STEP brings together experienced professionals and emerging leaders who are
            willing to contribute their knowledge and expertise to Northern development.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <SectionLabel>OUR PEOPLE</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                Leadership at several levels, connected to one shared agenda.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#66706b]">
              The website structure recognises strategic leadership, pillar leadership, committee
              leadership and the wider expert network. Real names will be added only when officially
              approved for public display.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {leadershipGroups.map((group) => (
              <article
                key={group.title}
                className="border border-[#16352b]/15 bg-[#e8e6df] p-7"
              >
                <span className="grid h-11 w-11 place-items-center bg-[#16352b] text-[#c89b3c]">
                  <Users size={18} />
                </span>
                <h3 className="display mt-8 text-2xl text-[#16352b]">{group.title}</h3>
                <div className="mt-6 grid gap-3">
                  {group.roles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center justify-between border-t border-[#16352b]/10 pt-3"
                    >
                      <span className="text-sm text-[#66706b]">{role}</span>
                      <span className="mono text-[8px] text-[#227a5b]">TBD</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel light>EXPERT NETWORK</SectionLabel>
            <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">
              A multidisciplinary network of professionals.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#b6c0b8]">
            Expertise across science, technology, engineering, medicine, agriculture, education,
            business, policy and human development can be organised and searched through a public
            directory once approved member information becomes available.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex flex-col gap-8">
            <div>
              <SectionLabel>MEMBERS DIRECTORY</SectionLabel>
              <h2 className="display mt-5 text-4xl text-[#16352b] sm:text-5xl">
                Search the network.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#66706b]">
                Demo profiles remain in place for layout testing only. Public member information
                will be shown only when members have expressly agreed to publish it.
              </p>
            </div>

            <div className="border-y border-[#16352b]/15 py-6">
              <div className="flex items-center gap-3 border-b border-[#16352b]/20 px-2 py-3">
                <Search size={17} className="text-[#227a5b]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Search demo profiles or areas of expertise"
                  data-testid="input-directory-search"
                />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <FilterSelect
                  label="Pillar"
                  value={pillar}
                  onChange={setPillar}
                  options={filters.pillar}
                />
                <FilterSelect
                  label="Committee"
                  value={committee}
                  onChange={setCommittee}
                  options={filters.committee}
                />
                <FilterSelect
                  label="Profession"
                  value={profession}
                  onChange={setProfession}
                  options={filters.profession}
                />
                <FilterSelect
                  label="Organisation"
                  value={organisation}
                  onChange={setOrganisation}
                  options={filters.organisation}
                />
                <FilterSelect
                  label="Location"
                  value={location}
                  onChange={setLocation}
                  options={filters.location}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-px bg-[#16352b]/15 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((person, index) => (
              <article
                key={person.id}
                className="bg-[#f4f0e6] p-7"
                data-testid={`card-person-${index}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#227a5b] text-sm font-bold text-white">
                    D
                  </span>
                  <span className="mono text-[9px] text-[#66706b]">{person.pillar}</span>
                </div>

                <h3 className="display mt-9 text-2xl text-[#16352b]">{person.name}</h3>
                <p className="mt-2 text-sm text-[#66706b]">{person.role}</p>
                <p className="mt-4 text-xs leading-6 text-[#66706b]">{person.specialisation}</p>

                <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#227a5b]">
                  DEMO PROFILE <ArrowUpRight size={13} />
                </span>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-sm text-[#66706b]">
              No demo profiles match this search. Try a broader term.
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#e8e6df] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-[#227a5b]">
              <ShieldCheck size={18} />
              <span className="mono text-[10px]">PRIVACY PRINCIPLE</span>
            </div>
            <h2 className="display mt-5 text-3xl text-[#16352b] sm:text-4xl">
              Public information should always be intentional.
            </h2>
          </div>

          <p className="text-sm leading-7 text-[#66706b]">
            Only information that members have expressly agreed to publish should appear publicly.
            Personal phone numbers and private email addresses should not be displayed unless the
            member specifically opts in.
          </p>
        </div>
      </section>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="grid gap-2">
      <span className="mono text-[9px] text-[#66706b]">{label}</span>
      <div className="flex items-center gap-2 border-b border-[#16352b]/20 pb-2">
        <Filter size={13} className="text-[#227a5b]" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm outline-none"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </label>
  );
}
