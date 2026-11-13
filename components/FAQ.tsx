import Link from "next/link";
import { Plus } from "lucide-react";

type Faq = { q: string; a: React.ReactNode; plain: string };

const link = "font-semibold text-action hover:underline";

// General patient information — have the doctor review the clinical answers.
const faqs: Faq[] = [
  {
    q: "When is the clinic open, and how do I book a visit?",
    plain:
      "We're open Monday to Saturday, 9:30 AM – 2:00 PM and 4:00 PM – 7:00 PM, and closed on Sundays. Book online through our appointment form, or call +91 93085 07247 or +91 86748 95526.",
    a: (
      <>
        We&apos;re open <strong className="font-semibold text-brand">Monday to Saturday</strong>, 9:30 AM – 2:00 PM and
        4:00 PM – 7:00 PM, and closed on Sundays. You can{" "}
        <Link href="/book-appointment" className={link}>book online</Link> in under a minute, or call us on{" "}
        <a href="tel:+919308507247" className={link}>+91 93085 07247</a> /{" "}
        <a href="tel:+918674895526" className={link}>+91 86748 95526</a>.
      </>
    ),
  },
  {
    q: "Does root canal treatment hurt?",
    plain:
      "Root canal treatment is done under local anaesthesia, so most patients feel only mild pressure, not pain. It actually relieves the severe toothache caused by the infection, and lets you keep your natural tooth.",
    a: (
      <>
        Root canal treatment is done under local anaesthesia, so most patients feel only mild pressure, not pain. In
        fact, it <strong className="font-semibold text-brand">relieves</strong> the severe toothache caused by the
        infection and lets you keep your natural tooth.{" "}
        <Link href="/services/root-canal-treatment" className={link}>Learn more</Link>.
      </>
    ),
  },
  {
    q: "I have a toothache. What should I do until I see the dentist?",
    plain:
      "Rinse with warm salt water, gently floss to remove any trapped food, and avoid very hot, cold or sweet foods. A cold compress on the cheek can ease swelling. Don't place a painkiller tablet directly on the gum. Call us as soon as possible so we can find the cause.",
    a: (
      <>
        Rinse with warm salt water, gently floss to remove any trapped food, and avoid very hot, cold or sweet foods. A
        cold compress on the cheek can ease swelling. Don&apos;t place a painkiller tablet directly on the gum.{" "}
        <a href="tel:+919308507247" className={link}>Call us</a> as soon as you can so we can find and treat the cause.
      </>
    ),
  },
  {
    q: "How often should I get a dental check-up and cleaning?",
    plain:
      "For most people, a check-up and professional cleaning every 6 months is ideal. Regular visits catch cavities and gum problems early, when treatment is simpler and less costly.",
    a: (
      <>
        For most people, a check-up and{" "}
        <Link href="/services/dental-cleaning-polishing" className={link}>professional cleaning</Link> every{" "}
        <strong className="font-semibold text-brand">6 months</strong> is ideal. Regular visits catch cavities and gum
        problems early, when treatment is simpler and less costly.
      </>
    ),
  },
  {
    q: "Is professional teeth whitening safe for my teeth?",
    plain:
      "Yes. Professional bleaching done under a dentist's supervision is safe for enamel. Some people feel mild, temporary sensitivity for a day or two. We check your teeth and gums first to make sure whitening is right for you.",
    a: (
      <>
        Yes. Professional bleaching done under a dentist&apos;s supervision is safe for your enamel. Some people feel
        mild, temporary sensitivity for a day or two. We check your teeth and gums first to make sure{" "}
        <Link href="/services/dental-bleaching" className={link}>whitening</Link> is right for you.
      </>
    ),
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.plain },
  })),
};

const FAQ = () => (
  <section className="bg-white">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-8">
      {/* Heading */}
      <div className="lg:col-span-4">
        <h2 className="text-2xl font-bold leading-tight text-brand sm:text-4xl">
          Frequently Asked <span className="text-action">Questions</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-brand/65 sm:mt-4 sm:text-base">
          Quick answers to the questions patients ask us most.
        </p>
      </div>

      {/* Accordion */}
      <div className="divide-y divide-brand/10 border-y border-brand/10 lg:col-span-8">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            name="faq"
            className="group"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 sm:py-5 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center gap-3 sm:gap-4">
                <span className="text-sm font-bold text-highlight transition-colors group-open:text-action">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-brand sm:text-base">{f.q}</span>
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-light text-action transition-all duration-300 group-open:rotate-45 group-open:bg-action group-open:text-white">
                <Plus className="h-4 w-4" />
              </span>
            </summary>
            <div className="pb-5 pl-7 pr-12 font-answer text-[0.95rem] leading-relaxed text-brand/75 sm:pb-6 sm:pl-9 sm:pr-14 sm:text-base">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </div>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
  </section>
);

export default FAQ;
