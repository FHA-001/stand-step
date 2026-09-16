import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'wouter';

const navItems = [
  ['About', '/about'],
  ['Priorities', '/priorities'],
  ['Committees', '/committees'],
  ['People', '/people'],
  ['Projects', '/projects'],
  ['Knowledge Hub', '/knowledge-hub'],
  ['News & Events', '/news-events'],
  ['Contact', '/contact'],
] as const;

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[#16352b] text-[#f4f0e6]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.35fr_.8fr_.8fr_.8fr] lg:px-12 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-[#c89b3c] text-[#c89b3c]">
              <span className="display text-[22px] font-bold">S</span>
            </span>
            <span className="text-[16px] font-bold tracking-[.16em]">
              STAND <span className="text-[#c89b3c]">&amp;</span> STEP
            </span>
          </div>

          <p className="mt-6 max-w-xs text-sm leading-7 text-[#b6c0b8]">
            Strategic Agenda for Northern Development: Science, Technology &amp; Engineering Perspective.
          </p>

          <div className="mt-7 flex items-center gap-2 text-[10px] text-[#b6c0b8]">
            <MapPin size={13} className="text-[#c89b3c]" />
            NORTHERN NIGERIA · NIGERIA
          </div>
        </div>

        <FooterColumn title="Explore" links={navItems.slice(0, 4)} />

        <FooterColumn
          title="Work with us"
          links={[
            ['Projects', '/projects'],
            ['Get involved', '/get-involved'],
            ['Partner with us', '/contact'],
            ['Support STAND & STEP', '/get-involved'],
          ]}
        />

        <div>
          <p className="mono text-[10px] text-[#c89b3c]">Stay close to the work</p>
          <p className="mt-4 text-sm leading-6 text-[#b6c0b8]">
            Occasional notes on evidence, people and progress.
          </p>

          {subscribed ? (
            <p className="mt-5 text-xs leading-5 text-[#c89b3c]">
              Demo signup complete. Nothing was sent or stored.
            </p>
          ) : (
            <form
              className="mt-5 flex border-b border-[#718078]"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <input
                required
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-[#8b9a90]"
                aria-label="Email address"
                data-testid="input-footer-email"
              />
              <button
                aria-label="Subscribe to updates"
                className="px-2 text-[#c89b3c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c89b3c]"
                data-testid="button-subscribe"
              >
                <ArrowUpRight size={17} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 text-[10px] tracking-[.06em] text-[#93a39a] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>© 2026 STAND &amp; STEP.</span>
          <span>Built for shared progress, not individual credit.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <p className="mono text-[10px] text-[#c89b3c]">{title}</p>
      <div className="mt-4 grid gap-3">
        {links.map(([label, href]) => (
          <Link
            key={`${href}-${label}`}
            href={href}
            className="w-fit text-sm text-[#f4f0e6] transition-colors hover:text-[#c89b3c]"
            data-testid={`link-footer-${label.toLowerCase().replaceAll(' ', '-')}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
