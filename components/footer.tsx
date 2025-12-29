import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#164E63] text-white">
      <div className="container-wide py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-bricolage)] text-xl font-bold"
            >
              Product in Seattle
            </Link>
            <p className="mt-3 text-white/70 max-w-sm">
              Your guide to Seattle&apos;s product scene. Events, jobs, and community
              for product people in the Pacific Northwest.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="hover:text-white transition-colors">
                  Subscribe
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-white transition-colors">
                  Archive
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-white transition-colors">
                  Submit Event
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a
                  href="https://twitter.com/productinseattle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/productinseattle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:carl@fullstackpm.com"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Product in Seattle. All rights reserved.</p>
          <p>
            Made with coffee in Seattle
          </p>
        </div>
      </div>
    </footer>
  );
}
