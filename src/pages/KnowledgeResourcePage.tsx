import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useRoute } from 'wouter';
import SectionLabel from '@/components/shared/SectionLabel';

const resources = {
  'demo-research-resource': {
    type: 'Research',
    title: 'Demo Research Resource',
    description:
      'This demonstration shows the structure for a future research paper, technical study or research opportunity.',
    body:
      'Approved research summaries, methods, findings, authorship information, publication details and downloadable files can be introduced here when real content is available.',
  },
  'demo-policy-brief': {
    type: 'Policy',
    title: 'Demo Policy Brief',
    description:
      'This demonstration shows the structure for a future policy brief, position paper or development framework.',
    body:
      'Approved policy context, evidence, recommendations and publication information can be presented here once the organisation releases real material.',
  },
  'demo-data-resource': {
    type: 'Data',
    title: 'Demo Data Resource',
    description:
      'This demonstration shows the structure for a future dataset, indicator, map or sector dashboard.',
    body:
      'Approved data sources, methodology, coverage, update dates and access information can be displayed here once real resources are available.',
  },
} as const;

export default function KnowledgeResourcePage() {
  const [, params] = useRoute('/knowledge-hub/:slug');
  const slug = params?.slug ?? '';
  const resource = resources[slug as keyof typeof resources];

  if (!resource) {
    return (
      <div className="min-h-screen bg-[#f4f0e6] px-5 pb-24 pt-36 sm:px-8">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>RESOURCE NOT FOUND</SectionLabel>
          <h1 className="display mt-6 text-5xl text-[#16352b]">
            This Knowledge Hub resource is not available.
          </h1>
          <Link
            href="/knowledge-hub"
            className="mt-8 inline-flex items-center gap-2 border border-[#16352b] px-5 py-3 text-[11px] font-bold tracking-[.1em] text-[#16352b]"
          >
            <ArrowLeft size={14} /> RETURN TO KNOWLEDGE HUB
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
            href="/knowledge-hub"
            className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#c89b3c]"
          >
            <ArrowLeft size={13} /> KNOWLEDGE HUB
          </Link>

          <SectionLabel light>DEMO RESOURCE / {resource.type.toUpperCase()}</SectionLabel>
          <h1 className="display mt-6 max-w-5xl text-5xl leading-[1.02] sm:text-7xl">
            {resource.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            {resource.description}
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="border border-[#c89b3c]/40 bg-[#fff7e6] p-5 text-sm leading-7 text-[#66562f]">
            <strong>Demonstration content:</strong> this page shows how a future Knowledge Hub
            resource can be structured. It does not represent a real published STAND &amp; STEP
            resource.
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <SectionLabel>RESOURCE OVERVIEW</SectionLabel>
              <h2 className="display mt-5 text-4xl text-[#16352b]">
                A clear structure for approved knowledge.
              </h2>
            </div>

            <p className="text-base leading-8 text-[#66706b]">{resource.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <SectionLabel light>KNOWLEDGE HUB</SectionLabel>
            <h2 className="display mt-5 text-4xl sm:text-5xl">
              Return to the resource directory.
            </h2>
          </div>

          <Link
            href="/knowledge-hub"
            className="inline-flex w-fit items-center gap-2 border border-white/30 px-5 py-3 text-[11px] font-bold tracking-[.1em] hover:border-[#c89b3c] hover:text-[#c89b3c]"
          >
            VIEW KNOWLEDGE HUB <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
