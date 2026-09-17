import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import SectionLabel from '@/components/shared/SectionLabel';

const categories = [
  {
    title: 'Research',
    items: ['Research papers', 'Technical studies', 'Datasets', 'Research opportunities'],
  },
  {
    title: 'Policy',
    items: ['Policy briefs', 'Position papers', 'Development frameworks'],
  },
  {
    title: 'Innovation',
    items: ['Technology projects', 'Startups', 'Local innovations', 'Intellectual property'],
  },
  {
    title: 'Data',
    items: ['Northern Nigeria development indicators', 'Interactive maps', 'Sector dashboards', 'Open datasets'],
  },
  {
    title: 'Opportunities',
    items: ['Grants', 'Fellowships', 'Scholarships', 'Jobs', 'Research collaborations', 'Investment opportunities'],
  },
] as const;

const demoResources = [
  {
    slug: 'demo-research-resource',
    type: 'Research',
    title: 'Demo Research Resource',
    summary:
      'A sample resource showing how approved research papers and technical studies can be presented in the Knowledge Hub.',
  },
  {
    slug: 'demo-policy-brief',
    type: 'Policy',
    title: 'Demo Policy Brief',
    summary:
      'A sample resource showing how evidence-based policy briefs and position papers can be structured for public access.',
  },
  {
    slug: 'demo-data-resource',
    type: 'Data',
    title: 'Demo Data Resource',
    summary:
      'A sample resource showing where approved indicators, datasets, maps and sector dashboards can be introduced.',
  },
] as const;

export default function KnowledgeHubPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>NORTHERN DEVELOPMENT KNOWLEDGE HUB</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Evidence worth sharing.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            The Knowledge Hub is designed to bring together research, policy, innovation, data
            and opportunities that can support Northern Nigeria&apos;s development priorities.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>KNOWLEDGE CATEGORIES</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                A structured home for knowledge, evidence and opportunity.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#66706b]">
              The hub is organised around the categories defined in the STAND &amp; STEP
              framework. Real resources will be added only when they are approved for public
              release.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <article
                key={category.title}
                className="border border-[#16352b]/15 bg-[#e8e6df] p-7"
              >
                <span className="mono text-[9px] text-[#227a5b]">
                  {String(index + 1).padStart(2, '0')} / CATEGORY
                </span>
                <h3 className="display mt-8 text-3xl text-[#16352b]">{category.title}</h3>

                <ul className="mt-6 space-y-3">
                  {category.items.map((item) => (
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

      <section className="bg-[#16352b] py-20 text-[#f4f0e6] sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel light>DATA &amp; DEVELOPMENT INSIGHT</SectionLabel>
          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Development indicators',
              'Interactive maps',
              'Sector dashboards',
              'Open datasets',
            ].map((item, index) => (
              <div key={item} className="bg-[#16352b] p-6">
                <span className="mono text-[9px] text-[#c89b3c]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-8 text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel>DEMO RESOURCES</SectionLabel>
          <h2 className="display mt-5 text-4xl text-[#16352b] sm:text-5xl">
            The resource architecture is ready for approved content.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#66706b]">
            The entries below are demonstrations only. They show how future research, policy
            and data resources can be presented without implying that STAND &amp; STEP has
            already published them.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {demoResources.map((resource, index) => (
              <Link
                key={resource.slug}
                href={`/knowledge-hub/${resource.slug}`}
                className="group flex min-h-[300px] flex-col justify-between border border-[#16352b]/15 bg-[#f4f0e6] p-7 transition-colors hover:bg-[#16352b]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="mono text-[9px] text-[#227a5b] group-hover:text-[#c89b3c]">
                      DEMO RESOURCE {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 text-xs text-[#66706b] group-hover:text-[#b6c0b8]">
                      {resource.type}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#227a5b] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c89b3c]"
                  />
                </div>

                <div>
                  <h3 className="display text-3xl leading-tight text-[#16352b] group-hover:text-[#f4f0e6]">
                    {resource.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#66706b] group-hover:text-[#b6c0b8]">
                    {resource.summary}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#227a5b] group-hover:text-[#c89b3c]">
                    VIEW DEMO RESOURCE <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#227a5b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel light>OPPORTUNITIES</SectionLabel>
          <h2 className="display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
            Grants, fellowships, scholarships, jobs, collaborations and investment opportunities.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d7e1db]">
            Opportunity listings will be added here when approved information becomes available.
          </p>
        </div>
      </section>
    </div>
  );
}
