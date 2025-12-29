import { Metadata } from "next";
import { Send, CheckCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Submit an Event",
  description:
    "Know about a product event in Seattle? Submit it here and help the community discover great events.",
};

const emailSubject = "Event Submission for Product in Seattle";
const emailBody = `Hi Carl!

I'd like to submit an event for Product in Seattle:

EVENT NAME:
[Event name here]

EVENT LINK:
[Eventbrite, Luma, Meetup, etc.]

DATE & TIME:
[e.g., January 15, 2026 at 6:00 PM]

LOCATION:
[Venue and neighborhood]

EVENT TYPE:
[Networking / Workshop / Talk / Social / Conference]

WHY SHOULD PRODUCT PEOPLE ATTEND?
[What makes this worth showing up for?]

Thanks!`;

const mailtoLink = `mailto:carl@fullstackpm.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

export default function SubmitPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#164E63] text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-xl">Submit an Event</h1>
            <p className="mt-4 text-xl text-white/80">
              Heard about a product event worth sharing? Let me know and I&apos;ll spread the word.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-y">
        <div className="container-tight">
          <div className="card p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F0FDF4] flex items-center justify-center">
              <Mail className="w-8 h-8 text-[#22C55E]" />
            </div>

            <h2 className="mt-6 heading-md text-[#0f172a]">Email me your event</h2>
            <p className="mt-3 text-[#64748b] max-w-md mx-auto">
              Click the button below to open an email template. Fill in the details and hit send — I&apos;ll take it from there.
            </p>

            <a
              href={mailtoLink}
              className="btn btn-lg btn-green mt-8 inline-flex"
            >
              <Send className="w-5 h-5" />
              Submit Event via Email
            </a>
          </div>

          {/* Guidelines */}
          <div className="mt-8 p-6 bg-[#F0FDF4] rounded-xl">
            <h3 className="font-semibold text-[#0f172a] flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#22C55E]" />
              What I&apos;m looking for
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#64748b]">
              <li>• Events relevant to product people in Seattle</li>
              <li>• Meetups, workshops, talks, happy hours, conferences</li>
              <li>• Free or reasonably priced events preferred</li>
              <li>• No hard sells or recruitment pitches</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
