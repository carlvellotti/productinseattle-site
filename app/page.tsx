import { Calendar, Users, Mail, ArrowRight, MapPin } from "lucide-react";
import { EmailCapture, EventCard } from "@/components";
import { getUpcomingEvents } from "@/data/events";

const upcomingEvents = getUpcomingEvents(4);
const featuredEvent = upcomingEvents.find((e) => e.featured);
const otherEvents = upcomingEvents.filter((e) => !e.featured).slice(0, 2);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        {/* Dark teal overlay */}
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90 mb-6 animate-fade-in-up stagger-1">
                <MapPin className="w-4 h-4 text-[#22C55E]" />
                For product people in the Pacific Northwest
              </div>

              {/* Headline */}
              <h1 className="heading-xl text-white text-balance animate-fade-in-up stagger-2">
                Your Guide to Seattle&apos;s{" "}
                <span className="text-[#22C55E]">Product Scene</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-xl text-white/80 max-w-xl mx-auto animate-fade-in-up stagger-3">
                Seattle&apos;s product community is better than you think. We just needed a place to find each other.
              </p>

              {/* Email Capture */}
              <div className="mt-10 animate-fade-in-up stagger-4" id="subscribe">
                <EmailCapture variant="hero" dark />
              </div>

              {/* Social proof */}
              <p className="mt-8 text-sm text-white/50 animate-fade-in-up stagger-5">
                Join product folks from Amazon, Microsoft, Meta, and Seattle&apos;s best startups
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-6 hidden md:block z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-y bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <div className="divider-green mx-auto" />
            <h2 className="mt-6 heading-lg text-[#0f172a]">
              What&apos;s in the newsletter?
            </h2>
            <p className="mt-4 text-lg text-[#64748b]">
              Monthly updates on the Seattle product scene. No fluff, no spam—just stuff worth your time.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Pillar 1 */}
            <div className="card p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F0FDF4] flex items-center justify-center">
                <Calendar className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0f172a]">
                Curated Events
              </h3>
              <p className="mt-3 text-[#64748b]">
                Product meetups, happy hours, workshops, and talks. We filter so you don&apos;t have to.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="card p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#ECFEFF] flex items-center justify-center">
                <Users className="w-7 h-7 text-[#0891B2]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0f172a]">
                Local Community
              </h3>
              <p className="mt-3 text-[#64748b]">
                Connect with product people across Seattle—big tech, startups, agencies. All levels welcome.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="card p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F0FDF4] flex items-center justify-center">
                <Mail className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0f172a]">
                Signal Over Noise
              </h3>
              <p className="mt-3 text-[#64748b]">
                One email a month. Only the good stuff—events, jobs at real companies, local insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-y bg-[#f8fafc]">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="divider-teal" />
              <h2 className="mt-4 heading-lg text-[#0f172a]">Upcoming Events</h2>
              <p className="mt-2 text-[#64748b]">
                What&apos;s happening in Seattle&apos;s product scene.
              </p>
            </div>
            <a href="/events" className="link-underline text-sm font-semibold">
              View all events →
            </a>
          </div>

          {/* Featured Event */}
          {featuredEvent && (
            <div className="mt-10">
              <EventCard event={featuredEvent} variant="featured" />
            </div>
          )}

          {/* Other Events */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {otherEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Submit CTA */}
          <div className="mt-10 text-center">
            <p className="text-[#64748b]">
              Know about an event we should feature?
            </p>
            <a
              href="/submit"
              className="mt-2 inline-flex items-center gap-2 text-[#0891B2] font-semibold hover:text-[#164E63] transition-colors"
            >
              Submit an event
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-y">
        <div className="container-wide">
          <EmailCapture
            variant="card"
            title="Stay in the loop"
            description="Get Seattle product events delivered to your inbox. Monthly updates, no spam."
          />
        </div>
      </section>
    </div>
  );
}
