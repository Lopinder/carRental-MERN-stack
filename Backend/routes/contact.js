const express = require("express");
const Router = express.Router();
const pool = require("../db");

//  Handle contact form submission
Router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newMessage = await pool.query(
      "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );
    res.status(201).json({ message: "Message received", data: newMessage.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//  Get current company info (location, phone, email)
Router.get("/company", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM company_info ORDER BY id DESC LIMIT 1");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//  Update company location/info
Router.put("/company", async (req, res) => {
  const { address, phone, email } = req.body;

  try {
    const updated = await pool.query(
      "UPDATE company_info SET address = $1, phone = $2, email = $3, updated_at = NOW() WHERE id = (SELECT id FROM company_info ORDER BY id DESC LIMIT 1) RETURNING *",
      [address, phone, email]
    );
    res.json({ message: "Company info updated", data: updated.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = Router;
