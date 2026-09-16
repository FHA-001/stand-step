import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import SectionLabel from '@/components/shared/SectionLabel';

const committees = [
  'Science & Technology',
  'Science Education',
  'Medical & Health Services',
  'Pharmaceuticals & Drug Abuse'
];

export default function SciencePage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <Link href="/priorities" className="mb-7 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#c89b3c]">
            <ArrowLeft size={13} /> ALL PRIORITIES
          </Link>
          <SectionLabel light>PILLAR 01 / SCIENCE</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">Science</h1>
          <p className="mt-7 max-w-xl text-xl leading-8 text-[#d2d8d2]">Knowledge that solves problems.</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#aebbb3]">Research, medicine, biotechnology, education and scientific innovation.</p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>STRATEGIC COMMITTEES</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                The committees working within this pillar.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#66706b]">The Science pillar brings together research, education, medicine, biotechnology, pharmaceuticals and related scientific expertise around practical regional development priorities.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {committees.map((committee, index) => (
              <div key={committee} className="border border-[#16352b]/15 bg-[#e8e6df] p-7">
                <span className="mono text-[9px] text-[#227a5b]">
                  {String(index + 1).padStart(2, '0')} / COMMITTEE
                </span>
                <h3 className="display mt-8 text-3xl text-[#16352b]">{committee}</h3>
              </div>
            ))}
          </div>

          <Link href="/committees" className="mt-10 inline-flex items-center gap-2 border border-[#16352b] px-5 py-3 text-[11px] font-bold tracking-[.1em] text-[#16352b] hover:bg-[#16352b] hover:text-[#f4f0e6]">
            VIEW FULL COMMITTEE DIRECTORY <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
