import { NextResponse } from "next/server";
import data from "./pr.js"

const db = data;


export async function GET(request) {
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
    // Realiza las consultas SQL utilizando Prisma
    data171 = await db.eit171.findMany({
      where: {
        date: {
          startsWith: `${year}-${month}`,
        },
      },
    });

    data195 = await db.eit195.findMany({
      where: {
        date: {
          startsWith: `${year}-${month}`,
        },
      },
    });

    data284 = await db.eit284.findMany({
      where: {
        date: {
          startsWith: `${year}-${month}`,
        },
      },
    });

    data304 = await db.eit304.findMany({
      where: {
        date: {
          startsWith: `${year}-${month}`,
        },
      },
    });

    datahmiigr = await db.hmiigr.findMany({
      where: {
        date: {
          startsWith: `${year}-${month}`,
        },
      },
    });

    datahmimag = await db.hmimag.findMany({
      where: {
        date: {
          startsWith: `${year}-${month}`,
        },
      },
    });
  } catch (error) {
    // Manejar errores
    return NextResponse.json({ error });
  } finally {
    // Cierra la conexión con la base de datos al finalizar
    await db.$disconnect();
  }

  // Devuelve los resultados
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