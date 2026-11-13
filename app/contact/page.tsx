import type { ComponentType } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Uma Dental Care",
  description: "Get in touch with Uma Dental Care to book an appointment or ask a question.",
};

type InfoLine = { text: string; href?: string; external?: boolean; strong?: boolean };

// Details from the clinic signboard.
const ADDRESS =
  "Below Sahara India Office, North of Axis Bank, Supaul Kachahri Road, Supaul Bazar, Supaul, Bihar 852131";
const MAP_QUERY = encodeURIComponent(`Uma Dental Care, ${ADDRESS}`);
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

const contactInfo: { icon: ComponentType<{ className?: string }>; title: string; lines: InfoLine[] }[] = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      { text: "+91 93085 07247", href: "tel:+919308507247" },
      { text: "+91 86748 95526", href: "tel:+918674895526" },
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [{ text: "karan_apurva@yahoo.com", href: "mailto:karan_apurva@yahoo.com" }],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      { text: "Below Sahara India Office, North of Axis Bank," },
      { text: "Supaul Kachahri Road, Supaul Bazar," },
      { text: "Supaul, Bihar – 852131" },
      { text: "Get Directions →", href: MAPS_URL, external: true },
    ],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: [
      { text: "Morning: 9:30 AM – 2:00 PM" },
      { text: "Evening: 4:00 PM – 7:00 PM" },
      { text: "Sunday Closed", strong: true },
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
            We&apos;d Love to <span className="text-action">Hear From You</span>
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
        <div className="relative z-10 -mt-10 rounded-2xl bg-white p-5 shadow-[0_18px_45px_-20px_rgba(11,45,91,0.35)] ring-1 ring-highlight/25 sm:-mt-14 sm:p-8 lg:m-0 lg:rounded-3xl lg:p-10 lg:shadow-none lg:ring-1 lg:ring-brand/10">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-linear-to-b from-action to-highlight" />
            <div>
              <h2 className="text-xl font-bold text-brand sm:text-2xl lg:text-3xl">Send Us a Message</h2>
              <p className="mt-0.5 text-xs text-brand/60 sm:text-sm">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-10 px-4 pb-12 pt-14 sm:gap-y-12 sm:pb-16 sm:pt-20 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {contactInfo.map(({ icon: Icon, title, lines }) => (
          <div
            key={title}
            className="group relative mx-auto w-full max-w-xs rounded-2xl bg-white px-4 pb-5 pt-9 text-center sm:max-w-none sm:rounded-3xl sm:px-6 sm:pb-8 sm:pt-12 shadow-[0_18px_45px_-20px_rgba(11,45,91,0.35)] ring-1 ring-highlight/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_-18px_rgba(47,128,237,0.45)]"
          >
            {/* Floating icon */}
            <span className="absolute -top-6 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-xl sm:-top-7 sm:h-14 sm:w-14 sm:rounded-2xl bg-linear-to-br from-action to-brand text-white shadow-lg shadow-action/30 ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>

            {/* Decorative watermark icon */}
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
              <Icon className="absolute -bottom-5 -right-5 h-20 w-20 sm:-bottom-6 sm:-right-6 sm:h-28 sm:w-28 text-light transition-colors duration-300 group-hover:text-highlight/20" />
            </span>

            <div className="relative">
              <h3 className="text-base font-bold text-brand sm:text-lg">{title}</h3>
              <span className="mx-auto mt-2 block h-0.5 w-8 rounded-full bg-highlight" />
              <div className="mt-3 space-y-1 sm:mt-4 sm:space-y-1.5">
                {lines.map(({ text, href, external, strong }) => (
                  <p
                    key={text}
                    className={`text-sm [overflow-wrap:anywhere] ${
                      strong
                        ? "pt-1 font-bold uppercase tracking-wide text-brand"
                        : "text-brand/70"
                    }`}
                  >
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="font-medium transition-colors hover:text-action"
                      >
                        {text}
                      </a>
                    ) : (
                      text
                    )}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom accent bar */}
            <span className="absolute inset-x-6 bottom-0 h-1 origin-left scale-x-0 rounded-t-full bg-linear-to-r from-action to-highlight transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>

    {/* Map */}
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
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
