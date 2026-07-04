import Hero from "@/components/Hero";
import IntroStrip from "@/components/IntroStrip";
import ServiceCards from "@/components/ServiceCards";
import ImageBand from "@/components/ImageBand";
import WhyChoose from "@/components/WhyChoose";
import { Gallery4 } from "@/components/ui/gallery4";
import ClientLogos from "@/components/ClientLogos";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <ServiceCards />
      <ImageBand />
      <WhyChoose />
      <Gallery4 />
      <ClientLogos bg="bg-surface" />
      <CTABand />
    </>
  );
}
