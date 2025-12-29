import { Metadata } from "next";
import { MapPin, Mail, Coffee } from "lucide-react";
import { EmailCapture } from "@/components";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product in Seattle is the community newsletter for product people in the Pacific Northwest. Learn more about who we are and why we started this.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#164E63] text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-xl">About Product in Seattle</h1>
            <p className="mt-4 text-xl text-white/80">
              Seattle&apos;s product community is better than you think. We just needed a place to find each other.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-y">
        <div className="container-tight">
          <div className="prose prose-lg max-w-none">
            <h2 className="heading-md text-[#0f172a]">The Story</h2>
            <p className="text-[#475569] mt-4">
              Seattle has one of the densest concentrations of product people
              in the world. Amazon, Microsoft, Meta, Google, plus hundreds of
              startups and mid-size companies. But for a long time, there wasn&apos;t
              a central place to find out what&apos;s happening in the local product scene.
            </p>
            <p className="text-[#475569] mt-4">
              Events get posted across LinkedIn, Meetup, Eventbrite, Luma, and
              random Slack channels. Jobs show up and disappear. Great people
              are out there, but finding them takes work.
            </p>
            <p className="text-[#475569] mt-4">
              <strong className="text-[#0f172a]">Product in Seattle</strong>{" "}
              exists to make it easier. One newsletter, once a month, with the
              events, jobs, and community updates that matter. That&apos;s it.
            </p>
          </div>

          <div className="mt-12 p-8 bg-[#F0FDF4] rounded-2xl">
            <h3 className="heading-sm text-[#0f172a]">What we believe</h3>
            <ul className="mt-4 space-y-3 text-[#475569]">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  <strong className="text-[#0f172a]">Community over audience.</strong>{" "}
                  We&apos;re building connections, not just an email list.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  <strong className="text-[#0f172a]">Signal over noise.</strong>{" "}
                  One good email beats ten forgettable ones.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  <strong className="text-[#0f172a]">Local matters.</strong>{" "}
                  Generic product content is everywhere. Seattle-specific is rare.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="section-y bg-[#f8fafc]">
        <div className="container-tight">
          <h2 className="heading-md text-[#0f172a]">Who&apos;s behind this?</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-2xl bg-[#164E63] flex items-center justify-center text-3xl shrink-0">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0f172a]">Carl Vellotti</h3>
              <p className="mt-1 text-[#64748b]">
                Senior PM in Seattle. 8+ years building products, currently exploring
                how AI changes everything about our craft.
              </p>
              <p className="mt-3 text-[#64748b]">
                Also runs{" "}
                <a
                  href="https://fullstackpm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0891B2] hover:underline"
                >
                  The Full Stack PM
                </a>
                , a newsletter about building with AI tools.
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://twitter.com/carlvellotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0891B2] hover:underline"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/in/carlvellotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0891B2] hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-y">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ECFEFF] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#0891B2]" />
                </div>
                <h3 className="font-semibold text-[#0f172a]">Get in touch</h3>
              </div>
              <p className="text-[#64748b] text-sm">
                Questions, feedback, or just want to say hi? Email me at{" "}
                <a
                  href="mailto:carl@fullstackpm.com"
                  className="text-[#0891B2] hover:underline"
                >
                  carl@fullstackpm.com
                </a>
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#22C55E]" />
                </div>
                <h3 className="font-semibold text-[#0f172a]">Submit an event</h3>
              </div>
              <p className="text-[#64748b] text-sm">
                Know about a product event in Seattle?{" "}
                <a href="/submit" className="text-[#0891B2] hover:underline">
                  Submit it here
                </a>{" "}
                and help the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-white">
        <div className="container-wide">
          <EmailCapture
            variant="card"
            title="Join the community"
            description="Get Seattle product events and community updates delivered to your inbox. Monthly, no spam."
          />
        </div>
      </section>
    </div>
  );
}
