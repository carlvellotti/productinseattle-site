import { Metadata } from "next";
import { Send, CheckCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Host an Event",
  description:
    "Get your product event in front of Seattle's PM community. Finding attendees shouldn't be the hard part.",
};

const emailSubject = "I'm hosting an event for Seattle product people";
const emailBody = `Hi Carl!

I'm hosting an event and would love to get it in front of the Product in Seattle community:

EVENT NAME:
[Your event name]

EVENT LINK:
[Registration link - Eventbrite, Luma, Meetup, etc.]

DATE & TIME:
[e.g., January 15, 2026 at 6:00 PM]

LOCATION:
[Venue and neighborhood]

EVENT TYPE:
[Networking / Workshop / Talk / Social / Conference]

WHO IS THIS FOR?
[What kind of product people would get the most out of this?]

ANYTHING ELSE?
[Any context that would help me promote it]

Thanks!`;

const mailtoLink = `mailto:carl@fullstackpm.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

export default function SubmitPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#164E63] text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-xl">Host an Event</h1>
            <p className="mt-4 text-xl text-white/80">
              Organizing something for Seattle product people? Get it in front of the community. Finding attendees shouldn&apos;t be the hard part.
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

            <h2 className="mt-6 heading-md text-[#0f172a]">Tell me about your event</h2>
            <p className="mt-3 text-[#64748b] max-w-md mx-auto">
              Click below to send me the details. I&apos;ll add it to the site and include it in the next newsletter.
            </p>

            <a
              href={mailtoLink}
              className="btn btn-lg btn-green mt-8 inline-flex"
            >
              <Send className="w-5 h-5" />
              Add Your Event
            </a>
          </div>

          {/* Guidelines */}
          <div className="mt-8 p-6 bg-[#F0FDF4] rounded-xl">
            <h3 className="font-semibold text-[#0f172a] flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#22C55E]" />
              What works well
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#64748b]">
              <li>• Events relevant to product people in Seattle</li>
              <li>• Meetups, workshops, talks, happy hours, networking</li>
              <li>• Free or reasonably priced</li>
              <li>• Genuine community events (no hard sells or recruiting pitches)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
