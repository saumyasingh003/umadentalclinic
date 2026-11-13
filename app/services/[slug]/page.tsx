import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, ChevronRight, Phone, UserCheck } from "lucide-react";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Uma Dental Care`,
    description: service.text,
  };
}

const phones = ["9308507247", "8674895526"];

const ServicePage = async ({ params }: PageProps<"/services/[slug]">) => {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { icon: Icon, title, text, overview, idealFor, benefits, steps } = service;
  const bookHref = `/book-appointment?service=${encodeURIComponent(title)}`;
  // The next four services after this one (wrapping around)
  const idx = services.findIndex((s) => s.slug === slug);
  const others = Array.from({ length: 4 }, (_, i) => services[(idx + 1 + i) % services.length]);

  return (
    <main>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand/60 transition-colors hover:text-action"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>

          {/* Phones: gradient card. Tablet/laptop: title on the left, booking button on the right. */}
          <div className="relative mt-3 overflow-hidden rounded-3xl bg-linear-to-br from-brand via-brand to-action px-5 py-6 sm:mt-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:overflow-visible sm:rounded-none sm:bg-none sm:p-0">
            <Icon aria-hidden="true" className="absolute -bottom-6 -right-6 h-36 w-36 rotate-12 text-white/[0.07] sm:hidden" />
            <div aria-hidden="true" className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-highlight/20 blur-3xl sm:hidden" />

            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1 pl-1 pr-3 text-xs font-semibold text-light ring-1 ring-white/15 sm:hidden">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-action">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                Uma Dental Care &middot; Service
              </p>
              <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:mt-0 sm:text-4xl sm:text-brand lg:text-5xl">
                {title}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-light/80 sm:max-w-2xl sm:text-lg sm:leading-normal sm:text-brand/65">
                {text}
              </p>
            </div>

            <Link
              href={bookHref}
              className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand shadow-md transition-colors hover:bg-highlight sm:mt-0 sm:w-auto sm:shrink-0 sm:bg-brand sm:px-7 sm:py-3.5 sm:text-base sm:text-white sm:shadow-lg sm:shadow-brand/20 sm:hover:bg-action"
            >
              <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 sm:gap-8 sm:px-6 sm:pb-20 lg:grid-cols-3 lg:gap-12 lg:px-8">
          {/* Main column */}
          <div className="space-y-8 sm:space-y-10 lg:col-span-2">
            <div className="rounded-3xl bg-light p-5 sm:p-8">
              <h2 className="text-lg font-bold text-brand sm:text-xl">About this treatment</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand/75 sm:mt-3 sm:text-base">{overview}</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand sm:text-xl">What to expect</h2>
              <ol className="mt-6 space-y-0">
                {steps.map((step, i) => (
                  <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <span aria-hidden="true" className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-highlight/50" />
                    )}
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white ring-4 ring-light">
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <p className="font-semibold text-brand">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-brand/70">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Side column */}
          <aside className="space-y-6">
            <div className="rounded-3xl p-6 ring-1 ring-highlight/30">
              <h2 className="flex items-center gap-2 font-bold text-brand">
                <UserCheck className="h-5 w-5 text-action" />
                Recommended for
              </h2>
              <ul className="mt-4 space-y-2.5">
                {idealFor.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-brand/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-action" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl p-6 ring-1 ring-highlight/30">
              <h2 className="flex items-center gap-2 font-bold text-brand">
                <CheckCircle2 className="h-5 w-5 text-action" />
                Benefits
              </h2>
              <ul className="mt-4 space-y-2.5">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-brand/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-action" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-brand p-6 text-white">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-action/40 blur-2xl" />
              <h2 className="relative font-bold">Book this treatment</h2>
              <p className="relative mt-1 text-sm text-light/70">Pick a date that suits you, or call us to discuss it first.</p>
              <Link
                href={bookHref}
                className="relative mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand transition-colors hover:bg-highlight"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
              </Link>
              <div className="relative mt-3 space-y-2">
                {phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+91${p}`}
                    className="flex items-center gap-2.5 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/20"
                  >
                    <Phone className="h-4 w-4 text-highlight" />
                    +91 {p.slice(0, 5)} {p.slice(5)}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-bold text-brand sm:text-2xl">Other Services</h2>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-action hover:underline">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Phones: compact list. Tablet/laptop: card grid. */}
          <div className="mt-5 divide-y divide-highlight/20 overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_-18px_rgba(11,45,91,0.35)] ring-1 ring-highlight/25 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:divide-y-0 sm:overflow-visible sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 lg:grid-cols-4">
            {others.map(({ slug: s, icon: OtherIcon, title: t, text: d }) => (
              <Link
                key={s}
                href={`/services/${s}`}
                className="group flex items-center gap-3.5 px-4 py-3.5 transition-colors active:bg-light sm:rounded-2xl sm:bg-white sm:p-5 sm:ring-1 sm:ring-highlight/25 sm:transition-all sm:hover:-translate-y-0.5 sm:hover:ring-action"
              >
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-action to-brand text-white shadow-md shadow-action/25 sm:flex sm:h-10 sm:w-10 sm:bg-light sm:bg-none sm:text-action sm:shadow-none sm:transition-colors sm:group-hover:bg-action sm:group-hover:text-white">
                  <OtherIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-brand sm:text-base">{t}</span>
                  <span className="mt-0.5 block truncate text-xs text-brand/55 sm:hidden">{d}</span>
                </span>
                <ChevronRight className="h-5 w-5 shrink-0 text-brand/30 transition-colors group-active:text-action sm:hidden" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
