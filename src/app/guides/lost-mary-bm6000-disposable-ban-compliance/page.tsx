import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("lost-mary-bm6000-disposable-ban-compliance")!;

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
    <ArticleShell article={article}>
      <p>
        Lost Mary built its name on disposable vapes, so shoppers who
        remember the brand from before June 2025 sometimes assume every
        product carrying that name must have slipped through some kind of
        loophole. The{" "}
        <a
          href="https://localsupplies.co.uk/collections/lost-mary-bm6000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lost Mary BM6000
        </a>{" "}
        is a straightforward example of why that assumption is wrong. It is
        a rechargeable pod system with a replaceable pod, and that single
        structural fact, not the brand on the box or the puff number on the
        packaging, is what keeps it outside the UK&rsquo;s single-use vape
        ban.
      </p>
      <p>
        This piece sets out how that works in practice: what actually
        changed when disposables were banned, how a device like the BM6000
        differs structurally from what was banned, and what details are
        worth checking on any rechargeable pod kit to satisfy yourself it is
        genuinely compliant rather than a disposable wearing a charging
        port.
      </p>

      <h2>What the ban restricts, and what it doesn&rsquo;t</h2>
      <p>
        We cover the single-use ban in full in{" "}
        <Link href="/guides/disposable-vape-ban-what-changed">
          our explainer on the UK disposable vape ban
        </Link>
        , but the point that matters here is how the regulations define a
        single-use vape. It comes down to design, not size, flavour or puff
        count. A device counts as single-use if it is manufactured to be
        used until its built-in battery or e-liquid runs out, with no way to
        recharge the battery or refill or replace the e-liquid or coil. A
        device fails that test, and becomes illegal to sell, if it is
        missing either a rechargeable battery or a replaceable source of
        e-liquid. It only has to miss one.
      </p>
      <p>
        Nothing in the regulations caps how many puffs a legal device can be
        rated for, how many flavours it comes in, or how it is marketed.
        Those details were incidental to why disposables got banned, not the
        legal test itself. That is the detail a lot of coverage of the ban
        glosses over, and it is the reason a device can carry a puff figure
        many times higher than any disposable ever offered and still be
        entirely legal.
      </p>

      <h2>How the BM6000 is actually built</h2>
      <p>
        The BM6000 is draw-activated, so there are no buttons to operate,
        and it charges over USB-C, with the manufacturer quoting roughly
        45 to 60 minutes for a full charge (the charging cable is not
        included with the kit, per the retailer listing). The coil is a
        built-in mesh coil, but it sits inside the pod rather than being a
        separate part you swap on its own; when a pod is empty, the whole
        pod comes out and a new one clips in. Nicotine strength is 20mg/ml
        across the flavour range, which is the maximum the UK allows.
      </p>
      <p>
        That combination, a battery that recharges and a pod that gets
        replaced rather than a sealed shell that gets thrown away, is the
        entire basis for classing the BM6000 as a rechargeable pod kit
        rather than a disposable. It makes no difference that the brand
        built its reputation on disposables before the ban, or that the
        device is styled to look similar to one. The regulations look at
        what the hardware does, not what it resembles.
      </p>

      <h2>Why the puff figure doesn&rsquo;t settle the question</h2>
      <p>
        Lost Mary states &ldquo;up to 6,000 puffs&rdquo; per pod for the
        BM6000. Treat that as a manufacturer estimate rather than an
        independently tested figure, and note what it is actually
        measuring: puffs from a single pod, not a cumulative total for the
        device across its working life. It is also not comparable to a
        disposable&rsquo;s puff count in any direct sense, since a
        disposable&rsquo;s figure describes the entire product before it is
        thrown away, while a pod kit&rsquo;s figure describes one
        consumable component that gets replaced repeatedly for as long as
        you keep using the device.
      </p>
      <p>
        None of that puff figure has any bearing on whether the device is
        legal to sell. A disposable rated for 600 puffs and a pod kit rated
        for 6,000 puffs per pod sit on opposite sides of the same legal line
        for the same reason in both cases, which is whether the battery
        recharges and the e-liquid source can be replaced, not the number
        printed on the box.
      </p>

      <h2>What compliance doesn&rsquo;t exempt it from</h2>
      <p>
        Falling outside the single-use ban does not put a device outside
        every other rule. Rechargeable pod kits are still bound by the
        Tobacco and Related Products Regulations, the same rules that set
        the 20mg/ml nicotine ceiling, the 2ml cap on pre-filled pods and the
        10ml cap on refill bottles, which we cover in{" "}
        <Link href="/guides/e-liquid-rules-nicotine-limits-bottle-sizes-labelling">
          our guide to UK e-liquid rules on nicotine limits and bottle sizes
        </Link>
        . Replacement pods and kits also need to reach the shelf through the
        ordinary channels: child-resistant, tamper-evident packaging, a
        printed health warning, and sale restricted to adults aged 18 and
        over. Being rechargeable answers one legal question. It does not
        answer all of them, and a retailer still has to get the nicotine
        strength, packaging and age checks right independently of that.
      </p>

      <h2>Spotting a genuinely compliant device</h2>
      <p>
        The BM6000 is a useful worked example precisely because the same
        checklist applies to any rechargeable pod kit on a shop shelf, not
        just this one. A handful of details are worth looking for before
        you buy:
      </p>
      <ul>
        <li>
          A visible charging port, usually USB-C, and packaging that
          actually says &ldquo;rechargeable&rdquo; rather than something
          vaguer like &ldquo;extended battery&rdquo;.
        </li>
        <li>
          A pod or cartridge sold separately as a replacement item, so you
          can buy refills on their own rather than only ever buying a
          complete new device.
        </li>
        <li>
          A printed nicotine strength that does not exceed 20mg/ml, and a
          pod or bottle size within the 2ml or 10ml caps.
        </li>
        <li>
          Child-resistant, tamper-evident packaging carrying a health
          warning, the same as any other nicotine e-liquid product sold
          legally in the UK.
        </li>
      </ul>
      <p>
        A product that has no genuine charging port, or that has one but no
        way to buy a replacement pod separately, is either an old-style
        disposable that should not still be on sale or a device dressed up
        to look compliant without actually meeting the test. Puff count,
        flavour name and brand recognition tell you nothing about which
        category a device falls into. The charging port and the replaceable
        pod do.
      </p>

      <h2>The bottom line</h2>
      <p>
        The BM6000 stayed legal to sell after June 2025 for the same reason
        every other rechargeable pod kit did, not because of any special
        treatment for Lost Mary as a brand, and not because of anything to
        do with its puff rating or flavour range. It has a battery that
        recharges and a pod that gets replaced rather than a device that
        gets thrown away whole, which is exactly what the single-use
        definition turns on. That structural distinction, not the number on
        the front of the box, is what is worth checking on any device
        before you assume it is legitimately on sale.
      </p>
    </ArticleShell>
  );
}
