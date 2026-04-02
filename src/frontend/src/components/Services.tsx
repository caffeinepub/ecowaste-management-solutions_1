import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Brain,
  Leaf,
  RefreshCw,
  Sparkles,
  Syringe,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Waste Collection",
    desc: "We offer scheduled and on-demand waste pickup for organizations of all sizes with GPS-tracked vehicles.",
    warning: null,
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "We provide professional deep-cleaning services for hospitals, societies, and commercial premises.",
    warning:
      "21% of communicable diseases in India are linked to poor sanitation & improper waste handling.",
  },
  {
    icon: Brain,
    title: "Waste Consulting",
    desc: "We provide expert guidance on waste reduction, segregation policies, and compliance with environmental regulations.",
    warning: null,
  },
  {
    icon: Syringe,
    title: "Medical Waste Disposal",
    desc: "We offer safe, certified bio-medical waste collection and disposal for healthcare facilities.",
    warning:
      "80% of hospital waste is general waste — yet most is improperly disposed, causing 16 billion unsafe injections yearly.",
  },
  {
    icon: Leaf,
    title: "Eco Products Supply",
    desc: "We supply biodegradable bags, color-coded bins, PPE kits, and eco-friendly sanitation supplies.",
    warning: null,
  },
  {
    icon: RefreshCw,
    title: "Recycling Solutions",
    desc: "We run end-to-end recycling programs including material sorting, processing, and audit reports.",
    warning:
      "Only 22% of India's waste is processed — 78% ends up polluting land, water, and air.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20"
      style={{ background: "oklch(0.97 0.02 145)" }}
      data-ocid="services.section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.45 0.15 145)" }}
          >
            What We Do
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.14 0.04 145)" }}
          >
            Our Comprehensive Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From daily waste collection to specialized medical disposal — we
            handle every aspect of waste management so you don't have to.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, warning }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border overflow-hidden hover:-translate-y-1 transition-all duration-200"
              style={{ borderColor: "oklch(0.87 0.08 145)" }}
              data-ocid="services.card"
            >
              <div className="p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.45 0.15 145)" }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3
                  className="font-heading font-bold text-lg mb-2"
                  style={{ color: "oklch(0.2 0.06 145)" }}
                >
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {desc}
                </p>
                {warning && (
                  <div
                    className="flex items-start gap-2 rounded-lg p-3 mb-4 border"
                    style={{
                      background: "oklch(0.97 0.08 80)",
                      borderColor: "oklch(0.85 0.12 80)",
                    }}
                  >
                    <AlertTriangle
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: "oklch(0.5 0.15 80)" }}
                    />
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "oklch(0.35 0.1 80)" }}
                    >
                      {warning}
                    </p>
                  </div>
                )}
              </div>
              <div className="px-6 pb-6">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-eco-200 hover:bg-eco-50"
                  style={{ color: "oklch(0.36 0.12 145)" }}
                  data-ocid="services.secondary_button"
                >
                  <a href="#contact">Learn More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
