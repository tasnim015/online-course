import React from 'react';
import './Course.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import Cart from '../Cart/Cart';

const Course = () => {
    //console.log(fakeData);
    const [courses, setCourses] = useState(fakeData);
    const [cart,setCart] = useState([]);
    const addCourse = (course)=>{
        //console.log("course added",course);
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return (
        <div className="course-container">
            <div className="courseInfo">
                {
                    courses.map(course => <CourseInfo courses={course}
                    addCourses = {addCourse}
                    ></CourseInfo>)
                }
            
            </div>
            <div >
               <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Course;