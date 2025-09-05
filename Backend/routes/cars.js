const express = require("express");
const pool = require("../db");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, brand, model, price_per_day, location, seats, fuel_type, transmission, image_url } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO cars (name, brand, model, price_per_day, location, seats, fuel_type, transmission, image_url)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [name, brand, model, price_per_day, location, seats, fuel_type, transmission, image_url]
    );
    res.json({ message: "Car added successfully", car: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars WHERE id = $1", [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM cars WHERE id = $1", [req.params.id]);
    res.json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
