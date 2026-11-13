import type { Metadata } from "next";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Suspense } from "react";
import AppointmentForm from "@/components/AppointmentForm";
import AppointmentFormWithParams from "@/components/AppointmentFormWithParams";

export const metadata: Metadata = {
  title: "Book Your Appointment | Uma Dental Care",
  description: "Book an appointment at Uma Dental Care, Supaul. Monday to Saturday, 9:30 AM – 2:00 PM and 4:00 PM – 7:00 PM.",
};

// Free stock photo (Unsplash License)
const SIDE_IMAGE = "https://images.unsplash.com/photo-1698749778813-ad5f2814e50f?auto=format&fit=crop&w=1200&q=80";

const BookAppointmentPage = () => (
  <main className="bg-white">
    <div className="mx-auto max-w-6xl px-4 pb-14 pt-5 sm:px-6 sm:pb-20 sm:pt-7 lg:px-8">
      <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-brand sm:text-4xl lg:text-[2.75rem]">
        Book Your <span className="text-action">Appointment</span>
      </h1>

      <div className="mt-5 grid gap-8 sm:mt-6 lg:grid-cols-5 lg:items-stretch">
        {/* Form */}
        <div className="rounded-2xl bg-white p-5 shadow-[0_18px_45px_-20px_rgba(11,45,91,0.35)] ring-1 ring-brand/10 sm:rounded-3xl sm:p-8 lg:col-span-3">
          {/* The plain form renders instantly; the URL-aware one takes over in the browser */}
          <Suspense fallback={<AppointmentForm />}>
            <AppointmentFormWithParams />
          </Suspense>
        </div>

        {/* Image (desktop) */}
        <div className="relative hidden overflow-hidden rounded-3xl bg-light lg:col-span-2 lg:block">
          <Image
            src={SIDE_IMAGE}
            alt="Dental mirror with a dental chair in the background"
            fill
            sizes="(min-width: 1024px) 40vw, 0px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand/80 via-brand/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-action">
              <Clock className="h-4 w-4" />
              Clinic Timings
            </p>
            <p className="mt-2 text-sm text-brand">Morning: 9:30 AM – 2:00 PM</p>
            <p className="text-sm text-brand">Evening: 4:00 PM – 7:00 PM</p>
            <p className="mt-1 text-sm font-bold uppercase text-brand">Sunday Closed</p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default BookAppointmentPage;
