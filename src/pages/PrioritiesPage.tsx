import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { pillars } from '@/data/site';
import SectionLabel from '@/components/shared/SectionLabel';

const details = {
  science: ['Knowledge that solves problems.', 'Research, medicine, biotechnology, education and scientific innovation.'],
  technology: ['Technology that connects and accelerates.', 'AI, computing, digital infrastructure, cybersecurity, communication and renewable-energy technologies.'],
  engineering: ['Engineering that builds.', 'Infrastructure, manufacturing, agriculture, water, energy, transport, minerals and natural-resource development.'],
  perspectives: ['People, policy and society.', 'Security, poverty, education, investment, human development, migration and inclusive economic growth.'],
} as const;

export default function PrioritiesPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>THE WORK / PRIORITIES</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Think. Connect. Innovate. Engineer. Act.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            STAND &amp; STEP is built around four interconnected pillars that organise expertise around the region&apos;s major development challenges.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>FOUR INTERCONNECTED PILLARS</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                Different disciplines. One shared development agenda.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#66706b]">
              The four pillars provide the structure through which STAND &amp; STEP connects research, technology, engineering and wider human-development perspectives to practical action.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {pillars.map((pillar) => {
              const [statement, detail] = details[pillar.id as keyof typeof details];
              return (
                <Link
                  key={pillar.id}
                  href={`/priorities/${pillar.id}`}
                  className="group border border-[#16352b]/15 bg-[#e8e6df] p-8 transition-colors hover:bg-[#16352b] hover:text-[#f4f0e6]"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-[10px] text-[#227a5b] group-hover:text-[#c89b3c]">
                      {pillar.index} / PILLAR
                    </span>
                    <ArrowUpRight size={17} className="text-[#227a5b] group-hover:text-[#c89b3c]" />
                  </div>
                  <h2 className="display mt-12 text-4xl text-[#16352b] group-hover:text-[#f4f0e6]">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-base font-semibold text-[#3f4c46] group-hover:text-[#dce4df]">{statement}</p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#66706b] group-hover:text-[#b6c0b8]">{detail}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#227a5b] group-hover:text-[#c89b3c]">
                    EXPLORE THIS PILLAR <ArrowUpRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#16352b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <SectionLabel light>20 STRATEGIC COMMITTEES</SectionLabel>
            <h2 className="display mt-5 max-w-2xl text-4xl sm:text-5xl">
              The pillars are translated into defined areas of technical work.
            </h2>
          </div>
          <Link href="/committees" className="inline-flex w-fit items-center gap-2 border border-white/30 px-5 py-3 text-[11px] font-bold tracking-[.1em] hover:border-[#c89b3c] hover:text-[#c89b3c]">
            VIEW ALL 20 COMMITTEES <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
