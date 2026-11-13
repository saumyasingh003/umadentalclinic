"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

// No backend yet: submitting opens the visitor's email app with the
// message pre-filled and addressed to the clinic.
const CLINIC_EMAIL = "karan_apurva@yahoo.com";

const labelCls = "block text-xs font-semibold uppercase tracking-[0.12em] text-action";
const inputCls =
  "mt-2 w-full border-0 border-b border-brand/20 bg-transparent px-0 py-2 text-brand placeholder:text-brand/30 transition-colors focus:border-action focus:outline-none focus:ring-0";

/** Keep digits only and drop a leading 91 / 0 (e.g. from autofill "+91 81027 73833"). */
const normalisePhone = (value: string) => {
  let digits = value.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length > 10 && digits.startsWith("0")) digits = digits.slice(1);
  return digits.slice(0, 10);
};

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get("firstName")} ${data.get("lastName")}`.trim();

    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Phone: +91 ${phone}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(
      `Appointment / enquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="firstName" className={labelCls}>First Name</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelCls}>Last Name</label>
          <input id="lastName" name="lastName" required autoComplete="family-name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email Address</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone No</label>
          <div className="mt-2 flex items-center border-b border-brand/20 transition-colors focus-within:border-action">
            <span className="select-none pr-2 font-medium text-brand/60">+91</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel-national"
              inputMode="numeric"
              pattern="[6-9][0-9]{9}"
              title="Enter a valid 10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(normalisePhone(e.target.value))}
              className="w-full border-0 bg-transparent px-0 py-2 text-brand placeholder:text-brand/30 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea id="message" name="message" rows={4} required className={`${inputCls} resize-none`} />
      </div>


      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-action"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>

      {sent && (
        <p role="status" className="text-sm text-brand/70">
          Your email app should open with your message ready to send. If it
          didn&apos;t, email us at{" "}
          <a href={`mailto:${CLINIC_EMAIL}`} className="font-semibold text-action underline">
            {CLINIC_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
};

export default ContactForm;
