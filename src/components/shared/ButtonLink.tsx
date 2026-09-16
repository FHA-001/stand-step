import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

export default function ButtonLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 border px-5 py-3 text-[11px] font-bold tracking-[.1em] transition-all hover:-translate-y-0.5 ${
        dark
          ? 'border-[#f4f0e6]/30 text-[#f4f0e6] hover:border-[#c89b3c] hover:text-[#c89b3c]'
          : 'border-[#16352b] text-[#16352b] hover:bg-[#16352b] hover:text-[#f4f0e6]'
      }`}
      data-testid={`link-cta-${href.replaceAll('/', '') || 'home'}`}
    >
      {children}
      <ArrowUpRight size={14} />
    </Link>
  );
}
