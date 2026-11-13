// Figures provided by the clinic.
const stats = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "10+", label: "Years of Experience" },
  { value: "15+", label: "Dental Treatments" },
  { value: "98%", label: "Patient Satisfaction" },
];

const TrustStats = () => (
  <section className="relative overflow-hidden bg-brand">
    {/* Subtle decoration */}
    <div aria-hidden="true" className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-action/25 blur-3xl" />
    <div aria-hidden="true" className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-highlight/15 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <dl className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center px-3 py-7 text-center sm:py-10 lg:py-12
              ${i % 2 === 0 ? "border-r border-white/10" : ""}
              ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""}
              ${i === 1 ? "lg:border-r" : ""}`}
          >
            <dt className="order-2 mt-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-highlight sm:mt-3 sm:text-xs">
              {label}
            </dt>
            <dd className="order-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default TrustStats;
