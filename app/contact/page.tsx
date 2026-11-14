import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Uma Dental Care",
  description: "Get in touch with Uma Dental Care to book an appointment or ask a question.",
};

const ADDRESS =
  "Below Sahara India Office, North of Axis Bank, Supaul Kachahri Road, Supaul Bazar, Supaul, Bihar 852131";
const MAP_QUERY = encodeURIComponent(`Uma Dental Care, ${ADDRESS}`);
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

type ContactItem = {
  label: string;
  lines: { text: string; href?: string; strong?: boolean }[];
  href?: string;
  external?: boolean;
};

// Details from the clinic signboard.
const contactInfo: ContactItem[] = [
  {
    label: "Call us",
    lines: [
      { text: "+91 93085 07247", href: "tel:+919308507247" },
      { text: "+91 86748 95526", href: "tel:+918674895526" },
    ],
  },
  {
    label: "Email us",
    lines: [{ text: "karan_apurva@yahoo.com" }],
    href: "mailto:karan_apurva@yahoo.com",
  },
  {
    label: "Visit us",
    lines: [
      { text: "Below Sahara India Office, North of Axis Bank," },
      { text: "Supaul Kachahri Road, Supaul Bazar," },
      { text: "Supaul, Bihar – 852131" },
    ],
    href: MAPS_URL,
    external: true,
  },
  {
    label: "Clinic timings",
    lines: [
      { text: "Mon – Sat" },
      { text: "Morning: 9:30 AM – 2:00 PM" },
      { text: "Evening: 4:00 PM – 7:00 PM" },
      { text: "Sunday closed", strong: true },
    ],
  },
];

const ContactPage = () => (
  <main>
    {/* Header — plain, no photo */}
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-6 sm:px-6 sm:pb-4 sm:pt-8 md:pt-10 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold leading-[1.2] tracking-tight text-brand sm:text-4xl lg:text-[2.75rem]">
            Get in <span className="text-action">Touch</span>
          </h1>

          <p className="mt-2 text-sm text-brand/60 sm:text-base">
            Reach out anytime, we&apos;re happy to help.
          </p>
        </div>
      </div>
    </section>

    {/* Image + contact form */}
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-stretch px-4 pt-4 sm:px-6 sm:pt-8 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Phones/tablets: short photo strip; desktop: full-height side photo */}
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-light sm:aspect-21/9 lg:aspect-auto lg:min-h-full lg:rounded-3xl">
          <Image
            src="/contacts.png"
            alt="Tooth model and toothbrushes at Uma Dental Care"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[85%_center]"
          />
        </div>

        {/* Form card — overlaps the photo on phones/tablets */}
        <div className="relative z-10 -mt-10 rounded-2xl bg-white p-4 shadow-[0_18px_45px_-20px_rgba(11,45,91,0.35)] ring-1 ring-highlight/25 sm:-mt-14 sm:p-8 lg:m-0 lg:rounded-3xl lg:p-10 lg:shadow-none lg:ring-1 lg:ring-brand/10">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded-full sm:h-8 bg-linear-to-b from-action to-highlight" />
            <div>
              <h2 className="text-lg font-bold text-brand sm:text-2xl lg:text-3xl">Send Us a Message</h2>
              <p className="mt-0.5 hidden text-sm text-brand/60 sm:block">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          </div>
          <div className="mt-3 sm:mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    {/* Contact details — one row */}
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8">
        <ul className="grid overflow-hidden rounded-2xl ring-1 ring-brand/15 sm:grid-cols-2 lg:grid-cols-[1fr_1.15fr_1.5fr_1.25fr]">
          {contactInfo.map(({ label, lines, href, external }, i) => {
            const cls = `group relative block h-full px-5 py-4 sm:px-6 sm:py-5
              ${i > 0 ? "border-t border-brand/10" : ""}
              ${i === 1 ? "sm:border-t-0" : ""}
              ${i % 2 === 1 ? "sm:border-l" : ""}
              ${i >= 1 ? "lg:border-l lg:border-t-0" : ""}`;
            const body = (
              <>
                <p className="flex items-center justify-between gap-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-action">
                  {label}
                  {href && (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-brand/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-action" />
                  )}
                </p>
                <div className="mt-1.5 space-y-0.5">
                  {lines.map(({ text, href: lineHref, strong }) => (
                    <p
                      key={text}
                      className={`text-sm leading-snug [overflow-wrap:anywhere] sm:text-[0.95rem] ${
                        strong ? "pt-1 font-bold uppercase tracking-wide text-brand" : "font-semibold text-brand"
                      }`}
                    >
                      {lineHref ? (
                        <a href={lineHref} className="transition-colors hover:text-action">{text}</a>
                      ) : (
                        text
                      )}
                    </p>
                  ))}
                </div>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`${cls} transition-colors hover:[&_p]:text-action`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>

    {/* Map */}
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_-28px_rgba(11,45,91,0.4)] ring-1 ring-highlight/25">
          <iframe
            title="Uma Dental Care location on Google Maps"
            src={MAP_EMBED_URL}
            className="block h-72 w-full border-0 sm:h-96 lg:h-120"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Address card over the map (tablet/desktop) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden p-6 md:block">
            <div className="pointer-events-auto max-w-sm rounded-2xl bg-white/95 p-5 shadow-lg ring-1 ring-highlight/25 backdrop-blur">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-action">
                <MapPin className="h-4 w-4" />
                Find Us Here
              </p>
              <p className="mt-2 font-semibold text-brand">Uma Dental Care</p>
              <p className="mt-1 text-sm leading-relaxed text-brand/70">{ADDRESS.replace(" 852131", " – 852131")}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-action"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Directions button under the map (phones) */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-action md:hidden"
        >
          <MapPin className="h-4 w-4" />
          Get Directions
        </a>
      </div>
    </section>
  </main>
);

export default ContactPage;
