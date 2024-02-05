import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { InfoCircledIcon } from "@radix-ui/react-icons";

// SunImage component
export default function SunImage(props) {

  console.log(props.image)
  // Determine the color & description of the dot based on the table prop
  let dotColor;

  switch (props.table) {
    case "eit171":
      dotColor = "blue";
      break;
    case "eit195":
      dotColor = "green";
      break;
    case "eit284":
      dotColor = "yellow";
      break;
    case "eit304":
      dotColor = "red";
      break;
    case "hmiigr":
      dotColor = "orange";
      break;
    case "hmimag":
      dotColor = "gray";
      break;
    default:
      dotColor = "slate";
      break;
  }

  return (
    <div className="relative w-44 h-64 2xl:w-fit 2xl:h-fit">
      {/* Image container */}
      <div id="imageContainer" className="w-fit h-fit">
        {props.image == null
          ? <div className="w-44 h-44 2xl:w-64 2xl:h-64 relative animate-pulse rounded-lg bg-secondary-container dark:bg-secondary-container-dark" />
          : <>
          <Image
              src={props.image}
              alt="Sun image"
              width={256}
              height={256}
              className="w-44 h-44 2xl:w-64 2xl:h-64 rounded-md dark:border-2 border-surface-dark"
            />
          <div
          id="idDot"
          className={`w-3 h-3 mx-1 absolute top-2 left-1 grid place-content-center rounded-full bg-${dotColor}-500`}
          >
          <div className={`w-3 h-3 rounded-full animate-ping bg-${dotColor}-500`} />
          </div> 
        </>
        }
      </div>
      {/* Name container */}
      <div
        id="nameContainer"
        className="w-full p-2 mt-2 flex items-center justify-between border-2 border-surface dark:border-surface-dark text-secondary dark:text-secondary-dark rounded-md"
      >
        <div className="flex items-center">
          <h4 className="" style={{ fontFamily: "clash" }}>
            {props.table.toUpperCase()}
          </h4> 
        </div>
        {/* Hover card for additional information */}
        <HoverCard className="cursor-pointer">
          <HoverCardTrigger>
            <InfoCircledIcon className="w-5 h-5"/>
          </HoverCardTrigger>
          <HoverCardContent>
            {props.description}
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}