import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Reviews | Uma Dental Care",
  description: "What our patients say about Uma Dental Care.",
};

// PLACEHOLDER reviews — replace each `name`, `rating` and `text` with a real
// patient's review (with their permission) before the site goes live.
// Don't publish invented names or ratings: fake reviews mislead patients.
const PLACEHOLDER = "Replace this with a real patient review. Keep it short and specific about their experience.";
const reviews = [
  { name: "Patient Name", treatment: "Root Canal Treatment", rating: 5, text: PLACEHOLDER },
  { name: "Patient Name", treatment: "Dental Cleaning & Polishing", rating: 4, text: PLACEHOLDER },
  { name: "Patient Name", treatment: "Fixed Teeth", rating: 5, text: PLACEHOLDER },
  { name: "Patient Name", treatment: "Tooth Coloured Filling", rating: 4, text: PLACEHOLDER },
  { name: "Patient Name", treatment: "Smile Designing", rating: 5, text: PLACEHOLDER },
  { name: "Patient Name", treatment: "Dental Bleaching", rating: 5, text: PLACEHOLDER },
];

const ReviewsPage = () => (
  <main>
    <PageHeader
      title="Smiles That Speak for Us"
      highlight="Speak"
      description="Read what our patients have to say about their experience at Uma Dental Care."
      image="/review.png"
      imageAlt="Happy patient giving a thumbs up in the dental chair"
      mobilePosition="75% center"
    />

    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {reviews.map((review, i) => (
          <figure key={i} className="relative rounded-2xl bg-light p-7 ring-1 ring-highlight/20">
            <Quote className="absolute right-6 top-6 h-8 w-8 text-highlight/50" />
            <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`h-5 w-5 ${s < review.rating ? "fill-amber-400 text-amber-400" : "text-brand/20"}`}
                />
              ))}
            </div>
            <blockquote className="mt-4 leading-relaxed text-brand/80">&ldquo;{review.text}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-semibold text-white">
                {review.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold text-brand">{review.name}</span>
                <span className="block text-sm text-action">{review.treatment}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  </main>
);

export default ReviewsPage;
