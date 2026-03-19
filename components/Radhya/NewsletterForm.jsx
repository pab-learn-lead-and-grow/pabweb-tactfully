'use client';

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    if (!email) {
      setMessage("Please enter an email address");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setMessage("Something went wrong. Try again.");
        return;
      }

      setMessage("Subscribed successfully 🎉");
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
     <div>
          <h3 className="font-semibold text-xs md:text-sm text-black mb-1">
                Newsletter
              </h3>
              <p className="text-[11px] md:text-xs text-black mb-2">
                Subscribe to our newsletter
              </p>
    <div className="flex flex-col text-[#3C087E] space-y-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full border bg-[#3C087E]/10 rounded-md px-3 py-2 text-[11px] md:text-xs focus:outline-none focus:border-[#3C087E]"
      />

      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="text-white rounded-md py-2 text-[11px] md:text-xs bg-linear-to-r from-[#9542FF] to-[#180135] shadow-md hover:scale-105 transition disabled:opacity-60"
      >
        {loading ? "Subscribing..." : "Subscribe now"}
      </button>

      {message && (
        <p className="text-[11px] md:text-xs text-[#3C087E]">
          {message}
        </p>
      )}
    </div>
    </div>
  );
}