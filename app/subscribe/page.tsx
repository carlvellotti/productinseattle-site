import type { Metadata } from "next";
import { EmailCapture } from "@/components";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscribe",
  description:
    "Get Seattle product events delivered to your inbox. Monthly updates on meetups, workshops, and community happenings.",
};

const benefits = [
  "Curated events worth your time",
  "Local jobs at real companies",
  "Community insights and updates",
];

export default function SubscribePage() {
  return (
    <div className="min-h-[85vh] flex items-center">
      <section className="w-full py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            {/* Headline */}
            <h1 className="heading-xl text-[#0f172a] animate-fade-in-up">
              Your guide to Seattle&apos;s{" "}
              <span className="text-[#22C55E]">product scene</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-xl text-[#64748b] animate-fade-in-up stagger-1">
              Monthly updates on the best product events, jobs at companies
              worth joining, and what&apos;s happening in the Seattle product
              community.
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
