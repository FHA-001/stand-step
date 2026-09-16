import { pillars } from '@/data/site';
import SectionLabel from '@/components/shared/SectionLabel';

export default function PrioritiesPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel light>THE WORK / PRIORITIES</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Think. Connect. Innovate. Engineer. Act.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#b6c0b8]">
            A shared agenda for the questions that matter most. Explore the four connected pillars of STAND &amp; STEP.
          </p>
        </div>
      </section>

      <section className="site-grid min-h-[45vh] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                className="border border-[#16352b]/15 bg-[#e8e6df] p-8"
                key={pillar.id}
              >
                <span className="mono text-[10px] text-[#227a5b]">
                  {pillar.index} / PILLAR
                </span>
                <h2 className="display mt-12 text-3xl text-[#16352b]">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#66706b]">
                  {pillar.description}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#66706b]">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
