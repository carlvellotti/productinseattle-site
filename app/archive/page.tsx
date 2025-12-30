import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter Archive",
  description:
    "Past issues of the Product in Seattle newsletter. Catch up on product events and community updates you may have missed.",
};

export default function ArchivePage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#164E63] text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-xl">Newsletter Archive</h1>
            <p className="mt-4 text-xl text-white/80">
              Missed an issue? Catch up on past Seattle product updates.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Link */}
      <section className="section-y">
        <div className="container-tight text-center">
          <p className="text-lg text-[#64748b]">
            All past newsletter issues are hosted on Beehiiv.
          </p>
          <a
            href="https://productinseattle.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-green mt-8 inline-flex"
          >
            View Archive
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 bg-[#ECFEFF]">
        <div className="container-wide text-center">
          <h3 className="heading-sm text-[#0f172a]">Don&apos;t miss the next one</h3>
          <p className="mt-2 text-[#64748b]">
            Get Seattle product events delivered to your inbox monthly.
          </p>
          <a href="/subscribe" className="btn btn-md btn-green mt-6 inline-flex">
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
}
