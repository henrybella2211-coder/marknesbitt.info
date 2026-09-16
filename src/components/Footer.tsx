import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-off-white mt-16">
      {/* Age notice strip - persistent on every page */}
      <div className="border-b border-off-white/20">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs sm:text-sm text-off-white/90 leading-relaxed">
          <strong className="text-off-white">18+ content notice:</strong> The
          Vape Digest publishes news and regulatory information for adults
          aged 18 and over who already smoke or vape, or who are researching
          UK vaping law. Nothing on this site is intended to encourage anyone
          under 18, or anyone who does not already smoke or vape, to start.
          Read our{" "}
          <Link href="/age-notice" className="underline underline-offset-2">
            full age notice
          </Link>
          .
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="small-caps-label text-off-white/60 mb-3">
            The Vape Digest
          </p>
          <p className="text-sm text-off-white/80 leading-relaxed">
            An independent UK website covering vaping news and regulation,
            written and edited by our UK-based editorial team.
          </p>
        </div>

        <div>
          <p className="small-caps-label text-off-white/60 mb-3">Sections</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guides#news" className="hover:underline">
                News
              </Link>
            </li>
            <li>
              <Link href="/guides#regulation" className="hover:underline">
                Regulation
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:underline">
                All guides
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="small-caps-label text-off-white/60 mb-3">Legal</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/editorial-policy" className="hover:underline">
                Editorial Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms &amp; Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/age-notice" className="hover:underline">
                Age Notice
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="small-caps-label text-off-white/60 mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:underline">
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-off-white/20">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-off-white/60">
          &copy; {new Date().getFullYear()} The Vape Digest. Independent UK
          vaping news and information. Not affiliated with any manufacturer
          or retailer.
        </div>
      </div>
    </footer>
  );
}
