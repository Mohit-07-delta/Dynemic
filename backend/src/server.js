const express = require("express");
const cors = require("cors");
const { initDB } = require("./db/database");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Boot: init DB, then mount routes and start listening
initDB().then(() => {
  const inquiriesRouter = require("./routes/inquiries");
  app.use("/api/inquiries", inquiriesRouter);

  app.listen(PORT, () => {
    console.log(`\n🚀 Backend running at http://localhost:${PORT}`);
    console.log(`   Health:     http://localhost:${PORT}/health`);
    console.log(`   Inquiries:  http://localhost:${PORT}/api/inquiries\n`);
  });
}).catch((err) => {
  console.error("Failed to initialize DB:", err);
  process.exit(1);
});
