import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-16 bg-white" data-ocid="testimonial.section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative border"
            style={{
              background: "oklch(0.97 0.02 145)",
              borderColor: "oklch(0.87 0.08 145)",
            }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-5 w-5"
                  style={{
                    fill: "oklch(0.45 0.15 145)",
                    color: "oklch(0.45 0.15 145)",
                  }}
                />
              ))}
            </div>
            <blockquote
              className="font-heading text-xl md:text-2xl font-semibold mb-6 leading-snug"
              style={{ color: "oklch(0.14 0.04 145)" }}
            >
              "EcoWaste completely transformed our hospital's waste management.
              Zero compliance issues since day one."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ background: "oklch(0.45 0.15 145)" }}
              >
                R
              </div>
              <div className="text-left">
                <p
                  className="font-semibold"
                  style={{ color: "oklch(0.2 0.06 145)" }}
                >
                  Dr. Rajesh Kumar
                </p>
                <p className="text-sm text-muted-foreground">
                  Director, City Hospital
                </p>
              </div>
            </div>
            <div
              className="absolute top-4 left-6 text-8xl font-serif leading-none select-none"
              style={{ color: "oklch(0.87 0.08 145)" }}
            >
              &ldquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
