import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How The Vape Digest researches, writes and corrects its coverage of UK vaping news and regulation.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold mb-6">Editorial Policy</h1>
      <div className="space-y-5 leading-relaxed text-navy/85">
        <p>
          This page sets out how The Vape Digest researches, writes and
          maintains its content, so readers know what standards to expect
          from us.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          Who writes our content
        </h2>
        <p>
          Content on this site is written and edited by our UK-based
          editorial team. We do not publish under invented author names or
          fabricated bylines, and we do not claim professional
          qualifications, such as medical or legal credentials, that our
          team does not hold.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          How we research regulatory and health content
        </h2>
        <p>
          For claims about UK law, such as the disposable vape ban, nicotine
          strength limits or age-of-sale rules, we check the relevant
          government regulations and official guidance directly, primarily
          from GOV.UK, the Medicines and Healthcare products Regulatory
          Agency (MHRA), the Department of Health and Social Care (DHSC),
          and local Trading Standards guidance. For health-related claims
          about vaping, we refer to positions published by the NHS and
          public health bodies such as OHID and Cancer Research UK, and we
          attribute those claims to the relevant body rather than stating
          them as our own independent medical judgement.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          Facts versus opinion
        </h2>
        <p>
          We try to keep factual claims, such as a specific mg/ml limit or a
          date a regulation came into force, clearly separated from
          editorial analysis or opinion. Where we express a view, we
          generally signal it with language such as &ldquo;in our
          view&rdquo; or &ldquo;we think&rdquo;, rather than presenting
          opinion as settled fact.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          No paid or favourable coverage
        </h2>
        <p>
          We do not accept payment, free products or any other incentive in
          exchange for positive coverage of a brand, retailer or product. We
          are not a retailer, and this site does not carry paid product
          placements.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          Keeping content current
        </h2>
        <p>
          Every article displays a visible &ldquo;last updated&rdquo; date.
          Because vaping regulation in the UK has changed significantly in
          recent years, such as the June 2025 disposable vape ban, we
          revisit published articles when we become aware that the
          underlying law or guidance has changed, and update the date
          accordingly.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Corrections</h2>
        <p>
          If you spot an inaccuracy, please tell us via our{" "}
          <Link href="/contact" className="underline-link">
            contact page
          </Link>
          . We will review genuine corrections and update the relevant
          article, noting the updated date, as quickly as we reasonably
          can.
        </p>
      </div>
    </div>
  );
}
