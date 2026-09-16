import { type FormEvent, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';

function JoinForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[360px] flex-col justify-center border border-[#227a5b]/30 bg-[#e8e6df] p-8 sm:p-12">
        <span className="grid h-11 w-11 place-items-center bg-[#227a5b] text-white">
          <Check size={20} />
        </span>
        <h3 className="display mt-7 text-3xl text-[#16352b]">Demo form complete.</h3>
        <p className="mt-4 max-w-sm text-sm leading-6 text-[#66706b]">
          Thank you{name ? `, ${name}` : ''}. This preview captured the form state locally; nothing was sent or stored.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-8 w-fit text-[10px] font-bold tracking-[.1em] text-[#227a5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#227a5b]"
          data-testid="button-form-again"
        >
          START AGAIN
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5 border border-[#16352b]/15 bg-[#e8e6df] p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
          NAME
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
            placeholder="Your full name"
            data-testid="input-form-name"
          />
        </label>
        <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
          EMAIL
          <input
            required
            type="email"
            className="border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
            placeholder="you@example.com"
            data-testid="input-form-email"
          />
        </label>
      </div>

      <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
        AREA OF PRACTICE
        <select
          className="border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
          data-testid="select-form-practice"
        >
          <option>Science</option>
          <option>Technology</option>
          <option>Engineering</option>
          <option>Perspectives</option>
        </select>
      </label>

      <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
        YOUR NOTE
        <textarea
          required
          className="min-h-[110px] resize-y border-b border-[#16352b]/25 bg-transparent px-0 py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
          placeholder="Tell us a little about your interest..."
          data-testid="textarea-form-note"
        />
      </label>

      <button
        className="inline-flex w-fit items-center gap-2 bg-[#227a5b] px-5 py-3 text-[11px] font-bold tracking-[.1em] text-white hover:bg-[#16352b] focus:outline-none focus:ring-2 focus:ring-[#c89b3c]"
        data-testid="button-form-submit"
      >
        SUBMIT INTEREST <ArrowUpRight size={14} />
      </button>

      <p className="text-[10px] leading-5 text-[#66706b]">
        Frontend-only form. No account, database or external submission is connected.
      </p>
    </form>
  );
}

export default function GetInvolvedPage() {
  return (
    <div className="bg-[#f4f0e6]">
      <section className="bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel light>GET INVOLVED</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            We cannot transform Northern Nigeria alone.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#b6c0b8]">
            There is a place for your expertise, your institution, your questions and your support.
          </p>
        </div>
      </section>

      <section className="site-grid py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel>JOIN THE NETWORK</SectionLabel>
            <h2 className="display mt-5 text-4xl text-[#16352b]">Bring what you know.</h2>
            <p className="mt-5 text-sm leading-7 text-[#66706b]">
              Tell us where you work and what you would like to contribute. This demo form is ready to become a member interest flow.
            </p>
          </div>

          <JoinForm />
        </div>
      </section>
    </div>
  );
}
