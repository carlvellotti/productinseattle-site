import { Metadata } from "next";
import { Filter, Calendar } from "lucide-react";
import { EventCard, Event } from "@/components";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming product events in Seattle. Meetups, workshops, happy hours, and conferences for product people in the Pacific Northwest.",
};

// Sample events - in production, these would come from your data source
const allEvents: Event[] = [
  {
    id: "1",
    title: "Product Happy Hour at Optimism Brewing",
    date: "2025-01-15",
    time: "6:00 PM",
    location: "Optimism Brewing",
    neighborhood: "Capitol Hill",
    description:
      "Casual drinks and networking with Seattle product folks. Good vibes, no agenda. Street parking's tough - take the Link.",
    type: "networking",
    url: "#",
    isFeatured: true,
  },
  {
    id: "2",
    title: "AI Product Strategy Workshop",
    date: "2025-01-22",
    time: "6:30 PM",
    location: "WeWork South Lake Union",
    neighborhood: "SLU",
    description:
      "Hands-on workshop on integrating AI into your product roadmap. Bring your laptop.",
    type: "workshop",
    url: "#",
  },
  {
    id: "3",
    title: "Women in Product Seattle Meetup",
    date: "2025-01-28",
    time: "5:30 PM",
    location: "Amazon Meeting Center",
    neighborhood: "Downtown",
    description:
      "Monthly meetup for women in product management. This month: navigating promo cycles.",
    type: "networking",
    url: "#",
  },
  {
    id: "4",
    title: "Seattle Product Tank: Building for Enterprise",
    date: "2025-02-05",
    time: "6:00 PM",
    location: "Galvanize",
    neighborhood: "Pioneer Square",
    description:
      "Panel discussion on enterprise product management with product leaders from Salesforce, Tableau, and Smartsheet.",
    type: "talk",
    url: "#",
  },
  {
    id: "5",
    title: "Product Book Club: Inspired",
    date: "2025-02-12",
    time: "7:00 PM",
    location: "Elliott Bay Book Company",
    neighborhood: "Capitol Hill",
    description:
      "Discussing Marty Cagan's Inspired. Coffee and conversation.",
    type: "social",
    url: "#",
  },
  {
    id: "6",
    title: "ProductCon Seattle 2025",
    date: "2025-03-15",
    time: "9:00 AM",
    location: "Seattle Convention Center",
    neighborhood: "Downtown",
    description:
      "Full-day product management conference with speakers from top tech companies.",
    type: "conference",
    url: "#",
  },
];

const eventTypes = [
  { value: "all", label: "All Events" },
  { value: "networking", label: "Networking" },
  { value: "workshop", label: "Workshops" },
  { value: "talk", label: "Talks" },
  { value: "social", label: "Social" },
  { value: "conference", label: "Conferences" },
];

export default function EventsPage() {
  const featuredEvent = allEvents.find((e) => e.isFeatured);
  const upcomingEvents = allEvents.filter((e) => !e.isFeatured);

  return (
    <div>
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

          {/* Featured Event */}
          {featuredEvent && (
            <div className="mb-8">
              <EventCard event={featuredEvent} variant="featured" />
            </div>
          )}

          {/* Events Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
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
            Help us keep this list fresh. Submit events you think Seattle product folks should know about.
          </p>
          <a href="/submit" className="btn btn-md btn-green mt-6 inline-flex">
            Submit an Event
          </a>
        </div>
      </section>
    </div>
  );
}
