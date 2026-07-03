import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ImageBand from "@/components/ImageBand";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <ImageBand />
      </main>
    </>
  );
}
