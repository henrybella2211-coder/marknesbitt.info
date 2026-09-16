import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About The Vape Digest: an independent UK website covering vaping news and regulation for adult vapers and retailers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold mb-6">About The Vape Digest</h1>

      <div className="space-y-5 leading-relaxed text-navy/85">
        <p>
          The Vape Digest is an independent UK website that covers vaping
          news and regulation. We focus on what changes in the law actually
          mean in practice, for adults who already vape and for the
          retailers who sell vaping products, rather than on product reviews
          or promotion of specific brands.
        </p>
        <p>
          The site is written and edited by our UK-based editorial team. We
          are not a vape retailer, we do not sell products, and we do not
          accept payment in exchange for favourable coverage of any brand or
          device.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Who this site is for</h2>
        <p>
          We write for adult vapers, generally aged 30 to 60, who want to
          understand what is changing, such as the disposable vape ban, TPD
          labelling rules, or age-of-sale enforcement, without reading
          through full government consultation documents or statutory
          instruments. Our content is also useful for retailers who want a
          plain-English summary of their obligations, and for anyone
          researching UK vaping law for factual reasons.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Our approach</h2>
        <p>
          Each explainer separates factual, checkable claims, such as
          nicotine strength limits or bottle size caps, from editorial
          analysis or opinion, which we mark clearly as our own view. Where
          we state a legal or health fact, we check it against official UK
          sources such as GOV.UK, the MHRA, the NHS, Cancer Research UK/OHID
          and local Trading Standards guidance. Full detail on our sourcing
          and correction process is on our{" "}
          <Link href="/editorial-policy" className="underline-link">
            editorial policy
          </Link>{" "}
          page.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">What this site is not</h2>
        <p>
          This site does not provide medical advice, does not sell vaping
          products, and is not intended to encourage anyone under 18, or
          anyone who does not already smoke or vape, to start. See our{" "}
          <Link href="/age-notice" className="underline-link">
            age notice
          </Link>{" "}
          for more detail. Content here is general information, not a
          substitute for advice from a GP, pharmacist or stop-smoking
          service.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Get in touch</h2>
        <p>
          If you have a correction, a question, or something you think we
          should cover, visit our{" "}
          <Link href="/contact" className="underline-link">
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
