import { type FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Handshake, HelpCircle, Mail, MessageSquare } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';

const contactTypes = [
  {
    icon: MessageSquare,
    title: 'General Enquiry',
    copy: 'Questions about STAND & STEP, its work, committees or public information.',
  },
  {
    icon: Handshake,
    title: 'Partnership Enquiry',
    copy: 'For institutions and organisations interested in collaboration or supporting projects.',
  },
  {
    icon: HelpCircle,
    title: 'Website / Support',
    copy: 'For questions about the website, public resources or access to information.',
  },
] as const;

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#f4f0e6]">
      <section className="relative overflow-hidden bg-[#16352b] px-5 pb-20 pt-36 text-[#f4f0e6] sm:px-8 sm:pb-28 lg:px-12">
        <div className="dark-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1200px]">
          <SectionLabel light>CONTACT</SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Start a conversation.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b6c0b8]">
            Use this page for general enquiries, partnership discussions and website-related
            support. Official contact details will be added only when approved.
          </p>
        </div>
      </section>

      <section className="site-grid py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>CONTACT OPTIONS</SectionLabel>
              <h2 className="display mt-5 text-4xl leading-tight text-[#16352b] sm:text-5xl">
                Direct your enquiry to the right place.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#66706b]">
              No phone number, email address or physical office location has been invented.
              Those details should be published only after the organisation supplies and approves them.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {contactTypes.map(({ icon: Icon, title, copy }) => (
              <article
                key={title}
                className="border border-[#16352b]/15 bg-[#e8e6df] p-7"
              >
                <span className="grid h-11 w-11 place-items-center bg-[#16352b] text-[#c89b3c]">
                  <Icon size={18} />
                </span>
                <h3 className="display mt-8 text-3xl text-[#16352b]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#66706b]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e6df] py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <SectionLabel>CONTACT FORM</SectionLabel>
            <h2 className="display mt-5 text-4xl text-[#16352b] sm:text-5xl">
              Send an enquiry.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#66706b]">
              The form remains frontend-only until the approved contact and database workflow is
              connected during the backend phase.
            </p>

            <div className="mt-8 border-t border-[#16352b]/15 pt-6">
              <div className="flex items-center gap-3 text-[#227a5b]">
                <Mail size={17} />
                <span className="mono text-[9px]">OFFICIAL CONTACT DETAILS</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#66706b]">
                Email: To be provided
                <br />
                Phone: To be provided
                <br />
                Office: To be provided
              </p>
            </div>
          </div>

          {sent ? (
            <div className="flex min-h-[430px] flex-col justify-center border border-[#227a5b]/30 bg-[#f4f0e6] p-8 sm:p-12">
              <span className="grid h-11 w-11 place-items-center bg-[#227a5b] text-white">
                <Check size={20} />
              </span>
              <h3 className="display mt-7 text-3xl text-[#16352b]">Demo form complete.</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#66706b]">
                Nothing was sent or stored. The real contact workflow will be connected during
                the backend phase.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 w-fit text-[10px] font-bold tracking-[.1em] text-[#227a5b]"
              >
                SEND ANOTHER ENQUIRY
              </button>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="grid gap-5 border border-[#16352b]/15 bg-[#f4f0e6] p-6 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="NAME" placeholder="Your full name" required />
                <Field label="EMAIL" placeholder="you@example.com" type="email" required />
              </div>

              <Field label="ORGANISATION / AFFILIATION" placeholder="Optional" />

              <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
                ENQUIRY TYPE
                <select
                  required
                  className="border-b border-[#16352b]/25 bg-transparent py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  <option>General Enquiry</option>
                  <option>Partnership Enquiry</option>
                  <option>Website / Support</option>
                </select>
              </label>

              <Field label="SUBJECT" placeholder="Subject of your enquiry" required />

              <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
                MESSAGE
                <textarea
                  required
                  className="min-h-[150px] resize-y border-b border-[#16352b]/25 bg-transparent py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
                  placeholder="Write your message..."
                />
              </label>

              <button className="inline-flex w-fit items-center gap-2 bg-[#227a5b] px-5 py-3 text-[11px] font-bold tracking-[.1em] text-white hover:bg-[#16352b]">
                SUBMIT ENQUIRY <ArrowUpRight size={14} />
              </button>

              <p className="text-[10px] leading-5 text-[#66706b]">
                Frontend-only form. No message is transmitted or stored yet.
              </p>
            </form>
          )}
        </div>
      </section>

      <section className="bg-[#16352b] py-16 text-[#f4f0e6] sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <SectionLabel light>PARTNERSHIP &amp; COLLABORATION</SectionLabel>
          <h2 className="display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
            Expertise, ideas and institutional partnerships are welcome.
          </h2>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-[10px] font-bold tracking-[.1em] text-[#16352b]">
      {label}
      <input
        required={required}
        type={type}
        className="border-b border-[#16352b]/25 bg-transparent py-3 text-sm font-normal tracking-normal outline-none focus:border-[#227a5b]"
        placeholder={placeholder}
      />
    </label>
  );
}
