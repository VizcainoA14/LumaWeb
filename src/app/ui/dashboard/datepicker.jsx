"use client"

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DateContext from "@/context/DateContext";

export function DatePicker({onDateChange}) {
  const {date, setDate} = React.useContext(DateContext);
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-[130px] justify-centert text-left font-normal bg-on-background rounded-full dark:bg-primary-dark",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-background dark:text-on-primary-dark" />
          {date ? format(date, "PPP") : <span className="text-background dark:text-background-dark" style={{fontFamily: 'clash'}}>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-secondary text-on-secondary dark:bg-secondary-dark dark:text-on-secondary-dark mr-10">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

