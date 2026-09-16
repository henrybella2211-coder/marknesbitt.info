import Link from "next/link";

const navLinks = [
  { href: "/guides#news", label: "News" },
  { href: "/guides#regulation", label: "Regulation" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

function todayFormatted(): string {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Header() {
  return (
    <header className="border-b hairline">
      {/* Top utility bar */}
      <div className="bg-navy text-off-white">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-9 text-xs">
          <span className="uppercase tracking-wide">{todayFormatted()}</span>
          <span className="small-caps-label text-off-white/80">
            UK Vape News
          </span>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto max-w-6xl px-4 py-8 text-center">
        <Link href="/" className="inline-block">
          <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-navy">
            The Vape Digest
          </span>
        </Link>
        <p className="mt-2 text-sm sm:text-base text-navy/70">
          UK vaping news and regulation, explained.
        </p>
      </div>

      {/* Nav bar */}
      <nav
        aria-label="Primary"
        className="border-t hairline bg-off-white"
      >
        <ul className="mx-auto max-w-6xl px-4 flex items-center justify-center gap-8 h-12 text-sm font-semibold uppercase tracking-wide">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-navy hover:text-brick underline-offset-4 hover:underline decoration-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
