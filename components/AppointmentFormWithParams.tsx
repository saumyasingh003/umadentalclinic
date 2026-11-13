"use client";

import { useSearchParams } from "next/navigation";
import AppointmentForm from "@/components/AppointmentForm";

/** Reads ?service=… from the URL (e.g. from a service page) and pre-selects it. */
const AppointmentFormWithParams = () => {
  const service = useSearchParams().get("service") ?? "";
  // `key` re-mounts the form if the treatment in the URL changes
  return <AppointmentForm key={service} initialService={service} />;
};

export default AppointmentFormWithParams;
