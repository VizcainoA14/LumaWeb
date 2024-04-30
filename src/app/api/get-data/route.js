import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextResponse } from 'next/server';

export async function GET(request) {
  // Abre la base de datos SQLite
  const db = await open({
    filename: 'src//app//api//DATA.sqlite',
    driver: sqlite3.Database
  });

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
    // Realiza las consultas SQL utilizando SQLite
    data171 = await db.all(`
      SELECT * 
      FROM eit171
      WHERE SUBSTR(Date, 1, 4) = ? AND SUBSTR(Date, 6, 2) = ?
    `, [year, month]);

    data195 = await db.all(`
      SELECT * 
      FROM eit195
      WHERE SUBSTR(Date, 1, 4) = ? AND SUBSTR(Date, 6, 2) = ?
    `, [year, month]);

    data284 = await db.all(`
      SELECT * 
      FROM eit284
      WHERE SUBSTR(Date, 1, 4) = ? AND SUBSTR(Date, 6, 2) = ?
    `, [year, month]);

    data304 = await db.all(`
      SELECT * 
      FROM eit304
      WHERE SUBSTR(Date, 1, 4) = ? AND SUBSTR(Date, 6, 2) = ?
    `, [year, month]);

    datahmiigr = await db.all(`
      SELECT * 
      FROM hmiigr
      WHERE SUBSTR(Date, 1, 4) = ? AND SUBSTR(Date, 6, 2) = ?
    `, [year, month]);

    datahmimag = await db.all(`
      SELECT * 
      FROM hmimag
      WHERE SUBSTR(Date, 1, 4) = ? AND SUBSTR(Date, 6, 2) = ?
    `, [year, month]);
  } catch (error) {
    // Manejar errores
    return NextResponse.json({ error });
  } finally {
    // Cierra la conexión con la base de datos al finalizar
    await db.close();
  }

  // Devuelve los resultados
  return NextResponse.json({
    data171: {
      rows: data171.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
    data195: {
      rows: data195.map(item => ({
      date: item.date,
      url: item.url,
      entropy: item.entropy,
      mean_intensity: item.mean_intensity,
      standard_deviation: item.standard_deviation,
      skewness: item.skewness,
      kurtosis: item.kurtosis,
      relative_smoothness: item.relative_smoothness,
      uniformity: item.uniformity,
      fractal_dimension: item.fractal_dimension,
      taruma_contrast: item.taruma_contrast,
      taruma_directionality: item.taruma_directionality,
      taruma_coarseness: item.taruma_coarseness,
      taruma_linelikeness: item.taruma_linelikeness,
      taruma_regularity: item.taruma_regularity,
      taruma_roughness: item.taruma_roughness,
      }))
    },
    data284: {
      rows: data284.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
    data304: {
      rows: data304.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
    datahmiigr: {
      rows: datahmiigr.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
    datahmimag: {
      rows: datahmimag.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
  });
}




