const express = require("express");
const pool = require("../db");
const router = express.Router();


router.post("/add", async (req, res) => {
  const { user_id, car_id, start_date, end_date, total_price } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO bookings (user_id, car_id, start_date, end_date, total_price)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [user_id, car_id, start_date, end_date, total_price]
    );
    res.json({ message: "Booking created successfully", booking: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT b.id, b.start_date, b.end_date, b.total_price, b.status,
              u.id AS user_id, u.name AS user_name,
              c.id AS car_id, c.name AS car_name
       FROM bookings b
       JOIN users u ON b.user_id = u.id
       JOIN cars c ON b.car_id = c.id`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT b.id, b.start_date, b.end_date, b.total_price, b.status,
              u.id AS user_id, u.name AS user_name,
              c.id AS car_id, c.name AS car_name
       FROM bookings b
       JOIN users u ON b.user_id = u.id
       JOIN cars c ON b.car_id = c.id
       WHERE b.id = $1`,
      [req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM bookings WHERE id=$1", [req.params.id]);
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
