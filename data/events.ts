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

  // ============================================
  // MARCH 2026
  // ============================================

  {
    id: "ux-research-happy-hour-mar-2026",
    title: "UX Research Happy Hour",
    date: "2026-03-03",
    time: "6:00 PM",
    location: "Third Place Books",
    neighborhood: "Ravenna",
    description: "Casual happy hour for UX researchers and product folks. Great way to connect with the research side of the product world.",
    url: "https://luma.com/lp9jnwhi",
    type: "networking",
    cost: "Free",
    carlsNote: "",
  },
  {
    id: "vibe-code-seattle-mar-2026",
    title: "Vibe Code Seattle Meetup",
    date: "2026-03-03",
    time: "7:00 PM",
    location: "Seattle",
    neighborhood: "TBD",
    description: "Meetup for the vibe coding community — building with AI-first tools, sharing workflows, and showing off what you've shipped.",
    url: "https://www.meetup.com/vibe-code-seattle/events/313423140/",
    type: "workshop",
    cost: "TBD",
    carlsNote: "",
  },
  {
    id: "ai-tech-networking-pitch-night-mar-2026",
    title: "AI & Tech Networking Seattle (Pitch Night)",
    date: "2026-03-04",
    time: "7:00 PM",
    location: "Tapster, 1011 Valley St",
    neighborhood: "South Lake Union",
    description: "Focused pitch night with live startup pitches, direct investor feedback, and networking with founders and peers in the AI space.",
    url: "https://www.eventbrite.com/e/ai-tech-networking-seattle-tickets-1982352434495",
    type: "networking",
    cost: "TBD",
    carlsNote: "",
  },
  {
    id: "shebuilds-lovable-iwd-mar-2026",
    title: "We Build With AI x SheBuilds on Lovable (International Women's Day)",
    date: "2026-03-08",
    time: "10:00 AM",
    location: "Foundations",
    neighborhood: "Seattle",
    description: "International Women's Day build event using Lovable, an AI app builder. Build something real in a day with a supportive community.",
    url: "https://luma.com/seashebuilds",
    type: "workshop",
    cost: "Free",
    featured: true,
    carlsNote: "",
  },
  {
    id: "ai-tinkerers-dev-tools-mar-2026",
    title: "AI Tinkerers Seattle: Dev Tools Track",
    date: "2026-03-09",
    time: "6:00 PM",
    location: "Seattle (venue TBD)",
    neighborhood: "TBD",
    description: "Monthly session for AI builders featuring lightning demos, live code audits, and rapid-fire stack debates on IDEs and agents. 4,000+ member community.",
    url: "https://seattle.aitinkerers.org/",
    type: "workshop",
    cost: "Free",
    carlsNote: "",
  },
  {
    id: "new-tech-seattle-mar-2026",
    title: "New Tech Seattle: March Meetup",
    date: "2026-03-10",
    time: "5:30 PM",
    location: "The Collective Seattle, 400 Dexter Ave N",
    neighborhood: "South Lake Union",
    description: "The PNW's largest monthly tech event — startup demos, networking, and appetizers. Block-party style format with presentations at 6:30 PM.",
    url: "https://luma.com/k5mksaxs",
    type: "networking",
    cost: "~$20",
    carlsNote: "",
  },
  {
    id: "ai-prototypes-validated-products-mar-2026",
    title: "How to Turn AI Prototypes into Validated Products",
    date: "2026-03-17",
    time: "10:00 AM",
    location: "Seattle",
    neighborhood: "TBD",
    description: "Workshop on bridging the gap between AI prototypes and production-ready products. Covers validation frameworks and product thinking for AI.",
    url: "https://www.meetup.com/thrivehub/events/313441324/",
    type: "workshop",
    cost: "TBD",
    carlsNote: "",
  },
  {
    id: "lennys-meetup-mar-2026",
    title: "Lenny's Newsletter Meetup in Seattle",
    date: "2026-03-18",
    time: "5:30 PM - 7:30 PM",
    location: "Holy Mountain Phinney Ridge Taproom, 7011 Greenwood Ave N",
    neighborhood: "Phinney Ridge",
    description: "Product and growth professionals from Lenny's community gather for drinks and conversation. Free drinks courtesy of Clerk.",
    url: "https://luma.com/2ho8b6n4",
    type: "networking",
    cost: "Free",
    featured: true,
    carlsNote: "",
  },
  {
    id: "ai-madness-north-sound-mar-2026",
    title: "AI Madness: 16 Tools. One Champion. North Sound Decides.",
    date: "2026-03-19",
    time: "5:00 PM",
    location: "North Sound area",
    neighborhood: "North Sound",
    description: "March Madness-style bracket tournament for AI tools. 16 tools enter, the community votes, one champion emerges. Fun and informative.",
    url: "https://www.meetup.com/north-sound-innovators/events/313547336/",
    type: "talk",
    cost: "TBD",
    carlsNote: "",
  },
  {
    id: "tech-mixer-weconnect-mar-2026",
    title: "Tech Mixer Seattle (WeConnect)",
    date: "2026-03-26",
    time: "6:00 PM - 9:00 PM",
    location: "Seattle",
    neighborhood: "TBD",
    description: "Networking mixer combining Fortune 500 companies with startups and entrepreneurs. Find your next client, employee, or co-founder.",
    url: "https://www.meetup.com/weconnect-seattle-startup-and-tech/events/313193468/",
    type: "networking",
    cost: "TBD",
    carlsNote: "",
  },
  {
    id: "women-in-tech-seattle-mar-2026",
    title: "Women in Tech Seattle 2026",
    date: "2026-03-26",
    time: "6:00 PM - 9:00 PM",
    location: "Tapster, 1011 Valley St",
    neighborhood: "South Lake Union",
    description: "Networking event celebrating and connecting women in technology across Seattle.",
    url: "https://www.eventbrite.com/e/women-in-tech-seattle-2026-tickets-1982306076838",
    type: "networking",
    cost: "TBD",
    carlsNote: "",
  },
  {
    id: "electric-sea-hackathon-mar-2026",
    title: "Electric SEA Art+Tech Hackathon",
    date: "2026-03-26",
    time: "All Day (4-day event, Mar 26-29)",
    location: "ArtLove Salon, 110 Union Street, 5th Floor",
    neighborhood: "Downtown",
    description: "Extended weekend arts + technology hackathon and pop-up exhibition. Brings together artists, technologists, designers, and makers from across the PNW.",
    url: "https://electricsea.art/",
    type: "workshop",
    cost: "Free",
    carlsNote: "",
  },

  // ============================================
  // APRIL 2026
  // ============================================

  {
    id: "producttank-happy-hour-apr-2026",
    title: "ProductTank Seattle: Happy Hour Networking",
    date: "2026-04-07",
    time: "5:00 PM",
    location: "Chainline Brewing Company Taproom, Kirkland",
    neighborhood: "Kirkland",
    description:
      "Spring networking happy hour with the PM community. Parking validated at bar. Sponsored by Auth0.",
    url: "https://www.meetup.com/producttank-seattle/events/313840852/",
    type: "networking",
    cost: "Free",
    carlsNote: "ProductTank is one of the OG PM communities. Always a solid crowd and good conversations, especially if you're on the Eastside.",
  },
  {
    id: "ai-chatbots-risks-realities-apr-2026",
    title: "The Risks and Realities of AI Chatbots",
    date: "2026-04-07",
    time: "6:00 PM - 7:30 PM",
    location: "Seattle Central Library, 1st Floor Auditorium",
    neighborhood: "Downtown",
    description:
      "Kashmir Hill (NYT) and Jeff Horwitz (Reuters) on AI chatbot harms, moderated by KUOW's Monica Nickelsburg. Co-sponsored by UW Center for an Informed Public.",
    url: "https://www.societyandtechnology.uw.edu/2026/03/16/register-now-for-the-risks-and-realities-of-ai-chatbots-event-on-april-7-2026-at-6-pm-at-the-seattle-central-library/",
    type: "talk",
    cost: "Free",
    carlsNote: "Kashmir Hill and Jeff Horwitz are two of the sharpest tech journalists out there. Free, downtown, and genuinely important subject matter. Don't sleep on this one.",
  },
  {
    id: "women-ai-inventing-tomorrow-apr-2026",
    title: "Women + AI: Inventing Tomorrow (IWD Celebration)",
    date: "2026-04-08",
    time: "5:30 PM",
    location: "Blueprint, 2600 116th Ave NE, Bellevue",
    neighborhood: "Bellevue",
    description:
      "Panel discussion on AI/ML/DS, lightning talks, and networking. Co-hosted by Seattle Spark+AI, WiMLDS, and PyLadies Seattle. Food by Microsoft & Databricks, swag from Google.",
    url: "https://www.meetup.com/seattle-spark-meetup/events/313304465/",
    type: "workshop",
    cost: "Free",
    carlsNote: "Stacked lineup of co-hosts and sponsors. If you're a woman in AI or an ally, this is a great room to be in. Food and swag covered too.",
  },
  {
    id: "lennys-meetup-apr-2026",
    title: "Lenny's Newsletter Meetup in Seattle",
    date: "2026-04-14",
    time: "6:00 PM - 8:00 PM",
    location: "Stoup Brewing - Capitol Hill, 1158 Broadway, Seattle",
    neighborhood: "Capitol Hill",
    description:
      "Product and growth professionals from Lenny's community gather for drinks and conversation. Free drinks courtesy of Clerk.",
    url: "https://luma.com/tvd9sodb",
    type: "networking",
    cost: "Free",
    featured: true,
    carlsNote:
      "I'm hosting this one! Come hang with the Lenny's community. Free drinks courtesy of Clerk.",
  },
  {
    id: "ai-tinkerers-dev-tools-apr-2026",
    title: "AI Tinkerers Seattle: AI Dev Tool Track",
    date: "2026-04-13",
    time: "6:00 PM - 9:00 PM",
    location: "Seattle (venue TBD)",
    neighborhood: "TBD",
    description:
      "In-person meetup with lightning demos of AI dev tools (no slides allowed). Sponsored by Actual AI, DevPlan, and Qumulo. 165+ attending.",
    url: "https://seattle.aitinkerers.org/",
    type: "workshop",
    cost: "Free",
    carlsNote: "One of the best AI builder meetups in Seattle. Lightning demos only, no slides, so you actually see real tools in action. 165+ people expected.",
  },
  {
    id: "new-tech-seattle-apr-2026",
    title: "New Tech Seattle: April 2026 Meetup",
    date: "2026-04-14",
    time: "5:30 PM",
    location: "The Collective Seattle, 400 Dexter Ave N",
    neighborhood: "South Lake Union",
    description:
      "The PNW's largest monthly tech event featuring 8-minute founder presentations, networking, food and hosted drinks. 60,000+ member community.",
    url: "https://luma.com/newtech?e=evt-hrazbEVWoxH1raO",
    type: "networking",
    cost: "~$20",
    carlsNote: "The startup demos are always a mixed bag but the networking is consistently great. Good cross-section of PMs, founders, and engineers in SLU.",
  },
  {
    id: "ai-tinkerers-gtm-apr-2026",
    title: "AI Tinkerers Seattle: GTM Engineering",
    date: "2026-04-22",
    time: "6:00 PM - 9:00 PM",
    location: "Seattle (venue TBD)",
    neighborhood: "TBD",
    description:
      "AI-driven growth systems meetup. Sponsored by Tarka. 50 vetted builders.",
    url: "https://seattle.aitinkerers.org/",
    type: "workshop",
    cost: "Free",
    carlsNote: "Different flavor from the dev tools track. This one's focused on go-to-market and growth. Smaller group (50 people), more curated. Worth it if you're on the GTM side of product.",
  },
  {
    id: "ai-sprint-hbs-apr-2026",
    title:
      "The 2-Hour AI Sprint: Discover, Validate, and Launch Your Own App",
    date: "2026-04-23",
    time: "5:30 PM - 8:30 PM",
    location: "Washington 1000, 1000 Olive Way, Seattle",
    neighborhood: "Capitol Hill",
    description:
      "HBS Club of Seattle + We Build With AI. Use Lovable and Lenny's Newsletter dataset to vibe-code an app in 90 minutes. Finalists demo live.",
    url: "https://www.hbsseattle.com/event-details-registration/the-2-hour-ai-sprint-discover-validate-and-launch-your-own-app",
    type: "workshop",
    cost: "$10 - $30",
    carlsNote: "Vibe-coding an app in 90 minutes using Lenny's dataset? This is the kind of event I wish existed a year ago. Great if you want to build something real in a room full of builders.",
  },
  {
    id: "pdma-seattle-spring-apr-2026",
    title: "PDMA Seattle Spring Meetup",
    date: "2026-04-23",
    time: "6:30 PM - 9:30 PM",
    location: "Side Hustle: Taproom & La Vida Social Cuisine, Kirkland",
    neighborhood: "Kirkland",
    description:
      "PDMA Seattle's first in-person spring event. Networking games, a panel with tech and product management experts, and good vibes at a local taproom. Max capacity 60.",
    url: "https://luma.com/wk90w540",
    type: "networking",
    cost: "Free",
    carlsNote: "PDMA's first in-person Seattle event. Exciting to see them show up locally. Small venue (60 cap) so register early. Kirkland spot with good parking.",
  },
  {
    id: "startup-networking-ascent-apr-2026",
    title: "Startup Tech & AI Networking | Ascent Valley",
    date: "2026-04-30",
    time: "7:00 PM - 10:00 PM",
    location: "1525 1st Ave, Seattle",
    neighborhood: "Downtown",
    description:
      "Startup pitch session, investor networking, and meet AI founders and VCs.",
    url: "https://www.eventbrite.com/e/startup-tech-ai-networking-startup-ascent-seattle-tickets-1984767044659",
    type: "networking",
    cost: "TBD",
    carlsNote: "Late-night startup crowd with a pitch session and investor networking. Good if you're exploring the founder side of things or just want to see what's being built.",
  },

  // ============================================
  // MAY 2026
  // ============================================

  {
    id: "ai-tinkerers-dev-tools-may-2026",
    title: "AI Tinkerers Seattle: AI Dev Tools Track",
    date: "2026-05-05",
    time: "6:00 PM - 9:00 PM",
    location: "South Lake Union (exact venue shared with RSVPs)",
    neighborhood: "South Lake Union",
    description:
      "Code-first intensive with live demos — no slides, no pitches. The 'Software Factory' approach. 159+ builders registered, vetted attendee list. High-signal room for anyone building with AI dev tools.",
    url: "https://seattle.aitinkerers.org/",
    type: "workshop",
    cost: "Free",
    carlsNote: "Code-first intensive with live demos. No slides, no pitches. 159+ builders already registered and the attendee list is vetted, so this is a high-signal room if you're building with AI dev tools.",
  },
  {
    id: "ai-pm-skills-workshop-may-2026",
    title: "AI PM Skills Workshop: From Discovery to Prototyping",
    date: "2026-05-09",
    time: "1:00 PM - 3:30 PM",
    location: "Kirkland (exact location shared upon registration)",
    neighborhood: "Kirkland",
    description:
      "Seattle Tech Forum + PDMA Seattle hands-on workshop applying AI tools from product discovery to prototyping. Led by UW lecturer Shaili Guru with support from Amy Peltonen and Amandeep Singh.",
    url: "https://luma.com/9t0t0u9z",
    type: "workshop",
    cost: "$25",
    carlsNote: "Seattle Tech Forum + PDMA Seattle teaming up for a hands-on workshop on applying AI tools from product discovery to prototyping. Led by UW lecturer Shaili Guru. If you're a PM who hasn't started using AI in your workflow yet, this is a great on-ramp.",
  },
  {
    id: "new-tech-seattle-may-2026",
    title: "New Tech Seattle: May 2026 Meetup",
    date: "2026-05-12",
    time: "5:30 PM",
    location: "The Collective Seattle, 400 Dexter Ave N",
    neighborhood: "South Lake Union",
    description:
      "The PNW's largest monthly tech event. 8-minute startup presentations, block party-style networking, and hosted food and drinks. Presenters include founders from Autessa, SpectraInsight, and Loop8.",
    url: "https://luma.com/jcj44fde",
    type: "networking",
    cost: "$20 - $27",
    carlsNote: "The PNW's largest monthly tech event. 8-minute startup presentations, block party-style networking, and hosted food and drinks. Always a good cross-section of founders, engineers, and PMs in SLU.",
  },
  {
    id: "lennys-meetup-may-2026",
    title: "Lenny's Newsletter Meetup in Seattle",
    date: "2026-05-21",
    time: "6:00 PM - 9:00 PM",
    location: "Queen Anne Beerhall, 203 W Thomas St",
    neighborhood: "Queen Anne",
    description:
      "Product and growth professionals from Lenny's community gather for drinks and conversation. Free drinks courtesy of Strella.",
    url: "https://luma.com/seo1uvla",
    type: "networking",
    cost: "Free",
    featured: true,
    carlsNote: "I'll be at this one. Lenny's community meetups are always a great room: in-depth conversations about product and growth with people who are actually in the work. Free drinks courtesy of Strella. Come through.",
  },
  {
    id: "ai-tinkerers-gtm-may-2026",
    title: "AI Tinkerers Seattle: GTM / Growth Track",
    date: "2026-05-26",
    time: "6:00 PM - 9:00 PM",
    location: "Seattle (venue TBD)",
    neighborhood: "TBD",
    description:
      "Live code-first demos of AI-driven growth systems. Focused on go-to-market engineering. Smaller, more curated group than the Dev Tools track.",
    url: "https://seattle.aitinkerers.org/",
    type: "workshop",
    cost: "Free",
    carlsNote: "Different flavor from the Dev Tools track earlier in the month. This one's focused on go-to-market and growth: live code-first demos of AI-driven growth systems. Smaller, more curated group. Worth it if you're on the GTM side of product.",
  },
  {
    id: "meet-cofounder-may-2026",
    title: "Meet Your Co-Founder: Startup Builders Night",
    date: "2026-05-27",
    time: "7:00 PM - 10:00 PM",
    location: "The Taproom at Pike Place, 1525 1st Ave",
    neighborhood: "Downtown",
    description:
      "40-80 curated participants. Structured networking sessions plus startup pitches from selected founders. For founders, engineers, PMs, and designers looking to connect and build.",
    url: "https://www.eventbrite.com/e/meet-your-co-founder-startup-builders-night-in-seattle-tickets-1986684509849",
    type: "networking",
    cost: "Paid",
    carlsNote: "40-80 curated participants. Structured networking sessions plus startup pitches from selected founders. Good if you're exploring the founder side of things, looking for a co-founder, or just want to see what's being built.",
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
