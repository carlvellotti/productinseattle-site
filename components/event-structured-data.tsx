import { Event } from "@/data/events";

interface EventStructuredDataProps {
  events: Event[];
}

export function EventStructuredData({ events }: EventStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: events.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: event.title,
        description: event.description,
        startDate: event.date,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: event.location,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Seattle",
            addressRegion: "WA",
            addressCountry: "US",
          },
        },
        organizer: {
          "@type": "Organization",
          name: "Product in Seattle",
          url: "https://productinseattle.com",
        },
        offers: {
          "@type": "Offer",
          price: event.cost === "Free" ? "0" : undefined,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: event.url,
        },
        url: event.url,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Single event structured data for potential future individual event pages
export function SingleEventStructuredData({ event }: { event: Event }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "WA",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Product in Seattle",
      url: "https://productinseattle.com",
    },
    offers: {
      "@type": "Offer",
      price: event.cost === "Free" ? "0" : undefined,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: event.url,
    },
    url: event.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
