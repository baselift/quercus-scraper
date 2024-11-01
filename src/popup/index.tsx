import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from './CourseList/CourseList';
import TabError from './errors/TabError'
import { tabs } from 'webextension-polyfill'
import { Course, QUERCUS_BASE_URL, RawCourse } from '../constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mapResponseToCourses = (obj: RawCourse) : Course | [] => {
  if (!obj.access_restricted_by_date && obj.name !== null && obj.id !== null) {
    return {courseName: obj.name, courseId: obj.id}
  }
  return [] // means that this entry will be removed in the new array
}

async function onPopupLoad() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await tabs.query(queryOptions)
  if (tab.url?.startsWith(QUERCUS_BASE_URL)) {
    let rawCoursesArray: Array<RawCourse> = await (await fetch(`${QUERCUS_BASE_URL}/api/v1/users/self/courses?per_page=100`)).json()
    let coursesArray = rawCoursesArray.flatMap(mapResponseToCourses)
    root.render(
      <React.StrictMode>
        <App courses={coursesArray}/>
      </React.StrictMode>
    );
  } else {
    root.render(
      <React.StrictMode>
        <TabError />
      </React.StrictMode>
    )
  }
}

window.onload = () => onPopupLoad();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
