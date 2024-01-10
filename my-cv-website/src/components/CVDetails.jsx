import React, { useState } from 'react';
import './CVDetails.css'; // Import the CSS file

const CVDetails = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedHobby, setSelectedHobby] = useState(null);

  const Skill = ({ skill, onClick }) => {
    return (
      <div className="skill-item" onClick={() => onClick(skill)}>
        {skill.name}
      </div>
    );
  };

  const Item = ({ item, onClick }) => {
    return (
      <div className="skill-item" onClick={() => onClick(item)}>
        {item.name}
      </div>
    );
  };
  
  const hobbiesData = [
    { name: 'Tennis', description: 'I enjoy playing tennis regurally once a week for physical fitness and mental relaxation.' },
    { name: 'Videogames', description: 'Passionate about playing video games, especially RPGs and competitive multiplayer games.' },
    { name: 'Chess', description: 'Regular chess player focusing on strategy development and competition. Im ~1600 rated in online chess and sometimes play over the board at the local chess club.' },
    { name: 'Programming', description: 'I love coding and often work on personal projects to enhance my technical skills.' },
    { name: 'Nature Walks', description: 'Frequent nature explorer, enjoying hikes and outdoor photography.' },
  ];

  const skillsData = [
    { name: 'C++', description: 'Most widely used language in college and own projects' },
    { name: 'JavaScript', description: 'Extensively used for front-end development in several web projects, implementing interactive features and client-side logic in modern web applications. I`m also currently self studying TypeScript.' },
    { name: 'SQL', description: 'Employed for database management and querying, especially in web applications requiring complex data retrieval and reporting functionalities.' },
    { name: 'C#', description: 'Used in school projects and scripting in Unity for game development projects.' },
    { name: 'Blender', description: 'Applied in 3D modeling and animation projects, including character design and environmental art for indie game projects.' },
    { name: 'Amazon AWS', description: 'Used in course and for deploying own projects.' },
    { name: 'HTML/CSS', description: 'Developed several web applications and interactive websites.' },
    { name: 'Git', description: 'Used for version control in all of my software projects.' },
    { name: 'Java', description: 'Applied in developing Android applications and backend services, emphasizing clean code practices and object-oriented design.' },
    { name: 'Docker', description: 'Utilized for containerizing applications, ensuring consistency across development, testing, and production environments.' },
    { name: 'MS Office', description: 'Regularly used for documentation and preparing presentations, contributing to effective project management and reporting.' },
    { name: 'Unity', description: 'Used for creating several 2D and 3D games, focusing on gameplay programming, physics, and user interface design.' },
  ];

  const handleSectionClick = (section) => {
    setSelectedSection(section === selectedSection ? null : section);
    if (section !== 'skills') {
      setSelectedSkill(null);
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleHobbyClick = (hobby) => {
    setSelectedHobby(hobby);
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
            In the link you can see the results and grades of all the studies I have listed:&nbsp;
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
    references: {
      title: 'References',
      content: (
        <>
          <p>
            <strong>Mikko Helenius - Hertz Tampere</strong>
          </p>
          <p>+358 40 55527750 - mikko.helenius@hertz.fi</p>
          <p>
            <strong>Matti Haapaniemi - Amurin Sähköpaja</strong>
          </p>
          <p>+358 40 5738797 - huolto@amurinsahkopaja.fi</p>
        </>
      ),
    },
    skills: {
      title: 'Skills',
      content: (
        <>
          <div className="skills-grid">
              {skillsData.map((skill) => (
              <Skill key={skill.name} skill={skill} onClick={handleSkillClick} />
              ))}
          </div>
          {selectedSkill && (
            <div className="skill-description">
              <strong>{selectedSkill.name}: </strong>
              <span>{selectedSkill.description}</span>
            </div>
          )}
        </>
      ),
    },
    hobbies: {
      title: 'Hobbies',
    content: (
      <>
        <div className="skills-grid">
          {hobbiesData.map((hobby) => (
            <Item key={hobby.name} item={hobby} onClick={handleHobbyClick} />
          ))}
        </div>
        {selectedHobby && (
          <div className="skill-description">
            <strong>{selectedHobby.name}: </strong>
            <span>{selectedHobby.description}</span>
          </div>
        )}
      </>
    ),
   }
  };


  return (
    <div className="cv-details">
      <h2>Details</h2>
      <div>
        <button onClick={() => handleSectionClick('education')}>Education</button>
        <button onClick={() => handleSectionClick('experience')}>Employment History</button>
        <button onClick={() => handleSectionClick('references')}>References</button>
        <button onClick={() => handleSectionClick('skills')}>Skills</button>
        <button onClick={() => handleSectionClick('hobbies')}>Hobbies</button>
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