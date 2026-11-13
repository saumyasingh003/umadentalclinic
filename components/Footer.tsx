import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ToothLogo from "@/components/ToothLogo";
import { Facebook } from "@/components/icons";
import CurrentYear from "@/components/CurrentYear";

const phones = ["9308507247", "8674895526"];
const email = "karan_apurva@yahoo.com";
const facebook = "https://www.facebook.com/udesupaul";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const headingCls =
  "text-sm font-bold uppercase tracking-[0.15em] text-highlight";

const Footer = () => (
  <footer className="mt-auto bg-brand text-light">
    {/* Main grid */}
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:px-8">
      {/* Brand */}
      <div className="sm:col-span-2 lg:col-span-5">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <ToothLogo className="h-10 w-10 text-highlight" />
          <span className="leading-none">
            <span className="block text-2xl font-bold tracking-tight text-white">Uma</span>
            <span className="mt-0.5 block text-[0.7rem] font-semibold tracking-[0.35em] text-light/80">
              DENTAL CARE
            </span>
          </span>
        </Link>

        <p className="mt-4 font-semibold text-white">
          Complete Dental Solution{" "}
          <span className="font-normal text-highlight">&middot; &ldquo;We Make You Smile&rdquo;</span>
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-light/70">
          Gentle, modern dental care for the whole family, from routine
          cleaning to complete smile designing.
        </p>

        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Uma Dental Care on Facebook"
          className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-light transition-colors hover:bg-[#1877f2] hover:text-white"
        >
          <Facebook className="h-4 w-4" />
        </a>
      </div>

      {/* Quick links */}
      <div className="lg:col-span-3">
        <h3 className={headingCls}>Quick Links</h3>
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {quickLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="whitespace-nowrap text-light/75 transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact + timings */}
      <div className="lg:col-span-4">
        <h3 className={headingCls}>Get in Touch</h3>
        <ul className="mt-4 space-y-2.5 text-sm">
          <li className="flex gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
            <span className="flex flex-col gap-1">
              {phones.map((p) => (
                <a key={p} href={`tel:+91${p}`} className="text-light/75 transition-colors hover:text-white">
                  {p.slice(0, 5)} {p.slice(5)}
                </a>
              ))}
            </span>
          </li>
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
            <span className="text-light/75">
              Below Sahara India Office, North of Axis Bank,
              <br />
              Supaul Kachahri Road, Supaul Bazar,
              <br />
              Supaul, Bihar – 852131
            </span>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
            <a href={`mailto:${email}`} className="break-all text-light/75 transition-colors hover:text-white">
              {email}
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />
            <span className="text-light/75">
              <span className="block">Morning: 9:30 AM – 2:00 PM</span>
              <span className="block">Evening: 4:00 PM – 7:00 PM</span>
              <span className="mt-1 block font-bold uppercase tracking-wide text-white">
                Sunday Closed
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-4 text-center text-xs text-light/55 sm:flex-row sm:justify-between sm:px-6 sm:text-left sm:text-sm lg:px-8">
        <p>
          &copy; <CurrentYear /> Uma Dental Care. All rights reserved.
        </p>
        <p>Dr. Karan Apurva &middot; Dental Surgeon</p>
      </div>
    </div>
  </footer>
);

export default Footer;
