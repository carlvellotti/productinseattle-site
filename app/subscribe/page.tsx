import type { Metadata } from "next";
import { EmailCapture } from "@/components";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscribe",
  description:
    "Join Seattle's product community. Monthly updates on the best events, plus the chance to promote your own.",
};

const benefits = [
  "Best events delivered monthly",
  "Promote your own events to the community",
  "Connect with Seattle product people",
];

export default function SubscribePage() {
  return (
    <div className="min-h-[85vh] flex items-center">
      <section className="w-full py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            {/* Headline */}
            <h1 className="heading-xl text-[#0f172a] animate-fade-in-up">
              Building Seattle&apos;s{" "}
              <span className="text-[#22C55E]">product community</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-xl text-[#64748b] animate-fade-in-up stagger-1">
              Find events worth attending. Host your own and reach the community.
              One email a month keeps you connected.
            </p>

            {/* Email Capture */}
            <div className="mt-10 animate-fade-in-up stagger-2">
              <EmailCapture variant="hero" />
            </div>

            {/* Benefits */}
            <div className="mt-8 flex flex-col items-center gap-3 animate-fade-in-up stagger-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-[#64748b]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#F0FDF4] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#22C55E]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <p className="mt-10 text-sm text-[#94a3b8] animate-fade-in-up stagger-4">
              Join product folks from Amazon, Microsoft, Meta, and Seattle&apos;s
              best startups
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
