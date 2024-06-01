import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { InfoCircledIcon } from "@radix-ui/react-icons";

// SunImage component
export default function SunImage(props) {;
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
    <div className={`${props.csun} bg-surface-container dark:bg-secondary-container-dark/40 max-w-36 w-36 h-fit md:w-52 xl:w-48 2xl:w-56 transition-all`}>
      {/* Image container */}
      <div id="imageContainer" className="w-full h-fit relative">
        {props.image == "" || props.image == undefined
          ? <div className="w-36 max-w-36 h-36 max-h-44 md:w-52 md:h-52 md:max-h-52 xl:w-48 xl:h-48 xl:max-h-48 2xl:w-56 2xl:h-56 2xl:max-h-56 relative animate-pulse bg-surface dark:bg-surface-dark transition-all" />
          : <>
              <Image
                  src={props.image}
                  alt="Sun image"
                  width={512}
                  height={512}
                  className="dark:border-secondary-container-dark/50 w-36 max-w-36 h-36 max-h-44 md:w-52 md:h-52 md:max-h-52 xl:w-48 xl:h-48 xl:max-h-48 2xl:w-56 2xl:h-56 2xl:max-h-56 dark:border-2 transition-all"
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
        className="w-full px-4 my-2 flex items-center justify-between text-on-surface dark:text-on-surface-dark"
      >
        <div className="flex items-center">
          <p style={{ fontFamily: "clash" }}>
            {props.table.toUpperCase()}
          </p> 
        </div>
        {/* Hover card for additional information */}
        <HoverCard className="cursor-pointer z-50">
          <HoverCardTrigger>
            <InfoCircledIcon className="w-5 h-5"/>
          </HoverCardTrigger>
          <HoverCardContent className='z-50'>
            {props.description}
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}