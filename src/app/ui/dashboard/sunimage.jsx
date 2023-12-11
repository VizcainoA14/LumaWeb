import { sql } from "@vercel/postgres";
import Image from "next/image"

export default async function SunImage(props){
    let petitions = {
        'eit171': sql`SELECT url FROM eit171 WHERE date(date) = '2019-01-01'`,
        'eit195': sql`SELECT url FROM eit195 WHERE date(date) = '2019-01-01'`,
        'eit284': sql`SELECT url FROM eit284 WHERE date(date) = '2019-01-01'`,
        'eit304': sql`SELECT url FROM eit304 WHERE date(date) = '2019-01-01'`,
        'hmiigr': sql`SELECT url FROM hmiigr WHERE date(date) = '2019-01-01'`,
        'hmimag': sql`SELECT url FROM hmimag WHERE date(date) = '2019-01-01'`,
    };

    // Asegúrate de que props.table es una clave válida en petitions
    if (!petitions.hasOwnProperty(props.table)) {
        throw new Error('Invalid table name');
    }

    const data = await petitions[props.table];
    let link = data.rows[0].url;
    console.log(link);
    return(
        <div className="w-44 h-64">
            <div id="imageContainer" className="w-fit h-fit">
                <Image
                    src={link}
                    alt="Sun image"
                    width={176}
                    height={176}
                    className="w-44 h-44 rounded-md"
                />
            </div>
            <div id="nameContainer" className="w-full border-2 border-surface text-secondary flex p-2 rounded-md mt-2 place-center">
                <h4 className="" style={{fontFamily: 'clash'}}>{props.table.toUpperCase()}</h4>
            </div>
        </div>
    )
}