import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Brochures", href: "#brochures" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeAndNav = (href: string) => {
    setOpen(false);
    window.location.hash = href.replace("#", "");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
      data-ocid="navbar.panel"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="navbar.link"
        >
          <div
            className="flex items-center justify-center rounded-lg p-1"
            style={{ background: "oklch(0.14 0.04 145)" }}
          >
            <img
              src="/assets/truck-logo.png"
              alt="EcoWaste Logo"
              className="h-9 w-auto object-contain"
              style={{ filter: "brightness(1.2) contrast(1.1)" }}
            />
          </div>
          <div className="hidden sm:block">
            <p
              className="font-heading font-bold text-sm leading-tight"
              style={{ color: "oklch(0.2 0.06 145)" }}
            >
              EcoWaste Management
            </p>
            <p
              className="font-heading text-xs leading-tight"
              style={{ color: "oklch(0.36 0.12 145)" }}
            >
              Solutions
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-eco-600 transition-colors"
              data-ocid="navbar.link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://gem.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium border border-eco-200 rounded-full px-3 py-1 hover:bg-eco-50 transition-colors"
            style={{ color: "oklch(0.36 0.12 145)" }}
            data-ocid="navbar.link"
          >
            <img
              src="/assets/gem-logo.png"
              alt="GeM"
              className="h-5 w-auto"
              style={{ background: "white", borderRadius: 4, padding: 1 }}
            />
            <ExternalLink className="h-3 w-3" />
          </a>
        </nav>

        <div className="hidden lg:flex">
          <Button
            asChild
            className="bg-eco-600 hover:bg-eco-700 text-white font-semibold"
            data-ocid="navbar.primary_button"
          >
            <a href="#contact">Request a Quotation</a>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="navbar.toggle"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <button
              type="button"
              key={l.href}
              onClick={() => closeAndNav(l.href)}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-eco-600 py-1"
              data-ocid="navbar.link"
            >
              {l.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => closeAndNav("#contact")}
            className="block w-full text-center py-2 px-4 rounded-md font-semibold text-white"
            style={{ background: "oklch(0.45 0.15 145)" }}
            data-ocid="navbar.primary_button"
          >
            Request a Quotation
          </button>
        </div>
      )}
    </header>
  );
}
