import { db } from "@vercel/postgres";
import { NextResponse} from "next/server";

export async function GET(request) {
  const client = await db.connect();
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')
  let pictures171;
  let pictures195;
  let pictures284;
  let pictures304;
  let pictureshmiigr;
  let pictureshmimag;

  try {
    pictures171 = await client.sql`
        SELECT Url 
        FROM eit171
        WHERE DATE(Date) = ${date}
        GROUP BY Url
        LIMIT 1
    `;

    pictures195 = await client.sql`
        SELECT Url 
        FROM eit195
        WHERE DATE(Date) = ${date}
        GROUP BY Url
        LIMIT 1
    `;

    pictures284 = await client.sql`
        SELECT Url 
        FROM eit284
        WHERE DATE(Date) = ${date}
        GROUP BY Url
        LIMIT 1
    `;

    pictures304 = await client.sql`
        SELECT Url 
        FROM eit304
        WHERE DATE(Date) = ${date}
        GROUP BY Url
        LIMIT 1
    `;

    pictureshmiigr = await client.sql`
        SELECT Url 
        FROM hmiigr
        WHERE DATE(Date) = ${date}
        GROUP BY Url
        LIMIT 1
    `;

    pictureshmimag = await client.sql`
        SELECT Url 
        FROM hmimag
        WHERE DATE(Date) = ${date}
        GROUP BY Url
        LIMIT 1
    `;

  } catch (error) {
    return NextResponse.json({error});
  }

  return NextResponse.json({pictures171, pictures195, pictures284, pictures304, pictureshmiigr, pictureshmimag})
}
