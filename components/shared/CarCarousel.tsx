"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThreeDView from "../ui/ThreeDView";

interface CarCarouselProps {
  images: string[];
}

export function CarCarousel({ images }: CarCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show360View, setShow360View] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollThumbnailIntoView(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollThumbnailIntoView(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollThumbnailIntoView(newIndex);
  };

  const scrollThumbnailIntoView = (index: number) => {
    if (thumbnailContainerRef.current) {
      const thumbnails = thumbnailContainerRef.current.children;
      if (thumbnails[index]) {
        (thumbnails[index] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailContainerRef.current) {
      const scrollAmount = 200;
      thumbnailContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Image Carousel */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        {/* Sold Out Badge */}

        {/* View in 360 Button */}
        <div className="absolute bottom-4 left-1/2  z-10">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white/90 hover:bg-white text-gray-800 gap-2"
            onClick={() => setShow360View(true)}
          >
            <RotateCcw className="h-4 w-4" />
            View in 360°
          </Button>
        </div>

        <div className="aspect-16/10 relative">
          <Image
            width={1080}
            height={1350}
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Car image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded">
            {currentIndex + 1}/{images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Carousel */}
      <div className="relative mt-3">
        <button
          onClick={() => scrollThumbnails("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md transition-colors"
          aria-label="Scroll thumbnails left"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        <button
          onClick={() => scrollThumbnails("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md transition-colors"
          aria-label="Scroll thumbnails right"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
        <div
          ref={thumbnailContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-8 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "shrink-0 w-24 h-18 rounded-lg overflow-hidden border-2 transition-all",
                currentIndex === index
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-transparent hover:border-gray-300"
              )}
            >
              <Image
                src={image || "/placeholder.svg"}
                width={1080}
                height={1350}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* 360 View Overlay */}
      {show360View && <ThreeDView updateView={setShow360View} />}
    </div>
  );
}
