import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Age Notice",
  description:
    "The Vape Digest is intended for adults aged 18 and over. Read our full age notice.",
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold mb-6">Age Notice</h1>
      <div className="space-y-5 leading-relaxed text-navy/85">
        <p>
          The Vape Digest is intended for adults aged 18 and over. This
          includes existing smokers and vapers, and anyone else who wants
          factual information about UK vaping law and regulation.
        </p>
        <p>
          Nothing on this site is intended to encourage anyone under the age
          of 18 to use vaping products. Nothing on this site is intended to
          encourage anyone who does not already smoke or vape, of any age,
          to start. It is illegal in the UK to sell vaping or tobacco
          products to anyone under 18, and we support that law fully. Our
          explainer on{" "}
          <Link href="/guides/trading-standards-underage-vape-sales" className="underline-link">
            how Trading Standards enforces vape age laws
          </Link>{" "}
          covers this in detail.
        </p>
        <p>
          According to the NHS, vaping is substantially less harmful than
          smoking and can support some smokers in switching away from
          cigarettes, but it is not risk-free and is not recommended for
          people who have never smoked. We report on vaping regulation as a
          matter of public interest and consumer information, not as
          promotion of vaping as a lifestyle choice.
        </p>
        <p>
          We have not built a full-screen age-gate that blocks access to
          this site, since that would also block search engines and
          screen-reader users from reaching genuinely useful regulatory
          information. Instead, this notice appears in the footer of every
          page, and as its own page here, so the age intent of the site is
          clear wherever you land on it.
        </p>
        <p>
          If you are under 18, please leave this site and do not attempt to
          purchase vaping products, which is against the law.
        </p>
      </div>
    </div>
  );
}
