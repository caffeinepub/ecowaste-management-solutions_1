import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const addons = [
  "Composting setup (for societies / campuses)",
  "Monthly AMC (maintenance contracts)",
  "Waste analytics report",
  "Recycling coordination",
  "Awareness programs (schools / colleges)",
];

const whyUs = [
  "Customized solutions for each client",
  "Scalable system (small to large institutions)",
  "Long-term partnership approach",
];

export default function AddOnWhyUs() {
  return (
    <section
      className="py-20"
      style={{ background: "oklch(0.97 0.02 145)" }}
      data-ocid="addons.section"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-2xl border p-8"
            style={{ borderColor: "oklch(0.87 0.08 145)" }}
          >
            <span
              className="inline-block font-semibold text-xs uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.45 0.15 145)" }}
            >
              Enhance Your Package
            </span>
            <h3
              className="font-heading text-2xl font-bold mb-6"
              style={{ color: "oklch(0.14 0.04 145)" }}
            >
              Add-On Services
            </h3>
            <ul className="space-y-3 mb-8">
              {addons.map((addon) => (
                <li
                  key={addon}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.93 0.05 145)" }}
                  >
                    <Check
                      className="h-3 w-3"
                      style={{ color: "oklch(0.45 0.15 145)" }}
                    />
                  </div>
                  {addon}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="font-semibold"
              style={{
                borderColor: "oklch(0.55 0.16 145)",
                color: "oklch(0.36 0.12 145)",
              }}
              data-ocid="addons.secondary_button"
            >
              <a href="#contact">Enquire About Add-Ons</a>
            </Button>
          </div>
          <div
            className="rounded-2xl p-8 text-white"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.2 0.06 145), oklch(0.3 0.1 145))",
            }}
          >
            <span
              className="inline-block font-semibold text-xs uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.75 0.12 145)" }}
            >
              Why Choose Us
            </span>
            <h3 className="font-heading text-2xl font-bold mb-2">
              Our Unique Advantage
            </h3>
            <p
              className="text-sm italic mb-6"
              style={{ color: "oklch(0.87 0.08 145)" }}
            >
              "We don't just supply products — we build complete waste
              management systems."
            </p>
            <ul className="space-y-4 mb-8">
              {whyUs.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.55 0.16 145 / 0.2)" }}
                  >
                    <Zap
                      className="h-4 w-4"
                      style={{ color: "oklch(0.75 0.12 145)" }}
                    />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.93 0.05 145)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="font-semibold text-white"
              style={{ background: "oklch(0.55 0.16 145)" }}
              data-ocid="addons.primary_button"
            >
              <a href="#contact">Request a Quotation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
