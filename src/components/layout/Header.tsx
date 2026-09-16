import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f4f0e6]/95 shadow-[0_1px_0_rgba(22,53,43,.12)] backdrop-blur-sm'
          : 'bg-[#f4f0e6]'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
          <span className="grid h-10 w-10 place-items-center bg-[#16352b] text-[#c89b3c]">
            <span className="display text-[22px] font-bold leading-none">S</span>
          </span>
          <span className="leading-none">
            <span className="block text-[16px] font-bold tracking-[.16em] text-[#16352b]">
              STAND <span className="text-[#c89b3c]">&amp;</span> STEP
            </span>
            <span className="mono mt-1 block text-[8px] tracking-[.19em] text-[#66706b]">
              Knowledge into action
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`text-[11px] font-bold tracking-[.07em] transition-colors hover:text-[#227a5b] ${
                location === href ? 'text-[#227a5b]' : 'text-[#1b211f]'
              }`}
              data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-involved"
          className="hidden items-center gap-2 bg-[#227a5b] px-4 py-3 text-[11px] font-bold tracking-[.1em] text-white transition-colors hover:bg-[#16352b] focus:outline-none focus:ring-2 focus:ring-[#c89b3c] focus:ring-offset-2 sm:flex"
          data-testid="link-join-network"
        >
          JOIN THE NETWORK <ArrowUpRight size={14} />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center text-[#16352b] xl:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          data-testid="button-mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#16352b]/10 bg-[#f4f0e6] px-5 pb-7 pt-3 xl:hidden">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between border-b border-[#16352b]/10 py-4 text-sm font-semibold text-[#16352b]"
              data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}
            >
              {label}
              <ChevronRight size={16} />
            </Link>
          ))}

          <Link
            href="/get-involved"
            className="mt-5 flex items-center justify-center gap-2 bg-[#227a5b] px-4 py-4 text-xs font-bold tracking-[.1em] text-white"
            data-testid="link-mobile-join"
          >
            JOIN THE NETWORK <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}
