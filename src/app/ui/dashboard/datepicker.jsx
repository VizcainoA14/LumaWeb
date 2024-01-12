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
          style={{fontFamily: 'clash'}}
          className={cn(
            "w-fit justify-centert text-left font-normal bg-tertiary-container text-on-tertiary-container rounded-full dark:bg-tertiary-container-dark dark:text-on-tertiary-container-dark",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-on-tertiary-container dark:text-on-tertiary-container-dark" />
          {date ? format(date, "PPP") : <span className="text-on-tertiary-container dark:text-on-tertiary-container-dark" style={{fontFamily: 'clash'}}>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-surface text-on-surface dark:bg-surface-dark dark:text-on-surface-dark mt-1 mx-4 md:mx-10">
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

