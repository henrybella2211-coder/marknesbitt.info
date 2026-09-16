import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What cookies The Vape Digest actually uses, explained plainly.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold mb-6">Cookie Policy</h1>
      <div className="space-y-5 leading-relaxed text-navy/85">
        <p>
          This page explains, honestly, what cookies this website uses. We
          would rather under-state this than over-state it.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          Current position
        </h2>
        <p>
          The Vape Digest does not currently use any tracking cookies,
          advertising cookies or third-party analytics cookies. We do not
          run an advertising network, retargeting pixel or social media
          tracking script on this site. There is no cookie consent banner on
          this site at present because we are not setting any non-essential
          cookies that would require one.
        </p>
        <p>
          Depending on your browser settings, this site may set strictly
          necessary technical data, such as basic session information
          required simply to load and render the site correctly, if our
          hosting infrastructure requires it. This is not used to track you
          across other websites, build an advertising profile, or identify
          you personally.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          If this changes
        </h2>
        <p>
          If we introduce analytics in future to understand which articles
          are useful to readers, or any other non-essential cookie, we will
          update this page to name the tool, explain what it collects, and
          add a proper cookie consent mechanism before any such cookie is
          set. Until this page says otherwise, assume no non-essential
          cookies are in use.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-2">
          Managing cookies in your browser
        </h2>
        <p>
          Most browsers allow you to see what cookies are stored, and to
          delete or block them, through their settings menu. Since this site
          does not rely on non-essential cookies to function, blocking
          cookies should not affect your ability to read any page here.
        </p>

        <p>
          For more on how we handle personal data generally, see our{" "}
          <Link href="/privacy-policy" className="underline-link">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
