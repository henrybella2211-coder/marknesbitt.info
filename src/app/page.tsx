import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";

export default function HomePage() {
  const [lead, ...rest] = articles;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="sr-only">
        The Vape Digest — UK vaping news and regulation, explained
      </h1>

      {/* Lead story */}
      <section aria-labelledby="lead-story-heading" className="mb-14">
        <p className="eyebrow mb-2">{lead.category}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start border-b hairline pb-12">
          <div className="relative w-full aspect-[3/2] border hairline">
            <Image
              src={lead.image}
              alt={lead.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2
              id="lead-story-heading"
              className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4"
            >
              <Link href={`/guides/${lead.slug}`} className="hover:text-brick">
                {lead.title}
              </Link>
            </h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              {lead.excerpt}
            </p>
            <div className="text-xs text-navy/60 mb-4">
              {lead.readTime} &middot; {lead.lastUpdatedDisplay}
            </div>
            <Link
              href={`/guides/${lead.slug}`}
              className="underline-link font-semibold text-sm"
            >
              Read the full explainer &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Latest (2-col) + Explainers sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        <div className="lg:col-span-2">
          <h2 className="small-caps-label text-brick mb-6 border-b hairline pb-2">
            Latest
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {rest.map((article) => (
              <article key={article.slug} className="border hairline">
                <div className="relative w-full aspect-[3/2] border-b hairline">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="eyebrow mb-2">{article.category}</p>
                  <h3 className="font-serif text-xl font-bold leading-snug mb-2">
                    <Link
                      href={`/guides/${article.slug}`}
                      className="hover:text-brick"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-navy/75 leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <div className="text-xs text-navy/55">
                    {article.readTime} &middot; {article.lastUpdatedDisplay}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside aria-labelledby="explainers-heading">
          <h2
            id="explainers-heading"
            className="small-caps-label text-brick mb-6 border-b hairline pb-2"
          >
            Quick Explainers
          </h2>
          <ol className="space-y-5">
            {articles.map((article, i) => (
              <li key={article.slug} className="border-b hairline pb-5 last:border-b-0">
                <span className="font-serif text-2xl font-bold text-navy/30 mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link
                  href={`/guides/${article.slug}`}
                  className="font-semibold hover:text-brick leading-snug"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      {/* Why trust this site */}
      <section
        aria-labelledby="trust-heading"
        className="border hairline bg-navy text-off-white p-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div>
          <h2 id="trust-heading" className="font-serif text-xl font-bold mb-2">
            Why trust The Vape Digest
          </h2>
          <p className="text-sm text-off-white/80 leading-relaxed">
            We are an independent editorial team, not a retailer. We do not
            accept payment for favourable coverage of any product or brand.
          </p>
        </div>
        <div>
          <h3 className="small-caps-label text-off-white/60 mb-2">
            Sourcing
          </h3>
          <p className="text-sm text-off-white/80 leading-relaxed">
            Regulatory and health claims are checked against official UK
            sources such as GOV.UK, the MHRA, the NHS and Trading Standards
            guidance.
          </p>
        </div>
        <div>
          <h3 className="small-caps-label text-off-white/60 mb-2">
            Kept current
          </h3>
          <p className="text-sm text-off-white/80 leading-relaxed">
            Every explainer carries a visible &ldquo;last updated&rdquo; date
            and is revisited when the underlying law changes. Read our{" "}
            <Link href="/editorial-policy" className="underline">
              editorial policy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
