import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
import pg from 'pg';

let db: pg.Pool | undefined;

if (!db) {
    db = new pg.Pool({
        connectionString: process.env.DATABASE_URL
    })
}

export default db;