import { Metadata } from "next";
import { Send, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Submit an Event",
  description:
    "Know about a product event in Seattle? Submit it here and help the community discover great events.",
};

export default function SubmitPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#164E63] text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-xl">Submit an Event</h1>
            <p className="mt-4 text-xl text-white/80">
              Heard about a product event worth sharing? Let us know and we&apos;ll spread the word.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-y">
        <div className="container-tight">
          <div className="card p-8 md:p-12">
            <div className="mb-8">
              <h2 className="heading-md text-[#0f172a]">Event Details</h2>
              <p className="mt-2 text-[#64748b]">
                Fill out what you know. We&apos;ll verify before publishing.
              </p>
            </div>

            {/* TODO: Replace with actual form integration (Tally, Typeform, or custom) */}
            <form className="space-y-6">
              {/* Event Name */}
              <div>
                <label
                  htmlFor="event-name"
                  className="block text-sm font-medium text-[#0f172a] mb-2"
                >
                  Event Name *
                </label>
                <input
                  type="text"
                  id="event-name"
                  required
                  className="input"
                  placeholder="e.g., PM Happy Hour at Optimism"
                />
              </div>

              {/* Event URL */}
              <div>
                <label
                  htmlFor="event-url"
                  className="block text-sm font-medium text-[#0f172a] mb-2"
                >
                  Event Link *
                </label>
                <input
                  type="url"
                  id="event-url"
                  required
                  className="input"
                  placeholder="https://..."
                />
                <p className="mt-1 text-sm text-[#64748b]">
                  Eventbrite, Luma, Meetup, LinkedIn, etc.
                </p>
              </div>

              {/* Date & Time */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="event-date"
                    className="block text-sm font-medium text-[#0f172a] mb-2"
                  >
                    Date *
                  </label>
                  <input type="date" id="event-date" required className="input" />
                </div>
                <div>
                  <label
                    htmlFor="event-time"
                    className="block text-sm font-medium text-[#0f172a] mb-2"
                  >
                    Time
                  </label>
                  <input
                    type="text"
                    id="event-time"
                    className="input"
                    placeholder="e.g., 6:00 PM"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="event-location"
                  className="block text-sm font-medium text-[#0f172a] mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="event-location"
                  className="input"
                  placeholder="e.g., Optimism Brewing, Capitol Hill"
                />
              </div>

              {/* Event Type */}
              <div>
                <label
                  htmlFor="event-type"
                  className="block text-sm font-medium text-[#0f172a] mb-2"
                >
                  Event Type
                </label>
                <select id="event-type" className="input">
                  <option value="">Select a type</option>
                  <option value="networking">Networking / Happy Hour</option>
                  <option value="workshop">Workshop</option>
                  <option value="talk">Talk / Panel</option>
                  <option value="social">Social / Casual</option>
                  <option value="conference">Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="event-description"
                  className="block text-sm font-medium text-[#0f172a] mb-2"
                >
                  Why should product people attend?
                </label>
                <textarea
                  id="event-description"
                  rows={3}
                  className="input"
                  placeholder="What makes this event worth showing up for?"
                />
              </div>

              {/* Your Email */}
              <div>
                <label
                  htmlFor="submitter-email"
                  className="block text-sm font-medium text-[#0f172a] mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="submitter-email"
                  className="input"
                  placeholder="In case we have questions"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-lg btn-green w-full">
                <Send className="w-5 h-5" />
                Submit Event
              </button>
            </form>
          </div>

          {/* Guidelines */}
          <div className="mt-8 p-6 bg-[#F0FDF4] rounded-xl">
            <h3 className="font-semibold text-[#0f172a] flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#22C55E]" />
              What we&apos;re looking for
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
