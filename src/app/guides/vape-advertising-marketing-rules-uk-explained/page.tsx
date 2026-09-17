import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("vape-advertising-marketing-rules-uk-explained")!;

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
        Vaping products are legal to sell to adults in the UK, but where and
        how they can be advertised is far more restricted than most people
        assume. Some of those restrictions are hard law, others are
        enforced through the advertising industry&rsquo;s own codes, but in
        practice they combine to shut off most of the advertising channels a
        typical consumer brand would use. This explainer sets out what the
        rules actually say, not how to work around them.
      </p>

      <h2>Television and radio: an outright ban</h2>
      <p>
        Advertising e-cigarettes and refill containers on television and
        radio has been banned in the UK since 20 May 2016, when the Tobacco
        Products Directive was implemented into UK law through changes to
        the Broadcasting Code and the BCAP Code (the UK Code of Broadcast
        Advertising). This is not a grey area or a voluntary restriction:
        broadcasters are legally prohibited from carrying adverts for
        nicotine e-cigarettes, and the same rule extends to programme
        sponsorship that has the aim or effect of promoting such products.
        Ofcom enforces the Broadcasting Code and the Advertising Standards
        Authority (ASA) enforces the BCAP Code, so a vape brand cannot pay to
        sponsor a TV programme or buy a radio ad slot in the way it could for
        most other consumer products.
      </p>

      <h2>Press, cinema and paid online ads: also mostly closed</h2>
      <p>
        Outside broadcast, advertising is governed by the CAP Code (the UK
        Code of Non-broadcast Advertising), specifically Section 22, which
        deals with electronic cigarettes. Rule 22.12 prohibits advertising
        unlicensed, nicotine-containing e-cigarettes and their components in
        a specific list of non-broadcast media: newspapers, magazines, email
        marketing, banner ads, paid-for search advertising and other
        paid-for online content. Because almost no vaping product in the UK
        is licensed as a medicine by the MHRA, in practice this rule closes
        off the great majority of conventional paid advertising space for
        nicotine vapes, not just a narrow slice of it.
      </p>
      <p>
        Point-of-sale advertising inside a shop, such as till-area signage or
        in-store display material, sits outside this specific prohibition
        and remains permitted, provided it still complies with the separate
        rules on under-18 appeal covered below. This is one reason vape
        marketing in the UK looks so different from other consumer
        categories: shop displays and packaging carry much more of the
        weight than press or broadcast campaigns do.
      </p>

      <h2>Social media and online marketing</h2>
      <p>
        The same Section 22 restrictions extend to social media, and this is
        the area the ASA has been most active in enforcing recently. Its
        guidance is that vape ads cannot appear in any online media where
        content is actively pushed to people who have not sought it out
        themselves. That rules out paid display advertising on any platform,
        and it also rules out algorithmically distributed promotional posts
        from brand or retailer accounts on platforms such as Instagram,
        Facebook and TikTok, since those posts are surfaced to people who
        never chose to follow or search for that content.
      </p>
      <p>
        What is still allowed is narrower than many retailers expect:
        factual, non-promotional information published on a marketer&rsquo;s own
        website or its own privately run social media account. The word
        &ldquo;factual&rdquo; is doing real work here; product listings and
        genuine information are permitted, but marketing messaging,
        promotional offers and anything designed to persuade rather than
        inform are not. CAP has issued a formal Enforcement Notice to the
        vaping industry specifically over ads and promotional content
        appearing on TikTok, putting brands and retailers on notice to stop
        immediately or face sanctions.
      </p>

      <h2>Influencer marketing is largely off-limits</h2>
      <p>
        Because promotional content that reaches people who did not seek it
        out is restricted regardless of who posts it, paid influencer
        partnerships promoting a vape brand or product generally fall foul
        of the same rules as a brand posting directly, since an influencer&rsquo;s
        content is typically distributed to followers and, via recommendation
        algorithms, to non-followers too. The ASA has been escalating action
        against non-compliant influencers more broadly, including using its
        own paid advertising to highlight repeated rule-breaking directly to
        an influencer&rsquo;s audience, and referring persistent offenders to
        enforcement partners. A separate 2025 ASA report on influencer
        disclosure compliance found a substantial proportion of sponsored
        content across Instagram and TikTok still failing to meet basic ad
        disclosure requirements, which is a wider problem than vaping alone
        but leaves vape-related influencer content particularly exposed to
        scrutiny given the category-specific restrictions on top.
      </p>

      <h2>Rules that apply regardless of the medium</h2>
      <p>
        Even in the channels where some vape advertising is permitted, such
        as point of sale or a brand&rsquo;s own website, content-level rules under
        the CAP Code still apply, aimed specifically at limiting appeal to
        under-18s:
      </p>
      <ul>
        <li>
          Ads must not feature anyone who is, or appears to be, under 25
          playing a significant role or shown using an e-cigarette.
        </li>
        <li>
          Ads must not include anything likely to be of particular appeal to
          under-18s, which the ASA has interpreted to include youth culture
          references, characters or imagery popular with children, and
          celebrities with strong appeal to a young audience.
        </li>
        <li>
          No medium should be used to advertise e-cigarettes if more than 25%
          of its audience is under 18, and outdoor advertising near schools
          is subject to particular scrutiny for this reason.
        </li>
      </ul>
      <p>
        These content rules exist for broadly the same reason as the age of
        sale itself: limiting the appeal of vaping to people who are not
        legally allowed to buy it. That underage-appeal concern runs through
        UK vaping policy generally, and it is the same reasoning behind the
        strict age-verification enforcement we cover in{" "}
        <Link href="/guides/trading-standards-underage-vape-sales">
          our guide to Trading Standards and underage vape sales
        </Link>
        , and behind the removal of the disposable format most associated
        with underage use, covered in{" "}
        <Link href="/guides/disposable-vape-ban-what-changed">
          our explainer on the UK disposable vape ban
        </Link>
        .
      </p>

      <h2>What this means in practice for retailers</h2>
      <p>
        In our view, the realistic advertising toolkit available to a
        compliant UK vape retailer is narrower than for most retail
        categories: in-store point-of-sale material, a brand or shop website
        limited to factual product information, and organic content on
        privately run social accounts that stops short of promotional
        messaging. Broadcast advertising is not an option at all, and paid
        press, display and search advertising for nicotine-containing
        products are closed off by the CAP Code in the same way. Retailers
        working with influencers or running social campaigns should treat
        the current ASA enforcement activity as a live risk rather than a
        theoretical one, given the scale of monitoring now in place.
      </p>
      <p>
        None of this is enforced by a single body acting alone. Ofcom and the
        ASA cover broadcast; the ASA and CAP cover non-broadcast and online;
        and Trading Standards can become involved where advertising overlaps
        with underage sales or non-compliant stock. Anyone marketing vaping
        products commercially should treat the CAP and BCAP codes, published
        by the Committee of Advertising Practice, as the primary reference
        rather than general assumptions carried over from other product
        categories.
      </p>
    </ArticleShell>
  );
}
