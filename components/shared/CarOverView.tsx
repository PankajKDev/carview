import { Info } from "lucide-react";

interface OverItemProps {
  label: string;
  value: string;
  showInfo?: boolean;
}

function OverviewItem({ label, value, showInfo = false }: OverItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-semibold text-foreground flex items-center gap-1.5">
        {value}
        {showInfo && <Info className="h-4 w-4 text-primary cursor-pointer" />}
      </span>
    </div>
  );
}

export function CarOverview() {
  return (
    <section className="w-full flex justify-center mt-20">
      <h2 className="text-xl font-bold text-black mb-4">Car Overview</h2>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-3 gap-6 p-5 border-b border-border">
          <OverviewItem
            label="Make Year"
            value="2016 - 2024 (Chiron Model Run)"
          />
          <OverviewItem label="Registration Year" value="2020 (Illustrative)" />
          <OverviewItem label="Fuel Type" value="Petrol (W16 Quad-Turbo)" />
        </div>

        <div className="grid grid-cols-3 gap-6 p-5 border-b border-border">
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
        </div>

        <div className="grid grid-cols-3 gap-6 p-5 border-b border-border">
          <OverviewItem
            label="Insurance Validity"
            value="Comprehensive (Till 12/2026, Illustrative)"
          />
          <OverviewItem label="Insurance Type" value="Zero Depreciation" />
          <OverviewItem label="RTO" value="Monaco (MC) / Private Collection" />
        </div>

        <div className="p-5">
          <OverviewItem
            label="Car Location"
            value="Confidential Hypercar Storage Facility, Europe (Illustrative)"
          />
        </div>
      </div>
    </section>
  );
}
