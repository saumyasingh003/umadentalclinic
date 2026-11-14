import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Smile } from "lucide-react";

const promises = [
  { icon: HeartHandshake, title: "Gentle & Caring", text: "Every treatment explained clearly, at a pace you're comfortable with." },
  { icon: ShieldCheck, title: "Safe & Hygienic", text: "Strict sterilisation and clean, well-kept treatment rooms." },
  { icon: Smile, title: "Complete Solutions", text: "From cleaning and fillings to crowns and smile designing, all in one place." },
];

const OurStory = () => (
  <section className="bg-white">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-8 pt-10 sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-8">
      {/* Story text */}
      <div className="lg:col-span-7">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-action sm:text-sm">
          <span className="h-px w-8 bg-action" />
          Our Story
        </p>
        <h2 className="mt-4 text-2xl font-bold leading-tight text-brand sm:text-4xl">
          Dentistry that feels <span className="text-action">welcoming</span>, not stressful
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand/75 sm:text-base">
          <p>
            Uma Dental Care was started with a simple goal: to give every
            family a complete dental solution under one roof, delivered with
            honesty and a gentle touch.
          </p>
          <p>
            Whether you need a routine cleaning, a root canal, a fixed tooth or
            a complete smile makeover, we take the time to explain your options
            and plan treatment that fits your needs, so you leave every visit
            confident and smiling.
          </p>
        </div>

        <blockquote className="mt-8 text-center">
          <p className="text-lg font-semibold text-brand sm:text-xl">
            &ldquo;Complete Dental Solution &mdash; We Make You Smile.&rdquo;
          </p>
        </blockquote>

        <Link
          href="/contact"
          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-action sm:text-base"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Promise panel */}
      <div className="lg:col-span-5">
        <div className="relative h-full overflow-hidden rounded-3xl bg-brand p-6 text-white sm:p-8">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-action/30 blur-2xl" />
          <h3 className="relative text-lg font-bold sm:text-xl">Our Promise to You</h3>
          <ul className="relative mt-6 space-y-5">
            {promises.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-highlight ring-1 ring-white/15 sm:flex">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-light/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default OurStory;
