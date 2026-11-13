import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Phone } from "lucide-react";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Uma Dental Care",
  description: "Complete dental solutions at Uma Dental Care: root canal, cleaning, fixed teeth, capping, fillings, smile designing and more.",
};

const ServicesPage = () => (
  <main>
    <PageHeader
      title="Complete Dental Solutions Under One Roof"
      highlight="Under One Roof"
      description="From preventive care to advanced treatments, everything your family needs for a healthy, beautiful smile."
      image="/service.png"
      imageAlt="Dental models and instruments at Uma Dental Care"
      mobilePosition="85% center"
    />

    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ slug, icon: Icon, title, text }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group flex flex-col rounded-2xl border border-highlight/30 bg-white p-6 transition-all hover:-translate-y-1 hover:border-action hover:shadow-lg hover:shadow-action/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-light text-action transition-colors group-hover:bg-action group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand/70">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-action">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-white px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-brand via-brand to-action px-6 py-8 sm:px-10 sm:py-10">
        {/* Decorative rings */}
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-white/5" />
        <div aria-hidden="true" className="absolute -bottom-20 right-40 h-40 w-40 rounded-full bg-highlight/20 blur-2xl" />

        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Not sure which treatment you need?</h2>
              <p className="mt-1.5 max-w-xl text-sm text-light/75 sm:text-base">
                Visit us for a check-up and we&apos;ll recommend the right plan for you.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
            <a
              href="tel:+919308507247"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-highlight sm:text-base"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10 sm:text-base"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ServicesPage;
