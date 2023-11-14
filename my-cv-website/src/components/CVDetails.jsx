import React, { useState } from 'react';
import './CVDetails.css'; // Import the CSS file

const CVDetails = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section === selectedSection ? null : section);
  };

  const details = {
    education: {
      title: 'Education',
      content: (
        <>
          <p>
            <strong>ICT-engineer, Tampere University of Applied Sciences, Tampere</strong>
          </p>
          <p>AUGUST 2021 — PRESENT</p>
          <p>
            I have performed well so far, especially in programming courses and have chosen software engineering as my
            specialization.
          </p>
          <p>
            In the link you can see the results and grades of all the studies I have listed:
            <a href="https://opintopolku.fi/koski/opinnot/d4bb47aaebe44c9e870ee96c306da47d" target="_blank" rel="noopener noreferrer">
              Link to Results
            </a>
          </p>
          <p>
            <strong>Datanomi (Game Industry Focus), Suupohjan ammatti-instituutti, Kauhajoki</strong>
          </p>
          <p>AUGUST 2016 — MAY 2019</p>
          <p>
            I graduated with excellent grades. My weighted average was (on a scale of 1-3) 2.8. 
            Here I learned a lot, mainly C# with Unity, but basic web development aswell. I also learned 3D-modeling with Blender
            and the basics of game design.
          </p>
        </>
      ),
    },
    experience: {
      title: 'Employment History',
      content: (
        <>
          <p>
            <strong>Car Rental Employee, Hertz-car rental, Tampere</strong>
          </p>
          <p>MAY 2023 — PRESENT</p>
          <p>
            I worked the summer here, and stayed as part time employee after. My main tasks are/were detailing cars, driving them to 
            the location the customer needs them and some customer service from time to time. I also act as a weekend duty officer once a month
            and oversee the whole rental operation for Pirkanmaa at that time.

          </p>
          <p>
            <strong>Office employee, Amurin Sähköpaja-Household appliance maintenance, Tampere</strong>
          </p>
          <p>JUNE 2022 — AUGUST 2022</p>
          <p>
            I acted as a store manager's deputy during July. Otherwise, I did general office tasks, such as invoicing and
            maintenance reports. In addition to these, I did numerous auxiliary jobs in the workshop repairing household
            appliances. From time to time I also performed transport tasks.
          </p>
          <p>
            <strong>Postal worker, Posti Oy, Kauhajoki</strong>
          </p>
          <p>JULY 2019 — OCTOBER 2019</p>
          <p>Mail sorting and address verification.</p>
        </>
      ),
    },
    skills: {
        title: 'Skills',
        content: (
          <div className="skills-grid">
            <div className="skills-column">
              <ul>
                <li>C++</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>C#</li>
                <li>Amazon AWS</li>
                <li>Blender</li>
              </ul>
            </div>
            <div className="skills-column">
              <ul>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>Java</li>
                <li>Docker</li>
                <li>Microsoft Office</li>
                <li>Unity</li>
              </ul>
            </div>
          </div>
        ),
      },
    education: {
      title: 'Education',
      content: (
        <>
          <p>
            <strong>ICT-engineer, Tampere University of Applied Sciences, Tampere</strong>
          </p>
          <p>AUGUST 2021 — PRESENT</p>
          <p>
            I have performed well so far, especially in programming courses and have chosen software engineering as my
            specialization.
          </p>
          <p>
            In the link you can see the results and grades of all the studies I have listed:
            <a href="https://opintopolku.fi/koski/opinnot/d4bb47aaebe44c9e870ee96c306da47d" target="_blank" rel="noopener noreferrer">
              Link to Results
            </a>
          </p>
          <p>
            <strong>Datanomi (Game Industry Focus), Suupohjan ammatti-instituutti, Kauhajoki</strong>
          </p>
          <p>AUGUST 2016 — MAY 2019</p>
          <p>
            I graduated with excellent grades. My weighted average was (on a scale of 1-3) 2.8. 
            Here I learned a lot, mainly C# with Unity, but basic web development aswell. I also learned 3D-modeling with Blender
            and the basics of game design.
          </p>
        </>
      ),
    },
    hobbies: {
        title: 'Hobbies',
        content: (
          <ul>
            <li>Tennis</li>
            <li>Movies</li>
            <li>Videogames</li>
            <li>Chess</li>
            <li>Computers and programming</li>
            <li>Nature walks</li>
          </ul>
        )
      }
  };

  return (
    <div className="cv-details">
      <h2>Details</h2>
      <div>
        <button onClick={() => handleSectionClick('education')}>Education</button>
        <button onClick={() => handleSectionClick('experience')}>Employment History</button>
        <button onClick={() => handleSectionClick('skills')}>Skills</button>
        <button onClick={() => handleSectionClick('hobbies')}>Hobbies</button>
        {/* Add more buttons for additional sections */}
      </div>
      {selectedSection && (
        <div>
          <h3>{details[selectedSection].title}</h3>
          <div>{details[selectedSection].content}</div>
        </div>
      )}
    </div>
  );
};

export default CVDetails;