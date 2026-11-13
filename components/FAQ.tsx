import Link from "next/link";
import { Plus } from "lucide-react";

type Faq = { q: string; a: React.ReactNode; plain: string };

const faqs: Faq[] = [
  {
    q: "What are your clinic timings?",
    plain:
      "Morning: 9:30 AM to 2:00 PM. Evening: 4:00 PM to 7:00 PM. The clinic is closed on Sundays.",
    a: (
      <>
        <span className="block">Morning: 9:30 AM – 2:00 PM</span>
        <span className="block">Evening: 4:00 PM – 7:00 PM</span>
        <span className="mt-1 block font-semibold text-brand">The clinic is closed on Sundays.</span>
      </>
    ),
  },
  {
    q: "How do I book an appointment?",
    plain:
      "Call us on +91 93085 07247 or +91 86748 95526, or send us a message from the Contact page and we'll get back to you.",
    a: (
      <>
        Call us on{" "}
        <a href="tel:+919308507247" className="font-semibold text-action hover:underline">+91 93085 07247</a> or{" "}
        <a href="tel:+918674895526" className="font-semibold text-action hover:underline">+91 86748 95526</a>, or send us a
        message from the{" "}
        <Link href="/contact" className="font-semibold text-action hover:underline">Contact page</Link> and we&apos;ll get
        back to you.
      </>
    ),
  },
  {
    q: "Where is Uma Dental Care located?",
    plain:
      "Below Sahara India Office, North of Axis Bank, Supaul Kachahri Road, Supaul Bazar, Supaul, Bihar – 852131.",
    a: (
      <>
        Below Sahara India Office, North of Axis Bank, Supaul Kachahri Road, Supaul Bazar, Supaul, Bihar – 852131.{" "}
        <Link href="/contact" className="font-semibold text-action hover:underline">See it on the map</Link>.
      </>
    ),
  },
  {
    q: "What treatments do you offer?",
    plain:
      "We offer complete dental solutions, including root canal treatment, cleaning and polishing, fixed teeth, dental capping, tooth coloured fillings, smile designing, impaction surgery, dental bleaching, splinting and tooth extraction.",
    a: (
      <>
        We offer complete dental solutions, including root canal treatment, cleaning &amp; polishing, fixed teeth,
        dental capping, tooth coloured fillings, smile designing, impaction surgery, dental bleaching, splinting and
        tooth extraction.{" "}
        <Link href="/services" className="font-semibold text-action hover:underline">View all services</Link>.
      </>
    ),
  },
  {
    q: "Is root canal treatment painful?",
    plain:
      "Root canal treatment is done under local anaesthesia, so most patients feel only pressure, not pain. It actually relieves the pain caused by the infected tooth.",
    a: (
      <>
        Root canal treatment is done under local anaesthesia, so most patients feel only pressure, not pain. In fact,
        it relieves the pain caused by the infected tooth.
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
      <div className="space-y-3 lg:col-span-8">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            name="faq"
            className="group rounded-2xl bg-white ring-1 ring-highlight/30 transition-shadow open:bg-light/50 open:shadow-[0_12px_30px_-18px_rgba(11,45,91,0.35)] open:ring-action/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
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
            <div className="px-5 pb-5 pl-12 text-sm leading-relaxed text-brand/75 sm:px-6 sm:pb-6 sm:pl-[3.75rem] sm:text-base">
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
