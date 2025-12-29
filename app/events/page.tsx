import { Metadata } from "next";
import { Filter, Calendar } from "lucide-react";
import { EventCard, EventStructuredData } from "@/components";
import { getUpcomingEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Seattle PM Events & Product Management Meetups",
  description:
    "Find Seattle product management events, PM meetups, networking happy hours, and tech conferences. Updated weekly with the best events for product people in Seattle.",
  keywords: [
    "Seattle PM events",
    "Seattle product management events",
    "Seattle product manager meetup",
    "Seattle tech networking",
    "product management meetup Seattle",
  ],
};

const eventTypes = [
  { value: "all", label: "All Events" },
  { value: "networking", label: "Networking" },
  { value: "workshop", label: "Workshops" },
  { value: "talk", label: "Talks" },
  { value: "social", label: "Social" },
  { value: "conference", label: "Conferences" },
  { value: "career", label: "Career" },
];

export default function EventsPage() {
  const allEvents = getUpcomingEvents();

  return (
    <div>
      <EventStructuredData events={allEvents} />
      {/* Header */}
      <section className="bg-[#164E63] text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-xl">Seattle Product Events</h1>
            <p className="mt-4 text-xl text-white/80">
              Meetups, workshops, happy hours, and more. Your calendar&apos;s new best friend.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-y">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-[#64748b]">
              <Calendar className="w-5 h-5" />
              <span>{allEvents.length} upcoming events</span>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#64748b]" />
              <select className="input py-2 px-3 text-sm w-auto">
                {eventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Events List */}
          <div className="flex flex-col gap-4">
            {allEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                variant={event.featured ? "featured" : "default"}
              />
            ))}
          </div>

          {/* Empty state would go here */}
        </div>
      </section>

      {/* Submit CTA */}
      <section className="py-12 bg-[#F0FDF4]">
        <div className="container-wide text-center">
          <h3 className="heading-sm text-[#0f172a]">Know about an event?</h3>
          <p className="mt-2 text-[#64748b]">
            Help me keep this list fresh. Submit events you think Seattle product folks should know about.
          </p>
          <a href="/submit" className="btn btn-md btn-green mt-6 inline-flex">
            Submit an Event
          </a>
        </div>
      </section>
    </div>
  );
}
