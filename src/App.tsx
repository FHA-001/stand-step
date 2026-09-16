import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { ArrowUpRight, Check, Globe2, Mail, MapPin } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Link, Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { stories } from '@/data/site';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/shared/SectionLabel';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import PrioritiesPage from '@/pages/PrioritiesPage';
import CommitteesPage from '@/pages/CommitteesPage';
import PeoplePage from '@/pages/PeoplePage';

const queryClient = new QueryClient();

function FormPanel({ kind }: { kind: 'contact' | 'join' | 'partner' | 'support' }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  if (sent) return <div className="flex min-h-[360px] flex-col justify-center border border-[#227a5b]/30 bg-[#e8e6df] p-8 sm:p-12"><span className="grid h-11 w-11 place-items-center bg-[#227a5b] text-white"><Check size={20} /></span><h3 className="display mt-7 text-3xl text-[#16352b]">Demo form complete.</h3><p className="mt-4 max-w-sm text-sm leading-6 text-[#66706b]">Thank you{name ? `, ${name}` : ''}. This preview captured the form state locally; nothing was sent or stored.</p><button onClick={() => setSent(false)} className="mt-8 w-fit text-[10px] font-bold tracking-[.1em] text-[#227a5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#227a5b]" data-testid="button-form-again">START AGAIN</button></div>;
  return <form onSubmit={submit} className="grid gap-5 border border-[#16352b]/15 bg-[#e8e6df] p-6 sm:p-10"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">NAME<input required value={name} onChange={e => setName(e.target.value)} className="border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]" placeholder="Your full name" data-testid="input-form-name" /></label><label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">EMAIL<input required type="email" className="border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]" placeholder="you@example.com" data-testid="input-form-email" /></label></div>{kind === 'join' && <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">AREA OF PRACTICE<select className="border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]" data-testid="select-form-practice"><option>Science</option><option>Technology</option><option>Engineering</option><option>Perspectives</option></select></label>}{(kind === 'partner' || kind === 'support') && <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">ORGANISATION<input className="border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]" placeholder="Organisation name" data-testid="input-form-organisation" /></label>}<label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">YOUR NOTE<textarea required className="min-h-[110px] resize-y border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]" placeholder={kind === 'contact' ? 'What would you like to explore?' : kind === 'support' ? 'Tell us how you would like to support the platform...' : 'Tell us a little about your interest...'} data-testid="textarea-form-note" /></label><button className="inline-flex w-fit items-center gap-2 bg-[#227a5b] px-5 py-3 text-[11px] font-bold tracking-[.1em] text-white hover:bg-[#16352b] focus:outline-none focus:ring-2 focus:ring-[#c89b3c]" data-testid="button-form-submit">{kind === 'join' ? 'SUBMIT INTEREST' : kind === 'partner' ? 'START A CONVERSATION' : kind === 'support' ? 'OFFER SUPPORT' : 'SEND MESSAGE'} <ArrowUpRight size={14} /></button><p className="text-[10px] leading-5 text-[#66706b]">Frontend-only form. No account, database or external submission is connected.</p></form>;
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <section className="bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12"><div className="mx-auto max-w-[1200px]"><SectionLabel light>{eyebrow}</SectionLabel><h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">{title}</h1><p className="mt-7 max-w-xl text-base leading-7 text-[#b6c0b8]">{copy}</p></div></section>; }

function GenericPage({ title, eyebrow, copy, children }: { title: string; eyebrow: string; copy: string; children?: ReactNode }) { return <div className="bg-[#f4f0e6]"><PageIntro eyebrow={eyebrow} title={title} copy={copy} /><section className="site-grid min-h-[45vh] py-16 sm:py-24"><div className="mx-auto max-w-[1200px] px-5 sm:px-8">{children || <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]"><div><SectionLabel>DEMO OVERVIEW</SectionLabel><h2 className="display mt-5 text-4xl text-[#16352b]">A clear place for shared work.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#66706b]">This route is ready for the next layer of STAND &amp; STEP content: evidence, people, case studies and decisions that make Northern Nigeria stronger. The design system and content structure are intentionally prepared for Supabase integration later.</p></div>}</div></section></div>; }


function StoryCard({
  story,
  featured,
}: {
  story: (typeof stories)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href="/knowledge-hub"
      className={`group block p-7 transition-colors hover:bg-[#e8e6df] sm:p-9 ${
        featured ? 'lg:row-span-2' : ''
      }`}
      data-testid={`card-story-${story.type.toLowerCase().replaceAll(' ', '-')}`}
    >
      <div className="flex items-center justify-between">
        <span className="mono text-[9px] text-[#227a5b]">{story.type}</span>
        <span className="mono text-[9px] text-[#66706b]">{story.date}</span>
      </div>

      <h3
        className={`display mt-12 leading-tight text-[#16352b] ${
          featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
        }`}
      >
        {story.title}
      </h3>

      <p className="mt-5 text-sm leading-6 text-[#66706b]">{story.excerpt}</p>

      <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b] group-hover:text-[#227a5b]">
        READ MORE <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}

function ContactPage() {
  const [kind, setKind] = useState<'contact' | 'partner' | 'support'>('contact');
  const options: Array<['contact' | 'partner' | 'support', string]> = [['contact', 'General enquiry'], ['partner', 'Partner with us'], ['support', 'Support the platform']];
  return <div className="bg-[#f4f0e6]"><PageIntro eyebrow="CONTACT / PARTNER / SUPPORT" title="Start a useful conversation." copy="Whether you want to collaborate, support the platform or bring a challenge to the network, we would like to hear from you." /><section className="site-grid py-16 sm:py-24"><div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]"><div><SectionLabel>OPEN DOOR</SectionLabel><h2 className="display mt-5 text-4xl text-[#16352b]">Let’s find the next practical step.</h2><div className="mt-10 grid gap-5 text-sm text-[#66706b]"><div className="flex items-center gap-3"><Mail size={16} className="text-[#227a5b]" /> [official email]</div><div className="flex items-center gap-3"><MapPin size={16} className="text-[#227a5b]" /> Northern Nigeria / Nigeria</div><div className="flex items-center gap-3"><Globe2 size={16} className="text-[#227a5b]" /> [official website]</div></div></div><div><div className="mb-5 flex flex-wrap gap-2">{options.map(([value, label]) => <button key={value} onClick={() => setKind(value)} className={`border px-3 py-2 text-[10px] font-bold tracking-[.08em] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#227a5b] ${kind === value ? 'border-[#227a5b] bg-[#227a5b] text-white' : 'border-[#16352b]/20 text-[#66706b]'}`} data-testid={`button-contact-${value}`}>{label}</button>)}</div><FormPanel kind={kind} /></div></div></section></div>;
}

function AppContent() {
  useEffect(() => { document.title = 'STAND & STEP — Knowledge into action'; const description = document.querySelector('meta[name="description"]') || document.createElement('meta'); description.setAttribute('name', 'description'); description.setAttribute('content', 'An institutional platform connecting expertise to practical development action across Northern Nigeria.'); document.head.appendChild(description); }, []);
  return <><Header /><main><Switch><Route path="/" component={HomePage} /><Route path="/about" component={AboutPage} /><Route path="/priorities" component={PrioritiesPage} /><Route path="/committees" component={CommitteesPage} /><Route path="/people" component={PeoplePage} /><Route path="/projects"><GenericPage eyebrow="PROJECTS / PRACTICAL ACTION" title="From good questions to useful outcomes." copy="Project case studies and impact information will appear here when publicly approved project details are available." /></Route><Route path="/knowledge-hub"><GenericPage eyebrow="KNOWLEDGE HUB" title="Evidence worth sharing." copy="Research, policy, innovation, data and opportunity resources will appear here as the network publishes them."><div className="grid gap-px bg-[#16352b]/15 md:grid-cols-3">{stories.map((story, index) => <StoryCard story={story} key={story.title || index} />)}</div></GenericPage></Route><Route path="/get-involved"><div className="bg-[#f4f0e6]"><PageIntro eyebrow="GET INVOLVED" title="We cannot transform Northern Nigeria alone." copy="There is a place for your expertise, your institution, your questions and your support." /><section className="site-grid py-16 sm:py-24"><div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]"><div><SectionLabel>JOIN THE NETWORK</SectionLabel><h2 className="display mt-5 text-4xl text-[#16352b]">Bring what you know.</h2><p className="mt-5 text-sm leading-7 text-[#66706b]">Tell us where you work and what you would like to contribute. This demo form is ready to become a member interest flow.</p></div><FormPanel kind="join" /></div></section></div></Route><Route path="/news-events"><GenericPage eyebrow="NEWS & EVENTS" title="The work, in public." copy="News, events and announcements will appear here when publicly approved information is available." /></Route><Route path="/contact" component={ContactPage} /><Route component={NotFound} /></Switch></main><Footer /></>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) { const [location] = useLocation(); return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>; }
function App() { return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><RoutedErrorBoundary><AppContent /></RoutedErrorBoundary></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>; }
export default App;