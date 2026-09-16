import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Vape Digest handles personal data, in line with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-5 leading-relaxed text-navy/85">
        <p>
          This policy explains how The Vape Digest handles personal data. It
          is written to be consistent with UK GDPR and the Data Protection
          Act 2018. This site is a small, independent editorial project, so
          the amount of personal data we handle is deliberately limited.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Who we are</h2>
        <p>
          The Vape Digest is an independent UK vaping news and information
          website. We are the data controller for any personal data
          collected through this site. You can reach us via our{" "}
          <Link href="/contact" className="underline-link">
            contact page
          </Link>
          .
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">What data we collect</h2>
        <p>Data we may hold, depending on how you use the site:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Contact form submissions.</strong> Our contact page opens
            a pre-filled email in your own email application rather than
            submitting a form to a server we run. Any name, email address
            and message you choose to send is handled through your own email
            provider and ours, in the same way as any other email you send
            us.
          </li>
          <li>
            <strong>Basic hosting and analytics data.</strong> As with almost
            any website, our hosting provider may log basic technical
            information, such as IP address and browser type, for security
            and reliability purposes. If we add a privacy-friendly analytics
            tool in future to understand which pages are read, we will
            update this policy to name it.
          </li>
        </ul>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">What we do not do</h2>
        <p>
          We do not sell personal data. We do not run advertising networks or
          third-party ad trackers on this site. We do not require you to
          create an account or log in to read any page.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Cookies</h2>
        <p>
          For details of what cookies, if any, this site uses, see our{" "}
          <Link href="/cookie-policy" className="underline-link">
            Cookie Policy
          </Link>
          .
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Your rights</h2>
        <p>
          Under UK GDPR, you have rights including access to personal data we
          hold about you, correction of inaccurate data, and, in some
          circumstances, erasure of your data. Since we hold very little
          personal data and do not run accounts, most requests can be
          resolved simply by contacting us and asking us to delete any email
          correspondence.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">Contacting us about data</h2>
        <p>
          If you have a question about how your data is handled, or want to
          exercise any of your rights, use our{" "}
          <Link href="/contact" className="underline-link">
            contact page
          </Link>
          . If you remain unsatisfied with our response, you have the right
          to complain to the Information Commissioner&rsquo;s Office (ICO),
          the UK&rsquo;s independent regulator for data protection.
        </p>

        <p className="text-sm text-navy/60 mt-8">
          This policy may be updated from time to time as the site develops.
        </p>
      </div>
    </div>
  );
}
