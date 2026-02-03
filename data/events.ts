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
  // FEBRUARY 2026
  // ============================================

  {
    id: "healthtech-happy-hour-feb-2026",
    title: "Monthly HealthTech Happy Hour",
    date: "2026-02-04",
    time: "4:30 PM - 6:30 PM",
    location: "Stoup Brewing, 1108 NW 52nd St",
    neighborhood: "Capitol Hill",
    description: "Monthly networking happy hour for Seattle healthtech professionals. Casual drinks and conversation with folks building in healthcare and health tech.",
    url: "https://lu.ma/seahealthtech",
    type: "networking",
    cost: "Free",
    carlsNote: "Niche but valuable if you're in healthtech or health-adjacent products. Good community vibes.",
  },
  {
    id: "startup-valley-networking-feb-2026",
    title: "Tech Networking Event by Startup Valley",
    date: "2026-02-04",
    time: "7:00 PM - 9:00 PM",
    location: "Tapster, 1011 Valley St",
    neighborhood: "South Lake Union",
    description: "Network with investors, tech experts, and entrepreneurs. Features startup presentations and interactive networking sessions.",
    url: "https://www.eventbrite.com/e/tech-networking-event-by-startup-valley-in-seattle-tickets-1976466672021",
    type: "networking",
    cost: "TBD",
    carlsNote: "Same venue as AI Tech & Startup Night earlier that evening—you could hit both if you're in the area.",
  },
  {
    id: "fundamentals-startups-uw-feb-2026",
    title: "Fundamentals for Startups: Building Products the Big-Tech Way",
    date: "2026-02-06",
    time: "12:00 PM - 1:00 PM",
    location: "Startup Hall, UW Campus",
    neighborhood: "University District",
    description: "UW CoMotion lecture series on adapting big-tech product mindsets and methods to the startup environment. Valuable for PMs at early-stage companies.",
    url: "https://comotion.uw.edu/events",
    type: "talk",
    cost: "Free",
    carlsNote: "Great lunch-hour talk if you're near U-District. The CoMotion series consistently brings solid speakers.",
  },
  {
    id: "ai-tinkerers-dev-tools-feb-2026",
    title: "AI Tinkerers Seattle: Dev Tools Track",
    date: "2026-02-09",
    time: "6:00 PM - 8:30 PM",
    location: "TBD (Seattle area)",
    neighborhood: "TBD",
    description: "In-person session focused on AI development tooling with lightning demos, live code audits, and stack debates. Hands-on and technical.",
    url: "https://seattle.aitinkerers.org/",
    type: "workshop",
    cost: "Free",
    carlsNote: "One of the best AI builder meetups in Seattle. If you're a PM who likes to get your hands dirty with AI tools, don't miss this.",
  },
  {
    id: "new-tech-seattle-feb-2026",
    title: "New Tech Seattle: February Meetup",
    date: "2026-02-10",
    time: "5:30 PM - 7:45 PM",
    location: "The Collective Seattle, 400 Dexter Ave N",
    neighborhood: "South Lake Union",
    description: "The Pacific Northwest's largest monthly tech event featuring 8-minute startup presentations, Q&A sessions, and networking. Great mix of PMs, founders, and engineers.",
    url: "https://luma.com/u3oa5yxm",
    type: "networking",
    cost: "$20 - $27",
    carlsNote: "Solid PM attendance at these. The startup demos are hit or miss but the networking is always good.",
  },
  {
    id: "cursor-for-pms-feb-2026",
    title: "Cursor for Product Managers Workshop",
    date: "2026-02-11",
    time: "6:30 PM - 8:30 PM",
    location: "Kirkland (venue details upon registration)",
    neighborhood: "Kirkland",
    description: "Hands-on workshop for product managers to learn Cursor, the AI code editor, for building prototypes and technical products. Meet other PMs who build.",
    url: "https://lu.ma/cursorforpms-seattle",
    type: "workshop",
    cost: "TBD",
    featured: true,
    carlsNote: "I'm hosting this one! We're at capacity but the waitlist is open—I'm working on getting a bigger space to open up more spots.",
  },
  {
    id: "v0-prompt-to-production-feb-2026",
    title: "v0 Prompt to Production — Seattle",
    date: "2026-02-11",
    time: "5:00 PM - 8:00 PM",
    location: "Dubsea Coffee, 9910 8th Ave SW",
    neighborhood: "White Center",
    description: "Hands-on session from Vercel and The AI Collective on going from prompt to production with v0. Great for PMs who want to prototype faster.",
    url: "https://lu.ma/seattle-v0",
    type: "workshop",
    cost: "Free",
    carlsNote: "v0 is one of the best AI prototyping tools out there. If you want to go from idea to working UI fast, this is worth the trip to White Center.",
  },
  {
    id: "uw-ux-speaker-xbox-feb-2026",
    title: "UW UX Speaker Series: Nicole Washington (Xbox)",
    date: "2026-02-12",
    time: "4:30 PM - 5:20 PM",
    location: "Sieg Building, University of Washington",
    neighborhood: "University District",
    description: "Industry lecture featuring Nicole Washington, Product Designer at Xbox. Open to the public and great for PMs working in consumer tech or gaming.",
    url: "https://www.hcde.washington.edu/events",
    type: "talk",
    cost: "Free",
    carlsNote: "Free, public, and features a designer from one of the biggest gaming platforms. Solid if you're interested in consumer product design.",
  },
  {
    id: "lennys-meetup-feb-2026",
    title: "Lenny's Newsletter Meetup Seattle",
    date: "2026-02-25",
    time: "6:00 PM - 9:00 PM",
    location: "TBD (Seattle)",
    neighborhood: "TBD",
    description: "Product and growth professionals from Lenny's community gather for drinks and conversation. Open bar courtesy of Composio.",
    url: "https://lu.ma/no7fcg21",
    type: "networking",
    cost: "Free",
    carlsNote: "I'm not hosting this month but I'll be there. These are always the highest-signal PM networking events in Seattle—come say hi.",
  },
  {
    id: "three-roles-one-tool-feb-2026",
    title: "Three Roles, One Tool: How Designers, PMs, and Engineers Use AI",
    date: "2026-02-26",
    time: "5:30 PM - 8:00 PM",
    location: "Seattle (venue details upon registration)",
    neighborhood: "TBD",
    description: "A showdown between engineers, designers, and PMs to see how each role uses AI tools. Hosted by Pioneer Square Labs.",
    url: "https://luma.com/ti84rv9h",
    type: "talk",
    cost: "Free",
    featured: true,
    carlsNote: "I'm the PM representative in this one—I'll try to represent us well. Should be a fun format seeing how different roles approach AI tools.",
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
