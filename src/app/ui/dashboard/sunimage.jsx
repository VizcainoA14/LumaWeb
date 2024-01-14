
import Image from "next/image"
export default function SunImage(props){

    let url

    if(props.table === 'eit171'){
        url = props.images?.pictures171?.rows[0].url
    } else if(props.table === 'eit195'){
        url = props.images?.pictures195?.rows[0].url
    } else if(props.table === 'eit284'){
        url = props.images?.pictures284?.rows[0].url
    } else if(props.table === 'eit304'){
        url = props.images?.pictures304?.rows[0].url
    } else if(props.table === 'hmiigr'){
        url = props.images?.pictureshmiigr?.rows[0].url
    } else if(props.table === 'hmimag'){
        url = props.images?.pictureshmimag?.rows[0].url
    }

    return(
        <div className="w-44 h-64">
            <div id="imageContainer" className="w-fit h-fit">
                <Image
                    src={url}
                    alt="Sun image"
                    width={256}
                    height={256}
                    className="w-44 h-44 rounded-md dark:border-2 border-surface-dark"
                />
            </div>
            <div id="nameContainer" className="w-full border-2 border-surface dark:border-surface-dark text-secondary dark:text-secondary-dark flex p-2 rounded-md mt-2 place-center">
                <h4 className="" style={{fontFamily: 'clash'}}>{props.table.toUpperCase()}</h4>
            </div>
        </div>
    )
}