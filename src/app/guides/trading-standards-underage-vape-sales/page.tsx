import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("trading-standards-underage-vape-sales")!;

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
        The minimum age to buy vaping products, and tobacco products, in the
        UK is 18. This is set out under the Children and Young Persons Act
        1933 as amended, and it applies to every retailer, whether that is a
        supermarket, an independent vape shop, a petrol station or an online
        retailer shipping to a UK address. It is a criminal offence to sell
        vaping products, including nicotine-free e-liquid and devices, to
        anyone under 18.
      </p>
      <p>
        Enforcement of that law, though, sits with local authority Trading
        Standards teams, and how it plays out on the ground is less widely
        understood than the headline age limit itself.
      </p>

      <h2>Who actually enforces the age limit</h2>
      <p>
        Trading Standards is not a single national body. Each local council
        in England, Wales and Scotland runs its own Trading Standards
        service (Northern Ireland has an equivalent through its district
        councils), and these teams are responsible for a wide range of
        consumer protection work, of which underage sales of vapes,
        cigarettes and alcohol is one part. Councils generally run a mix of:
      </p>
      <ul>
        <li>
          Test purchases, where a young-looking volunteer, usually over 18
          but with a youthful appearance, or in some schemes a genuine
          under-18 volunteer supervised by an officer, attempts to buy a
          vape to see whether the retailer asks for ID.
        </li>
        <li>
          Responding to complaints from parents, schools, teachers or members
          of the public about a specific shop believed to be selling to
          under-18s.
        </li>
        <li>
          Routine inspections that check age-verification policies,
          till-prompt systems and staff training records.
        </li>
        <li>
          Joint operations with police, particularly where underage sales are
          linked to other issues such as unregistered or non-compliant
          stock.
        </li>
      </ul>
      <p>
        Because funding and staffing levels vary significantly between
        councils, the intensity of enforcement is not uniform across the
        country. Some areas run frequent test purchase operations, others
        rely more heavily on complaint-led investigation.
      </p>

      <h2>Challenge 25 is a retailer policy, not the law</h2>
      <p>
        Many shops display &ldquo;Challenge 25&rdquo; signage, which asks
        staff to request ID from anyone who appears to be under 25, not just
        under 18. It is easy to assume this is itself a legal requirement.
        It is not. The legal minimum age is 18; Challenge 25 is a voluntary
        retailer policy adopted as a buffer, on the reasoning that judging
        someone&rsquo;s age visually to within a year or two is unreliable, so
        asking for ID from a wider age band reduces the risk of
        accidentally selling to someone under 18. A retailer that only
        checks ID from people who look under 18, rather than under 25, is
        not automatically breaking the law, provided they do not in fact
        sell to anyone under 18. But many retailers, and most major
        supermarket and convenience chains, adopt Challenge 25 as standard
        practice to reduce that risk.
      </p>

      <h2>Proxy purchasing</h2>
      <p>
        A separate offence covers proxy purchasing, where an adult buys a
        vape on behalf of someone under 18. This matters because retailers
        can do everything right, checking ID at the till and refusing a
        direct sale to a minor, only for an adult in the same group to buy
        the product and hand it over immediately outside the shop. Proxy
        purchasing is illegal in the same way it is for alcohol, and
        Trading Standards campaigns increasingly target this behaviour
        alongside direct retailer checks, since underage disposable vape use
        was frequently traced back to proxy purchases rather than a retailer
        knowingly selling direct to a child. That underage appeal, discussed
        in our piece on{" "}
        <Link href="/guides/disposable-vape-ban-what-changed">
          the UK disposable vape ban
        </Link>
        , was one of the central reasons disposables were banned outright
        rather than simply policed more heavily.
      </p>

      <h2>What enforcement action can look like</h2>
      <p>
        Where a test purchase or investigation finds a retailer selling to
        someone under 18, councils have a range of tools available rather
        than a single fixed response. Depending on the severity and whether
        it is a repeat issue, Trading Standards can issue a formal warning,
        require a retailer to complete additional staff training, issue a
        fixed penalty notice, or in more serious or repeated cases pursue
        prosecution through the courts, which can carry a fine. For sales of
        illegal or non-compliant stock, such as disposables sold after the
        June 2025 ban or e-liquid above the 20mg/ml cap set out in{" "}
        <Link href="/guides/e-liquid-rules-nicotine-limits-bottle-sizes-labelling">
          our guide to UK e-liquid rules
        </Link>
        , officers can also seize the stock itself. We are deliberately not
        quoting specific fine amounts here, since penalty levels and
        sentencing guidelines can be revised and vary by case; anyone facing
        an actual enforcement matter should check current guidance directly
        from GOV.UK or their local Trading Standards service.
      </p>

      <h2>What responsible retailers typically do</h2>
      <p>
        Shops that take age-verification seriously tend to share a similar
        set of practices, regardless of size:
      </p>
      <ul>
        <li>
          Till prompts that require staff to confirm an ID check before a
          vaping product sale can complete.
        </li>
        <li>Regular refresher training for staff on accepted forms of ID.</li>
        <li>
          A clear refusals log, recording when a sale was declined due to
          lack of ID.
        </li>
        <li>
          Signage at the point of sale stating the legal age and the shop&rsquo;s
          own ID policy.
        </li>
      </ul>

      <h2>How advertising rules fit in</h2>
      <p>
        Age-of-sale enforcement is only one part of how the UK tries to limit
        underage vaping. Separately, advertising rules enforced by the
        Advertising Standards Authority restrict vape marketing from
        appealing to under-18s in the first place, banning it from TV and
        radio outright and tightly restricting it elsewhere. We cover how
        that system works in{" "}
        <Link href="/guides/vape-advertising-marketing-rules-uk-explained">
          our explainer on UK vape advertising and marketing rules
        </Link>
        .
      </p>

      <h2>What parents should know</h2>
      <p>
        For parents, the most practical takeaway is that the law already
        sets a firm floor at 18, retailers face real consequences for
        breaching it, and the disposable format most associated with
        underage use is no longer legally on sale. That does not mean
        underage vaping has disappeared. Proxy purchasing, informal sharing
        between older and younger teenagers, and non-compliant sellers
        operating outside the regulated market remain the more likely routes
        by which under-18s access vapes now, which is why enforcement
        attention has shifted toward those areas rather than solely toward
        shop counters.
      </p>
    </ArticleShell>
  );
}
