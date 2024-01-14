import { sql } from "@vercel/postgres";

export async function getPictures() {
  const {rows, fields} = await sql`
        SELECT Url 
        FROM eit171
        WHERE DATE(Date) = '2011-01-01'
        GROUP BY Url
        LIMIT 1
        `;
  return rows;
}
