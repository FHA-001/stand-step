import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useRoute } from 'wouter';
import SectionLabel from '@/components/shared/SectionLabel';

const demoProjects = {
  'demo-regional-research-programme': {
    title: 'Demo Regional Research Programme',
    sector: 'Research',
    location: 'Northern Nigeria',
    status: 'Concept',
    problem:
      'This is demonstration content showing where a real project problem statement will appear once approved information is supplied.',
    evidence:
      'This section is reserved for approved research findings, datasets, technical studies or other evidence that explains the project need.',
    solution:
      'This section will describe the proposed intervention, technical response or implementation model for an approved project.',
    partners:
      'Approved participating institutions and partners will be listed here when available.',
    impact:
      'No organisational impact is claimed. This demonstration shows where measurable results will be reported for real projects.',
  },
  'demo-technology-pilot': {
    title: 'Demo Technology Pilot',
    sector: 'Innovation',
    location: 'Northern Nigeria',
    status: 'Pilot',
    problem:
      'This is demonstration content showing how a practical technology or engineering problem could be defined on a future project page.',
    evidence:
      'Approved technical evidence, baseline information and relevant data would be summarised here.',
    solution:
      'This area will explain the proposed technology, engineering solution or pilot intervention once a real project is approved.',
    partners:
      'Approved project partners and participating institutions will appear here.',
    impact:
      'No organisational impact is claimed. Future project pages can record measurable outputs and outcomes in this section.',
  },
  'demo-partnership-project': {
    title: 'Demo Partnership Project',
    sector: 'Partnerships',
    location: 'Northern Nigeria',
    status: 'Research',
    problem:
      'This demonstration illustrates how a collaborative project can clearly explain the challenge it is intended to address.',
    evidence:
      'Relevant approved research, needs assessments and technical evidence would be presented in this section.',
    solution:
      'This section will describe the agreed collaborative response, project model or implementation pathway.',
    partners:
      'Official partner names will be published only when approved for public display.',
    impact:
      'No organisational impact is claimed. This area is reserved for verified project results and measurable change.',
  },
} as const;

const sections = [
  ['Problem', 'problem'],
  ['Evidence', 'evidence'],
  ['Solution', 'solution'],
  ['Partners', 'partners'],
  ['Impact', 'impact'],
] as const;

export default function ProjectDetailPage() {
  const [, params] = useRoute('/projects/:slug');
  const slug = params?.slug ?? '';
  const project = demoProjects[slug as keyof typeof demoProjects];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f4f0e6] px-5 pb-24 pt-36 sm:px-8">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>PROJECT NOT FOUND</SectionLabel>
          <h1 className="display mt-6 text-5xl text-[#16352b]">
            This project page is not available.
          </h1>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 border border-[#16352b] px-5 py-3 text-[11px] font-bold tracking-[.1em] text-[#16352b]"
          >
            <ArrowLeft size={14} /> RETURN TO PROJECTS
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#c89b3c]"
          >
            <ArrowLeft size={13} /> ALL PROJECTS
          </Link>

          <SectionLabel light>DEMO PROJECT / {project.sector.toUpperCase()}</SectionLabel>

          <h1 className="display mt-6 max-w-5xl text-5xl leading-[1.02] sm:text-7xl">
            {project.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="border border-white/20 px-3 py-2 text-[9px] font-bold tracking-[.1em] text-[#d2d8d2]">
              LOCATION · {project.location.toUpperCase()}
            </span>
            <span className="border border-[#c89b3c]/50 px-3 py-2 text-[9px] font-bold tracking-[.1em] text-[#c89b3c]">
              STATUS · {project.status.toUpperCase()}
            </span>
          </div>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-12 border border-[#c89b3c]/40 bg-[#fff7e6] p-5 text-sm leading-7 text-[#66562f]">
            <strong>Demonstration content:</strong> this page shows the approved STAND &amp; STEP
            project structure. It does not describe a real organisational project or claim real
            results.
          </div>

          <div className="grid gap-px bg-[#16352b]/15 lg:grid-cols-2">
            {sections.map(([label, key], index) => (
              <article key={key} className="bg-[#f4f0e6] p-7 sm:p-9">
                <span className="mono text-[9px] text-[#227a5b]">
                  {String(index + 1).padStart(2, '0')} / {label.toUpperCase()}
                </span>
                <h2 className="display mt-8 text-3xl text-[#16352b]">{label}</h2>
                <p className="mt-5 text-sm leading-7 text-[#66706b]">{project[key]}</p>
              </article>
            ))}

            <article className="bg-[#e8e6df] p-7 sm:p-9">
              <span className="mono text-[9px] text-[#227a5b]">06 / LOCATION</span>
              <h2 className="display mt-8 text-3xl text-[#16352b]">Location</h2>
              <p className="mt-5 text-sm leading-7 text-[#66706b]">{project.location}</p>
            </article>

            <article className="bg-[#e8e6df] p-7 sm:p-9">
              <span className="mono text-[9px] text-[#227a5b]">07 / STATUS</span>
              <h2 className="display mt-8 text-3xl text-[#16352b]">Status</h2>
              <p className="mt-5 text-sm leading-7 text-[#66706b]">{project.status}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <SectionLabel light>PROJECT DIRECTORY</SectionLabel>
            <h2 className="display mt-5 max-w-2xl text-4xl sm:text-5xl">
              Explore the project structure.
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 border border-white/30 px-5 py-3 text-[11px] font-bold tracking-[.1em] hover:border-[#c89b3c] hover:text-[#c89b3c]"
          >
            RETURN TO PROJECTS <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
