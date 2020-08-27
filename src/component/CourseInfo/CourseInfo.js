import React from 'react';
import './CourseInfo.css';

const CourseInfo = (props) => {
    const {name,instructor,price} = props.courses;
    return (
        <div className="course-info">
            <h3 className="course-name"> {name}</h3>
            <h5>Instructor: <span style={{color:"goldenrod"}}>{instructor}</span></h5>
            <h2>$ <span style={{color:"orange"}}>{price}</span></h2>

            {/* using bootstrap class */}
            <button className="bg-dark enroll-button" onClick={() => props.addCourses(props.courses)}>Enroll now</button>
        </div>
    );
};

export default CourseInfo;