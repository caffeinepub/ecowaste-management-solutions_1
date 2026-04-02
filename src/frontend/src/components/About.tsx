import { Button } from "@/components/ui/button";
import { CheckCircle, Handshake, Leaf, Package } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "End-to-End Service",
    desc: "From supply of certified Sintex products to waste collection, cleaning, and compliant disposal — we manage every step so you never have to.",
  },
  {
    icon: Package,
    title: "Certified Products",
    desc: "We supply genuine Sintex colour-coded bins, wheelbarrows, foot-operated bins, and more — all BIS-certified and built to last in demanding environments.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We are not a one-time vendor. Once you partner with us, we proactively schedule, replenish, and upgrade — so waste management is permanently off your plate.",
  },
  {
    icon: Leaf,
    title: "Eco-Responsible",
    desc: "Every practice we follow — from segregation at source to responsible disposal — aligns with the Green India Mission and sustainability goals.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white" data-ocid="about.section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.45 0.15 145)" }}
            >
              About Us
            </span>
            <h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "oklch(0.14 0.04 145)" }}
            >
              One Partnership.
              <br />
              <span style={{ color: "oklch(0.45 0.15 145)" }}>
                Zero Waste Worries.
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              At Ecowaste Management Solutions, our single-minded mission is to
              take waste management completely off your hands — for good.
              Whether you run a hospital, a residential society, a school, or a
              large institution, you have enough to focus on.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Partner with us, and we will step in as your dedicated waste
              management team. We will supply the right Sintex-certified
              products, schedule regular collections, carry out deep cleaning,
              and handle compliant disposal — all proactively, without you ever
              having to follow up.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              We serve hospitals, housing societies, schools, municipal bodies,
              and corporates across India — treating every client not as a
              contract, but as a long-term responsibility. When you choose us,
              you choose peace of mind, permanently.
            </p>
            <div
              className="p-4 rounded-r-lg mb-6 border-l-4 italic text-sm"
              style={{
                background: "oklch(0.97 0.02 145)",
                borderColor: "oklch(0.45 0.15 145)",
                color: "oklch(0.28 0.09 145)",
              }}
            >
              <p>
                "Tension-free waste management — that is not a tagline for us.
                It is a promise we will deliver, every single day."
              </p>
              <p className="mt-1 font-semibold not-italic">
                — Ecowaste Management Solutions
              </p>
            </div>
            <Button
              asChild
              className="text-white font-semibold"
              style={{ background: "oklch(0.45 0.15 145)" }}
              data-ocid="about.primary_button"
            >
              <a href="#contact">Request a Quotation</a>
            </Button>
          </div>
          <div className="space-y-4">
            <div
              className="p-6 text-white rounded-2xl"
              style={{ background: "oklch(0.2 0.06 145)" }}
            >
              <h3
                className="font-heading text-lg font-bold mb-2"
                style={{ color: "oklch(0.75 0.12 145)" }}
              >
                Our Vision
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.87 0.08 145)" }}
              >
                A cleaner, healthier India where every institution is free from
                the burden of waste management. We are building a future where
                waste is no longer your problem — it is ours to solve,
                sustainably and responsibly.
              </p>
            </div>
            <div
              className="p-6 rounded-2xl border"
              style={{
                background: "oklch(0.97 0.08 80)",
                borderColor: "oklch(0.85 0.12 80)",
              }}
            >
              <p
                className="font-semibold text-sm uppercase tracking-wide mb-2"
                style={{ color: "oklch(0.45 0.15 80)" }}
              >
                💡 Did You Know?
              </p>
              <p
                className="font-bold text-lg"
                style={{ color: "oklch(0.3 0.12 80)" }}
              >
                India generates{" "}
                <span className="text-2xl">62 Million tonnes</span> of waste
                every year
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "oklch(0.4 0.1 80)" }}
              >
                — only <strong>22%</strong> is processed
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border"
              style={{
                background: "oklch(0.97 0.02 145)",
                borderColor: "oklch(0.87 0.08 145)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "oklch(0.45 0.15 145)" }}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3
                className="font-heading font-bold mb-2"
                style={{ color: "oklch(0.2 0.06 145)" }}
              >
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
