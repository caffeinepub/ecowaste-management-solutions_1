import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitQuotation } from "../hooks/useQueries";

const orgTypes = [
  "Hospital",
  "Society",
  "School",
  "Municipality",
  "Corporate",
  "Other",
];
const services = [
  "Waste Collection",
  "Deep Cleaning",
  "Medical Waste Disposal",
  "Eco Products Supply",
  "Waste Consulting",
  "Recycling Solutions",
  "Multiple Services",
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    orgType: "",
    service: "",
    email: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitQuotation();

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.orgType || !form.service) {
      toast.error("Please select organization type and service.");
      return;
    }
    mutation.mutate(form, {
      onSuccess: () => {
        setSubmitted(true);
        toast.success(
          "Quotation request submitted! We'll reach out within 24 hours.",
        );
      },
      onError: () => toast.error("Submission failed. Please try again."),
    });
  };

  if (submitted) {
    return (
      <section
        id="contact"
        className="py-20 bg-white"
        data-ocid="quote.section"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto" data-ocid="quote.success_state">
            <CheckCircle
              className="h-16 w-16 mx-auto mb-4"
              style={{ color: "oklch(0.45 0.15 145)" }}
            />
            <h2
              className="font-heading text-2xl font-bold mb-3"
              style={{ color: "oklch(0.2 0.06 145)" }}
            >
              Thank You!
            </h2>
            <p className="text-muted-foreground mb-6">
              Your quotation request has been submitted. Our team will reach out
              to you within 24 hours with a customized proposal.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="text-white"
              style={{ background: "oklch(0.45 0.15 145)" }}
              data-ocid="quote.secondary_button"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white" data-ocid="quote.section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.45 0.15 145)" }}
            >
              Free Quote
            </span>
            <h2
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "oklch(0.14 0.04 145)" }}
            >
              Request Your Customized Quote
            </h2>
            <p className="text-muted-foreground">
              Tell us about your organization's waste management needs and we'll
              prepare a tailored proposal for you.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border p-8 space-y-5"
            style={{
              background: "oklch(0.97 0.02 145)",
              borderColor: "oklch(0.87 0.08 145)",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="q-name">Your Name *</Label>
                <Input
                  id="q-name"
                  value={form.name}
                  onChange={set("name")}
                  required
                  className="mt-1 bg-white"
                  placeholder="Rajesh Kumar"
                  data-ocid="quote.input"
                />
              </div>
              <div>
                <Label htmlFor="q-org">Organization *</Label>
                <Input
                  id="q-org"
                  value={form.organization}
                  onChange={set("organization")}
                  required
                  className="mt-1 bg-white"
                  placeholder="City Hospital"
                  data-ocid="quote.input"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label>Organization Type *</Label>
                <Select
                  value={form.orgType}
                  onValueChange={(v) => setForm((p) => ({ ...p, orgType: v }))}
                >
                  <SelectTrigger
                    className="mt-1 bg-white"
                    data-ocid="quote.select"
                  >
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {orgTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Service Required *</Label>
                <Select
                  value={form.service}
                  onValueChange={(v) => setForm((p) => ({ ...p, service: v }))}
                >
                  <SelectTrigger
                    className="mt-1 bg-white"
                    data-ocid="quote.select"
                  >
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="q-email">Email Address *</Label>
              <Input
                id="q-email"
                type="email"
                value={form.email}
                onChange={set("email")}
                required
                className="mt-1 bg-white"
                placeholder="you@organization.com"
                data-ocid="quote.input"
              />
            </div>
            <div>
              <Label htmlFor="q-desc">Requirements &amp; Description</Label>
              <Textarea
                id="q-desc"
                value={form.description}
                onChange={set("description")}
                rows={5}
                className="mt-1 bg-white resize-none"
                placeholder="Describe your waste management requirements, current challenges, and expected volume..."
                data-ocid="quote.textarea"
              />
            </div>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full text-white font-semibold text-base h-12"
              style={{ background: "oklch(0.45 0.15 145)" }}
              data-ocid="quote.submit_button"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />{" "}
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
