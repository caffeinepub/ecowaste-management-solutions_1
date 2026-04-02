import { ExternalLink } from "lucide-react";

const BROCHURE_URL =
  "/assets/brochure_ewms-019d49f4-3a4d-7602-bc07-fef63b737a4e.pdf";

export default function Brochures() {
  return (
    <section
      id="brochures"
      className="py-20"
      style={{ background: "oklch(0.97 0.02 145)" }}
      data-ocid="brochures.section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.45 0.15 145)" }}
          >
            Resources
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.14 0.04 145)" }}
          >
            Our Brochures
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            View our company brochure to learn more about our services,
            products, and packages.
          </p>
        </div>

        {/* PDF Embed Viewer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div
            className="rounded-2xl overflow-hidden border shadow-lg"
            style={{ borderColor: "oklch(0.87 0.08 145)" }}
          >
            <iframe
              src={`${BROCHURE_URL}#toolbar=1&navpanes=1&scrollbar=1`}
              title="EcoWaste Management Brochure"
              className="w-full"
              style={{ height: "80vh", minHeight: 500 }}
            />
          </div>
        </div>

        {/* Open in new tab button */}
        <div className="flex justify-center">
          <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full text-white shadow-md transition-opacity hover:opacity-90"
            style={{ background: "oklch(0.45 0.15 145)" }}
          >
            <ExternalLink className="h-4 w-4" />
            Open Full Brochure in New Tab
          </a>
        </div>
      </div>
    </section>
  );
}
