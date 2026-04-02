const stats = [
  { value: "62M", unit: "Tonnes", desc: "Annual waste generated in India" },
  { value: "2M+", unit: "Deaths", desc: "Yearly from waste-related diseases" },
  { value: "78%", unit: "", desc: "Of India's waste goes unprocessed" },
  { value: "1", unit: "Child", desc: "Dies every 2 min from poor sanitation" },
];

export default function WasteReality() {
  return (
    <section
      className="py-20 text-white"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.04 145), oklch(0.22 0.08 145))",
      }}
      data-ocid="reality.section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.75 0.12 145)" }}
          >
            Wake-Up Call
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            The Reality of Waste in India
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "oklch(0.87 0.08 145)" }}
          >
            These are not just numbers — they are lives, communities, and
            futures at stake.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map(({ value, unit, desc }) => (
            <div
              key={desc}
              className="text-center p-6 rounded-2xl border"
              style={{
                background: "oklch(1 0 0 / 0.05)",
                borderColor: "oklch(1 0 0 / 0.1)",
              }}
            >
              <p
                className="font-heading text-4xl md:text-5xl font-bold mb-1"
                style={{ color: "oklch(0.75 0.12 145)" }}
              >
                {value}
              </p>
              {unit && (
                <p
                  className="font-semibold text-sm mb-2"
                  style={{ color: "oklch(0.65 0.14 145)" }}
                >
                  {unit}
                </p>
              )}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.87 0.08 145)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="rounded-2xl p-8 border"
            style={{
              background: "oklch(0.28 0.09 145 / 0.4)",
              borderColor: "oklch(0.45 0.15 145 / 0.4)",
            }}
          >
            <p className="font-heading text-xl font-semibold text-white mb-2">
              Every tonne of waste managed is a life potentially saved.
            </p>
            <p
              className="text-lg font-bold"
              style={{ color: "oklch(0.75 0.12 145)" }}
            >
              2 million lives depend on it.
            </p>
            <p
              className="mt-4 text-sm italic"
              style={{ color: "oklch(0.87 0.08 145)" }}
            >
              "These numbers can change. Together, we can make it happen."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
