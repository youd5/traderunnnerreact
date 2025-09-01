import React from 'react';
import CourseCard from '../components/CourseCard';
import './HomePage.css';

// Dummy data for courses
const courses = [
  { 
    id: 1, 
    title: 'Daily Market Reports', 
    description: 'We run several algorithms to generate reports that gives you quick view of the market',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' // React icon
  },
  { 
    id: 2, 
    title: 'Advanced Filters', 
    description: 'Run advanced filters to get the most precise recommendations basis the filters',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' // JavaScript icon
  },
  { 
    id: 3, 
    title: 'Subscribe and track', 
    description: 'Subscribe to the most advanced algorithms and set yourself for success',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' // CSS3 icon
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Our Offerings</h1>
      <div className="offerings-container">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
