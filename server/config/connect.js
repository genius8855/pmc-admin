// db/config.js
const mysql = require('mysql2/promise');
const dbPassword = process.env.SQL_DB_PASSWORD;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: dbPassword,
  database: "pmc_admin_dashboard",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL connected");
    connection.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
  }
})();

module.exports = pool;
