import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import SectionLabel from '@/components/shared/SectionLabel';

const demoProjects = [
  {
    slug: 'demo-regional-research-programme',
    title: 'Demo Regional Research Programme',
    sector: 'Research',
    location: 'Northern Nigeria',
    status: 'Concept',
    description:
      'A sample project card showing how STAND & STEP research initiatives can be presented once approved project information becomes available.',
  },
  {
    slug: 'demo-technology-pilot',
    title: 'Demo Technology Pilot',
    sector: 'Innovation',
    location: 'Northern Nigeria',
    status: 'Pilot',
    description:
      'A sample project card demonstrating how technology or engineering pilots can be documented from problem definition through implementation.',
  },
  {
    slug: 'demo-partnership-project',
    title: 'Demo Partnership Project',
    sector: 'Partnerships',
    location: 'Northern Nigeria',
    status: 'Research',
    description:
      'A sample project card illustrating how collaborative work with institutions and development partners can be structured on the website.',
  },
] as const;

const statuses = ['Concept', 'Research', 'Pilot', 'Implementation', 'Completed'];

export default function ProjectsPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>PROJECTS / FROM EXPERTISE TO IMPACT</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            From ideas to projects.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            This section will showcase projects developed or supported by STAND &amp; STEP,
            documenting the challenge, evidence, proposed solution, partners, location, status and
            measurable impact.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>PROJECT STRUCTURE</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                Every project should tell the full story.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#66706b]">
              STAND &amp; STEP project pages are designed to show what problem is being addressed,
              what the evidence says, what solution is proposed, who is involved, where the work
              takes place, what stage it has reached and what measurable change has been achieved.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-[#16352b]/15 sm:grid-cols-2 lg:grid-cols-4">
            {['Problem', 'Evidence', 'Solution', 'Partners', 'Location', 'Status', 'Impact'].map(
              (item, index) => (
                <div key={item} className="bg-[#e8e6df] p-6">
                  <span className="mono text-[9px] text-[#227a5b]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-8 text-sm font-semibold text-[#16352b]">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e6df] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>PROJECT STATUS</SectionLabel>
              <h2 className="display mt-5 text-4xl text-[#16352b] sm:text-5xl">
                A clear path from concept to completion.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#66706b]">
              The approved project status model allows visitors to understand how far an initiative
              has progressed without overstating results.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-[#16352b]/15 sm:grid-cols-2 lg:grid-cols-5">
            {statuses.map((status, index) => (
              <div key={status} className="bg-[#f4f0e6] p-6">
                <span className="mono text-[9px] text-[#227a5b]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-8 text-sm font-semibold text-[#16352b]">{status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div>
            <SectionLabel>DEMO PROJECTS</SectionLabel>
            <h2 className="display mt-5 text-4xl text-[#16352b] sm:text-5xl">
              The project directory is ready for approved content.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#66706b]">
              The entries below are clearly labelled demonstrations only. They show the structure
              that real STAND &amp; STEP projects will use once approved project information is
              supplied.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {demoProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex min-h-[330px] flex-col justify-between border border-[#16352b]/15 bg-[#f4f0e6] p-7 transition-colors hover:bg-[#16352b]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="mono text-[9px] text-[#227a5b] group-hover:text-[#c89b3c]">
                      DEMO PROJECT {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 text-xs text-[#66706b] group-hover:text-[#b6c0b8]">
                      {project.sector} · {project.location}
                    </p>
                  </div>

                  <span className="border border-[#227a5b]/40 px-2 py-1 text-[8px] font-bold tracking-[.1em] text-[#227a5b] group-hover:border-[#c89b3c]/50 group-hover:text-[#c89b3c]">
                    {project.status.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h3 className="display text-3xl leading-tight text-[#16352b] group-hover:text-[#f4f0e6]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#66706b] group-hover:text-[#b6c0b8]">
                    {project.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#227a5b] group-hover:text-[#c89b3c]">
                    VIEW DEMO PROJECT <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#227a5b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel light>FROM EXPERTISE TO IMPACT</SectionLabel>
          <h2 className="display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
            Projects should turn evidence and expertise into measurable change.
          </h2>
        </div>
      </section>
    </div>
  );
}
