"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

type DatePickerProps = {
  id: string;
  /** ISO date (yyyy-mm-dd) or "" */
  value: string;
  onChange: (iso: string) => void;
  invalid?: boolean;
  describedBy?: string;
  /** How many days ahead can be booked */
  maxDaysAhead?: number;
};

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromISO = (iso: string) => new Date(`${iso}T00:00:00`);
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const formatLongDate = (iso: string) =>
  fromISO(iso).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

/** Custom calendar popover. Past dates and Sundays (clinic closed) can't be picked. */
const DatePicker = ({ id, value, onChange, invalid, describedBy, maxDaysAhead = 90 }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  // Only known in the browser — set when the calendar opens (pages are prerendered).
  const [today, setToday] = useState<Date | null>(null);
  const [view, setView] = useState<{ y: number; m: number } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = () => {
    if (open) return setOpen(false);
    const now = startOfDay(new Date());
    const base = value ? fromISO(value) : now;
    setToday(now);
    setView({ y: base.getFullYear(), m: base.getMonth() });
    setOpen(true);
  };

  const maxDate = today ? new Date(today.getFullYear(), today.getMonth(), today.getDate() + maxDaysAhead) : null;

  const isDisabled = (d: Date) =>
    !today || !maxDate || d < today || d > maxDate || d.getDay() === 0;

  // Build the month grid (weeks start on Monday)
  const cells: (Date | null)[] = [];
  if (view) {
    const first = new Date(view.y, view.m, 1);
    const lead = (first.getDay() + 6) % 7;
    const days = new Date(view.y, view.m + 1, 0).getDate();
    for (let i = 0; i < lead; i++) cells.push(null);
    for (let d = 1; d <= days; d++) cells.push(new Date(view.y, view.m, d));
    while (cells.length % 7) cells.push(null);
  }

  const canPrev = !!(view && today && (view.y > today.getFullYear() || view.m > today.getMonth()));
  const canNext = !!(view && maxDate && (view.y < maxDate.getFullYear() || view.m < maxDate.getMonth()));
  const shift = (n: number) =>
    setView((v) => {
      if (!v) return v;
      const d = new Date(v.y, v.m + n, 1);
      return { y: d.getFullYear(), m: d.getMonth() };
    });

  const monthLabel = view
    ? new Date(view.y, view.m, 1).toLocaleDateString("en-IN", { month: "long", year: "numeric" })
    : "";

  return (
    <div ref={rootRef} className="relative mt-1">
      <button
        id={id}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-describedby={describedBy}
        onClick={toggle}
        className={`flex w-full items-center justify-between gap-3 border-b bg-transparent py-1.5 text-left transition-colors focus:outline-none ${
          invalid ? "border-red-400" : open ? "border-action" : "border-brand/20 focus:border-action"
        }`}
      >
        <span className={value ? "text-brand" : "text-brand/35"}>
          {value ? formatLongDate(value) : "Select a date"}
        </span>
        <CalendarDays className={`h-4 w-4 shrink-0 ${open ? "text-action" : "text-brand/50"}`} />
      </button>

      {open && view && (
        <div
          role="dialog"
          aria-label="Choose an appointment date"
          className="absolute inset-x-0 z-[60] mt-2 w-full rounded-2xl bg-white p-3 sm:right-auto sm:w-72 shadow-[0_20px_50px_-15px_rgba(11,45,91,0.35)] ring-1 ring-brand/10"
        >
          {/* Month header */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => shift(-1)}
              disabled={!canPrev}
              aria-label="Previous month"
              className="flex h-7 w-7 items-center justify-center rounded-full text-brand transition-colors hover:bg-light disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <p className="text-xs font-bold text-brand" aria-live="polite">{monthLabel}</p>
            <button
              type="button"
              onClick={() => shift(1)}
              disabled={!canNext}
              aria-label="Next month"
              className="flex h-7 w-7 items-center justify-center rounded-full text-brand transition-colors hover:bg-light disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Weekdays */}
          <div className="mt-2 grid grid-cols-7 text-center">
            {WEEKDAYS.map((w) => (
              <span key={w} className={`py-0.5 text-[0.65rem] font-semibold uppercase ${w === "Su" ? "text-red-400" : "text-brand/45"}`}>
                {w}
              </span>
            ))}
          </div>

          {/* Days */}
          <div className="mt-0.5 grid grid-cols-7 gap-0.5">
            {cells.map((d, i) => {
              if (!d) return <span key={`e${i}`} />;
              const iso = toISO(d);
              const disabled = isDisabled(d);
              const selected = iso === value;
              const isToday = today && iso === toISO(today);
              const sunday = d.getDay() === 0;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={disabled}
                  aria-pressed={selected}
                  aria-label={`${formatLongDate(iso)}${sunday ? ", clinic closed" : ""}`}
                  onClick={() => {
                    onChange(iso);
                    setOpen(false);
                  }}
                  className={`mx-auto flex aspect-square w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors
                    ${selected ? "bg-brand font-semibold text-white" : ""}
                    ${!selected && !disabled ? "text-brand hover:bg-light hover:text-action" : ""}
                    ${!selected && isToday ? "ring-1 ring-action" : ""}
                    ${disabled ? `cursor-not-allowed ${sunday ? "text-red-300 line-through" : "text-brand/25"}` : ""}`}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>

          <p className="mt-2 border-t border-brand/10 pt-2 text-center text-[0.7rem] text-brand/55">
            Mon – Sat available · <span className="font-semibold text-red-400">Sunday closed</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
