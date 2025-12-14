import { Info } from "lucide-react";

interface OverItemProps {
  label: string;
  value: string;
  showInfo?: boolean;
}

function OverviewItem({ label, value, showInfo = false }: OverItemProps) {
  return (
    <div className="flex flex-col gap-1 py-4 sm:py-0 min-w-0">
      <span className="text-xs sm:text-sm text-muted-foreground">{label}</span>

      <span className="font-semibold text-foreground flex items-center gap-1.5 text-sm sm:text-base wrap-break-word">
        {value}
        {showInfo && (
          <Info className="h-4 w-4 text-primary cursor-pointer shrink-0" />
        )}
      </span>
    </div>
  );
}

export function CarOverview() {
  return (
    <section className="w-full flex justify-center mt-12 sm:mt-20 px-4">
      <div className="w-full max-w-5xl">
        <h2 className="text-lg sm:text-xl font-bold text-black mb-4">
          Car Overview
        </h2>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {/* MOBILE: single column list | TABLET+: grid */}
          <div
            className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            divide-y sm:divide-y-0
            gap-x-6
            p-4 sm:p-5
          "
          >
            <OverviewItem
              label="Make Year"
              value="2016 - 2024 (Chiron Model Run)"
            />
            <OverviewItem
              label="Registration Year"
              value="2020 (Illustrative)"
            />
            <OverviewItem label="Fuel Type" value="Petrol (W16 Quad-Turbo)" />

            <OverviewItem
              label="Km driven"
              value="550 km (Illustrative, Low Mileage)"
            />
            <OverviewItem
              label="Transmission"
              value="7-speed DSG Automatic"
              showInfo
            />
            <OverviewItem label="No. of Owner" value="First (Illustrative)" />

            <OverviewItem
              label="Insurance Validity"
              value="Comprehensive (Till 12/2026, Illustrative)"
            />
            <OverviewItem label="Insurance Type" value="Zero Depreciation" />
            <OverviewItem
              label="RTO"
              value="Monaco (MC) / Private Collection"
            />

            <OverviewItem
              label="Car Location"
              value="Confidential Hypercar Storage Facility, Europe (Illustrative)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
