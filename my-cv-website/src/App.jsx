import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import CVPage from './pages/Home.jsx';
import Questbook from './pages/QuestBook.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<CVPage />} />
        <Route path="/quest-book" element={<Questbook />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;