import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { stories } from '@/data/site';
import SectionLabel from '@/components/shared/SectionLabel';

export default function KnowledgeHubPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel light>KNOWLEDGE HUB</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Evidence worth sharing.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#b6c0b8]">
            Research, policy, innovation, data and opportunity resources will appear here as the network publishes them.
          </p>
        </div>
      </section>

      <section className="site-grid min-h-[45vh] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-px bg-[#16352b]/15 md:grid-cols-3">
            {stories.map((story) => (
              <Link
                key={story.title}
                href="/knowledge-hub"
                className="group block bg-[#f4f0e6] p-7 transition-colors hover:bg-[#e8e6df] sm:p-9"
                data-testid={`card-story-${story.type.toLowerCase().replaceAll(' ', '-')}`}
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[9px] text-[#227a5b]">{story.type}</span>
                  <span className="mono text-[9px] text-[#66706b]">{story.date}</span>
                </div>
                <h3 className="display mt-12 text-2xl leading-tight text-[#16352b]">
                  {story.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-[#66706b]">
                  {story.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b] group-hover:text-[#227a5b]">
                  READ MORE <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
