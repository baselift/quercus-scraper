import React from 'react';
import './CourseList.css';
import { Course } from '../../constants';

function CourseItem({name}: {name: string}) {
  return (
    <div className="courseItem">
      <label>
        {name}
        <input type="checkbox" className='courseSelectBox'/>
      </label>
    </div>
  )
}

function CourseList({courses} : {courses: Array<Course>}) {
  return (
    <div className='courseList'>
      {courses.map(course => <CourseItem name={course.courseName}></CourseItem>)}
    </div>
  );
}

export default CourseList;
