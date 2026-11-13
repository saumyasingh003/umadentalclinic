import Image from "next/image";

type PageHeaderProps = {
  title: string;
  /** Part of the title to emphasise (must appear in `title` exactly) */
  highlight?: string;
  description?: string;
  /** Wide banner image in /public with empty space on the left for text */
  image: string;
  imageAlt: string;
  /** object-position used for the stacked image on phones */
  mobilePosition?: string;
};

/** Hand-drawn style underline under the highlighted words */
const Swoosh = () => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-highlight"
    aria-hidden="true"
  >
    <path
      d="M2 9C40 3 90 1.5 198 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const renderTitle = (title: string, highlight?: string) => {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="relative inline-block whitespace-nowrap text-action">
        {highlight}
        <Swoosh />
      </span>
      {after}
    </>
  );
};

const PageHeader = ({
  title,
  highlight,
  description,
  image,
  imageAlt,
  mobilePosition = "80% center",
}: PageHeaderProps) => (
  <section className="relative isolate overflow-hidden bg-light">
    {/* Background image (tablet/desktop) — no overlay */}
    <Image
      src={image}
      alt={imageAlt}
      fill
      preload
      sizes="100vw"
      className="-z-10 hidden object-cover object-right md:block"
    />


    <div className="mx-auto flex max-w-7xl items-center px-4 pt-6 sm:px-6 sm:pt-10 md:min-h-72 md:py-10 lg:min-h-80 lg:px-8">
      <div className="max-w-xl md:max-w-md lg:max-w-2xl">

        <h1 className="text-2xl font-bold leading-[1.2] tracking-tight text-brand sm:text-4xl lg:text-[2.75rem]">
          {renderTitle(title, highlight)}
        </h1>

        {description && (
          <p className="mt-5 max-w-lg border-l-[3px] border-action pl-4 text-sm leading-relaxed text-brand/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>

    {/* On phones the image sits below the text so it never covers it */}
    <div className="relative mt-8 aspect-video w-full md:hidden">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: mobilePosition }}
      />
    </div>
  </section>
);

export default PageHeader;
