import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const client = await db.connect();
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
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
    WHERE SUBSTRING(Date, 1, 4) = ${year} AND SUBSTRING(Date, 6, 2) = ${month}
    `;

    data195 = await client.sql`
    SELECT * 
    FROM eit195
    WHERE SUBSTRING(Date, 1, 4) = ${year} AND SUBSTRING(Date, 6, 2) = ${month}
    `;

    data284 = await client.sql`
    SELECT * 
    FROM eit284
    WHERE SUBSTRING(Date, 1, 4) = ${year} AND SUBSTRING(Date, 6, 2) = ${month}
    `;

    data304 = await client.sql`
    SELECT * 
    FROM eit304
    WHERE SUBSTRING(Date, 1, 4) = ${year} AND SUBSTRING(Date, 6, 2) = ${month}
    `;

    datahmiigr = await client.sql`
    SELECT * 
    FROM hmiigr
    WHERE SUBSTRING(Date, 1, 4) = ${year} AND SUBSTRING(Date, 6, 2) = ${month}
    `;

    datahmimag = await client.sql`
    SELECT * 
    FROM hmimag
    WHERE SUBSTRING(Date, 1, 4) = ${year} AND SUBSTRING(Date, 6, 2) = ${month}
    `;
  } catch (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json({
    data171,
    data195,
    data284,
    data304,
    datahmiigr,
    datahmimag
  });
}
