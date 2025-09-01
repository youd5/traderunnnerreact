import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard'; // Import CourseCard component

// Dummy data for courses (this would typically come from an API)
const courses = [
  { 
    id: 1, 
    title: 'Daily Market Reports', 
    description: 'We run several algorithms to generate reports that gives you quick view of the market',
    content: 'This course covers the core concepts of React, including components, props, state, and hooks. You will build a small, functional web application from scratch.',
    sections: [
      { id: 1, title: 'Getting Started with React', duration: '2 hours' },
      { id: 2, title: 'Understanding Components and Props', duration: '3 hours' },
      { id: 3, title: 'Managing State with Hooks', duration: '4 hours' },
      { id: 4, title: 'Building a Simple Application', duration: '5 hours' }
    ],
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  { 
    id: 2, 
    title: 'Advanced Filters', 
    description: 'Run advanced filters to get the most precise recommendations basis the filters', 
    content: 'Master advanced JavaScript techniques that are crucial for modern web development. Topics include asynchronous programming, ES6+ features, and design patterns.',
    sections: [
      { id: 1, title: 'Advanced Scopes and Closures', duration: '3 hours' },
      { id: 2, title: 'Asynchronous JavaScript (Promises, Async/Await)', duration: '4 hours' },
      { id: 3, title: 'ES6+ Features in Depth', duration: '3 hours' },
      { id: 4, title: 'Module Patterns and OOP', duration: '5 hours' }
    ],
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  { 
    id: 3, 
    title: 'Subscribe and track', 
    description: 'Subscribe to the most advanced algorithms and set yourself for success',
    content: 'This course will teach you how to bring your websites to life with CSS animations. Learn about transitions, keyframes, and advanced animation properties.',
    sections: [
      { id: 1, title: 'Introduction to CSS Transitions', duration: '2 hours' },
      { id: 2, title: 'Animating with Keyframes', duration: '4 hours' },
      { id: 3, title: 'Advanced Animation Techniques', duration: '3 hours' },
      { id: 4, title: 'Building a Live Animation Project', duration: '5 hours' }
    ],
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const currentCourse = courses.find((c) => c.id === parseInt(id));

  if (!currentCourse) {
    return <h2>Course not found!</h2>;
  }

  // Filter out the current course to display "other" courses
  const otherCourses = courses.filter((c) => c.id !== currentCourse.id);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
        ← Back to all courses
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <img 
          src={currentCourse.iconUrl} 
          alt={`${currentCourse.title} icon`} 
          style={{ width: '60px', height: '60px', marginRight: '20px' }} 
        />
        <div>
          <h1>{currentCourse.title}</h1>
          <p>{currentCourse.description}</p>
        </div>
      </div>
      
      <hr style={{ margin: '30px 0' }} />
      
      <h3>About this course</h3>
      <p>{currentCourse.content}</p>
      
      <hr style={{ margin: '30px 0' }} />
      
      <h3>Course Sections</h3>
      <ul>
        {currentCourse.sections.map((section) => (
          <li key={section.id} style={{ marginBottom: '10px' }}>
            <strong>{section.title}</strong> ({section.duration})
          </li>
        ))}
      </ul>
      
      <hr style={{ margin: '30px 0' }} />
      
      <h3>Other Courses You Might Like</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {otherCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
