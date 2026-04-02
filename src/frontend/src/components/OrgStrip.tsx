const orgs = [
  { emoji: "🏥", label: "Hospitals" },
  { emoji: "🏫", label: "Schools" },
  { emoji: "🏘️", label: "Societies" },
  { emoji: "🏗️", label: "Municipalities" },
  { emoji: "🏢", label: "Corporates" },
  { emoji: "⚕️", label: "Healthcare" },
];

export default function OrgStrip() {
  return (
    <section
      className="py-12"
      style={{ background: "oklch(0.2 0.06 145)" }}
      data-ocid="orgs.section"
    >
      <div className="container mx-auto px-4">
        <p
          className="text-center font-semibold text-sm uppercase tracking-widest mb-8"
          style={{ color: "oklch(0.75 0.12 145)" }}
        >
          Built to Serve Organizations Like
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {orgs.map(({ emoji, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl border min-w-[100px]"
              style={{
                background: "oklch(0.28 0.09 145 / 0.5)",
                borderColor: "oklch(0.36 0.12 145 / 0.5)",
              }}
            >
              <span className="text-3xl">{emoji}</span>
              <span className="text-white text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
