import { sql } from "@vercel/postgres";

export default async function fetchPictures171(date) {
  let datePetition = date;

  try {
    const { rows, fields } = await sql`
            SELECT Url 
            FROM eit171
            WHERE Date(Date) = ${datePetition}
            ORDER BY Date Limit 1;
        `;

    return rows;
  } catch (error) {
    console.log("Database error", error);
    throw new Error("Failed to fetch pictures ");
  }
}
