import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles, type Category } from "@/lib/articles";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Guides — News and Regulation",
  description:
    "Every UK vaping news and regulatory explainer published by The Vape Digest, grouped by category with last-updated dates.",
  alternates: { canonical: "/guides" },
};

const categoryOrder: { key: Category; id: string; description: string }[] = [
  {
    key: "Regulation",
    id: "regulation",
    description:
      "Explainers on the laws and technical rules that govern vaping products in the UK.",
  },
  {
    key: "News",
    id: "news",
    description:
      "Coverage of how UK vaping rules are enforced in practice, and what is changing.",
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://marknesbitt.info/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Guides",
              item: "https://marknesbitt.info/guides",
            },
          ],
        }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-navy/60 mb-6">
        <Link href="/" className="hover:text-brick">
          Home
        </Link>{" "}
        / <span className="text-navy">Guides</span>
      </nav>

      <h1 className="font-serif text-4xl font-bold mb-2">
        News &amp; Regulation Guides
      </h1>
      <p className="text-navy/70 mb-10 max-w-2xl">
        Every explainer we have published, grouped by category. Each one
        carries a visible last-updated date and is revisited when the
        underlying law changes.
      </p>

      {categoryOrder.map((group) => {
        const groupArticles = articles.filter((a) => a.category === group.key);
        if (groupArticles.length === 0) return null;
        return (
          <section
            key={group.key}
            id={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="mb-14 scroll-mt-24"
          >
            <h2
              id={`${group.id}-heading`}
              className="font-serif text-2xl font-bold border-b-2 border-navy pb-2 mb-1"
            >
              {group.key}
            </h2>
            <p className="text-sm text-navy/60 mb-4">{group.description}</p>
            <div>
              {groupArticles.map((article) => (
                <div
                  key={article.slug}
                  className="flex flex-col sm:flex-row gap-4 sm:items-center border-t hairline py-5"
                >
                  <div className="relative w-full sm:w-24 aspect-[4/3] sm:aspect-square shrink-0 border hairline">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="eyebrow mb-1">{article.category}</p>
                    <h3 className="font-serif text-lg font-bold leading-snug mb-1">
                      <Link
                        href={`/guides/${article.slug}`}
                        className="hover:text-brick"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-navy/70 leading-relaxed mb-2">
                      {article.excerpt}
                    </p>
                    <div className="text-xs text-navy/55">
                      {article.readTime} &middot; {article.lastUpdatedDisplay}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
