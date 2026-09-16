import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import JsonLd from "@/components/JsonLd";

export default function ArticleShell({
  article,
  children,
  faq,
}: {
  article: Article;
  children: React.ReactNode;
  faq?: { question: string; answer: string }[];
}) {
  const jsonLdGraph: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.publishedISO,
      dateModified: article.lastUpdatedISO,
      author: {
        "@type": "Organization",
        name: "The Vape Digest editorial team",
      },
      publisher: {
        "@type": "Organization",
        name: "The Vape Digest",
      },
      image: `https://marknesbitt.info${article.image}`,
      mainEntityOfPage: `https://marknesbitt.info/guides/${article.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://marknesbitt.info/" },
        { "@type": "ListItem", position: 2, name: "Guides", item: "https://marknesbitt.info/guides" },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `https://marknesbitt.info/guides/${article.slug}`,
        },
      ],
    },
  ];

  if (faq && faq.length > 0) {
    jsonLdGraph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      {jsonLdGraph.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      <nav aria-label="Breadcrumb" className="text-xs text-navy/60 mb-6">
        <Link href="/" className="hover:text-brick">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/guides" className="hover:text-brick">
          Guides
        </Link>{" "}
        / <span className="text-navy">{article.category}</span>
      </nav>

      <p className="eyebrow mb-3">{article.category}</p>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4">
        {article.title}
      </h1>
      <div className="text-sm text-navy/60 mb-6 flex flex-wrap gap-x-3 gap-y-1">
        <span>By the Vape Digest editorial team</span>
        <span aria-hidden="true">&middot;</span>
        <span>{article.readTime}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{article.lastUpdatedDisplay}</span>
      </div>

      <div className="relative w-full aspect-[16/9] border hairline mb-8">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="prose-article space-y-5 leading-relaxed text-[1.05rem]">
        {children}
      </div>
    </article>
  );
}
