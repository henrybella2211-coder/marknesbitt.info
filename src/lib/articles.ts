export type Category = "Regulation" | "News";

export type Article = {
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  readTime: string;
  lastUpdatedDisplay: string;
  lastUpdatedISO: string;
  publishedISO: string;
  image: string;
  imageAlt: string;
};

export const articles: Article[] = [
  {
    slug: "disposable-vape-ban-what-changed",
    title: "The UK disposable vape ban: what changed and what to use instead",
    category: "Regulation",
    excerpt:
      "Single-use vapes stopped being legal to sell in the UK from 1 June 2025. Here is why the ban happened, what retailers and vapers can still buy, and how to replace a disposable habit with a reusable device.",
    readTime: "8 min read",
    lastUpdatedDisplay: "Last updated 8 September 2026",
    lastUpdatedISO: "2026-09-08",
    publishedISO: "2025-06-03",
    image: "/images/rechargeable-pod-kit-device.jpg",
    imageAlt:
      "A black rechargeable pod mod device resting on a wooden surface",
  },
  {
    slug: "e-liquid-rules-nicotine-limits-bottle-sizes-labelling",
    title: "E-liquid rules in the UK: nicotine limits, bottle sizes and labelling explained",
    category: "Regulation",
    excerpt:
      "The Tobacco and Related Products Regulations set a 20mg/ml nicotine cap, a 10ml limit on e-liquid bottles and a 2ml limit on pre-filled pods. Here is what that means when you are comparing products on a shop shelf.",
    readTime: "9 min read",
    lastUpdatedDisplay: "Last updated 10 September 2026",
    lastUpdatedISO: "2026-09-10",
    publishedISO: "2025-02-14",
    image: "/images/e-liquid-bottles-counter.jpg",
    imageAlt: "Rows of e-liquid bottles lined up on a shop counter",
  },
  {
    slug: "trading-standards-underage-vape-sales",
    title: "Trading Standards and underage sales: how the UK is enforcing vape age laws",
    category: "News",
    excerpt:
      "It has been illegal to sell vapes to anyone under 18 since e-cigarettes came onto the UK market. Here is how the age-of-sale rule actually works, what retailers are required to do, and how enforcement has developed.",
    readTime: "8 min read",
    lastUpdatedDisplay: "Last updated 14 September 2026",
    lastUpdatedISO: "2026-09-14",
    publishedISO: "2025-09-01",
    image: "/images/shop-counter-checkout.jpg",
    imageAlt: "A customer paying at a shop counter point-of-sale system",
  },
  {
    slug: "uk-vaping-duty-october-2026-changes",
    title: "The new UK vaping duty: what's changing from October 2026",
    category: "Regulation",
    excerpt:
      "A new Vaping Products Duty of £2.20 per 10ml takes effect on 1 October 2026, alongside a one-off tobacco duty rise. Here is what the duty covers, who pays it, and what it means for the price of e-liquid.",
    readTime: "8 min read",
    lastUpdatedDisplay: "Last updated 16 September 2026",
    lastUpdatedISO: "2026-09-16",
    publishedISO: "2026-09-16",
    image: "/images/uk-pound-coins-currency.jpg",
    imageAlt: "A pile of British pound coins and small change on a table",
  },
  {
    slug: "vape-advertising-marketing-rules-uk-explained",
    title: "Vape advertising and marketing rules in the UK explained",
    category: "Regulation",
    excerpt:
      "E-cigarette ads are banned outright from TV and radio, shut out of most paid online advertising, and tightly restricted on social media. Here is how the CAP and BCAP codes actually control where and how vapes can be marketed.",
    readTime: "9 min read",
    lastUpdatedDisplay: "Last updated 17 September 2026",
    lastUpdatedISO: "2026-09-17",
    publishedISO: "2026-09-17",
    image: "/images/smartphone-social-media-icons.jpg",
    imageAlt: "A smartphone screen showing a grid of social media app icons",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
