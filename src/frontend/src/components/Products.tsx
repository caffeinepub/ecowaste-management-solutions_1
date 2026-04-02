import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Package } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "../hooks/useQueries";

const products = [
  {
    id: "bins",
    name: "Colour-Coded Waste Bins",
    tagline:
      "BIS-certified Sintex bins for systematic waste segregation — wet, dry, hazardous, biomedical & general.",
    image: "/assets/generated/product-waste-bins.dim_600x400.jpg",
    features: [
      "BIS-certified Sintex quality",
      "Available in 5 standard colours: Red, Blue, Green, Yellow, Black",
      "Capacities: 5L, 10L, 20L, 50L, 100L, 200L",
      "UV-stabilised for outdoor use",
      "Lid and pedal variants available",
      "Ideal for hospitals, schools, offices, municipalities",
    ],
    specs:
      "Material: HDPE | Standards: BIS IS 12785 | Variants: Open top, foot pedal, swing lid",
  },
  {
    id: "wheelbarrow",
    name: "Wheelbarrows",
    tagline:
      "Heavy-duty wheelbarrows for construction sites, campuses, and municipal waste transport.",
    image: "/assets/generated/product-wheelbarrow.dim_600x400.jpg",
    features: [
      "Heavy-duty steel and polyethylene construction",
      "Capacity: 60L–120L",
      "Ergonomic handles for easy manoeuvring",
      "Puncture-resistant tyre",
      "Suitable for construction, campuses, municipalities",
      "Rust-resistant finish",
    ],
    specs:
      "Material: Steel frame + HDPE tub | Capacity: 60–120L | Wheel: Pneumatic or solid",
  },
  {
    id: "trolleys",
    name: "Hand Carts / Trolleys",
    tagline:
      "Versatile hand carts and trolleys for institutional corridors, hospitals, and warehouses.",
    image: "/assets/generated/product-trolley.dim_600x400.jpg",
    features: [
      "Stainless steel and powder-coated options",
      "Multi-level shelving available",
      "360° swivel wheels with brakes",
      "Capacity up to 200 kg",
      "Hospital-grade hygienic surface",
      "Foldable and compact designs available",
    ],
    specs:
      "Material: SS 304 or mild steel | Load: up to 200 kg | Wheels: 4-inch swivel casters",
  },
  {
    id: "wheeled-bins",
    name: "Wheeled Wastebins",
    tagline:
      "UV-stabilised wheeled bins with hinged lids — BIS certified for societies, schools, and municipalities.",
    image: "/assets/generated/product-wheeled-bin.dim_600x400.jpg",
    features: [
      "BIS certified, UV stabilised HDPE",
      "Capacities: 120L, 240L, 360L, 660L, 1100L",
      "Hinged lid with foot pedal option",
      "Two large wheeled rollers",
      "Compatible with standard bin lifters",
      "Colour options: Black, Green, Blue, Grey",
    ],
    specs:
      "Material: HDPE | Capacity: 120–1100L | BIS: IS 14739 | Wheels: 200mm diameter",
  },
  {
    id: "foot-bins",
    name: "Foot-Operated Bins",
    tagline:
      "Hygienic pedal-operated bins for hands-free waste disposal in clinics, offices, and public spaces.",
    image: "/assets/generated/product-foot-bin.dim_600x400.jpg",
    features: [
      "Stainless steel and plastic variants",
      "Foot pedal for hands-free operation",
      "Capacities: 5L, 10L, 20L, 30L",
      "Removable inner bucket for easy cleaning",
      "Odour-resistant tight seal lid",
      "Ideal for clinics, hospitals, offices",
    ],
    specs:
      "Material: SS 201 or ABS plastic | Sizes: 5–30L | Finish: Mirror polish or powder coated",
  },
];

type Product = (typeof products)[0];

function InquiryModal({
  open,
  onClose,
}: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const mutation = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(
      { name, email, message },
      {
        onSuccess: () => {
          toast.success("Inquiry submitted! We'll get back to you shortly.");
          onClose();
          setName("");
          setEmail("");
          setMessage("");
        },
        onError: () => toast.error("Something went wrong. Please try again."),
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" data-ocid="inquiry.dialog">
        <DialogHeader>
          <DialogTitle
            className="font-heading"
            style={{ color: "oklch(0.2 0.06 145)" }}
          >
            General Inquiry
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="inq-name">Your Name</Label>
            <Input
              id="inq-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1"
              data-ocid="inquiry.input"
            />
          </div>
          <div>
            <Label htmlFor="inq-email">Email Address</Label>
            <Input
              id="inq-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
              data-ocid="inquiry.input"
            />
          </div>
          <div>
            <Label htmlFor="inq-message">Message / Requirements</Label>
            <Textarea
              id="inq-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="mt-1"
              placeholder="Tell us what you're looking for..."
              data-ocid="inquiry.textarea"
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              data-ocid="inquiry.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="text-white font-semibold"
              style={{ background: "oklch(0.45 0.15 145)" }}
              data-ocid="inquiry.submit_button"
            >
              {mutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              Submit Inquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const goToContact = () => {
    setSelected(null);
    window.location.hash = "contact";
  };

  return (
    <section
      id="products"
      className="py-20 bg-white"
      data-ocid="products.section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.45 0.15 145)" }}
          >
            Our Store
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "oklch(0.14 0.04 145)" }}
          >
            Eco-Friendly Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sustainably sourced, certified products that help your organization
            manage waste responsibly. Browse our full range below.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, i) => (
            <button
              type="button"
              key={product.id}
              onClick={() => setSelected(product)}
              className="group rounded-2xl border overflow-hidden hover:-translate-y-1 transition-all duration-200 text-left"
              style={{
                background: "oklch(0.97 0.02 145)",
                borderColor: "oklch(0.87 0.08 145)",
              }}
              data-ocid={`products.item.${i + 1}`}
            >
              <div className="aspect-video overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3
                  className="font-heading font-bold text-lg mb-1.5"
                  style={{ color: "oklch(0.2 0.06 145)" }}
                >
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {product.tagline}
                </p>
                <span
                  className="mt-3 inline-block text-sm font-semibold"
                  style={{ color: "oklch(0.45 0.15 145)" }}
                >
                  View Products →
                </span>
              </div>
            </button>
          ))}
        </div>
        <div
          className="text-center p-8 rounded-2xl border"
          style={{
            background: "oklch(0.97 0.02 145)",
            borderColor: "oklch(0.87 0.08 145)",
          }}
        >
          <Package
            className="h-10 w-10 mx-auto mb-3"
            style={{ color: "oklch(0.45 0.15 145)" }}
          />
          <p
            className="font-heading font-semibold text-lg mb-2"
            style={{ color: "oklch(0.2 0.06 145)" }}
          >
            Can't find what you're looking for?
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            Raise a general inquiry and our team will assist you with custom
            requirements.
          </p>
          <Button
            type="button"
            onClick={() => setInquiryOpen(true)}
            className="text-white font-semibold"
            style={{ background: "oklch(0.45 0.15 145)" }}
            data-ocid="products.open_modal_button"
          >
            Raise General Inquiry
          </Button>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent
          className="sm:max-w-2xl max-h-[90vh] overflow-y-auto"
          data-ocid="products.dialog"
        >
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle
                  className="font-heading text-2xl"
                  style={{ color: "oklch(0.2 0.06 145)" }}
                >
                  {selected.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full rounded-xl object-cover max-h-56"
                />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selected.tagline}
                </p>
                <div>
                  <h4
                    className="font-bold text-sm uppercase tracking-wide mb-3"
                    style={{ color: "oklch(0.2 0.06 145)" }}
                  >
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selected.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle
                          className="h-4 w-4 flex-shrink-0 mt-0.5"
                          style={{ color: "oklch(0.45 0.15 145)" }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-lg p-4 border"
                  style={{
                    background: "oklch(0.97 0.02 145)",
                    borderColor: "oklch(0.87 0.08 145)",
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-1"
                    style={{ color: "oklch(0.36 0.12 145)" }}
                  >
                    Specifications
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.2 0.06 145)" }}
                  >
                    {selected.specs}
                  </p>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    className="flex-1 text-white font-semibold"
                    style={{ background: "oklch(0.45 0.15 145)" }}
                    onClick={goToContact}
                    data-ocid="products.primary_button"
                  >
                    Request a Quote
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSelected(null)}
                    style={{ borderColor: "oklch(0.87 0.08 145)" }}
                    data-ocid="products.close_button"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </section>
  );
}
