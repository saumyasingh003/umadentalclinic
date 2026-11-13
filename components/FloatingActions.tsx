"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { WhatsApp } from "@/components/icons";

const PHONE = "919308507247"; // TODO: confirm this is the clinic's WhatsApp number
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Uma Dental Care, I'd like to book an appointment."
)}`;

const btn =
  "group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action sm:h-14 sm:w-14";

/** Small label that slides out to the left on hover (desktop). */
const Tip = ({ children }: { children: string }) => (
  <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 lg:block lg:translate-x-1 lg:group-hover:translate-x-0">
    {children}
  </span>
);

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      {/* Back to top */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        className={`${btn} bg-brand hover:bg-action ${
          showTop ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
        <Tip>Back to top</Tip>
      </button>

      {/* WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`${btn} bg-[#25D366] hover:bg-[#1ebe5b]`}
      >
        <WhatsApp className="h-6 w-6 sm:h-7 sm:w-7" />
        <Tip>Chat on WhatsApp</Tip>
      </a>

      {/* Call */}
      <a
        href={`tel:+${PHONE}`}
        aria-label="Call Uma Dental Care"
        className={`${btn} bg-action hover:bg-brand`}
      >
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-action/60 motion-safe:animate-ping" />
        <Phone className="relative h-5 w-5 sm:h-6 sm:w-6" />
        <Tip>Call +91 93085 07247</Tip>
      </a>
    </div>
  );
};

export default FloatingActions;
