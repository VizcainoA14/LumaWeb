import { db } from "@vercel/postgres";
import { NextResponse} from "next/server";

export async function GET(request) {
  const client = await db.connect();
  const { searchParams } = new URL(request.url)
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')
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
        WHERE DATE(Date) BETWEEN ${startDate} AND ${endDate}
    `;

    data195 = await client.sql`
        SELECT * 
        FROM eit195
        WHERE DATE(Date) BETWEEN ${startDate} AND ${endDate}
    `;

    data284 = await client.sql`
        SELECT * 
        FROM eit284
        WHERE DATE(Date) BETWEEN ${startDate} AND ${endDate}
    `;

    data304 = await client.sql`
        SELECT * 
        FROM eit304
        WHERE DATE(Date) BETWEEN ${startDate} AND ${endDate}
    `;

    datahmiigr = await client.sql`
        SELECT * 
        FROM hmiigr
        WHERE DATE(Date) BETWEEN ${startDate} AND ${endDate}
    `;

    datahmimag = await client.sql`
        SELECT * 
        FROM hmimag
        WHERE DATE(Date) BETWEEN ${startDate} AND ${endDate}
    `;

  } catch (error) {
    return NextResponse.json({error});
  }

  return NextResponse.json({data171, data195, data284, data304, datahmiigr, datahmimag})
}
