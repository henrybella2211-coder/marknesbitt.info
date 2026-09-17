import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("uk-vaping-duty-october-2026-changes")!;

const faq = [
  {
    question: "What is the exact rate of the new Vaping Products Duty?",
    answer:
      "£2.20 per 10ml of vaping liquid, equivalent to 22p per millilitre, as confirmed by HMRC. It applies to the liquid itself, at the same flat rate regardless of nicotine strength, including 0mg liquid.",
  },
  {
    question: "When does the vaping duty start?",
    answer:
      "Vaping Products Duty and the accompanying Vaping Duty Stamps Scheme take effect on 1 October 2026, as set out by HMRC. Retailers and wholesalers are allowed to sell existing unstamped stock until 31 March 2027.",
  },
  {
    question: "Does the duty apply to vape devices as well as e-liquid?",
    answer:
      "No. Vaping Products Duty is charged on the vaping liquid only, not on the device, battery or empty pod hardware that holds it.",
  },
  {
    question: "Will vapers pay more than smokers save by switching?",
    answer:
      "The government has paired the vaping duty with a one-off tobacco duty increase of £2.20 per 100 cigarettes and £2.20 per 50g of other tobacco products, specifically so that vaping remains cheaper than smoking after both changes take effect.",
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
        From 1 October 2026, e-liquid sold in the UK is subject to a new
        excise duty for the first time. Vaping Products Duty (VPD) was
        announced by the Treasury at the Autumn Budget 2024 and confirmed by
        HMRC ahead of its start date. The headline number is straightforward:
        a flat rate of £2.20 per 10ml of vaping liquid, equivalent to 22p per
        millilitre, charged regardless of nicotine strength and applied to
        nicotine-free liquid as well as nicotine-containing liquid.
      </p>
      <p>
        This is the first time vaping has been taxed as a product category in
        the UK, separately from the standard 20% VAT that already applies to
        vaping products at the till. Here is what the duty actually covers,
        who pays it, and what it is likely to mean for the price of a bottle
        of e-liquid or a pack of pods.
      </p>

      <h2>Why the government introduced it</h2>
      <p>
        The Treasury&rsquo;s stated reasoning is twofold: raising revenue from a
        product category that had previously fallen outside excise duty, and
        doing so without removing the financial incentive for smokers to
        switch to vaping. On its own, a new duty on e-liquid would narrow the
        price gap between smoking and vaping. To avoid that, the government
        paired VPD with a one-off increase to tobacco duty, timed to land on
        the same date. According to HMRC, that one-off tobacco rise is £2.20
        per 100 cigarettes and £2.20 per 50g of other tobacco products,
        deliberately set to mirror the £2.20 figure used for vaping liquid so
        that vaping remains the cheaper option after both changes take
        effect. This is separate from the ordinary annual tobacco duty
        escalator, which continues to rise each year regardless.
      </p>
      <p>
        Treasury analysis published alongside the policy estimates that VPD
        will raise more than £550 million a year for the Exchequer by
        2030&ndash;31, once the duty is fully established and collected across the
        supply chain.
      </p>

      <h2>What exactly is being taxed</h2>
      <p>
        VPD is charged on the liquid, not the hardware. A rechargeable pod
        kit or tank device bought without liquid is not itself subject to the
        duty; the duty applies once liquid is added to the calculation,
        whether that is a 10ml refill bottle, a shortfill, or the liquid
        inside a pre-filled pod or cartridge. It applies equally to
        nicotine-containing liquid and to 0mg liquid, which is a change from
        how e-liquid has been treated up to now, since the existing
        Tobacco and Related Products Regulations bottle-size limits we cover
        in our guide to{" "}
        <Link href="/guides/e-liquid-rules-nicotine-limits-bottle-sizes-labelling">
          UK e-liquid rules on nicotine limits and bottle sizes
        </Link>{" "}
        do not distinguish duty treatment by strength, only container size.
      </p>
      <table>
        <caption>Vaping Products Duty at a glance</caption>
        <thead>
          <tr>
            <th scope="col">Detail</th>
            <th scope="col">Confirmed position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rate</td>
            <td>£2.20 per 10ml (22p per ml) of vaping liquid</td>
          </tr>
          <tr>
            <td>Applies to</td>
            <td>All vaping liquid, nicotine-containing or 0mg</td>
          </tr>
          <tr>
            <td>Does not apply to</td>
            <td>Devices, batteries and empty hardware on their own</td>
          </tr>
          <tr>
            <td>Start date</td>
            <td>1 October 2026</td>
          </tr>
          <tr>
            <td>VAT</td>
            <td>Standard 20% VAT continues to apply on top, as before</td>
          </tr>
        </tbody>
      </table>

      <h2>Who actually pays it</h2>
      <p>
        VPD is an excise duty collected upstream, not a sales tax added by
        the shop at the till. HMRC requires manufacturers of vaping liquid,
        importers bringing it into the UK, UK representatives acting for
        overseas manufacturers, and registered warehousekeepers to hold HMRC
        approval to handle duty-liable vaping products from 1 October 2026.
        Those businesses account for the duty and, in practice, build it into
        the wholesale price they charge retailers, who in turn reflect it in
        the shelf price. As a shopper, you will not see a separate &ldquo;vaping
        duty&rdquo; line on a receipt in the way you might with fuel duty; it is
        baked into the price of the product before VAT is calculated on top.
      </p>

      <h2>The duty stamps scheme</h2>
      <p>
        Alongside the duty itself, HMRC is introducing a Vaping Duty Stamps
        Scheme, similar in principle to the stamps already used to show
        duty has been paid on tobacco products. Digital duty stamps have been
        available to register for since 1 September 2026, with a transitional
        period allowing physical stamps to be obtained until 30 November 2026
        and affixed to stock until 31 December 2026. From 1 January 2027,
        only digital stamps, verified through a scanning app, will be
        accepted. Retailers and wholesalers are permitted to continue selling
        eligible stock that predates the scheme, without a stamp, until 31
        March 2027. From 1 April 2027, any vaping product sold in the UK
        outside duty suspension is required to carry a valid duty stamp. The
        scheme exists to make it easier for Trading Standards and HMRC to
        identify stock that has not had the correct duty paid on it, which is
        also the enforcement route that already applies to underage sales and
        banned disposables, covered in our guides on{" "}
        <Link href="/guides/trading-standards-underage-vape-sales">
          Trading Standards enforcement of vape age laws
        </Link>{" "}
        and{" "}
        <Link href="/guides/disposable-vape-ban-what-changed">
          the UK disposable vape ban
        </Link>
        .
      </p>

      <h2>What it means for shoppers</h2>
      <p>
        For anyone buying e-liquid, the most direct effect is on the price of
        a standard 10ml bottle, which currently retails for roughly £3.50 to
        £6. £2.20 of duty per 10ml is a meaningful addition relative to that
        price range before VAT is applied on top, though the final shelf
        price in any given shop depends on how much of that cost a retailer
        passes through and how it prices its own margin, so we would not
        assume every bottle rises by exactly the same amount. Larger
        shortfill bottles and multi-pack pods will see the duty scale with
        the volume of liquid they contain, since the rate is charged per
        millilitre rather than per unit. Devices themselves, since they are
        not liquid, are not directly affected by VPD, though retailers may
        adjust bundle pricing where kits are sold with liquid included.
      </p>
      <p>
        In our view, the practical takeaway for shoppers is to expect e-liquid
        and pre-filled pods to cost noticeably more from October 2026 onward,
        while cigarettes and hand-rolling tobacco also become more expensive
        on the same date because of the matched one-off tobacco duty rise.
        The government&rsquo;s intention is that the gap between the two stays in
        vaping&rsquo;s favour, which is worth bearing in mind if cost is a factor
        in a decision to switch from smoking.
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
      <p className="text-sm text-navy/60">
        This explainer reflects guidance published by HMRC and GOV.UK ahead of
        the 1 October 2026 start date. Duty rates and scheme deadlines are set
        by the Treasury and HMRC and can be revised; retailers and importers
        should always check current guidance directly on GOV.UK before
        relying on figures for compliance purposes.
      </p>
    </ArticleShell>
  );
}
