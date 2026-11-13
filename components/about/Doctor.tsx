import Image from "next/image";
import {
  Award,
  BadgeCheck,
  GraduationCap,
  Stethoscope,
  Users,
} from "lucide-react";

// Exactly as listed on the clinic signboard
const qualifications: { icon: typeof Award; title: string; detail?: string }[] = [
  { icon: GraduationCap, title: "B.D.S.", detail: "Lucknow" },
  { icon: Users, title: "MIDA", detail: "Mumbai" },
  { icon: Award, title: "FODS", detail: "KGMC, Lucknow" },
  { icon: BadgeCheck, title: "Cert. Fixed Prosthodontics" },
];

const Doctor = () => (
  <section className="relative overflow-hidden bg-white">
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-4 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
      {/* Photo */}
      <div className="relative mx-auto w-full sm:max-w-md lg:max-w-none">
        {/* Offset gradient frame */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden translate-x-5 translate-y-5 rounded-[2rem] bg-linear-to-br from-action to-brand sm:block"
        />
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-xl shadow-brand/20 ring-4 ring-white sm:aspect-square sm:rounded-[2rem] sm:shadow-2xl">
          <Image
            src="/doctor.png"
            alt="Dr. Karan Apurva, Dental Surgeon at Uma Dental Care"
            fill
            sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Floating badges */}
        <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-2xl bg-white px-3 py-2 shadow-xl shadow-brand/15 ring-1 ring-highlight/30 sm:-left-6 sm:bottom-10 sm:translate-x-0 sm:gap-3 sm:px-4 sm:py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-action to-brand text-white sm:h-10 sm:w-10 sm:rounded-xl">
            <Award className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-brand/50">Registered</p>
            <p className="text-sm font-bold text-brand">Regd. No. 4808/A</p>
          </div>
        </div>
        <span className="absolute right-4 top-4 hidden items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand shadow-md backdrop-blur sm:inline-flex">
          <Stethoscope className="h-3.5 w-3.5 text-action" />
          Dental Surgeon
        </span>
      </div>

      {/* Details */}
      <div className="pt-2 text-center sm:pt-4 lg:pt-0 lg:text-left">
        <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-action sm:text-sm lg:justify-start">
          <span className="h-px w-8 bg-action" />
          Meet Your Doctor
          <span className="h-px w-8 bg-action lg:hidden" />
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:mt-4 leading-tight text-brand sm:text-5xl">
          Dr. Karan <span className="text-action">Apurva</span>
        </h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand/60 sm:mt-2 sm:text-base">
          Dental Surgeon &middot; Uma Dental Care
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand/75 sm:mt-5 sm:text-base lg:mx-0">
          Dr. Karan Apurva leads Uma Dental Care with a focus on gentle,
          honest treatment and complete dental solutions, from routine care to
          fixed teeth and smile designing.
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-2.5 text-left sm:mt-8 sm:gap-4">
          {qualifications.map(({ icon: Icon, title, detail }) => (
            <li
              key={title}
              className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center shadow-sm sm:flex-row sm:gap-3 sm:p-4 sm:text-left ring-1 ring-highlight/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-action/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-light text-action transition-colors group-hover:bg-action group-hover:text-white sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-snug text-brand sm:text-base">{title}</p>
                {detail && (
                  <p className="mt-0.5 text-xs leading-relaxed text-brand/60 sm:text-sm">{detail}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Doctor;
