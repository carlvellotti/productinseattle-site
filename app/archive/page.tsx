import { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter Archive",
  description:
    "Past issues of the Product in Seattle newsletter. Catch up on product events and community updates you may have missed.",
};

// Sample newsletter issues - in production, these would come from Beehiiv API or local data
const newsletterIssues = [
  {
    id: "1",
    title: "January 2025: New Year, New Product Events",
    date: "2025-01-01",
    preview:
      "Kicking off 2025 with a packed calendar. AI workshops, networking happy hours, and ProductCon early bird tickets.",
    url: "#",
  },
  {
    id: "2",
    title: "December 2024: Holiday Edition",
    date: "2024-12-01",
    preview:
      "End-of-year wrap parties, holiday networking events, and our picks for product books to read over the break.",
    url: "#",
  },
  {
    id: "3",
    title: "November 2024: Conference Season Recap",
    date: "2024-11-01",
    preview:
      "What we learned at this fall's product conferences, plus job openings at companies that are actually hiring.",
    url: "#",
  },
];

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

      {/* Archive List */}
      <section className="section-y">
        <div className="container-wide">
          {newsletterIssues.length > 0 ? (
            <div className="divide-y divide-[#e2e8f0]">
              {newsletterIssues.map((issue) => (
                <a
                  key={issue.id}
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 py-8 first:pt-0"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-[#64748b] mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(issue.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0f172a] group-hover:text-[#0891B2] transition-colors">
                      {issue.title}
                    </h3>
                    <p className="mt-2 text-[#64748b]">{issue.preview}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#0891B2] font-medium shrink-0">
                    Read
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#F0FDF4] flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h3 className="heading-sm text-[#0f172a]">No issues yet</h3>
              <p className="mt-2 text-[#64748b]">
                We&apos;re just getting started. Subscribe to get the first issue!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 bg-[#ECFEFF]">
        <div className="container-wide text-center">
          <h3 className="heading-sm text-[#0f172a]">Don&apos;t miss the next one</h3>
          <p className="mt-2 text-[#64748b]">
            Get Seattle product events delivered to your inbox monthly.
          </p>
          <a href="/#subscribe" className="btn btn-md btn-green mt-6 inline-flex">
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
}
