import type { ReactNode } from 'react';

export default function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mono flex items-center gap-3 text-[10px] font-medium ${
        light ? 'text-[#c89b3c]' : 'text-[#227a5b]'
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </div>
  );
}
