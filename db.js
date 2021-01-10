import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "augini",
  database: "todo_database",
  host: "localhost",
  port: 5432,
});

export default pool;
