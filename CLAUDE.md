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


## Monthly newsletter → website workflow

The complete process lives in Carl's Life OS:
`BUSINESS/create/projects/product-in-seattle/workflow.md` (linked from that project's `project.md` and `monthly-research-prompt.md`). On hq the vault is `/home/carl/Documents/carls-life-os`.

Update this website before the monthly newsletter is sent. For catch-up work, use the latest sent Beehiiv edition, not an unverified local draft. Add one record per main event; deduplicate repeated features, preserve past records, verify RSVP details, and feature Carl's selected events. Do not copy internal review notes or “see above” email copy.

Both `/` and `/events` must remain dynamically rendered, with `getUpcomingEvents()` called inside the page function. The helper uses Seattle's date, keeping today's events through Pacific midnight. Do not move the call to module scope or freeze it into a static build. Retain the empty state rather than showing expired events.

Validate with `node --test tests/events.test.mjs` (Node 24), `npm run lint`, and `npm run build`. Keep monthly test expectations current when adding later events. Publish through the existing Vercel deployment from GitHub `main`; check the deployment succeeds and both live routes show the new events and no expired listings. Record the website commit and live verification in the issue's `publication-record.md` in the vault. A Git push alone is not completion.
