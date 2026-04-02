interface QuoteBlockProps {
  quote: string;
  author: string;
  dark?: boolean;
}

export default function QuoteBlock({
  quote,
  author,
  dark = false,
}: QuoteBlockProps) {
  const bg = dark ? "oklch(0.2 0.06 145)" : "oklch(0.93 0.05 145)";
  const textColor = dark ? "white" : "oklch(0.2 0.06 145)";
  const authorColor = dark ? "oklch(0.75 0.12 145)" : "oklch(0.36 0.12 145)";
  const markColor = dark ? "oklch(0.55 0.16 145)" : "oklch(0.55 0.16 145)";
  return (
    <section style={{ background: bg }} className="py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <div
          className="text-6xl font-serif leading-none mb-4"
          style={{ color: markColor }}
        >
          &ldquo;
        </div>
        <p
          className="font-heading text-2xl md:text-3xl font-semibold leading-snug mb-6"
          style={{ color: textColor }}
        >
          {quote}
        </p>
        <div
          className="w-16 h-1 mx-auto mb-4 rounded-full"
          style={{ background: markColor }}
        />
        <p className="text-sm font-medium" style={{ color: authorColor }}>
          — {author}
        </p>
      </div>
    </section>
  );
}
