"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Eyebrow } from "@/components/ui";

/**
 * Gallery4 — a draggable case-study carousel (shadcn Carousel + embla).
 *
 * Adapted for this JS project: types stripped, shadcn theme tokens
 * (primary / muted-foreground / primary-foreground) mapped to the site
 * palette (navy / brand / bodygrey / white), and the heading restyled to
 * match the site's section headings. Populated with PKS Infratech project
 * examples and Unsplash infrastructure imagery.
 */
const data = [
  {
    id: "fiber-rollout",
    title: "Pan-India Fiber-Optic Rollout",
    description:
      "Trenching and underground cable laying for a nationwide telecom fiber network — delivered on schedule with our own HDD fleet and experienced operators.",
    href: "/services/heavy-machinery",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "hdd-pipeline",
    title: "HDD Pipeline Installation",
    description:
      "Horizontal Directional Drilling for gas and utility pipelines, installing underground infrastructure without disruptive open trenching.",
    href: "/services/heavy-machinery",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "highway-earthwork",
    title: "Highway & Civil Earthwork",
    description:
      "Site preparation, grading, and civil earthwork for road and interchange projects, backed by a well-maintained JCB and excavator fleet.",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "telecom-towers",
    title: "Telecom Tower Infrastructure",
    description:
      "Foundation and civil works for telecom tower deployments, mobilizing resources across multiple states for large-scale rollouts.",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "energy-siteworks",
    title: "Renewable Energy Site Works",
    description:
      "Ground preparation and execution support for energy-sector infrastructure, combining advisory rigor with dependable on-ground delivery.",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1080&q=80",
  },
];

const Gallery4 = ({
  eyebrow = "Selected Work",
  title = "Projects We've Delivered",
  description = "From telecom fiber rollouts to pipeline installation and civil earthwork, PKS Infratech pairs advisory rigor with on-ground execution across India.",
  items = data,
}) => {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <div className="flex flex-col gap-4">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-xl text-bodygrey">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full disabled:opacity-40"
              aria-label="Previous project"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full disabled:opacity-40"
              aria-label="Next project"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-navy via-navy/50 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-white/80 md:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm font-semibold tracking-wide">
                        Read more
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-brand" : "bg-brand/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
