import { Calendar, MapPin, DollarSign, ExternalLink } from "lucide-react";
import { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  variant?: "default" | "compact" | "featured";
}

const typeColors: Record<string, { bg: string; text: string }> = {
  networking: { bg: "bg-[#DCFCE7]", text: "text-[#15803D]" },
  workshop: { bg: "bg-[#ECFEFF]", text: "text-[#164E63]" },
  talk: { bg: "bg-[#F0F9FF]", text: "text-[#0369A1]" },
  social: { bg: "bg-[#FDF4FF]", text: "text-[#A21CAF]" },
  conference: { bg: "bg-[#FEF3C7]", text: "text-[#B45309]" },
};

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const typeStyle = event.type
    ? typeColors[event.type]
    : { bg: "bg-[#F1F5F9]", text: "text-[#475569]" };

  // Parse date for display
  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const day = dateObj.getDate();
  const weekday = dateObj.toLocaleDateString("en-US", { weekday: "short" });

  if (variant === "compact") {
    return (
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-4 p-4 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] transition-colors"
      >
        {/* Date block */}
        <div className="text-center min-w-[48px]">
          <div className="text-xs font-semibold text-[#22C55E] uppercase">
            {month}
          </div>
          <div className="text-2xl font-bold text-[#164E63] font-[family-name:var(--font-bricolage)]">
            {day}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-[#0f172a] group-hover:text-[#164E63] transition-colors truncate">
            {event.title}
          </h4>
          <p className="text-sm text-[#64748b]">
            {event.time} · {event.neighborhood || event.location}
          </p>
        </div>

        <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-[#22C55E] transition-colors shrink-0 mt-1" />
      </a>
    );
  }

  if (variant === "featured") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#164E63] to-[#0891B2] text-white p-8">
        {/* Featured badge */}
        <div className="absolute top-4 right-4">
          <span className="badge bg-[#22C55E] text-white text-xs">Featured</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Date block */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-white/10 rounded-xl p-4">
              <div className="text-sm font-semibold text-[#22C55E] uppercase">
                {month}
              </div>
              <div className="text-4xl font-bold font-[family-name:var(--font-bricolage)]">
                {day}
              </div>
              <div className="text-sm text-white/70">{weekday}</div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="heading-md text-white">{event.title}</h3>
            {event.description && (
              <p className="mt-2 text-white/80">{event.description}</p>
            )}

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {event.location}
              </span>
              {event.cost && (
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4" />
                  {event.cost}
                </span>
              )}
            </div>

            {event.carlsNote && (
              <div className="mt-4 p-3 bg-white/10 rounded-lg">
                <p className="text-sm text-white/90 italic">&ldquo;{event.carlsNote}&rdquo;</p>
                <p className="text-xs text-white/50 mt-1">- Carl</p>
              </div>
            )}

            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-green mt-6 inline-flex"
              >
                Get Details
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="event-card group">
      <div className="flex gap-4">
        {/* Date block */}
        <div className="text-center min-w-[56px]">
          <div className="text-xs font-semibold text-[#22C55E] uppercase tracking-wide">
            {month}
          </div>
          <div className="text-3xl font-bold text-[#164E63] font-[family-name:var(--font-bricolage)] leading-none">
            {day}
          </div>
          <div className="text-xs text-[#64748b] mt-1">{weekday}</div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              {event.type && (
                <span
                  className={`badge text-xs mb-2 ${typeStyle.bg} ${typeStyle.text}`}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              )}
              <h3 className="font-semibold text-[#0f172a] group-hover:text-[#164E63] transition-colors">
                {event.title}
              </h3>
            </div>
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg text-[#94a3b8] hover:text-[#22C55E] hover:bg-[#F0FDF4] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {event.description && (
            <p className="mt-1 text-sm text-[#64748b]">
              {event.description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#64748b]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#94a3b8]" />
              {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#94a3b8]" />
              {event.neighborhood || event.location}
            </span>
            {event.cost && (
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#94a3b8]" />
                {event.cost}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
