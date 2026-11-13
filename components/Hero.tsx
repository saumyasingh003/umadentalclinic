import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-light">
      {/* Background image (desktop/tablet) — no overlay */}
      <Image
        src="/hero.png"
        alt="Smiling patient relaxing in a dental chair at Uma Dental Care"
        fill
        preload
        sizes="100vw"
        className="-z-10 hidden object-cover object-[70%_25%] md:block"
      />

      <div className="mx-auto flex max-w-7xl items-center px-4 pt-6 sm:px-6 sm:pt-10 md:min-h-136 md:py-20 lg:min-h-150 lg:px-8">
        <div className="max-w-xl md:max-w-[34rem] lg:max-w-[38rem]">
          <p className="text-xs font-bold uppercase tracking-wide text-action sm:text-base">
            Complete Dental Solution. We Make You Smile.
          </p>

          <h1 className="mt-2 text-[1.75rem] sm:mt-4 font-bold leading-[1.15] tracking-tight text-brand sm:text-5xl lg:text-[3.5rem]">
            Exceptional Dental Care for the Whole Family
          </h1>

          <p className="mt-4 max-w-lg sm:mt-5 text-sm leading-relaxed text-brand/80 sm:text-lg">
            We combine advanced technology with a gentle touch to provide
            personalized dental care in a comfortable, modern environment.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4 sm:flex-row">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand px-6 py-3 text-sm font-semibold sm:py-3.5 sm:text-base text-white transition-colors hover:bg-action"
            >
              <CalendarDays className="h-5 w-5" />
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand bg-white/60 px-7 py-3 text-sm font-semibold sm:py-3.5 sm:text-base text-brand transition-colors hover:border-action hover:text-action"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* On phones the image sits below the text so it never covers it */}
      <div className="relative mt-8 aspect-video w-full md:hidden">
        <Image
          src="/hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[78%_center]"
        />
      </div>
    </section>
  );
};

export default Hero;
