import { db } from "@vercel/postgres";
import { NextResponse} from "next/server";

export async function GET(request) {
  const client = await db.connect();
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')
  let data171;
  let data195;
  let data284;
  let data304;
  let datahmiigr;
  let datahmimag;

  try {
    data171 = await client.sql`
        SELECT * 
        FROM eit171
        WHERE DATE(Date) = ${date}
    `;

    data195 = await client.sql`
        SELECT * 
        FROM eit195
        WHERE DATE(Date) = ${date}
    `;

    data284 = await client.sql`
        SELECT * 
        FROM eit284
        WHERE DATE(Date) = ${date}
    `;

    data304 = await client.sql`
        SELECT * 
        FROM eit304
        WHERE DATE(Date) = ${date}
    `;

    datahmiigr = await client.sql`
        SELECT * 
        FROM hmiigr
        WHERE DATE(Date) = ${date}
    `;

    datahmimag = await client.sql`
        SELECT * 
        FROM hmimag
        WHERE DATE(Date) = ${date}
    `;

  } catch (error) {
    return NextResponse.json({error});
  }

  return NextResponse.json({data171, data195, data284, data304, datahmiigr, datahmimag})
}

