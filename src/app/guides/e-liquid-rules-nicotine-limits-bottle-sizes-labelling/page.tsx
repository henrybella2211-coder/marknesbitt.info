import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("e-liquid-rules-nicotine-limits-bottle-sizes-labelling")!;

const faq = [
  {
    question: "What is the maximum nicotine strength allowed in UK e-liquid?",
    answer:
      "UK-regulated nicotine e-liquid is capped at 20mg/ml (2%) under the Tobacco and Related Products Regulations. Products above that strength cannot legally be sold in the UK.",
  },
  {
    question: "Why do e-liquid bottles only come in 10ml sizes?",
    answer:
      "The TRPR limits nicotine-containing e-liquid to bottles of 10ml or smaller, regardless of the brand or nicotine strength. Zero-nicotine e-liquid is not bound by this specific limit, which is why some 0mg shortfill bottles are sold in larger sizes.",
  },
  {
    question: "Why is a pre-filled pod or cartridge limited to 2ml?",
    answer:
      "The same regulations cap pre-filled tanks, pods and cartridges containing nicotine e-liquid at 2ml of capacity, separately from the 10ml bottle limit that applies to e-liquid sold for refilling.",
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
        Every bottle of nicotine e-liquid sold in a UK shop follows the same
        set of rules, whichever brand is on the label. Those rules come from
        the Tobacco and Related Products Regulations 2016 (TRPR), which apply
        across the UK and cover strength, bottle size, packaging and the
        warnings that have to appear on the label. Understanding them makes
        it much easier to compare products on a shelf, rather than relying on
        marketing copy.
      </p>

      <h2>The 20mg/ml nicotine cap</h2>
      <p>
        The TRPR sets a maximum nicotine strength of 20mg/ml, commonly
        written as 2%, for any e-liquid sold in the UK. This applies whether
        the product is a traditional freebase e-liquid or a nicotine salt
        (&ldquo;nic salt&rdquo;) formulation. Nic salts are chemically
        different from freebase nicotine and tend to feel smoother at higher
        strengths, which is partly why 20mg/ml nic salt pods became popular
        with people switching from smoking, but the legal ceiling is
        identical either way. No UK retailer can lawfully sell e-liquid above
        20mg/ml, regardless of how it is formulated.
      </p>
      <p>
        Below that ceiling, common UK strengths include 3mg, 6mg, 10mg,
        12mg, 18mg and 20mg per millilitre. Lower strengths are generally
        aimed at established vapers who want less nicotine, or people using
        higher-wattage direct-to-lung (DTL) devices that deliver more vapour
        per puff. Higher strengths such as 18mg and 20mg are more commonly
        used in low-power mouth-to-lung (MTL) pod kits, which is the same
        style of device that replaced most disposables after the ban we
        cover in{" "}
        <Link href="/guides/disposable-vape-ban-what-changed">
          our explainer on the UK disposable vape ban
        </Link>
        .
      </p>

      <h2>Bottle and tank size limits</h2>
      <p>
        Alongside the strength cap, the TRPR sets maximum container sizes.
        These limits exist to reduce the amount of nicotine a person, in
        particular a child, could access from a single container, and to
        make accidental large-scale ingestion less likely.
      </p>
      <table>
        <caption>TRPR container limits for nicotine-containing e-liquid</caption>
        <thead>
          <tr>
            <th scope="col">Container type</th>
            <th scope="col">Maximum size</th>
            <th scope="col">Typical use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Refill bottle</td>
            <td>10ml</td>
            <td>Refilling your own tank or pod at home</td>
          </tr>
          <tr>
            <td>Pre-filled tank, pod or cartridge</td>
            <td>2ml</td>
            <td>Closed-pod kits, cartomisers, pre-filled cartridges</td>
          </tr>
          <tr>
            <td>0mg (nicotine-free) shortfill</td>
            <td>Not subject to this TRPR limit</td>
            <td>Sold in larger bottles, nicotine added separately via a nic shot where permitted</td>
          </tr>
        </tbody>
      </table>
      <p>
        This is why you will see e-liquid sold in small 10ml bottles rather
        than the larger 50ml or 100ml bottles common in some other countries,
        and why closed pods for kits are capped at 2ml even though the
        battery and pod housing itself might be physically bigger. Shortfill
        products, which are sold at 0mg and designed to have a nicotine shot
        added afterwards by the customer, sit outside the 10ml refill cap
        because they contain no nicotine at the point of sale.
      </p>

      <h2>Packaging and labelling requirements</h2>
      <p>
        Beyond strength and size, the regulations set out what has to appear
        on packaging and what the container itself has to be capable of. In
        practice this means every compliant bottle of nicotine e-liquid on
        sale in the UK should have:
      </p>
      <ul>
        <li>Child-resistant and tamper-evident packaging.</li>
        <li>
          A list of ingredients, including nicotine content expressed in
          mg/ml.
        </li>
        <li>
          A health warning covering a set minimum percentage of the main
          surface areas of the packaging.
        </li>
        <li>Batch information to allow the product to be traced if recalled.</li>
        <li>
          Instructions for use and storage, along with information for
          vulnerable groups such as children, pregnant women and
          non-smokers.
        </li>
      </ul>
      <p>
        Products also have to be notified to the MHRA (the Medicines and
        Healthcare products Regulatory Agency) before they can be sold, which
        involves submitting details of ingredients and emissions. If a
        product looks unusually cheap, has no visible UK health warning, or
        comes in an oversized bottle at high nicotine strength, that is
        generally a sign it has not gone through the proper UK notification
        route and should be treated with caution.
      </p>

      <h2>What this means when you are comparing products</h2>
      <p>
        In our view, the clearest way to compare two e-liquids on a shelf is
        to check three things: the mg/ml strength against what your device
        and habit actually need, the bottle or pod size relative to the
        price per millilitre, and whether the packaging carries the expected
        child-resistant closure and warning text. Price alone is not a
        reliable guide to quality, and a lower headline price on a larger
        shortfill bottle is not directly comparable to a 10ml nicotine
        bottle unless you account for the nic shot needed to bring it up to
        strength.
      </p>
      <p>
        E-liquid prices in UK shops typically range from around £3.50 to £6
        for a standard 10ml nicotine bottle, with pre-filled replacement pods
        usually working out at roughly £3 to £5 depending on the brand and
        pack size. These are general price ranges rather than fixed figures,
        and will vary between retailers.
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
