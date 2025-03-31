"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarDays, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type { Month } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "./button";
import { splineSans } from "../fonts";
import { cn } from "@/app/lib/utils";

const months = Array.from({ length: 12 }, (_, i) =>
  ptBR.localize.month(i as Month, { width: "abbreviated" })
);

export default function MonthYearPicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const handleMonthSelect = (selectedMonth: number) => {
    setSelectedDate(new Date(year, selectedMonth));
  };

  const updateYear = (offset: number) => {
    setSelectedDate((prevDate) => {
      const newYear = prevDate.getFullYear() + offset;
      return new Date(newYear, prevDate.getMonth());
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            splineSans.className,
            "font-normal text-[#565656]",
            "w-[7rem] h-[5rem] flex flex-col border border-[#e0dcdc] bg-white hover:border-[#7C3AED]"
          )}
        >
          <CalendarDays />
          {format(selectedDate, "MM/yyyy")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4">
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="icon" onClick={() => updateYear(-1)}>
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium">{year}</span>
          <Button variant="ghost" size="icon" onClick={() => updateYear(1)}>
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {months.map((monthName, idx) => {
            const isSelected = idx === month;
            return (
              <Button
                key={monthName}
                variant={isSelected ? "default" : "outline"}
                onClick={() => handleMonthSelect(idx)}
                className="text-xs"
              >
                {monthName}
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
