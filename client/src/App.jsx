import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/events";

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: "",
    category: "",
    date: "",
    location: "",
  });

  // Load events from MongoDB
  const loadEvents = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to load events");
      }

      const data = await response.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to load events. Please make sure the server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Create event
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!form.title || !form.category || !form.date || !form.location) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setSaving(true);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create event");
      }

      setEvents((currentEvents) => [...currentEvents, data]);

      setForm({
        title: "",
        category: "",
        date: "",
        location: "",
      });

      setShowForm(false);
      setMessage("Event created successfully!");

    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  // Search events
  const filteredEvents = events.filter((event) => {
    const text = search.toLowerCase();

    return (
      event.title.toLowerCase().includes(text) ||
      event.category.toLowerCase().includes(text) ||
      event.location.toLowerCase().includes(text)
    );
  });

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo">
          Campus<span>-Connect</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="login-button"
          onClick={() => {
            setError("");
            setMessage("");
            setShowForm(true);
          }}
        >
          + Create Event
        </button>

      </header>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            🎓 CAMPUS EVENT PLATFORM
          </div>

          <h1>
            Discover.
            <br />
            <span>Connect.</span>
            <br />
            Experience.
          </h1>

          <p>
            Find exciting events, workshops, cultural programs,
            sports activities and opportunities happening on your campus.
          </p>

          <div className="hero-buttons">

            <a href="#events" className="primary-button">
              Explore Events →
            </a>

            <button
              className="secondary-button"
              onClick={() => {
                setError("");
                setMessage("");
                setShowForm(true);
              }}
            >
              Create Event
            </button>

          </div>

        </div>

      </section>

      {/* EVENTS */}
      <section className="events-section" id="events">

        <div className="section-top">

          <div>
            <p className="section-label">
              UPCOMING EVENTS
            </p>

            <h2>
              What's happening?
            </h2>
          </div>

          <div className="search-box">
            🔍

            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

        {/* SUCCESS MESSAGE */}
        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div className="no-events">
            <h3>Loading events...</h3>
            <p>Please wait while we load campus events.</p>
          </div>
        )}

        {/* EVENTS */}
        {!loading && !error && (
          <>
            <div className="event-grid">

              {filteredEvents.map((event, index) => (

                <div
                  className="event-card"
                  key={event._id || `event-${index}`}
                >

                  <div className="card-top">

                    <span className="category">
                      {event.category}
                    </span>

                    <span className="event-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3>
                    {event.title}
                  </h3>

                  <div className="event-info">

                    <p>
                      <strong>📅</strong>
                      {event.date}
                    </p>

                    <p>
                      <strong>📍</strong>
                      {event.location}
                    </p>

                  </div>

                  <button
                    className="details-button"
                    onClick={() =>
                      alert(
                        `${event.title}\n\nDate: ${event.date}\nLocation: ${event.location}\nCategory: ${event.category}`
                      )
                    }
                  >
                    View Details →
                  </button>

                </div>

              ))}

            </div>

            {filteredEvents.length === 0 && (
              <div className="no-events">
                <h3>No events found</h3>
                <p>Try searching for another event.</p>
              </div>
            )}

          </>
        )}

      </section>

      {/* CREATE EVENT MODAL */}
      {showForm && (

        <div className="modal-overlay">

          <div className="modal">

            <button
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <p className="section-label">
              ORGANIZER
            </p>

            <h2>
              Create New Event
            </h2>

            <form onSubmit={handleSubmit}>

              <label>
                Event Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter event title"
                value={form.title}
                onChange={handleChange}
              />

              <label>
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">
                  Select category
                </option>

                <option value="Technology">
                  Technology
                </option>

                <option value="Cultural">
                  Cultural
                </option>

                <option value="Sports">
                  Sports
                </option>

                <option value="Workshop">
                  Workshop
                </option>

                <option value="Social">
                  Social
                </option>

                <option value="Career">
                  Career
                </option>
              </select>

              <label>
                Date
              </label>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />

              <label>
                Location
              </label>

              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={form.location}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="create-submit"
                disabled={saving}
              >
                {saving ? "Creating..." : "Create Event"}
              </button>

            </form>

          </div>

        </div>

      )}

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-content">

          <p className="section-label">
            ABOUT CAMPUS-CONNECT
          </p>

          <h2>
            Your campus.
            <br />
            <span>One connected place.</span>
          </h2>

          <p>
            Campus-Connect makes it easier for students to discover
            what's happening around campus. From technical workshops
            to cultural celebrations, everything is organized in one
            simple platform.
          </p>

        </div>

        <div className="about-stats">

          <div className="stat">
            <strong>{events.length}</strong>
            <span>Events</span>
          </div>

          <div className="stat">
            <strong>5000+</strong>
            <span>Students</span>
          </div>

          <div className="stat">
            <strong>50+</strong>
            <span>Organizers</span>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          Campus-Connect
        </div>

        <p>
          Connecting students with campus experiences.
        </p>

        <div className="footer-line"></div>

        <small>
          © 2026 Campus-Connect. All rights reserved.
        </small>

      </footer>

    </div>
  );
}

export default App;

