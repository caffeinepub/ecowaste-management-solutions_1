import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Basic Package",
    tier: "Small Institutions",
    badge: null,
    highlighted: false,
    bestFor: "Small schools, clinics, small offices",
    budget: "Rs. 25,000 – Rs. 75,000",
    includes: [
      "Color-coded waste bins (basic setup)",
      "Basic segregation system (Dry / Wet)",
      "Initial setup guidance",
      "One-time installation",
    ],
    benefits: [
      "Simple and cost-effective waste system",
      "Clean and organized premises",
    ],
  },
  {
    name: "Standard Package",
    tier: "Growing Institutions",
    badge: null,
    highlighted: false,
    bestFor: "Schools, colleges, mid-size offices, societies",
    budget: "Rs. 75,000 – Rs. 2,50,000",
    includes: [
      "Complete bin setup (Euroline range + standard bins)",
      "Trolleys / collection system",
      "Floor-wise waste collection planning",
      "Staff guidance & basic training",
      "Waste storage area setup",
    ],
    benefits: [
      "Efficient waste handling",
      "Better hygiene & management",
      "Reduced manual effort",
    ],
  },
  {
    name: "Premium Package",
    tier: "Large Institutions",
    badge: "Most Comprehensive",
    highlighted: true,
    bestFor: "Hospitals, universities, large societies, commercial buildings",
    budget: "Rs. 2,50,000 – Rs. 10,00,000+",
    includes: [
      "Complete waste management system setup",
      "Advanced bins + wheeled bins + carts",
      "Segregation as per compliance standards",
      "Staff training program",
      "Monthly inspection & maintenance support",
      "Waste audit & reporting",
      "Disposal coordination (authorized vendors)",
    ],
    benefits: [
      "Full compliance (especially for hospitals)",
      "Professional waste management system",
      "Long-term cost saving",
      '"Zero Waste" transformation ready',
    ],
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-20 bg-white"
      data-ocid="packages.section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.45 0.15 145)" }}
          >
            Tailored For You
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.14 0.04 145)" }}
          >
            Our Service Packages
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the package that fits your institution's scale. Every package
            is fully customizable — we will design the right solution for you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                pkg.highlighted ? "scale-105" : "hover:shadow-md"
              }`}
              style={
                pkg.highlighted
                  ? {
                      borderColor: "oklch(0.45 0.15 145)",
                      boxShadow:
                        "0 0 0 2px oklch(0.45 0.15 145), 0 8px 32px oklch(0.45 0.15 145 / 0.2)",
                    }
                  : { borderColor: "oklch(0.87 0.08 145)" }
              }
              data-ocid="packages.card"
            >
              {pkg.badge && (
                <div
                  className="text-white text-xs font-bold text-center py-2 tracking-wide flex items-center justify-center gap-1"
                  style={{ background: "oklch(0.45 0.15 145)" }}
                >
                  <Star className="h-3 w-3 fill-white" />
                  {pkg.badge}
                </div>
              )}
              <div
                className="p-6"
                style={{
                  background: pkg.highlighted
                    ? "oklch(0.97 0.02 145)"
                    : "white",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "oklch(0.45 0.15 145)" }}
                >
                  {pkg.tier}
                </p>
                <h3
                  className="font-heading text-2xl font-bold mb-1"
                  style={{ color: "oklch(0.14 0.04 145)" }}
                >
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Best for: {pkg.bestFor}
                </p>
                <div
                  className="mb-4 p-3 rounded-lg border"
                  style={{
                    background: "oklch(0.14 0.04 145 / 0.05)",
                    borderColor: "oklch(0.87 0.08 145)",
                  }}
                >
                  <p
                    className="text-xs mb-1"
                    style={{ color: "oklch(0.36 0.12 145)" }}
                  >
                    Ideal Budget
                  </p>
                  <p
                    className="font-bold text-base"
                    style={{ color: "oklch(0.2 0.06 145)" }}
                  >
                    {pkg.budget}
                  </p>
                </div>
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-wide mb-3 text-foreground">
                    Includes
                  </p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check
                          className="h-4 w-4 flex-shrink-0 mt-0.5"
                          style={{ color: "oklch(0.45 0.15 145)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wide mb-3 text-foreground">
                    Key Benefits
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm font-medium"
                        style={{ color: "oklch(0.28 0.09 145)" }}
                      >
                        <span
                          className="font-bold"
                          style={{ color: "oklch(0.55 0.16 145)" }}
                        >
                          +
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  asChild
                  className="w-full font-semibold text-white"
                  style={{
                    background: pkg.highlighted
                      ? "oklch(0.45 0.15 145)"
                      : "oklch(0.93 0.05 145)",
                    color: pkg.highlighted ? "white" : "oklch(0.2 0.06 145)",
                  }}
                  data-ocid="packages.primary_button"
                >
                  <a href="#contact">Request a Quotation</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
