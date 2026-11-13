import type { LucideIcon } from "lucide-react";
import {
  Bandage,
  CircleMinus,
  ClipboardCheck,
  Crown,
  Drill,
  Gem,
  Link2,
  Scissors,
  Smile,
  Sparkles,
  Sun,
  Syringe,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** One line, used on the services grid */
  text: string;
  /** Short paragraph for the service page */
  overview: string;
  /** Who it's for / when it's recommended */
  idealFor: string[];
  benefits: string[];
  /** What happens during treatment, in order */
  steps: { title: string; text: string }[];
};

// Based on the "Facilities" list on the clinic signboard.
// Treatment descriptions are general patient information — have the doctor review them.
export const services: Service[] = [
  {
    slug: "root-canal-treatment",
    icon: Syringe,
    title: "Root Canal Treatment",
    text: "Save an infected or badly decayed tooth with gentle, pain-managed treatment.",
    overview:
      "When decay or infection reaches the soft inner part of a tooth (the pulp), it can cause severe pain and swelling. Root canal treatment removes the infected pulp, cleans and seals the inside of the tooth, and lets you keep your natural tooth instead of losing it.",
    idealFor: [
      "Severe or lingering toothache",
      "Sensitivity to hot or cold that doesn't go away",
      "Swelling or a pimple-like bump on the gum",
      "Deep decay or a cracked tooth",
    ],
    benefits: [
      "Saves your natural tooth",
      "Relieves pain caused by infection",
      "Stops infection from spreading",
      "Restores normal chewing",
    ],
    steps: [
      { title: "Examination & X-ray", text: "We check the tooth and take an X-ray to see the extent of infection." },
      { title: "Cleaning the canals", text: "Under local anaesthesia, the infected pulp is removed and the canals are cleaned." },
      { title: "Filling & sealing", text: "The canals are filled and sealed to keep bacteria out." },
      { title: "Cap for protection", text: "A cap (crown) is usually placed to protect and strengthen the treated tooth." },
    ],
  },
  {
    slug: "dental-cleaning-polishing",
    icon: Sparkles,
    title: "Dental Cleaning & Polishing",
    text: "Remove tartar and stains to keep teeth and gums clean and healthy.",
    overview:
      "Even with regular brushing, plaque hardens into tartar that only a dentist can remove. Professional cleaning (scaling) and polishing removes tartar and surface stains, helps prevent gum disease and leaves your teeth feeling fresh and smooth.",
    idealFor: [
      "Routine care every 6 months",
      "Bleeding or swollen gums",
      "Bad breath",
      "Yellow or brown stains on teeth",
    ],
    benefits: [
      "Healthier gums",
      "Fresher breath",
      "Brighter, smoother teeth",
      "Helps prevent cavities and gum disease",
    ],
    steps: [
      { title: "Check-up", text: "We examine your teeth and gums for tartar build-up and problem areas." },
      { title: "Scaling", text: "Tartar and plaque are gently removed from above and below the gum line." },
      { title: "Polishing", text: "Teeth are polished to remove surface stains and smooth the enamel." },
      { title: "Care advice", text: "We share simple brushing and flossing tips to keep your teeth clean." },
    ],
  },
  {
    slug: "fixed-teeth",
    icon: Link2,
    title: "Fixed Teeth",
    text: "Replace missing teeth with fixed bridges that stay firmly in place.",
    overview:
      "Missing teeth affect chewing, speech and confidence, and can cause nearby teeth to shift. Fixed teeth (bridges) fill the gap with natural-looking artificial teeth that are cemented in place, so unlike removable dentures you never have to take them out.",
    idealFor: [
      "One or more missing teeth",
      "People who don't want removable dentures",
      "Gaps that make chewing difficult",
    ],
    benefits: [
      "Stays fixed — no removing at night",
      "Looks and feels natural",
      "Restores chewing and clear speech",
      "Stops neighbouring teeth from shifting",
    ],
    steps: [
      { title: "Consultation", text: "We examine the gap and the supporting teeth and plan your bridge." },
      { title: "Preparing teeth", text: "The neighbouring teeth are shaped to support the bridge." },
      { title: "Measurements", text: "Impressions are taken so your bridge fits and matches your teeth." },
      { title: "Fixing the bridge", text: "The finished bridge is checked for fit and cemented in place." },
    ],
  },
  {
    slug: "dental-capping",
    icon: Crown,
    title: "Dental Capping",
    text: "Strong, natural-looking caps (crowns) to protect and restore damaged teeth.",
    overview:
      "A dental cap (crown) covers a weak, broken or heavily filled tooth to restore its shape, strength and appearance. Caps are also placed after root canal treatment to protect the tooth from breaking.",
    idealFor: [
      "Teeth after root canal treatment",
      "Broken, cracked or worn teeth",
      "Teeth with very large fillings",
      "Discoloured or misshapen teeth",
    ],
    benefits: [
      "Protects weak teeth from breaking",
      "Restores natural shape and colour",
      "Long-lasting",
      "Comfortable for everyday chewing",
    ],
    steps: [
      { title: "Examination", text: "We check the tooth and discuss the right type of cap for you." },
      { title: "Shaping the tooth", text: "The tooth is gently shaped so the cap fits over it." },
      { title: "Impression & temporary cap", text: "An impression is taken and a temporary cap protects the tooth meanwhile." },
      { title: "Final cap", text: "Your permanent cap is fitted, adjusted and cemented in place." },
    ],
  },
  {
    slug: "dental-pearls",
    icon: Gem,
    title: "Dental Pearls",
    text: "Tiny tooth gems that add a little sparkle to your smile.",
    overview:
      "Dental pearls are small decorative gems bonded to the surface of a tooth to add a touch of sparkle to your smile. Application is quick and painless and doesn't require drilling.",
    idealFor: [
      "Special occasions",
      "Anyone wanting a fun, decorative smile accent",
    ],
    benefits: [
      "Quick and painless",
      "No drilling needed",
      "Can be removed by the dentist",
    ],
    steps: [
      { title: "Choose your pearl", text: "Pick the pearl or gem and the tooth where you'd like it placed." },
      { title: "Cleaning the tooth", text: "The tooth surface is cleaned and prepared." },
      { title: "Bonding", text: "The pearl is fixed with a tooth-safe adhesive and set with a curing light." },
    ],
  },
  {
    slug: "tooth-coloured-filling",
    icon: Drill,
    title: "Tooth Coloured Filling",
    text: "Repair cavities with fillings that match the natural colour of your teeth.",
    overview:
      "Tooth-coloured (composite) fillings repair cavities and small chips using a material matched to the shade of your teeth, so the filling blends in naturally instead of showing as a dark patch.",
    idealFor: [
      "Cavities in front or back teeth",
      "Small chips or cracks",
      "Replacing old dark fillings",
    ],
    benefits: [
      "Blends in with your natural teeth",
      "Bonds to the tooth for added strength",
      "Usually completed in a single visit",
    ],
    steps: [
      { title: "Numbing (if needed)", text: "The area is numbed so you stay comfortable." },
      { title: "Removing decay", text: "Decayed parts of the tooth are gently cleaned out." },
      { title: "Filling in layers", text: "Shade-matched filling material is applied and hardened with a curing light." },
      { title: "Shaping & polishing", text: "The filling is shaped to your bite and polished smooth." },
    ],
  },
  {
    slug: "smile-designing",
    icon: Smile,
    title: "Smile Designing",
    text: "Reshape and enhance your smile with a treatment plan made for you.",
    overview:
      "Smile designing combines treatments such as cleaning, whitening, tooth-coloured fillings and caps to improve the colour, shape and alignment of your smile. Every plan is made around your face, your teeth and what you'd like to change.",
    idealFor: [
      "Stained or discoloured teeth",
      "Chipped, uneven or worn teeth",
      "Gaps between teeth",
      "Anyone wanting a more confident smile",
    ],
    benefits: [
      "A plan made just for you",
      "Natural-looking results",
      "Boosts confidence",
    ],
    steps: [
      { title: "Smile consultation", text: "We discuss what you'd like to change and examine your teeth." },
      { title: "Treatment plan", text: "We suggest the right combination of treatments and explain each step." },
      { title: "Treatment", text: "Your treatments are carried out, often over a few visits." },
      { title: "Final touches", text: "We review the result and make any finishing adjustments." },
    ],
  },
  {
    slug: "impaction-surgery",
    icon: Scissors,
    title: "Impaction Surgery",
    text: "Safe removal of impacted or stuck wisdom teeth.",
    overview:
      "An impacted tooth — most often a wisdom tooth — is one that can't come out fully through the gum. It can cause pain, swelling, infection or damage to neighbouring teeth. Impaction surgery removes the tooth safely under local anaesthesia.",
    idealFor: [
      "Pain or swelling at the back of the mouth",
      "Repeated gum infection around a wisdom tooth",
      "A wisdom tooth pushing against other teeth",
    ],
    benefits: [
      "Relieves pain and swelling",
      "Prevents repeated infection",
      "Protects neighbouring teeth",
    ],
    steps: [
      { title: "X-ray & assessment", text: "An X-ray shows the position of the tooth and helps plan the procedure." },
      { title: "Local anaesthesia", text: "The area is numbed so you don't feel pain during surgery." },
      { title: "Removal", text: "The tooth is carefully removed, sometimes in small sections." },
      { title: "Recovery care", text: "You get clear after-care instructions for quick, comfortable healing." },
    ],
  },
  {
    slug: "dental-bleaching",
    icon: Sun,
    title: "Dental Bleaching",
    text: "Professional whitening for a brighter, more confident smile.",
    overview:
      "Dental bleaching (teeth whitening) lightens stains and discolouration caused by tea, coffee, tobacco or age. Done under professional supervision, it brightens your teeth safely and noticeably.",
    idealFor: [
      "Yellow or stained teeth",
      "Stains from tea, coffee or tobacco",
      "Before weddings and special occasions",
    ],
    benefits: [
      "Visibly whiter teeth",
      "Safe, professionally supervised treatment",
      "Boosts confidence",
    ],
    steps: [
      { title: "Shade check", text: "We check your current tooth shade and make sure your teeth and gums are healthy." },
      { title: "Cleaning", text: "Teeth are cleaned so the whitening works evenly." },
      { title: "Whitening", text: "A whitening gel is applied while your gums are protected." },
      { title: "Aftercare", text: "We advise what to avoid eating and drinking to keep results longer." },
    ],
  },
  {
    slug: "splinting",
    icon: Bandage,
    title: "Splinting",
    text: "Stabilise loose or weakened teeth by joining them for support.",
    overview:
      "Teeth can become loose due to gum disease or an injury. Splinting joins a loose tooth to its stronger neighbours with a thin wire or fibre bonded behind the teeth, holding it steady so it can heal and you can chew comfortably.",
    idealFor: [
      "Teeth loosened by gum disease",
      "Teeth loosened by an accident or injury",
    ],
    benefits: [
      "Holds loose teeth firmly in place",
      "Makes chewing more comfortable",
      "Helps save teeth that might otherwise be lost",
    ],
    steps: [
      { title: "Examination", text: "We check how loose the teeth are and the cause." },
      { title: "Preparing the teeth", text: "The back surfaces of the teeth are cleaned and prepared." },
      { title: "Bonding the splint", text: "A thin wire or fibre is bonded to join the loose tooth to its neighbours." },
      { title: "Follow-up", text: "We review healing and advise on care for your gums." },
    ],
  },
  {
    slug: "tooth-extraction",
    icon: CircleMinus,
    title: "Tooth Extraction",
    text: "Comfortable removal of teeth that can't be saved.",
    overview:
      "When a tooth is too badly damaged, decayed or loose to be saved, removing it prevents pain and infection. Extractions are done under local anaesthesia so the procedure is as comfortable as possible.",
    idealFor: [
      "Severely decayed or broken teeth",
      "Very loose teeth",
      "Teeth causing crowding",
    ],
    benefits: [
      "Ends pain from a damaged tooth",
      "Prevents infection from spreading",
      "Quick procedure",
    ],
    steps: [
      { title: "Assessment", text: "We examine the tooth, and take an X-ray if needed." },
      { title: "Numbing", text: "Local anaesthesia ensures you feel pressure, not pain." },
      { title: "Removal", text: "The tooth is gently loosened and removed." },
      { title: "Aftercare", text: "You get simple instructions to help the area heal quickly." },
    ],
  },
  {
    slug: "check-up-consultation",
    icon: ClipboardCheck,
    title: "Check-up & Consultation",
    text: "A complete examination and honest advice on the right treatment.",
    overview:
      "A regular dental check-up catches problems early, when they are simpler to treat. We examine your teeth and gums, answer your questions and explain any treatment you may need, clearly and honestly.",
    idealFor: [
      "Routine check-ups every 6 months",
      "Any tooth pain or sensitivity",
      "A second opinion on a treatment plan",
    ],
    benefits: [
      "Problems found early",
      "Clear explanation of your options",
      "Peace of mind",
    ],
    steps: [
      { title: "Talk to us", text: "Tell us about any pain, concerns or goals for your smile." },
      { title: "Examination", text: "We check your teeth, gums and bite, with an X-ray if needed." },
      { title: "Advice & plan", text: "We explain what we found and recommend the right next steps." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
