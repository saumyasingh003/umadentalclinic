import { cacheLife } from "next/cache";

/** Cached server component: reading the clock is allowed inside 'use cache'. */
const CurrentYear = async () => {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
};

export default CurrentYear;
