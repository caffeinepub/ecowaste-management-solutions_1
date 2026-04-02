import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./components/About";
import AddOnWhyUs from "./components/AddOnWhyUs";
import Brochures from "./components/Brochures";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IndiaMap from "./components/IndiaMap";
import Navbar from "./components/Navbar";
import OrgStrip from "./components/OrgStrip";
import Packages from "./components/Packages";
import Products from "./components/Products";
import QuoteBlock from "./components/QuoteBlock";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WasteReality from "./components/WasteReality";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-body">
        <Navbar />
        <main>
          <Hero />
          <QuoteBlock
            quote="Tension-free waste management — that is not a tagline for us. It is a promise we will deliver, every single day."
            author="Ecowaste Management Solutions"
          />
          <About />
          <Services />
          <Packages />
          <AddOnWhyUs />
          <Testimonial />
          <Products />
          <OrgStrip />
          <IndiaMap />
          <QuoteBlock
            quote="Every piece of waste managed is a promise kept to the planet."
            author="EcoWaste Mission"
            dark
          />
          <WasteReality />
          <Brochures />
          <QuoteForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
      <Toaster richColors />
    </QueryClientProvider>
  );
}
