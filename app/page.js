import HomeCinematic from "@/components/HomeCinematic";
import FloatSection from "@/components/FloatSection";
import CinematicHero from "@/components/CinematicHero";
import IntroStrip from "@/components/IntroStrip";
import ServiceCards from "@/components/ServiceCards";
import ImageBand from "@/components/ImageBand";
import WhyChoose from "@/components/WhyChoose";
import { Gallery4 } from "@/components/ui/gallery4";
import ClientLogos from "@/components/ClientLogos";
import MarqueeBand from "@/components/MarqueeBand";
import CTABand from "@/components/CTABand";

/*
 * Home — a single cinematic scroll experience. A fixed 4K render of a tower
 * (blueprint → exploded structure → finished building, 208 frames) plays
 * behind the whole page, driven by scroll position, while every section
 * floats above it on frosted glass panels with soft parallax. Each panel's
 * `depth` differs slightly so the layers drift at different speeds.
 */
export default function Home() {
  return (
    <HomeCinematic>
      <CinematicHero />
      <FloatSection variant="glass" depth={64}>
        <IntroStrip />
      </FloatSection>
      <FloatSection variant="glass" depth={38}>
        <ServiceCards />
      </FloatSection>
      <FloatSection variant="media" depth={56}>
        <ImageBand />
      </FloatSection>
      <FloatSection variant="glass" depth={34}>
        <WhyChoose />
      </FloatSection>
      <FloatSection variant="glass" depth={50}>
        <Gallery4 />
      </FloatSection>
      <FloatSection variant="glass" depth={30}>
        <ClientLogos bg="bg-surface" />
      </FloatSection>
      <FloatSection depth={72}>
        <MarqueeBand
          rows={[
            "ADVISORY • FUNDING • EXECUTION • ",
            "TELECOM • ENERGY • UTILITY • ",
          ]}
          textClassName="text-navy/15"
        />
      </FloatSection>
      <FloatSection variant="navy" depth={44}>
        <CTABand />
      </FloatSection>
    </HomeCinematic>
  );
}
