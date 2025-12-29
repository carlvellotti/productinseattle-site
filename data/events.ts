export type EventType =
  | "networking"
  | "talk"
  | "workshop"
  | "conference"
  | "social"
  | "career";

export interface Event {
  id: string;
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  time: string;
  location: string;
  neighborhood: string;
  description: string;
  url: string;
  type: EventType;
  cost: string;
  featured?: boolean;
  carlsNote?: string; // Your commentary for the newsletter
}

export const events: Event[] = [
  // ============================================
  // JANUARY 2026
  // ============================================

  {
    id: "lennys-meetup-jan-2026",
    title: "Lenny's Newsletter Meetup Seattle",
    date: "2026-01-22",
    time: "6:00 PM - 8:00 PM",
    location: "Flatstick Pub, 609 Westlake Ave N",
    neighborhood: "South Lake Union",
    description: "Product & growth professionals from Lenny's community gather for drinks and conversation. Open bar courtesy of Dovetail.",
    url: "https://luma.com/f9fizm7u",
    type: "networking",
    cost: "Free",
    featured: true,
    carlsNote: "I'm co-hosting this one with Megha Jain! Come say hi - it's going to be the product event of the month.",
  },
  {
    id: "new-tech-seattle-jan-2026",
    title: "New Tech Seattle: January Meetup",
    date: "2026-01-13",
    time: "5:30 PM - 7:45 PM",
    location: "The Collective Seattle, 400 Dexter Ave N",
    neighborhood: "South Lake Union",
    description: "The Pacific Northwest's largest monthly tech event featuring 8-minute startup presentations, Q&A sessions, and networking. Good mix of PMs, founders, and engineers.",
    url: "https://www.meetup.com/newtechseattle/events/310157343/",
    type: "networking",
    cost: "$21 advance / $27 door",
    carlsNote: "Solid PM attendance at these. The startup demos are hit or miss but the networking is always good.",
  },
  {
    id: "women-in-tech-seattle-jan-2026",
    title: "Women in Tech Seattle 2026",
    date: "2026-01-29",
    time: "6:00 PM - 9:00 PM",
    location: "Tapster, 1011 Valley St",
    neighborhood: "South Lake Union",
    description: "Premier networking event focused on women in technology, startups, and entrepreneurship. Connect with professionals from Google, Amazon, Microsoft, Apple, Meta, and emerging startups.",
    url: "https://www.eventbrite.com/e/women-in-tech-seattle-2026-tickets-1956985900509",
    type: "networking",
    cost: "Free - $43",
    carlsNote: "Same venue/time as Tech Mixer. These run concurrently so you can float between both.",
  },
  {
    id: "seattle-tech-mixer-jan-2026",
    title: "Seattle Tech Mixer 2026",
    date: "2026-01-29",
    time: "6:00 PM - 9:00 PM",
    location: "Tapster, 1011 Valley St",
    neighborhood: "South Lake Union",
    description: "Seattle's premier tech networking mixer combining Fortune 500 professionals with entrepreneurs and startups. Opportunity to meet clients, partners, co-founders, and potential hires.",
    url: "https://www.eventbrite.com/e/seattle-tech-mixer-2026-tickets-1957199990859",
    type: "networking",
    cost: "Free - $37",
    carlsNote: "Big crowd, can feel a bit chaotic. Best strategy: arrive early, find your people, then bounce.",
  },
  {
    id: "startup-drinks-jan-2026",
    title: "Seattle Startup Drinks",
    date: "2026-01-06",
    time: "4:30 PM - 7:00 PM",
    location: "Fremont Brewing Company, 3409 Woodland Park Ave N",
    neighborhood: "Fremont",
    description: "Monthly casual networking for startup founders to meet fellow entrepreneurs, build friendships, and share ideas in a relaxed brewery setting.",
    url: "https://www.meetup.com/startupfriends/events/310949714/",
    type: "social",
    cost: "Free (cash bar)",
    carlsNote: "More founder-heavy than PM-heavy, but good vibes. Great beer.",
  },
];

// Helper functions for filtering/sorting
export function getUpcomingEvents(limit?: number): Event[] {
  const today = new Date().toISOString().split("T")[0];
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getFeaturedEvents(): Event[] {
  return events.filter((e) => e.featured);
}

export function getEventsByType(type: EventType): Event[] {
  return events.filter((e) => e.type === type);
}

export function getEventsByMonth(year: number, month: number): Event[] {
  const monthStr = `${year}-${String(month).padStart(2, "0")}`;
  return events.filter((e) => e.date.startsWith(monthStr));
}
