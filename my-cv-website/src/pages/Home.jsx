import React from 'react';
import Profile from '../components/Profile.jsx';
import CVDetails from '../components/CVDetails.jsx';

import '../App.css'

const App = () => {
  return (
    <div>
      <main>
      <h1>Aleksi Leppinen</h1>
        <Profile />
        <CVDetails />
      </main>
    </div>
  );
};

export default App;
