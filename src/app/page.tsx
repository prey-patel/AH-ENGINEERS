import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Quality from "@/components/sections/Quality";
import ProductCarousel from "@/components/sections/ProductCarousel";
import Testimonials from "@/components/sections/Testimonials";
import ContactPreview from "@/components/sections/ContactPreview";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Informational Header */}
      <TopBar />

      {/* Navigation Layer */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Stunning Entry Hero Banner */}
        <Hero />

        {/* Credentials / Counters Ribbons */}
        <Highlights />

        {/* Dynamic Interactive Products Grid */}
        <Products />

        {/* Industries Served Layout */}
        <Industries />

        {/* Interactive Showcase loop */}
        <ProductCarousel />

        {/* Values and Strategic Features */}
        <WhyChooseUs />

        {/* Interactive Step Timeline */}
        <Process />

        {/* Quality Controls */}
        <Quality />

        {/* Procurement Testimonials */}
        <Testimonials />

        {/* Enquiry form and Address details */}
        <ContactPreview />
      </main>

      {/* Footer System */}
      <Footer />
    </div>
  );
}
