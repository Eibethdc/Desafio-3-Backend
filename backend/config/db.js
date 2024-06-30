import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config()
const { Pool } = pg;

const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    allowExitOnIdle: true
}

const pool = new Pool(config);

export default pool;