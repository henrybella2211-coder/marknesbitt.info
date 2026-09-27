import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("nic-salt-e-liquid-uk-compliance-rules")!;

const faq = [
  {
    question: "Is nic salt e-liquid subject to a different nicotine limit than freebase e-liquid?",
    answer:
      "No. Both formulations are capped at the same 20mg/ml maximum under the Tobacco and Related Products Regulations. Nic salt is a different chemical form of nicotine, not a different legal category, so the strength ceiling is identical.",
  },
  {
    question: "Why are nic salt bottles always 10ml or smaller?",
    answer:
      "The TRPR limits any container of nicotine-containing e-liquid, salt-based or freebase, to a maximum of 10ml. This is a container size rule rather than something specific to nic salts, which is why 10ml is the standard bottle size across the category.",
  },
  {
    question: "Is nic salt e-liquid safer or healthier than freebase e-liquid?",
    answer:
      "UK regulation does not treat nic salt as a safer or healthier category, and this site does not make that claim either. It is a different formulation that many vapers describe as smoother at higher strengths, but the legal strength cap, bottle size limit and labelling requirements are exactly the same as for freebase e-liquid.",
  },
];

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    type: "article",
    url: `https://marknesbitt.info/guides/${article.slug}`,
  },
};

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        Nicotine salt (&ldquo;nic salt&rdquo;) e-liquid has become the
        standard fill for the small, low-power pod kits that most vapers now
        use, including the rechargeable devices that took over the market
        after the{" "}
        <Link href="/guides/disposable-vape-ban-what-changed">
          UK disposable vape ban
        </Link>{" "}
        in June 2025. We have already covered the general rules that apply to
        all UK e-liquid in{" "}
        <Link href="/guides/e-liquid-rules-nicotine-limits-bottle-sizes-labelling">
          our explainer on nicotine limits, bottle sizes and labelling
        </Link>
        . This piece looks specifically at how those rules apply to nic
        salts, since it is the format most new and switching vapers now
        encounter first, and sets out what a compliant bottle should actually
        look like on the shelf.
      </p>

      <h2>Nic salts are a formulation, not a separate legal category</h2>
      <p>
        Nic salt e-liquid uses nicotine bound to an acid, rather than the
        &ldquo;freebase&rdquo; nicotine used in older e-liquid formulations.
        Vapers and manufacturers commonly describe nic salts as giving a
        smoother throat hit at higher strengths than freebase e-liquid,
        which is a widely stated characteristic of the formulation rather
        than a health claim. What matters for compliance is that the
        Tobacco and Related Products Regulations 2016 (TRPR) do not treat
        nic salt as a separate product type with its own rules. Whatever the
        chemical form of the nicotine, the same strength cap, container
        limits and labelling requirements apply.
      </p>

      <h2>The 20mg/ml nicotine cap applies in full</h2>
      <p>
        The TRPR sets a maximum nicotine strength of 20mg/ml for any
        e-liquid sold in the UK, and nic salts are bound by that ceiling in
        exactly the same way as freebase e-liquid. No UK retailer can
        lawfully sell nic salt e-liquid above 20mg/ml, regardless of how
        smooth a higher concentration might be marketed as. In practice,
        most UK nic salt ranges are sold at 5mg, 10mg and 20mg per
        millilitre, giving a spread from a genuinely low strength up to the
        legal maximum. A 5mg nic salt is not automatically &ldquo;right&rdquo;
        for any particular reader &mdash; nicotine needs vary from person to
        person &mdash; but it is a real, lower option within the regulated
        range, and many vapers who find 10mg or 20mg too strong do move down
        to it rather than stopping at the top of the scale.
      </p>

      <h2>The 10ml bottle limit</h2>
      <p>
        Alongside the strength cap, the TRPR limits any bottle of
        nicotine-containing e-liquid, nic salt included, to a maximum of
        10ml. This is why nic salt bottles are sold in small 10ml sizes
        rather than the larger shortfill bottles used for 0mg e-liquid,
        which sit outside this particular limit because they contain no
        nicotine at the point of sale. A 10ml nic salt bottle at 20mg/ml
        contains the maximum amount of nicotine the law allows in a single
        refill container, which is part of why the size limit exists
        alongside the strength cap rather than instead of it.
      </p>

      <h2>Labelling and child-resistant packaging</h2>
      <p>
        The same packaging rules that apply to any nicotine e-liquid apply
        to nic salts. A compliant 10ml bottle should have:
      </p>
      <ul>
        <li>Child-resistant and tamper-evident packaging.</li>
        <li>
          The nicotine strength printed clearly in mg/ml, alongside a full
          ingredients list.
        </li>
        <li>
          A health warning covering the required minimum percentage of the
          main packaging surfaces.
        </li>
        <li>Batch information so the product can be traced if recalled.</li>
        <li>
          Usage and storage instructions, including information aimed at
          children, pregnant women and non-smokers.
        </li>
      </ul>
      <p>
        Products also need to be notified to the MHRA before sale, which
        covers nic salt formulations exactly as it covers freebase
        e-liquid. A nic salt bottle with no visible UK health warning, no
        printed mg/ml strength, or packaging that opens without any
        child-resistant mechanism has not gone through the proper
        notification route, whatever the label claims about the flavour or
        brand.
      </p>

      <h2>How a compliant range fits inside those limits</h2>
      <p>
        Elux&rsquo;s nic salt range is a reasonably typical example of how a
        UK-market product sits inside these rules in practice. It is sold in
        10ml bottles, within the standard 50/50 PG/VG nic salt formulation
        used across most MTL pod-friendly e-liquids, at 5mg, 10mg and 20mg
        strengths &mdash; covering the low end, middle and legal ceiling of
        the UK&rsquo;s nicotine range rather than exceeding it. The flavour
        list runs across fruit, ice and menthol, and lemonade profiles, with
        the fuller flavour list available at 10mg and 20mg and a smaller
        selection specifically at 5mg. None of that is unusual for a
        TPD/TRPR-notified UK nic salt range; it is simply what compliance
        looks like when a brand stays inside the strength and bottle size
        limits rather than testing them. If you are new to nic salts and
        want to start below the mid-strength options most ranges lead with,{" "}
        <a
          href="https://localsupplies.co.uk/collections/elux-nic-salts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elux vape liquid 5mg
        </a>{" "}
        is a common lower-strength starting point, though as with any
        nicotine strength, what suits one vaper will not necessarily suit
        another.
      </p>

      <h2>Spotting compliant vs non-compliant nic salts</h2>
      <p>
        Because nic salts are popular and relatively cheap to produce, they
        are also a format where non-compliant or grey-market stock turns up.
        A handful of checks apply whether you are buying online or in
        person:
      </p>
      <table>
        <caption>Quick checklist for a compliant nic salt bottle</caption>
        <thead>
          <tr>
            <th scope="col">What to check</th>
            <th scope="col">Compliant</th>
            <th scope="col">Worth avoiding</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Printed nicotine strength</td>
            <td>5mg, 10mg, 12mg, 18mg or 20mg/ml</td>
            <td>Above 20mg/ml, or no strength printed at all</td>
          </tr>
          <tr>
            <td>Bottle size</td>
            <td>10ml or smaller</td>
            <td>Larger than 10ml but still containing nicotine</td>
          </tr>
          <tr>
            <td>Packaging</td>
            <td>Child-resistant cap, visible UK health warning</td>
            <td>No child-resistant mechanism, no warning text</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Broadly in line with other UK nic salt ranges</td>
            <td>Unusually cheap for the strength and bottle size</td>
          </tr>
        </tbody>
      </table>
      <p>
        A 10ml bottle priced far below the rest of the market, printed with
        a strength above 20mg/ml, or missing a child-resistant cap and
        health warning altogether is the clearest sign that a nic salt
        product has skipped the UK&rsquo;s notification and labelling
        requirements, regardless of how established the brand name printed
        on the front looks.
      </p>

      <h2>The bottom line</h2>
      <p>
        Nic salt e-liquid is not a separate regulatory category in the UK.
        It sits under exactly the same TRPR limits as any other nicotine
        e-liquid: a 20mg/ml strength cap, a 10ml bottle size limit, and
        fixed labelling and packaging requirements. A compliant range simply
        works within those numbers rather than around them, which is why
        checking the printed strength, the bottle size and the packaging
        detail tells you more about a nic salt product&rsquo;s legitimacy
        than the flavour name or the marketing on the box.
      </p>

      <h2>Frequently asked questions</h2>
      <div className="space-y-5">
        {faq.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </ArticleShell>
  );
}
