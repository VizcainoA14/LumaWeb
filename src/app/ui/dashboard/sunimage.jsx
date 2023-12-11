import { sql } from "@vercel/postgres";
import Image from "next/image"

export default async function SunImage(){

    const data = await sql`
    SELECT url FROM eit171
    WHERE date(date) = '2020-01-01';`;
    let link = data.rows[0].url;
    return(
        <div className="w-44 h-64">
            <div id="imageContainer" className="w-fit h-fit">
                <div
                    id="image" 
                    className="w-44 h-44 rounded-md"
                    style={{ backgroundImage: `url(${link})`}}></div>
            </div>
            <div id="nameContainer" className="w-full border-2 border-surface text-secondary flex p-2 rounded-md mt-2 place-center">
                <h4 className="" style={{fontFamily: 'clash'}}>Sun image</h4>
            </div>
        </div>
    )
}