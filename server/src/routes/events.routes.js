const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });

    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error.message);

    res.status(500).json({
      message: "Failed to fetch events",
    });
  }
});

// Create a new event
router.post("/", async (req, res) => {
  try {
    const { title, category, date, location } = req.body;

    const event = await Event.create({
      title,
      category,
      date,
      location,
    });

    res.status(201).json(event);
  } catch (error) {
    console.error("Error creating event:", error.message);

    res.status(500).json({
      message: "Failed to create event",
    });
  }
});

module.exports = router;