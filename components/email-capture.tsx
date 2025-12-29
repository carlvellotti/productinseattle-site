"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface EmailCaptureProps {
  variant?: "hero" | "card" | "inline";
  dark?: boolean;
  title?: string;
  description?: string;
}

export function EmailCapture({
  variant = "inline",
  dark = false,
  title,
  description,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // TODO: Replace with actual Beehiiv API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 p-4 rounded-xl ${
          dark ? "bg-[#22C55E]/20 text-white" : "bg-[#DCFCE7] text-[#15803D]"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-[#22C55E] flex items-center justify-center">
          <Check className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-semibold">You&apos;re in!</p>
          <p className={`text-sm ${dark ? "text-white/70" : "text-[#16A34A]"}`}>
            Check your inbox to confirm.
          </p>
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="bg-[#164E63] rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="heading-md text-white">
            {title || "Stay in the loop"}
          </h3>
          <p className="mt-3 text-white/80">
            {description ||
              "Get Seattle product events delivered to your inbox. Monthly updates, no spam."}
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="input input-dark flex-1"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-md btn-green whitespace-nowrap"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
          {status === "error" && (
            <p className="mt-3 text-red-300 text-sm">{errorMessage}</p>
          )}
        </div>
      </div>
    );
  }

  // Hero and inline variants
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex flex-col sm:flex-row gap-3 ${variant === "hero" ? "max-w-lg mx-auto" : ""}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          required
          className={`input flex-1 ${dark ? "input-dark" : ""}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-md btn-green whitespace-nowrap"
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className={`mt-2 text-sm ${dark ? "text-red-300" : "text-red-600"}`}>
          {errorMessage}
        </p>
      )}
      <p className={`mt-3 text-sm ${dark ? "text-white/60" : "text-[#64748b]"}`}>
        Monthly updates on Seattle product events. No spam, ever.
      </p>
    </form>
  );
}
