import React, { useState } from "react";
import "./EventsCalendar.css";

const EventsCalendar = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Audio Tech Conference 2024",
      date: "2024-08-15",
      time: "09:00 AM - 05:00 PM",
      location: "Bangalore, India",
      description:
        "A conference dedicated to the latest trends in audio technology.",
    },
    {
      id: 2,
      title: "Mastering Audio Techniques Workshop",
      date: "2024-09-10",
      time: "02:00 PM - 04:00 PM",
      location: "Online",
      description:
        "Learn advanced audio mastering techniques from industry professionals.",
    },
    {
      id: 3,
      title: "Webinar: Introduction to Surround Sound",
      date: "2024-07-20",
      time: "10:00 AM - 11:30 AM",
      location: "Online",
      description:
        "Discover the basics of surround sound and its applications in audio production.",
    },
  ];

  const handleEventHover = (event) => {
    setSelectedEvent(event);
    setShowDetails(true);
  };

  const handleEventLeave = () => {
    setShowDetails(false);
  };

  return (
    <div class="events-calendar">
      <h2>Events Calendar</h2>
      <div class="calendar-grid">
        {events.map((event) => (
          <div
            key={event.id}
            class="calendar-cell"
            onMouseEnter={() => handleEventHover(event)}
            onMouseLeave={handleEventLeave}
          >
            <span class="calendar-date">{event.date}</span>
            <div class="event-details">
              <h3>{event.title}</h3>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </div>
            {showDetails && selectedEvent.id === event.id && (
              <div class="popup">
                <p>{event.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
