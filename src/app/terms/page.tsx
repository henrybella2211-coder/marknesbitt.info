import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description:
    "Terms of use and editorial disclaimer for The Vape Digest.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold mb-6">
        Terms of Use &amp; Disclaimer
      </h1>
      <div className="space-y-5 leading-relaxed text-navy/85">
        <p>
          These terms apply to your use of The Vape Digest website. By
          reading and using this site, you accept the terms below. If you do
          not agree with them, please do not continue to use the site.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">18+ notice</h2>
        <p>
          This website is intended for adults aged 18 and over. See our{" "}
          <Link href="/age-notice" className="underline-link">
            Age Notice
          </Link>{" "}
          for full detail. Content is aimed at existing smokers and vapers,
          and at anyone researching UK vaping law and regulation for factual
          purposes, and is not intended to encourage anyone under 18, or
          anyone who does not already smoke or vape, to take it up.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          Informational purpose only
        </h2>
        <p>
          Everything published on The Vape Digest is provided for general
          information and news purposes only. It does not constitute
          medical, legal or professional advice. Nothing on this site should
          be treated as a substitute for advice from a GP, pharmacist,
          registered stop-smoking service, or a qualified legal adviser
          where relevant. Regulatory information is accurate to the best of
          our knowledge as of each article&rsquo;s stated last-updated date,
          but law and guidance can change, and you should check official
          sources such as GOV.UK directly before relying on anything here
          for a decision with legal or financial consequences.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          No liability for third-party products or claims
        </h2>
        <p>
          Where we mention a specific product, brand or manufacturer by
          name, this is for identification and factual comparison only. We
          are not responsible for, and do not verify, manufacturer claims
          about their own products, and mentioning a product does not
          constitute an endorsement. We are not a retailer and do not sell
          vaping products through this site.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          External links
        </h2>
        <p>
          This site sometimes links to external websites, such as GOV.UK,
          the MHRA, the NHS or Trading Standards guidance, where that is
          useful for the reader. We do not control the content of external
          sites and are not responsible for their accuracy, availability or
          content, which may change after we link to it.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          Intellectual property
        </h2>
        <p>
          The text, layout and design of The Vape Digest are our own work
          unless stated otherwise, and should not be reproduced elsewhere
          without permission. Photographs used on this site are sourced from
          Unsplash under the Unsplash licence, which permits free commercial
          use.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Changes</h2>
        <p>
          We may update these terms from time to time as the site develops.
          Continued use of the site after any change constitutes acceptance
          of the updated terms.
        </p>

        <p>
          Questions about these terms can be sent through our{" "}
          <Link href="/contact" className="underline-link">
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
