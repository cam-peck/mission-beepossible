import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
import pg from 'pg';

let db: pg.Pool | undefined;

if (!db) {
    db = new pg.Pool({
        connectionString: process.env.DATABASE_URL
    })
}

async function test() {
    if (db === undefined) return;
    const sql = `
      INSERT INTO "test" ("test")
      VALUES ($1)
      RETURNING *
      `;
    const params = ["Jason Derulo"];
    const result = await db.query(sql, params);
    console.log(result);
}
    

test();