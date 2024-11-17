import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import CourseSelection from './CourseSelection/CourseSelection'
import TabError from './errors/TabError'
import { tabs } from 'webextension-polyfill'
import { Course, QUERCUS_BASE_API_ENDPOINT, QUERCUS_BASE_URL, Nullable } from '../definitions/common'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
interface RawCourse {
  account_id: Nullable<string>;
  apply_assignment_group_weights: Nullable<boolean>;
  blueprint: Nullable<boolean>;
  calendar: Nullable<object>;
  course_code: Nullable<string>;
  course_color: Nullable<string>;
  created_at: Nullable<string>;
  default_view: Nullable<string>;
  end_at: Nullable<string>;
  enrollment_term_id: Nullable<number>;
  enrollments: Nullable<object>;
  friendly_name: Nullable<string>;
  grade_passback_setting: Nullable<string>;
  grading_standard_id: Nullable<number>
  hide_final_grades: Nullable<boolean>;
  homeroom_course: Nullable<boolean>;
  id: Nullable<number>;
  is_public: Nullable<boolean>;
  is_public_to_auth_users: Nullable<boolean>;
  license: Nullable<string>;
  name: Nullable<string>;
  overridden_course_visibility?: string;
  public_syllabus: Nullable<boolean>;
  public_syllabus_to_auth: Nullable<boolean>;
  restrict_enrollments_to_course_dates: Nullable<boolean>;
  root_account_id: Nullable<number>;
  start_at: Nullable<string>;
  storage_quota_mb: Nullable<number>;
  template: Nullable<boolean>;
  time_zone: Nullable<string>;
  uuid: Nullable<string>;
  workflow_state: Nullable<string>
  access_restricted_by_date?: boolean;
}

const mapResponseToCourses = (obj: RawCourse): Course | [] => {
  if (!obj.access_restricted_by_date && obj.name !== null && obj.id !== null) {
    return { courseName: obj.name, courseId: obj.id }
  }
  return [] // means that this entry will be removed in the new array
}

async function onPopupLoad() {
  let queryOptions = { active: true, lastFocusedWindow: true }
  const [tab] = await tabs.query(queryOptions)
  if (tab.url?.startsWith(QUERCUS_BASE_URL)) {
    let rawCoursesArray: Array<RawCourse> = await (
      await fetch(`${QUERCUS_BASE_API_ENDPOINT}/users/self/courses?per_page=100`)
    ).json()
    let coursesArray = rawCoursesArray.flatMap(mapResponseToCourses)
    root.render(
      <React.StrictMode>
        <CourseSelection courses={coursesArray} />
      </React.StrictMode>,
    )
  } else {
    root.render(
      <React.StrictMode>
        <TabError />
      </React.StrictMode>,
    )
  }
}

window.onload = () => onPopupLoad()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
