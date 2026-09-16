import SectionLabel from '@/components/shared/SectionLabel';

export default function AboutPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel light>ABOUT STAND &amp; STEP</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Harnessing expertise for Northern development.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#b6c0b8]">
            We are building an independent, practical platform for people who believe the region’s future should be shaped by its own evidence, ingenuity and leadership.
          </p>
        </div>
      </section>

      <section className="site-grid min-h-[45vh] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <SectionLabel>DEMO OVERVIEW</SectionLabel>
              <h2 className="display mt-5 text-4xl text-[#16352b]">
                A clear place for shared work.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#66706b]">
              This route is ready for the next layer of STAND &amp; STEP content: evidence, people, case studies and decisions that make Northern Nigeria stronger. The design system and content structure are intentionally prepared for Supabase integration later.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
