import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";

const FEATURED = [
  "root-canal-treatment",
  "dental-cleaning-polishing",
  "fixed-teeth",
  "dental-capping",
  "tooth-coloured-filling",
  "smile-designing",
];

const featured = FEATURED.map((slug) => services.find((s) => s.slug === slug)).filter(
  (s): s is (typeof services)[number] => Boolean(s)
);

const HomeServices = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 sm:py-20 lg:px-8">
      {/* Heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold leading-tight text-brand sm:text-4xl">
            Our <span className="text-action">Dental Services</span>
          </h2>
          <p className="mt-3 text-sm text-brand/65 sm:text-base">
            Complete dental solutions under one roof, from routine care to smile makeovers.
          </p>
        </div>
        <Link
          href="/services"
          className="group hidden shrink-0 items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-action sm:inline-flex"
        >
          View All Services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {featured.map(({ slug, title, text }, i) => (
          <Link
            key={slug}
            href={`/services/${slug}`}
            className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-highlight/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-22px_rgba(11,45,91,0.45)] hover:ring-action/50 sm:items-start sm:gap-4 sm:rounded-3xl sm:p-5"
          >
            {/* Number watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-3 hidden text-3xl font-extrabold text-light transition-colors group-hover:text-highlight/30 sm:block"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="relative min-w-0 flex-1 sm:pr-8">
              <h3 className="text-base font-bold text-brand sm:text-lg">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-brand/65">{text}</p>
              <span className="mt-2 hidden items-center gap-1.5 text-sm font-semibold text-action sm:inline-flex">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>

            <ArrowUpRight className="h-5 w-5 shrink-0 text-brand/30 transition-colors group-hover:text-action sm:hidden" />
          </Link>
        ))}
      </div>

      {/* Mobile: view all */}
      <Link
        href="/services"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-action sm:hidden"
      >
        View All Services
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </section>
);

export default HomeServices;
