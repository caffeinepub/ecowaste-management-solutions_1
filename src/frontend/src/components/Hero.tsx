import { Button } from "@/components/ui/button";
import { Cross, Package, Recycle, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  { icon: Recycle, label: "Waste Collection" },
  { icon: Sparkles, label: "Deep Cleaning" },
  { icon: Package, label: "Eco Products" },
  { icon: Cross, label: "Medical Waste" },
];

// Falling leaf SVG paths
const LEAF_COLORS = ["#86efac", "#4ade80", "#a3e635", "#bbf7d0", "#dcfce7"];

function FallingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const NUM_LEAVES = 38;

    interface Leaf {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      angle: number;
      rotSpeed: number;
      color: string;
      opacity: number;
    }

    function makeLeaf(): Leaf {
      return {
        x: Math.random() * width,
        y: -20 - Math.random() * 200,
        size: 8 + Math.random() * 16,
        speedY: 0.6 + Math.random() * 1.2,
        speedX: -0.5 + Math.random() * 1.0,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
        color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
        opacity: 0.4 + Math.random() * 0.5,
      };
    }

    const leaves: Leaf[] = Array.from({ length: NUM_LEAVES }, makeLeaf).map(
      (l) => ({ ...l, y: Math.random() * height }),
    );

    function drawLeaf(leaf: Leaf) {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = leaf.opacity;
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(leaf.angle);
      ctx.fillStyle = leaf.color;
      const s = leaf.size;
      ctx.beginPath();
      // Simple leaf shape
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.8, -s * 0.5, s * 0.8, s * 0.5, 0, s);
      ctx.bezierCurveTo(-s * 0.8, s * 0.5, -s * 0.8, -s * 0.5, 0, -s);
      ctx.fill();
      // Stem
      ctx.strokeStyle = leaf.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = leaf.opacity * 0.7;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(0, s);
      ctx.stroke();
      ctx.restore();
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);
      for (const leaf of leaves) {
        leaf.y += leaf.speedY;
        leaf.x += leaf.speedX + Math.sin(leaf.y * 0.015) * 0.5;
        leaf.angle += leaf.rotSpeed;
        if (leaf.y > height + 30) {
          Object.assign(leaf, makeLeaf());
        }
        drawLeaf(leaf);
      }
      animId = requestAnimationFrame(animate);
    }

    animate();

    const resizeObserver = new ResizeObserver(() => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* City + Truck Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-city-truck.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          zIndex: 0,
        }}
      />
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.08 0.04 145 / 0.82) 0%, oklch(0.12 0.06 145 / 0.72) 50%, oklch(0.2 0.09 145 / 0.6) 100%)",
          zIndex: 1,
        }}
      />
      {/* Animated falling leaves */}
      <FallingLeaves />

      <div
        className="container mx-auto px-4 pt-24 pb-16 relative"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border"
            style={{
              background: "oklch(0.28 0.09 145 / 0.5)",
              borderColor: "oklch(0.36 0.12 145 / 0.5)",
              color: "oklch(0.87 0.08 145)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "oklch(0.7 0.18 145)" }}
            />
            India's Future Waste Management Partner
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Making India{" "}
            <span style={{ color: "oklch(0.7 0.18 145)" }}>Clean</span>
            <br />
            &amp; Tension-Free
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
            style={{ color: "oklch(0.93 0.05 145 / 0.9)" }}
          >
            We will provide comprehensive waste management services for
            hospitals, societies, schools, municipalities, and corporates across
            India.
          </p>
          <p
            className="text-sm md:text-base max-w-xl mx-auto mb-10 italic"
            style={{ color: "oklch(0.75 0.12 145)" }}
          >
            Committed to contributing to the Green India Mission — cleaner
            cities, healthier lives, a sustainable future.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors"
                style={{ background: "oklch(1 0 0 / 0.08)" }}
              >
                <Icon
                  className="h-7 w-7"
                  style={{ color: "oklch(0.75 0.12 145)" }}
                />
                <span className="text-white text-xs font-medium text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-semibold text-base px-8 text-white"
              style={{ background: "oklch(0.55 0.16 145)" }}
              data-ocid="hero.primary_button"
            >
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold text-base px-8 bg-transparent text-white border-white/40 hover:bg-white/10"
              data-ocid="hero.secondary_button"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 4 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <title>Decorative wave</title>
          <path
            d="M0 80L1440 80L1440 20C1200 80 240 0 0 60L0 80Z"
            fill="oklch(0.98 0.005 145)"
          />
        </svg>
      </div>
    </section>
  );
}
