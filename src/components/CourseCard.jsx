import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div style={{
        border: '1px solid #e0e0e0', // Lighter border
        backgroundColor: '#fff', // White background for the card
        padding: '15px',
        margin: '10px',
        borderRadius: '8px',
        width: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Soft shadow for depth
      }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img 
          src={course.iconUrl} 
          alt={`${course.title} icon`} 
          style={{ width: '40px', height: '40px', marginRight: '15px' }} 
        />
        <h3>{course.title}</h3>
      </div>
      <p>{course.description}</p>
      <Link to={`/course/${course.id}`} style={{ display: 'inline-block', marginTop: '10px' }}>
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
