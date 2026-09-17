import { type FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Network,
  Sparkles,
  Users,
} from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';

type Pathway = 'join' | 'committee' | 'partner' | 'support';

const pathways = [
  {
    id: 'join' as const,
    icon: Users,
    title: 'Join the Network',
    copy: 'Become part of the growing community of professionals and experts.',
  },
  {
    id: 'committee' as const,
    icon: Network,
    title: 'Become a Committee Member',
    copy: 'Contribute your expertise through a strategic committee or technical working group.',
  },
  {
    id: 'partner' as const,
    icon: Handshake,
    title: 'Partner With Us',
    copy: 'Bring your institution, organisation, technology, funding or development challenge into collaborative work.',
  },
  {
    id: 'support' as const,
    icon: HeartHandshake,
    title: 'Support a Project',
    copy: 'Help move a promising idea from concept toward practical, measurable impact.',
  },
];

const partnerTypes = [
  'Federal and state governments',
  'Local governments',
  'Universities and research institutions',
  'Hospitals and health institutions',
  'Professional bodies',
  'Private-sector organisations',
  'Technology companies',
  'Engineering firms',
  'Financial institutions',
  'Development partners',
  'NGOs and civil-society organisations',
  'Foundations',
  'Philanthropists',
  'Investors',
  'International organisations',
  'Northern Nigerian professionals in the diaspora',
];

const youngProfessionals = [
  'Connect with experienced experts',
  'Participate in research and innovation',
  'Develop leadership skills',
  'Access mentorship',
  'Contribute to policy discussions',
  'Develop entrepreneurial ideas',
  'Participate in technical projects',
];

const womenStem = [
  'Girls’ participation in STEM',
  'Access to technical education',
  'Mentorship and professional networks',
  'Women-led innovation and entrepreneurship',
  'Research opportunities',
  'Leadership development',
];

export default function GetInvolvedPage() {
  const [pathway, setPathway] = useState<Pathway>('join');

  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>GET INVOLVED / BE PART OF THE SOLUTION</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Northern Nigeria has challenges. It also has people, knowledge, resources, ideas and talent.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            STAND &amp; STEP is bringing these together. Your expertise, institution, resources or
            support can help turn promising ideas into practical solutions.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>FOUR WAYS TO CONTRIBUTE</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                Find your place in the network.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#66706b]">
              The STAND &amp; STEP framework provides four clear pathways for professionals,
              institutions, partners and supporters to participate.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {pathways.map(({ id, icon: Icon, title, copy }) => (
              <button
                key={id}
                type="button"
                onClick={() => setPathway(id)}
                className={`group min-h-[220px] border p-7 text-left transition-colors ${
                  pathway === id
                    ? 'border-[#227a5b] bg-[#16352b] text-[#f4f0e6]'
                    : 'border-[#16352b]/15 bg-[#e8e6df] hover:border-[#227a5b]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`grid h-11 w-11 place-items-center ${
                      pathway === id ? 'bg-[#227a5b] text-white' : 'bg-[#16352b] text-[#c89b3c]'
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <ArrowUpRight
                    size={17}
                    className={pathway === id ? 'text-[#c89b3c]' : 'text-[#227a5b]'}
                  />
                </div>

                <h3
                  className={`display mt-8 text-3xl ${
                    pathway === id ? 'text-[#f4f0e6]' : 'text-[#16352b]'
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    pathway === id ? 'text-[#b6c0b8]' : 'text-[#66706b]'
                  }`}
                >
                  {copy}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <SectionLabel>EXPRESS YOUR INTEREST</SectionLabel>
              <h2 className="display mt-5 text-4xl text-[#16352b]">
                Start with a simple introduction.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#66706b]">
                This remains a frontend-only demo form until the approved submission channel is
                connected in the backend phase.
              </p>
            </div>

            <InterestForm pathway={pathway} />
          </div>
        </div>
      </section>

      <section className="bg-[#e8e6df] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="border border-[#16352b]/15 bg-[#f4f0e6] p-7 sm:p-9">
              <div className="flex items-center gap-3 text-[#227a5b]">
                <GraduationCap size={19} />
                <span className="mono text-[10px]">YOUNG PROFESSIONALS &amp; FUTURE LEADERS</span>
              </div>
              <h2 className="display mt-7 text-3xl text-[#16352b] sm:text-4xl">
                Investing in the next generation.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#66706b]">
                Northern Nigeria&apos;s transformation will ultimately depend on its young people.
                STAND &amp; STEP seeks to create opportunities for young researchers, engineers,
                doctors, technologists, entrepreneurs and professionals to contribute and grow.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {youngProfessionals.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#66706b]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#227a5b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-l-2 border-[#c89b3c] pl-4 text-sm font-semibold leading-7 text-[#16352b]">
                Young people should not be spectators in Northern development. They should be
                contributors and future leaders.
              </p>
            </article>

            <article className="border border-[#16352b]/15 bg-[#f4f0e6] p-7 sm:p-9">
              <div className="flex items-center gap-3 text-[#227a5b]">
                <Sparkles size={19} />
                <span className="mono text-[10px]">WOMEN &amp; GIRLS IN STEM</span>
              </div>
              <h2 className="display mt-7 text-3xl text-[#16352b] sm:text-4xl">
                Expanding opportunity.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#66706b]">
                STAND &amp; STEP recognises the importance of increasing the participation of women
                and girls in science, technology, engineering, medicine and innovation.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {womenStem.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#66706b]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#227a5b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-20 text-[#f4f0e6] sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel light>PARTNERSHIPS</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">
                We cannot transform Northern Nigeria alone.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#b6c0b8]">
                Have expertise, technology, funding, a research idea or a development challenge?
                STAND &amp; STEP welcomes collaboration.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {partnerTypes.map((partner) => (
                <div key={partner} className="bg-[#16352b] p-5">
                  <p className="text-sm leading-6 text-[#d2d8d2]">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#227a5b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel light>CALL TO ACTION</SectionLabel>
          <h2 className="display mt-5 max-w-4xl text-4xl leading-tight sm:text-6xl">
            Your expertise can help build the Northern Nigeria we want to see.
          </h2>
        </div>
      </section>
    </div>
  );
}

function InterestForm({ pathway }: { pathway: Pathway }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[380px] flex-col justify-center border border-[#227a5b]/30 bg-[#e8e6df] p-8 sm:p-12">
        <span className="grid h-11 w-11 place-items-center bg-[#227a5b] text-white">
          <Check size={20} />
        </span>
        <h3 className="display mt-7 text-3xl text-[#16352b]">Demo form complete.</h3>
        <p className="mt-4 max-w-sm text-sm leading-7 text-[#66706b]">
          Thank you{name ? `, ${name}` : ''}. Nothing was sent or stored. The backend submission
          channel will be connected in a later phase.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 w-fit text-[10px] font-bold tracking-[.1em] text-[#227a5b]"
        >
          START AGAIN
        </button>
      </div>
    );
  }

  const labels: Record<Pathway, string> = {
    join: 'JOIN THE NETWORK',
    committee: 'COMMITTEE MEMBERSHIP INTEREST',
    partner: 'PARTNERSHIP INTEREST',
    support: 'PROJECT SUPPORT INTEREST',
  };

  return (
    <form onSubmit={submit} className="grid gap-5 border border-[#16352b]/15 bg-[#e8e6df] p-6 sm:p-10">
      <span className="mono text-[9px] text-[#227a5b]">{labels[pathway]}</span>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
          NAME
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-[#16352b]/25 bg-transparent py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
            placeholder="Your full name"
          />
        </label>

        <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
          EMAIL
          <input
            required
            type="email"
            className="border-b border-[#16352b]/25 bg-transparent py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
        ORGANISATION / AFFILIATION
        <input
          className="border-b border-[#16352b]/25 bg-transparent py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
          placeholder="Organisation or affiliation"
        />
      </label>

      <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
        AREA OF EXPERTISE / INTEREST
        <input
          required
          className="border-b border-[#16352b]/25 bg-transparent py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
          placeholder="Your expertise or area of interest"
        />
      </label>

      <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
        YOUR NOTE
        <textarea
          required
          className="min-h-[120px] resize-y border-b border-[#16352b]/25 bg-transparent py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
          placeholder="Tell us how you would like to contribute..."
        />
      </label>

      <button className="inline-flex w-fit items-center gap-2 bg-[#227a5b] px-5 py-3 text-[11px] font-bold tracking-[.1em] text-white hover:bg-[#16352b]">
        SUBMIT INTEREST <ArrowUpRight size={14} />
      </button>

      <p className="text-[10px] leading-5 text-[#66706b]">
        Frontend-only form. No database or external submission channel is connected yet.
      </p>
    </form>
  );
}
