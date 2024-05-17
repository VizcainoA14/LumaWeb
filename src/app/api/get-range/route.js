import { NextResponse } from "next/server";
import data from "../get-data/pr.js"

const prisma = data;

export async function GET(request) {
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
    data171 = await prisma.$queryRaw`SELECT * FROM eit171 WHERE Date BETWEEN ${startDate} AND ${endDate}`;
    data195 = await prisma.$queryRaw`SELECT * FROM eit195 WHERE Date BETWEEN ${startDate} AND ${endDate}`;
    data284 = await prisma.$queryRaw`SELECT * FROM eit284 WHERE Date BETWEEN ${startDate} AND ${endDate}`;
    data304 = await prisma.$queryRaw`SELECT * FROM eit304 WHERE Date BETWEEN ${startDate} AND ${endDate}`;
    datahmiigr = await prisma.$queryRaw`SELECT * FROM hmiigr WHERE Date BETWEEN ${startDate} AND ${endDate}`;
    datahmimag = await prisma.$queryRaw`SELECT * FROM hmimag WHERE Date BETWEEN ${startDate} AND ${endDate}`;
  } catch (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    data171: {
      rows: data171,
    },
    data195: {
      rows: data195,
    },
    data284: {
      rows: data284,
    },
    data304: {
      rows: data304,
    },
    datahmiigr: {
      rows: datahmiigr,
    },
    datahmimag: {
      rows: datahmimag,
    },
  });
}
