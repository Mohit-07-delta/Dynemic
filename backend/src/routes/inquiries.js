const express = require("express");
const router = express.Router();
const { getDB } = require("../db/database");

// POST /api/inquiries
router.post("/", (req, res) => {
  const { name, email, phone, course, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, error: "Name and email are required." });
  }
  try {
    const { db, persist } = getDB();
    db.run(
      "INSERT INTO inquiries (name, email, phone, course, message) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone || null, course || null, message || null]
    );
    persist();
    // Get last inserted id
    const result = db.exec("SELECT last_insert_rowid() as id");
    const id = result[0]?.values[0]?.[0];
    res.status(201).json({ success: true, id });
  } catch (err) {
    console.error("DB insert error:", err);
    res.status(500).json({ success: false, error: "Failed to save inquiry." });
  }
});

// GET /api/inquiries
router.get("/", (req, res) => {
  try {
    const { db } = getDB();
    const result = db.exec("SELECT * FROM inquiries ORDER BY created_at DESC");
    const rows = result[0]
      ? result[0].values.map((row) => {
          const obj = {};
          result[0].columns.forEach((col, i) => (obj[col] = row[i]));
          return obj;
        })
      : [];
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error("DB fetch error:", err);
    res.status(500).json({ success: false, error: "Failed to fetch inquiries." });
  }
});

module.exports = router;
