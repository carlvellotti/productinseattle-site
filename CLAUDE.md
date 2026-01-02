# Product in Seattle

Seattle product community website built with Next.js 16, React 19, and Tailwind CSS 4.

## Adding Events

Events are stored in `data/events.ts`. Add new events to the `events` array:

```typescript
{
  id: "event-name-month-year",           // unique slug
  title: "Event Title",
  date: "2026-01-15",                    // YYYY-MM-DD format
  time: "6:00 PM - 8:00 PM",
  location: "Venue Name, Address",
  neighborhood: "South Lake Union",      // Seattle neighborhood
  description: "Event description.",
  url: "https://luma.com/...",           // registration link
  type: "networking",                    // networking | talk | workshop | conference | social | career
  cost: "Free",                          // or "$20" or "Free - $40"
  featured?: true,                       // optional, shows on homepage
  carlsNote?: "Personal commentary",     // optional
}
```

## Running Locally

```bash
npm install
npm run dev
```

Opens at http://localhost:3000
