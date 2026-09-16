import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("disposable-vape-ban-what-changed")!;

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
        Single-use vapes disappeared from UK shop shelves on 1 June 2025. From
        that date, retailers across England, Scotland, Wales and Northern
        Ireland stopped being able to legally sell disposable e-cigarettes,
        under the Environmental Protection (Single-use Vapes) (England)
        Regulations 2024 and the equivalent regulations passed by the other
        UK nations. If you got used to picking up a brightly coloured
        disposable at the till, that habit now has to change.
      </p>
      <p>
        This is not a ban on vaping. Rechargeable and refillable pod kits,
        tank systems and reusable devices remain entirely legal to sell and
        buy in the UK, and are still subject to the same nicotine and
        labelling rules that applied before. What changed is specifically the
        single-use, throwaway format.
      </p>

      <h2>Why the government banned disposables</h2>
      <p>
        Two arguments did most of the work in getting the ban through
        Parliament. The first was environmental. Disposable vapes contain a
        lithium-ion battery, a small amount of e-liquid and various plastics
        and metals, all fused into a single unit that most users simply threw
        in general waste. Local authorities and environmental groups had
        raised concerns for several years about the volume of vapes ending up
        in landfill or, worse, in general recycling streams where lithium
        batteries pose a fire risk to bin lorries and waste facilities.
      </p>
      <p>
        The second argument was about underage appeal. Disposable vapes were
        cheap, colourful, came in confectionery-style flavour names, and
        needed no maintenance or understanding of coils and wattage to use.
        Public health surveys tracked a rise in vaping among under-18s who
        had never smoked, and disposables were consistently identified as
        the format most associated with that trend. Banning the format was
        framed as a way to reduce the appeal to children without banning
        vaping outright for adults who use it as a lower-risk alternative to
        smoking.
      </p>

      <h2>What the ban actually covers</h2>
      <p>
        The regulations define a single-use vape by whether it is designed
        and manufactured to be used until the integral battery or e-liquid
        runs out, with no way to recharge the battery or refill or replace
        the e-liquid or coil. If a device meets that description, it cannot
        legally be sold, regardless of whether it happens to contain a small
        USB port (some late-stage disposables added charging ports purely to
        try to dodge the rules; regulators closed that loophole by focusing
        on whether the device is genuinely refillable and rechargeable in
        practice, not just technically capable of holding a charge).
      </p>
      <p>The rule applies at the point of sale. In practice that means:</p>
      <ul>
        <li>
          Shops, supermarkets, petrol stations and vape specialists cannot
          stock or sell single-use disposable vapes.
        </li>
        <li>
          Online retailers delivering to UK addresses are equally bound by
          the ban, not just physical shops.
        </li>
        <li>
          Rechargeable pod kits, refillable tank devices and reusable
          closed-pod systems that take replacement pods are unaffected and
          remain on sale.
        </li>
        <li>
          Trading Standards officers can seize non-compliant stock and
          prosecute retailers who continue selling disposables, in the same
          way they enforce age-of-sale law (see our explainer on{" "}
          <Link href="/guides/trading-standards-underage-vape-sales">
            how Trading Standards enforces vape age laws
          </Link>
          ).
        </li>
      </ul>

      <h2>What to use instead of a disposable</h2>
      <p>
        For anyone who relied on disposables, the practical replacement is a
        closed-pod kit or a refillable pod kit. Both are reusable: you charge
        the battery via USB-C, and instead of throwing the whole device away
        you either swap in a new pre-filled pod or refill an empty pod or
        tank with bottled e-liquid.
      </p>
      <table>
        <caption>Disposables versus the reusable formats that replaced them</caption>
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col">Disposable (no longer legal to sell)</th>
            <th scope="col">Closed-pod kit</th>
            <th scope="col">Refillable pod/tank kit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Battery</td>
            <td>Fixed, thrown away with device</td>
            <td>Rechargeable via USB-C</td>
            <td>Rechargeable, sometimes removable</td>
          </tr>
          <tr>
            <td>E-liquid</td>
            <td>Sealed in, not replaceable</td>
            <td>Pre-filled replacement pods</td>
            <td>Refill from a bottle yourself</td>
          </tr>
          <tr>
            <td>Typical running cost</td>
            <td>Was £5–£7 per device, lasting a day or two</td>
            <td>Pods typically £3–£5 each</td>
            <td>10ml bottle typically £3.50–£5</td>
          </tr>
          <tr>
            <td>Maintenance</td>
            <td>None, by design</td>
            <td>Minimal, swap pod when empty</td>
            <td>Refill and occasionally change coil</td>
          </tr>
        </tbody>
      </table>
      <p>
        Closed-pod kits are the closest match to the disposable experience:
        you are not handling e-liquid directly, and the device is simple to
        use. Refillable kits cost a little more attention but work out
        cheaper over time, since you are buying e-liquid by the bottle rather
        than paying for a new pod cartridge each time. Whichever route you
        take, the nicotine strength and bottle size limits are unchanged and
        worth understanding before you buy. We cover those in detail in our
        guide to{" "}
        <Link href="/guides/e-liquid-rules-nicotine-limits-bottle-sizes-labelling">
          UK e-liquid rules on nicotine limits and bottle sizes
        </Link>
        .
      </p>

      <h2>What if a shop is still selling disposables?</h2>
      <p>
        Some retailers had stock left over when the ban came into force, and
        enforcement has been phased in unevenly across different council
        areas depending on Trading Standards resourcing. If you spot
        disposables still on sale, this is something local Trading Standards
        teams want to know about; most councils accept reports via their
        website or the Citizens Advice consumer helpline. In our view, the
        clearest sign a shop is cutting corners on disposables is often the
        same shop that is lax about checking ID at the till, so the two
        issues tend to travel together.
      </p>

      <h2>The bigger picture</h2>
      <p>
        According to the NHS, vaping is substantially less harmful than
        smoking and can support some smokers in quitting, though it is not
        risk-free and is not recommended for people who have never smoked.
        The disposable ban does not change that underlying public health
        position; it is aimed squarely at waste and underage appeal rather
        than at restricting adult access to vaping as a category. If you
        already used a disposable as a stop-smoking tool, switching to a
        rechargeable pod kit keeps you within a broadly similar category of
        product, just in a reusable shell.
      </p>
    </ArticleShell>
  );
}
