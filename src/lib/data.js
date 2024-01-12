import { sql } from "@vercel/postgres";

export default async function fetchPictures(date) {
  let datePetition = date;

  try {
    const pictures171 = sql`
            SELECT Url 
            FROM eit171
            WHERE Date(Date) = ${datePetition}
            ORDER BY Date Limit 1;
    `;
    const pictures195 = sql`
            SELECT Url 
            FROM eit195
            WHERE Date(Date) = ${datePetition}
            ORDER BY Date Limit 1; 
    `;

    const pictures284 = sql`
            SELECT Url
            FROM eit284
            WHERE Date(Date) = ${datePetition}
            ORDER BY Date Limit 1;
    `;

    const pictures304 = sql`
            SELECT Url
            FROM eit304
            WHERE Date(Date) = ${datePetition}
            ORDER BY Date Limit 1;
    `;

    const pictureshmiigr = sql`
            SELECT Url
            FROM hmiigr
            WHERE Date(Date) = ${datePetition}
            ORDER BY Date Limit 1;
    `;

    const pictureshmimag = sql`
            SELECT Url
            FROM hmimag
            WHERE Date(Date) = ${datePetition}
            ORDER BY Date Limit 1;
    `;

    const data = await Promise.all([
      pictures171,
      pictures195,
      pictures284,
      pictures304,
      pictureshmiigr,
      pictureshmimag
    ]);

    const pictures = {
      pictures171: data[0].rows[0]?.url,
      pictures195: data[1].rows[0]?.url,
      pictures284: data[2].rows[0]?.url,
      pictures304: data[3].rows[0]?.url,
      pictureshmiigr: data[4].rows[0]?.url,
      pictureshmimag: data[5].rows[0]?.url
    };

    return pictures;
  } catch (error) {
    console.log("Database error", error);
    throw new Error("Failed to fetch pictures ");
  }
}
