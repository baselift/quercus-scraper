import { ChangeEventHandler, useState } from 'react'
import './CourseSelection.css'
import { Course } from '../../definitions/common'

function CourseItem({
  name,
  id,
  checked,
  onCheckboxUpdate,
}: {
  name: string
  id: number
  checked: boolean
  onCheckboxUpdate: ChangeEventHandler<HTMLInputElement>
}) {
  let strId: string = id.toString()
  return (
    <div className="courseItem">
      <input
        type="checkbox"
        id={strId}
        className="courseSelectBox"
        onChange={onCheckboxUpdate}
        checked={checked}
      />
      <label htmlFor={strId} className="courseLabel">
        {name}
      </label>
    </div>
  )
}

function CourseSelection({ courses }: { courses: Array<Course> }) {
  const [checkedState, setCheckedState] = useState<Array<boolean>>(
    new Array(courses.length).fill(false),
  )

  const handleSelectAll = () =>
    setCheckedState((checkedState) => checkedState.map((checked) => !checked))

  const handleSelect = (targetIndex: number) =>
    setCheckedState((checkedState) =>
      checkedState.map((checked, index) => (index === targetIndex ? !checked : checked)),
    )

  const handleSubmit = () => console.log(checkedState)

  return (
    <>
      <div style={{ margin: '0.5rem' }}>
        <label htmlFor="selectAll">Select all:</label>
        <input type="checkbox" id="selectAll" onClick={handleSelectAll} />
      </div>
      <section className="courseList">
        {courses.map((course, index) => (
          <CourseItem
            name={course.courseName}
            id={course.courseId}
            checked={checkedState[index]}
            onCheckboxUpdate={() => handleSelect(index)}
          />
        ))}
      </section>
      <div style={{ margin: '0.5rem' }}>
        <input type="button" id="submitBttn" onClick={handleSubmit} value={'Scrape!'} />
      </div>
    </>
  )
}

export default CourseSelection;
