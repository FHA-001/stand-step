import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Building2,
  GraduationCap,
  HeartPulse,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react';
import { Link } from 'wouter';
import SectionLabel from '@/components/shared/SectionLabel';

const aims = [
  'Harness professional expertise for the development of Northern Nigeria.',
  'Promote science, technology, engineering and innovation as drivers of economic and social transformation.',
  'Develop evidence-based responses to major development challenges.',
  'Connect professionals with governments, universities, industry, investors and development organisations.',
  'Promote research, innovation, entrepreneurship and technology transfer.',
  'Encourage the development of home-grown solutions to Northern Nigeria’s unique challenges.',
  'Support human-capital development, particularly among young people.',
  'Promote opportunities for women and girls in science, technology, engineering and related fields.',
  'Facilitate strategic partnerships and investment in priority sectors.',
  'Create a sustained platform for ideas to become projects and projects to become measurable impact.',
];

const objectives = [
  ['Knowledge & Research', BookOpen, [
    'Identify critical development problems requiring scientific and technical solutions.',
    'Encourage interdisciplinary research.',
    'Generate policy briefs, technical reports and development proposals.',
    'Promote collaboration between researchers and practitioners.',
  ]],
  ['Technology & Innovation', BrainCircuit, [
    'Promote artificial intelligence, digital transformation and emerging technologies.',
    'Support technology entrepreneurship and local innovation.',
    'Encourage technology transfer and intellectual-property development.',
    'Promote digital inclusion and cybersecurity.',
  ]],
  ['Engineering & Infrastructure', Wrench, [
    'Support practical approaches to energy, transport, water, housing and infrastructure.',
    'Promote sustainable engineering solutions.',
    'Encourage local manufacturing and value addition.',
  ]],
  ['Health & Human Development', HeartPulse, [
    'Strengthen primary healthcare and disease prevention.',
    'Promote medical research and health technology.',
    'Address maternal and child health challenges.',
    'Support mental health, drug-abuse prevention and rehabilitation.',
  ]],
  ['Education & Skills', GraduationCap, [
    'Promote STEM education.',
    'Support teacher development and curriculum improvement.',
    'Strengthen technical and vocational education.',
    'Address Almajiri, nomadic and out-of-school education.',
    'Expand opportunities for girls and young people.',
  ]],
  ['Economic Development', Building2, [
    'Promote agriculture, agro-processing and manufacturing.',
    'Support SMEs and entrepreneurship.',
    'Encourage responsible exploitation and processing of mineral resources.',
    'Promote trade, investment and exports.',
  ]],
] as const;

const pillars = [
  ['01', 'Science', 'Knowledge that solves problems.', 'Research, medicine, biotechnology, education and scientific innovation.'],
  ['02', 'Technology', 'Technology that connects and accelerates.', 'AI, computing, digital infrastructure, cybersecurity, communication and renewable-energy technologies.'],
  ['03', 'Engineering', 'Engineering that builds.', 'Infrastructure, manufacturing, agriculture, water, energy, transport, minerals and natural-resource development.'],
  ['04', 'Perspectives', 'People, policy and society.', 'Security, poverty, education, investment, human development, migration and inclusive economic growth.'],
] as const;

const journey = ['Problems', 'Evidence', 'Ideas', 'Solutions', 'Partnerships', 'Implementation', 'Impact'];

export default function AboutPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>ABOUT STAND &amp; STEP</SectionLabel>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <h1 className="display max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
                Harnessing expertise for Northern development.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-[#c5cec8] sm:text-lg">
                STAND &amp; STEP is a multidisciplinary platform bringing together scientists, engineers,
                medical professionals, technologists, academics, researchers, entrepreneurs,
                policymakers, development practitioners and other professionals committed to the
                sustainable transformation of Northern Nigeria.
              </p>
            </div>

            <div className="border-l border-[#c89b3c] pl-5">
              <p className="mono text-[10px] tracking-[.14em] text-[#c89b3c]">CORE PHILOSOPHY</p>
              <p className="display mt-4 text-3xl leading-tight">Think. Connect. Innovate. Engineer. Act.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel>WHO WE ARE</SectionLabel>
            <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
              A platform built to organise knowledge around practical action.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#66706b]">
            <p>
              We believe that the development challenges facing Northern Nigeria require more than
              political declarations. They require knowledge, evidence, innovation, engineering
              solutions, institutional capacity and coordinated action.
            </p>
            <p>
              STAND &amp; STEP provides a platform where expertise can be organised around clearly
              defined development priorities and translated into research, policy recommendations,
              technical solutions, partnerships and implementable projects.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e6df] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <SectionLabel>FROM PROBLEM TO IMPACT</SectionLabel>
              <h2 className="display mt-5 text-4xl text-[#16352b]">The work should move.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#66706b]">
                STAND &amp; STEP is designed to move beyond discussion and connect evidence,
                expertise and institutions to implementation.
              </p>
            </div>

            <div className="grid gap-px bg-[#16352b]/15 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((item, index) => (
                <div key={item} className="bg-[#f4f0e6] p-5">
                  <span className="mono text-[9px] text-[#227a5b]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#16352b]">{item}</span>
                    {index < journey.length - 1 && <ArrowRight size={14} className="text-[#c89b3c]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-20 text-[#f4f0e6] sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="border border-white/15 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-[#c89b3c]">
                <Target size={18} />
                <span className="mono text-[10px]">OUR VISION</span>
              </div>
              <p className="display mt-8 text-3xl leading-snug sm:text-4xl">
                A prosperous, secure and technologically advanced Northern Nigeria driven by
                knowledge, innovation, human capital and sustainable development.
              </p>
            </div>

            <div className="border border-white/15 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-[#c89b3c]">
                <Sparkles size={18} />
                <span className="mono text-[10px]">OUR MISSION</span>
              </div>
              <p className="mt-8 text-base leading-8 text-[#d2d8d2]">
                To mobilise and connect Northern Nigeria&apos;s scientific, technological, engineering,
                medical, professional and intellectual resources to identify challenges, develop
                evidence-based solutions, influence policy and support practical interventions that
                improve the lives and livelihoods of people across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <SectionLabel>OUR AIMS</SectionLabel>
              <h2 className="display mt-5 text-4xl text-[#16352b] sm:text-5xl">
                Ten commitments that define the platform.
              </h2>
            </div>

            <div className="grid gap-px bg-[#16352b]/15 sm:grid-cols-2">
              {aims.map((aim, index) => (
                <div key={aim} className="bg-[#f4f0e6] p-6 sm:p-7">
                  <span className="mono text-[9px] text-[#227a5b]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-5 text-sm leading-7 text-[#4e5b55]">{aim}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e6df] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <SectionLabel>OUR OBJECTIVES</SectionLabel>
            <h2 className="display mt-5 text-4xl text-[#16352b] sm:text-5xl">
              Six areas where expertise becomes useful.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map(([title, Icon, items]) => (
              <article key={title} className="border border-[#16352b]/15 bg-[#f4f0e6] p-7">
                <span className="grid h-11 w-11 place-items-center bg-[#16352b] text-[#c89b3c]">
                  <Icon size={19} />
                </span>
                <h3 className="display mt-8 text-2xl text-[#16352b]">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#66706b]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#227a5b]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-20 text-[#f4f0e6] sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel light>OUR APPROACH</SectionLabel>
              <h2 className="display mt-5 max-w-2xl text-4xl leading-tight sm:text-6xl">
                Four connected pillars. One development agenda.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#b6c0b8]">
              Complex regional challenges cannot be solved by one discipline alone. The four
              pillars give different kinds of expertise a common institutional home.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            {pillars.map(([number, title, line, detail]) => (
              <div key={title} className="bg-[#16352b] p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="mono text-[9px] text-[#c89b3c]">PILLAR {number}</span>
                  <Network size={16} className="text-[#227a5b]" />
                </div>
                <h3 className="display mt-10 text-3xl">{title}</h3>
                <p className="mt-3 text-base font-semibold text-[#dce4df]">{line}</p>
                <p className="mt-3 text-sm leading-7 text-[#aebbb3]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel>OUR HISTORY</SectionLabel>
            <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
              From conversation to collective action.
            </h2>
          </div>

          <div className="border-l-2 border-[#c89b3c] pl-7">
            <span className="mono text-[10px] text-[#227a5b]">
              2026 — ESTABLISHMENT &amp; STRATEGIC FRAMEWORK
            </span>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[#66706b]">
              <p>
                STAND &amp; STEP emerged from a recognition that Northern Nigeria possesses a significant
                pool of highly qualified professionals, researchers, scientists, engineers, medical
                practitioners, technologists, entrepreneurs and other experts both within Nigeria and
                across the diaspora.
              </p>
              <p>
                Despite this wealth of expertise, knowledge and professional capacity is often fragmented
                across institutions, sectors and geographical boundaries.
              </p>
              <p>
                STAND &amp; STEP was conceived as a platform to connect this expertise and organise it
                around the region&apos;s most important development challenges.
              </p>
              <p>
                In 2026, STAND &amp; STEP began formalising its network and developing a structured
                framework of 20 strategic committees covering science, technology, engineering and wider
                human-development perspectives.
              </p>
              <p>
                The next phase is to move from network building to knowledge generation, strategic
                partnerships, project development and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#227a5b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[#d9c48f]">
              <ShieldCheck size={18} />
              <span className="mono text-[10px]">FROM IDEAS TO PROJECTS</span>
            </div>
            <h2 className="display mt-5 text-4xl sm:text-5xl">
              The objective is not simply to discuss problems.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#d7e1db]">
              Each committee is expected to identify, research, recommend, partner, implement and
              measure — so credible solutions can be taken forward by relevant institutions and partners.
            </p>
          </div>

          <Link
            href="/committees"
            className="inline-flex w-fit items-center gap-2 border border-white/30 px-5 py-3 text-[11px] font-bold tracking-[.1em] text-white transition-colors hover:border-[#c89b3c] hover:text-[#c89b3c]"
          >
            EXPLORE THE 20 COMMITTEES <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
