const initSqlJs = require("sql.js");
const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../../data");
const dbPath = path.join(dataDir, "inquiries.db");

// Ensure data directory exists
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

let db;

async function initDB() {
  const SQL = await initSqlJs();

  // Load existing DB or create new
  if (fs.existsSync(dbPath)) {
    const fileBuffer = fs.readFileSync(dbPath);
    db = new SQL.Database(fileBuffer);
  } else {
    db = new SQL.Database();
  }

  // Create table if needed
  db.run(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      name      TEXT NOT NULL,
      email     TEXT NOT NULL,
      phone     TEXT,
      course    TEXT,
      message   TEXT,
      created_at DATETIME DEFAULT (datetime('now'))
    )
  `);

  persist();
  console.log("✅ SQLite (sql.js) database ready at:", dbPath);
  return db;
}

function persist() {
  const data = db.export();
  fs.writeFileSync(dbPath, Buffer.from(data));
}

function getDB() {
  return { db, persist };
}

module.exports = { initDB, getDB };
