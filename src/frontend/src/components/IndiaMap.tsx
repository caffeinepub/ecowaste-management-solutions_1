import { useState } from "react";

const cities = [
  { name: "Delhi", x: 295, y: 168 },
  { name: "Ahmedabad", x: 218, y: 248 },
  { name: "Mumbai", x: 215, y: 315 },
  { name: "Pune", x: 225, y: 335 },
  { name: "Hyderabad", x: 285, y: 370 },
  { name: "Bangalore", x: 270, y: 430 },
  { name: "Chennai", x: 310, y: 435 },
  { name: "Kolkata", x: 400, y: 265 },
];

const stats = [
  { value: "500+", label: "Cities Served" },
  { value: "10,000+", label: "Organizations" },
  { value: "1M+ KG", label: "Waste Managed" },
];

export default function IndiaMap() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section
      className="py-20"
      style={{ background: "oklch(0.97 0.02 145)" }}
      data-ocid="map.section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.45 0.15 145)" }}
          >
            Our Reach
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "oklch(0.14 0.04 145)" }}
          >
            Serving Across India
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From the mountains of the north to the coast of the south — EcoWaste
            is on a mission to make every corner of India clean and green.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-lg">
            <svg
              viewBox="0 0 500 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full drop-shadow-lg"
              role="img"
              aria-label="Map of India showing cities served by EcoWaste"
            >
              <title>
                Map of India showing cities served by EcoWaste Management
                Solutions
              </title>
              <path
                d="M180 60 L195 45 L225 40 L280 38 L335 45 L380 65 L410 90 L420 120 L415 155 L425 180 L440 200 L445 225 L435 250 L420 270 L400 280 L385 300 L375 330 L355 355 L345 380 L330 405 L315 425 L300 450 L285 465 L270 472 L260 475 L250 470 L238 458 L228 440 L215 420 L205 400 L195 375 L185 355 L178 335 L170 310 L160 285 L145 265 L135 240 L130 215 L132 190 L138 165 L145 140 L150 115 L158 90 L168 72 Z"
                fill="oklch(0.87 0.08 145)"
                stroke="oklch(0.45 0.15 145)"
                strokeWidth="2"
              />
              <path
                d="M180 60 L170 50 L160 42 L150 38 L145 45 L148 58 L155 68 L165 72 L168 72 Z"
                fill="oklch(0.87 0.08 145)"
                stroke="oklch(0.45 0.15 145)"
                strokeWidth="2"
              />
              <path
                d="M380 180 L400 170 L420 175 L435 190 L440 200 L430 210 L415 205 L400 195 Z"
                fill="oklch(0.87 0.08 145)"
                stroke="oklch(0.45 0.15 145)"
                strokeWidth="2"
              />
              <ellipse
                cx="295"
                cy="500"
                rx="10"
                ry="14"
                fill="oklch(0.93 0.05 145)"
                stroke="oklch(0.45 0.15 145)"
                strokeWidth="1.5"
              />
              {cities.map((city) => (
                <g
                  key={city.name}
                  onMouseEnter={() => setHover(city.name)}
                  onMouseLeave={() => setHover(null)}
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={hover === city.name ? 9 : 6}
                    fill="oklch(0.45 0.15 145)"
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-150"
                    style={{
                      filter:
                        hover === city.name
                          ? "drop-shadow(0 0 6px oklch(0.55 0.16 145))"
                          : "none",
                    }}
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="14"
                    fill="transparent"
                    className="cursor-pointer"
                  />
                  {hover === city.name && (
                    <>
                      <rect
                        x={city.x - 32}
                        y={city.y - 32}
                        width="64"
                        height="22"
                        rx="5"
                        fill="oklch(0.2 0.06 145)"
                      />
                      <text
                        x={city.x}
                        y={city.y - 15}
                        textAnchor="middle"
                        fill="white"
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        {city.name}
                      </text>
                    </>
                  )}
                </g>
              ))}
            </svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mt-8">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center p-6 bg-white rounded-2xl border shadow-xs"
                style={{ borderColor: "oklch(0.87 0.08 145)" }}
              >
                <p
                  className="font-heading text-3xl font-bold mb-1"
                  style={{ color: "oklch(0.45 0.15 145)" }}
                >
                  {value}
                </p>
                <p className="text-muted-foreground text-sm">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground text-sm max-w-xl">
            EcoWaste is expanding its network every day, bringing professional
            waste management to cities, towns, and villages — because a cleaner
            India starts from every locality.
          </p>
        </div>
      </div>
    </section>
  );
}
