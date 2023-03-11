import React, { useState } from 'react';

function RandomEvent() {
  const eventData = [
    {
      name: 'Annual Conference',
      date: 'October 15, 2022',
      location: 'New York City, NY',
    },
    {
      name: 'Networking Mixer',
      date: 'November 12, 2022',
      location: 'San Francisco, CA',
    },
    {
      name: 'Industry Expo',
      date: 'January 20, 2023',
      location: 'Orlando, FL',
    },
    {
      name: 'Product Launch',
      date: 'March 8, 2023',
      location: 'Seattle, WA',
    },
  ];

  const [currentEvent, setCurrentEvent] = useState(eventData[Math.floor(Math.random() * eventData.length)]);

  const handleNewEvent = () => {
    setCurrentEvent(eventData[Math.floor(Math.random() * eventData.length)]);
  };

  return (
    <div className="random-event-container">
      <h2>Random Event</h2>
      <div className="event-item">
        <div className="event-name">{currentEvent.name}</div>
        <div className="event-date">{currentEvent.date}</div>
        <div className="event-location">{currentEvent.location}</div>
        <button onClick={handleNewEvent} className="new-event-button">New Event</button>
      </div>
    </div>
  );
}

export default RandomEvent;
