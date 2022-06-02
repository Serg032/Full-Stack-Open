import React from "react"
import Course from "./components/course"

const App = () => {
  const course = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  
  return (
    <div>
      <Course
      title = {course[0].name}
      name = {course[0].parts[0].name}
      exercises = {course[0].parts[0].exercises}
      name1 = {course[0].parts[1].name}
      exercises1 = {course[0].parts[1].exercises}
      name2 = {course[0].parts[2].name}
      exercises2 = {course[0].parts[2].exercises}
      name3 = {course[0].parts[3].name}
      exercises3 = {course[0].parts[3].exercises}
      exercisess = {
        [
        course[0].parts[0].exercises, 
        course[0].parts[1].exercises,
        course[0].parts[2].exercises,
        course[0].parts[3].exercises
      ]
    }
      />
      <Course
       title = {course[1].name}
       name = {course[1].parts[0].name}
       exercises = {course[1].parts[0].exercises}
       name1 = {course[1].parts[1].name}
       exercises1 = {course[1].parts[1].exercises}
       exercisess = {
         [
          course[1].parts[0].exercises,
          course[1].parts[1].exercises
       ]
      }
      />
    </div>
  )
}

export default App;
