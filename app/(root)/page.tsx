import { CarCarousel } from "@/components/shared/CarCarousel";
import { CarOverview } from "@/components/shared/CarOverView";
import { EventCalculator } from "@/components/shared/EventCalculator";
import { carImages } from "@/constants";
export default function Home() {
  return (
    <main className="flex flex-col gap-15">
      <CarCarousel images={carImages} />
      <CarOverview />
      <EventCalculator />
    </main>
  );
}
