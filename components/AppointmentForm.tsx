"use client";

import { useRef, useState, type FormEvent } from "react";
import { CalendarCheck } from "lucide-react";
import { services } from "@/lib/services";
import Select from "@/components/form/Select";
import DatePicker, { formatLongDate } from "@/components/form/DatePicker";

// No backend yet: the request opens in WhatsApp, pre-filled for the clinic.
const WHATSAPP_NUMBER = "919308507247"; // TODO: confirm this is the clinic's WhatsApp number

const SESSIONS = [
  { value: "Morning (9:30 AM – 2:00 PM)", label: "Morning · 9:30 AM – 2:00 PM" },
  { value: "Evening (4:00 PM – 7:00 PM)", label: "Evening · 4:00 PM – 7:00 PM" },
];

const labelCls = "block text-xs font-semibold uppercase tracking-[0.12em] text-action";
const fieldCls =
  "mt-1 w-full border-0 border-b border-brand/20 bg-transparent px-0 py-1.5 text-brand placeholder:text-brand/35 transition-colors focus:border-action focus:outline-none focus:ring-0";

/** Keep digits only and drop a leading 91 / 0 (e.g. from autofill "+91 81027 73833"). */
const normalisePhone = (value: string) => {
  let digits = value.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length > 10 && digits.startsWith("0")) digits = digits.slice(1);
  return digits.slice(0, 10);
};

const serviceOptions = [
  ...services.map((s) => ({ value: s.title, label: s.title })),
  { value: "Not sure / need advice", label: "Not sure / need advice" },
];

const errorCls = "mt-1.5 text-xs font-medium text-red-500";

type AppointmentFormProps = {
  /** Treatment to pre-select (must match a service title) */
  initialService?: string;
};

const AppointmentForm = ({ initialService = "" }: AppointmentFormProps) => {
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(() =>
    serviceOptions.some((o) => o.value === initialService) ? initialService : ""
  );
  const [date, setDate] = useState("");
  const [session, setSession] = useState("");
  const [errors, setErrors] = useState<{ service?: string; date?: string; session?: string }>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = {
      service: service ? undefined : "Please choose a treatment.",
      date: date ? undefined : "Please pick a date.",
      session: session ? undefined : "Please choose a time.",
    };
    setErrors(nextErrors);
    const firstError = (["service", "date", "session"] as const).find((k) => nextErrors[k]);
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`#${firstError}`)?.focus();
      return;
    }
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [
      "Hello Uma Dental Care, I'd like to book an appointment.",
      "",
      `Name: ${get("name")}`,
      `Phone: +91 ${phone}`,
      get("email") && `Email: ${get("email")}`,
      `Treatment: ${service}`,
      `Preferred date: ${formatLongDate(date)}`,
      `Preferred time: ${session}`,
      get("message") && `Note: ${get("message")}`,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelCls}>Full Name</label>
          <input id="name" name="name" required autoComplete="name" className={fieldCls} />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelCls}>Phone No</label>
          <div className="mt-1 flex items-center border-b border-brand/20 transition-colors focus-within:border-action">
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
              className="w-full border-0 bg-transparent px-0 py-1.5 text-brand focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="normal-case tracking-normal text-brand/40">(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldCls} />
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelCls}>Treatment</label>
          <Select
            id="service"
            options={serviceOptions}
            value={service}
            onChange={(v) => {
              setService(v);
              setErrors((er) => ({ ...er, service: undefined }));
            }}
            placeholder="Select a treatment"
            invalid={!!errors.service}
            describedBy={errors.service ? "service-error" : undefined}
          />
          {errors.service && <p id="service-error" className={errorCls}>{errors.service}</p>}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelCls}>Preferred Date</label>
          <DatePicker
            id="date"
            value={date}
            onChange={(v) => {
              setDate(v);
              setErrors((er) => ({ ...er, date: undefined }));
            }}
            invalid={!!errors.date}
            describedBy={errors.date ? "date-error" : "date-hint"}
          />
          {errors.date ? (
            <p id="date-error" className={errorCls}>{errors.date}</p>
          ) : (
            <p id="date-hint" className="mt-1 text-xs text-brand/50">Monday to Saturday · Sunday closed</p>
          )}
        </div>

        {/* Session */}
        <div>
          <label htmlFor="session" className={labelCls}>Preferred Time</label>
          <Select
            id="session"
            options={SESSIONS}
            value={session}
            onChange={(v) => {
              setSession(v);
              setErrors((er) => ({ ...er, session: undefined }));
            }}
            placeholder="Select a time"
            invalid={!!errors.session}
            describedBy={errors.session ? "session-error" : undefined}
          />
          {errors.session && <p id="session-error" className={errorCls}>{errors.session}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Message <span className="normal-case tracking-normal text-brand/40">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            placeholder="Tell us about any pain or concern"
            className={`${fieldCls} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-action"
      >
        <CalendarCheck className="h-5 w-5" />
        Book Appointment
      </button>

      {sent && (
        <p role="status" className="rounded-xl bg-light px-4 py-3 text-sm text-brand/75">
          WhatsApp should open with your appointment request ready to send. If it didn&apos;t, please call us on{" "}
          <a href="tel:+919308507247" className="font-semibold text-action underline">+91 93085 07247</a>.
        </p>
      )}
    </form>
  );
};

export default AppointmentForm;
