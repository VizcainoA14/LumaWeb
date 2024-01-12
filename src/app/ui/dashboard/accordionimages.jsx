"use client"
import SunImage from "@/app/ui/dashboard/sunimage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import DateContext from "@/context/DateContext";
import { useState, useEffect, useContext } from "react";

export function AccordionImages(props) {

  const { date } = useContext(DateContext)

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-0">
          <span className="text-secondary/60 dark:text-secondary-dark/60" style={{ fontFamily: "clash" }}>
            {props.title}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full flex gap-2 justify-between pt-4 border-t-2 border-outline overflow-x-scroll md:overflow-hidden">
            <div id="eitContainer" className="flex gap-4">
              <SunImage table='eit171' date='2020-01-01'/>
              <SunImage table='eit195'/>
              <SunImage table='eit284'/>
              <SunImage table='eit304'/>
            </div>
            <div id="hmiContainer" className="flex gap-4">
              <SunImage table='hmiigr'/>
              <SunImage table='hmimag'/>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
