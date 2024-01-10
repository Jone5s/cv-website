import React, { useState } from 'react';

import './Questbook.css'

const Guestbook = () => {
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that name and message are not empty
    if (name.trim() === '' || message.trim() === '') {
      alert('Please enter your name and a message.');
      return;
    }

    // Add the new entry to the guestbook
    setGuestbookEntries((prevEntries) => [
      ...prevEntries,
      {
        name,
        message,
        date: new Date().toLocaleString(),
      },
    ]);

    // Clear the form fields after submission
    setName('');
    setMessage('');
  };

  return (
    <div className="guestbook-container">
        <h2>Guestbook</h2>
        <form onSubmit={handleSubmit} className="guestbook-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Guestbook Entries</h3>
        <ul className="guestbook-entries">
        {guestbookEntries.map((entry, index) => (
            <li key={index} className="guestbook-entry">
            </li>
        ))}
        </ul>
    </div>
    </div>
  );
};

export default Guestbook;