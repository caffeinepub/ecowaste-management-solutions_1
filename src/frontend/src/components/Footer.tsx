const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Request a Quote", href: "#contact" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, oklch(0.14 0.04 145), oklch(0.1 0.03 145))",
      }}
      data-ocid="footer.section"
    >
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center rounded-xl p-2"
                style={{ background: "white" }}
              >
                <img
                  src="/assets/truck-logo.png"
                  alt="EcoWaste Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white">
                  EcoWaste Management
                </p>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "oklch(0.65 0.14 145)" }}
                >
                  Solutions
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.87 0.08 145)" }}
            >
              Making India clean and tension-free with comprehensive waste
              management services for organizations across the nation.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.75 0.12 145)" }}
                    data-ocid="footer.link"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wide">
              Contact Us
            </h4>
            <address
              className="not-italic space-y-1.5 text-sm"
              style={{ color: "oklch(0.87 0.08 145)" }}
            >
              <p>EcoWaste Management Solutions</p>
              <p>India — Serving Pan-India</p>
              <div className="pt-2 space-y-1">
                <p>
                  <a
                    href="tel:+918800096570"
                    className="hover:text-white transition-colors"
                  >
                    +91 88000 96570
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+918800095472"
                    className="hover:text-white transition-colors"
                  >
                    +91 88000 95472
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+918800009572"
                    className="hover:text-white transition-colors"
                  >
                    +91 88000 09572
                  </a>
                </p>
                <p>
                  <a
                    href="tel:01149931479"
                    className="hover:text-white transition-colors"
                  >
                    Tel: 011 4993 1479
                  </a>
                </p>
              </div>
              <p className="pt-1">
                <a
                  href="mailto:ewmsolutions1@gmail.com"
                  className="hover:text-white transition-colors"
                  style={{ color: "oklch(0.75 0.12 145)" }}
                >
                  ewmsolutions1@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-b"
          style={{ borderColor: "oklch(1 0 0 / 0.1)" }}
        >
          <span
            className="font-semibold text-sm"
            style={{ color: "oklch(0.65 0.14 145)" }}
          >
            Our Affiliations:
          </span>
          <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center">
            <img
              src="/assets/swachh-bharat.png"
              alt="Swachh Bharat Abhiyan"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center">
            <img
              src="/assets/gem-logo.png"
              alt="Government e-Marketplace"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm mt-8"
          style={{ color: "oklch(0.65 0.14 145)" }}
        >
          <p>
            © {currentYear} EcoWaste Management Solutions. All rights reserved.
          </p>
          <p>
            Built with <span style={{ color: "oklch(0.65 0.2 15)" }}>♥</span>{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: "oklch(0.75 0.12 145)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
