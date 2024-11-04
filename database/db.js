import pgp from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const PDB = pgp()

const db = PDB({
    host : process.env.HOST,
    port :  process.env.PORT,
    database :  process.env.DATABASE,
    user :  process.env.USER,
    password :  String(process.env.PASSWORD)
})

export default db;

