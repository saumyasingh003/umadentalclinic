import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

type Photo = { src: string; alt: string; position?: string };

// Drop up to 7 clinic photos into /public/gallery (e.g. 1.jpg … 7.jpg) and they
// are used automatically, in file-name order. Until then, stock photos are shown.
const GALLERY_DIR = join(process.cwd(), "public", "gallery");
const galleryFiles = existsSync(GALLERY_DIR)
  ? readdirSync(GALLERY_DIR)
      .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .slice(0, 7)
  : [];

// Free stock photos (Unsplash License — free for commercial use, no attribution required).
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;
const fallback: Photo[] = [
  { src: u("photo-1629909613654-28e377c37b09"), alt: "Modern dental clinic with treatment chair" },
  { src: u("photo-1657470179447-0f5aa16daa91"), alt: "Dentist treating a patient" },
  { src: u("photo-1777331903190-341a3dd0441b"), alt: "Dentist talking with a patient" },
  { src: u("photo-1606811971618-4486d14f3f99"), alt: "Dental check-up with mirror and probe" },
  { src: u("photo-1728342057953-94bfad8f0e7e"), alt: "White dental chair in a bright room" },
  { src: u("photo-1677026010083-78ec7f1b84ed"), alt: "Close-up of a healthy white smile" },
  { src: u("photo-1762625570087-6d98fca29531"), alt: "Comfortable clinic waiting area" },
];

const photos: Photo[] =
  galleryFiles.length > 0
    ? galleryFiles.map((f, i) => ({ src: `/gallery/${f}`, alt: `Uma Dental Care clinic photo ${i + 1}` }))
    : fallback;

/**
 * Symmetric layout on desktop (4 columns × 3 rows):
 *
 *   ┌────┬─────────┬────┐
 *   │ 2  │         │ 3  │
 *   │    │    1    │    │
 *   ├────┼────┬────┼────┤
 *   │ 4  │ 5  │ 6  │ 7  │
 *   └────┴────┴────┴────┘
 *
 * Phones: tile 1 full width, then a 2 × 3 grid.
 */
const slots = [
  "col-span-2 aspect-video lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1",
  "aspect-square lg:col-start-1 lg:row-span-2 lg:row-start-1",
  "aspect-square lg:col-start-4 lg:row-span-2 lg:row-start-1",
  "aspect-square lg:col-start-1 lg:row-start-3",
  "aspect-square lg:col-start-2 lg:row-start-3",
  "aspect-square lg:col-start-3 lg:row-start-3",
  "aspect-square lg:col-start-4 lg:row-start-3",
];


const Gallery = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold leading-tight text-brand sm:text-4xl">
          Healthy Smiles <span className="text-action">Start Here</span>
        </h2>
        <p className="mt-3 text-sm text-brand/65 sm:text-base">
          Gentle, modern dental care for every member of your family.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:h-[40rem] lg:grid-cols-4 lg:grid-rows-3">
        {slots.map((slot, i) => {
          const photo = photos[i];
          if (!photo) return null;
          return (
            <figure
              key={slot}
              className={`group relative overflow-hidden rounded-2xl bg-light ring-1 ring-highlight/20 lg:aspect-auto sm:rounded-3xl ${slot}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={photo.position ? { objectPosition: photo.position } : undefined}
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          );
        })}
      </div>
    </div>
  </section>
);

export default Gallery;
