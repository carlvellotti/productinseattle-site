import { Metadata } from "next";
import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { EmailCapture } from "@/components";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product in Seattle is a community hub for product people in the Pacific Northwest. Find events, host your own, and connect with Seattle's PM community.",
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
              Building Seattle&apos;s product community, one event at a time.
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
              startups and mid-size companies. But there&apos;s never been a central
              place for us to organize.
            </p>
            <p className="text-[#475569] mt-4">
              Events get scattered across LinkedIn, Meetup, Eventbrite, Luma, and
              random Slack channels. And if you want to host something yourself?
              Finding attendees is harder than it should be.
            </p>
            <p className="text-[#475569] mt-4">
              <strong className="text-[#0f172a]">Product in Seattle</strong>{" "}
              is the home base. Find events worth attending. Host your own and
              reach the community. One email a month keeps everyone connected.
            </p>
          </div>

          <div className="mt-12 p-8 bg-[#F0FDF4] rounded-2xl">
            <h3 className="heading-sm text-[#0f172a]">What I believe</h3>
            <ul className="mt-4 space-y-3 text-[#475569]">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  <strong className="text-[#0f172a]">In-person matters.</strong>{" "}
                  Every big break in my career came from showing up somewhere. Real relationships happen face-to-face.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  <strong className="text-[#0f172a]">Anyone can host.</strong>{" "}
                  You don&apos;t need permission to bring people together. You just need a way to reach them.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  <strong className="text-[#0f172a]">Local is underrated.</strong>{" "}
                  Generic product content is everywhere. A community you can actually meet? That&apos;s rare.
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
            <Image
              src="/carl.png"
              alt="Carl Vellotti"
              width={96}
              height={96}
              className="w-24 h-24 rounded-2xl object-cover shrink-0"
            />
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
                  X / Twitter
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
                <h3 className="font-semibold text-[#0f172a]">Host an event</h3>
              </div>
              <p className="text-[#64748b] text-sm">
                Organizing something for Seattle product people?{" "}
                <a href="/submit" className="text-[#0891B2] hover:underline">
                  Add your event
                </a>{" "}
                and reach the community.
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
