import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Vape Digest editorial team about a correction, question or story suggestion.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="font-serif text-4xl font-bold mb-4">Contact us</h1>
      <p className="text-navy/80 leading-relaxed mb-8">
        Spotted something out of date, have a correction, or want to suggest
        a story? Use the form below to email our editorial team directly. We
        do not publish a phone number or physical address, as The Vape
        Digest is run as an online-only editorial project.
      </p>
      <ContactForm />
    </div>
  );
}
