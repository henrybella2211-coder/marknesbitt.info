"use client";

import { useState } from "react";

const CONTACT_EMAIL = "editorial@marknesbitt.info";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email and message before sending.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Message from ${name} via The Vape Digest`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className="text-xs text-navy/60">
        Filling this in and pressing &ldquo;Open email to send&rdquo; opens
        your own email app with the message pre-filled, addressed to us.
        Nothing is sent from this page directly; you send it yourself from
        your email client.
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border hairline bg-off-white px-3 py-2 text-navy"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border hairline bg-off-white px-3 py-2 text-navy"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full border hairline bg-off-white px-3 py-2 text-navy"
          required
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-brick">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="bg-brick text-off-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-navy transition-colors"
      >
        Open email to send
      </button>
    </form>
  );
}
