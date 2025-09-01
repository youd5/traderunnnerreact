import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import CourseDetails from './pages/CourseDetails';
import AboutPage from './pages/AboutPage'; // Import the new pages
import ContactPage from './pages/ContactPage';
import './App.css'; // You can add your own styles here

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
  );
}

export default App;
