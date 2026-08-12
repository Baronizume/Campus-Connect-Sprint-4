require("dotenv").config();

const mongoose = require("mongoose");
const Event = require("./src/models/Event");

const events = [
  {
    title: "Tech Fest 2026",
    category: "Technology",
    date: "August 20, 2026",
    location: "College Auditorium",
  },
  {
    title: "Cultural Night",
    category: "Cultural",
    date: "August 25, 2026",
    location: "Main Campus",
  },
  {
    title: "Sports Meet",
    category: "Sports",
    date: "September 2, 2026",
    location: "College Ground",
  },
  {
    title: "Coding Workshop",
    category: "Workshop",
    date: "September 8, 2026",
    location: "Computer Lab",
  },
  {
    title: "Freshers Party",
    category: "Social",
    date: "September 15, 2026",
    location: "College Hall",
  },
  {
    title: "Career Seminar",
    category: "Career",
    date: "September 20, 2026",
    location: "Seminar Hall",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    await Event.deleteMany();

    await Event.insertMany(events);

    console.log("6 events added successfully");

    await mongoose.connection.close();

    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
}

seedDatabase();