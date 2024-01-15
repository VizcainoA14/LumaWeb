import Image from "next/image";
export default function SunImage(props) {
  return (
    <div className="w-44 h-64">
      <div id="imageContainer" className="w-fit h-fit">
        {props.image == null
          ? <div className="w-44 h-44 bg-secondary-container dark:bg-secondary-container-dark" />
          : <Image
              src={props.image}
              alt="Sun image"
              width={256}
              height={256}
              className="w-44 h-44 rounded-md dark:border-2 border-surface-dark"
            />}
      </div>
      <div
        id="nameContainer"
        className="w-full border-2 border-surface dark:border-surface-dark text-secondary dark:text-secondary-dark flex p-2 rounded-md mt-2 place-center"
      >
        <h4 className="" style={{ fontFamily: "clash" }}>
          {props.table.toUpperCase()}
        </h4>
      </div>
    </div>
  );
}
