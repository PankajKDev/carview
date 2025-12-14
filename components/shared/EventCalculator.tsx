"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export function EventCalculator() {
  const [invites, setInvites] = useState(100);
  const [duration, setDuration] = useState(4);
  const [ticketPrice, setTicketPrice] = useState(500);

  // Calculate total revenue
  const totalRevenue = invites * ticketPrice;
  // Calculate cost based on duration

  const eventCost = duration * 5000; // 5000 per hour base cost
  // Net profit
  const netProfit = totalRevenue - eventCost;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-foreground">
          Event Calculator
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <X className="h-5 w-5 text-muted-foreground" />
        </Button>
      </CardHeader>

      <CardContent className="space-y-8 pt-4">
        <h2 className="text-xl font-bold text-foreground">
          Event Cost Estimator
        </h2>

        {/* Number of Invites */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">
              Number of Invites
            </span>
            <span className="text-lg font-bold text-[#6B21A8]">
              {invites} People
            </span>
          </div>
          <Slider
            value={[invites]}
            onValueChange={(value) => setInvites(value[0])}
            min={10}
            max={500}
            step={10}
            className="**:[[role=slider]]:bg-[#6B21A8] **:[[role=slider]]:border-[#6B21A8] [&_.bg-primary]:bg-[#6B21A8]"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>10</span>
            <span>500</span>
          </div>
        </div>

        {/* Duration of Event */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">
              Duration of Event
            </span>
            <span className="text-lg font-bold text-[#6B21A8]">
              {duration} Hours
            </span>
          </div>
          <Slider
            value={[duration]}
            onValueChange={(value) => setDuration(value[0])}
            min={1}
            max={12}
            step={1}
            className="**:[[role=slider]]:bg-[#6B21A8] **:[[role=slider]]:border-[#6B21A8] [&_.bg-primary]:bg-[#6B21A8]"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 Hour</span>
            <span>12 Hours</span>
          </div>
        </div>

        {/* Ticket price*/}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">
              Price of Ticket
            </span>
            <span className="text-lg font-bold text-[#6B21A8]">
              {formatCurrency(ticketPrice)}
            </span>
          </div>
          <Slider
            value={[ticketPrice]}
            onValueChange={(value) => setTicketPrice(value[0])}
            min={100}
            max={5000}
            step={100}
            className="**:[[role=slider]]:bg-[#6B21A8] **:[[role=slider]]:border-[#6B21A8] [&_.bg-primary]:bg-[#6B21A8]"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>₹100</span>
            <span>₹5,000</span>
          </div>
        </div>

        {/* Total */}
        <div className="border-t pt-6 space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#6B21A8]">
              {formatCurrency(totalRevenue)}
            </span>
            <span className="text-muted-foreground">total revenue</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>📊</span>
            <span>
              Event Cost: {formatCurrency(eventCost)} | Net:{" "}
              {formatCurrency(netProfit)}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Button className="w-full bg-black hover:bg-white border border-black text-white hover:text-black py-6 text-base font-medium">
          Book Your Event
        </Button>
      </CardContent>
    </Card>
  );
}
