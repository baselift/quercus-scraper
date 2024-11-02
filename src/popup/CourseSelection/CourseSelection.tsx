import { ChangeEventHandler, useState } from 'react'
import './CourseSelection.css'
import { Course } from '../../constants'

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
      <input type="checkbox" id="selectAll" onClick={handleSelectAll} />
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
      <input type='button' id="submitBttn" onClick={handleSubmit}/>
    </>
  )
}

export default CourseSelection