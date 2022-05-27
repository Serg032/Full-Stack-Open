import React from "react"

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Part = (props) => {
  return(
    <main>
      <p>{props.name} {props.exercises}</p>
    </main>
  )
}

const Total = (props) => {

  const total = 
    props.exercises + 
    props.exercises1 + 
    props.exercises2 +
    props.exercises3

  return (
    <footer>
      <p><b>Number of exercicses {total}</b></p>
    </footer>
  )
}

const Course = (props) => {
 return(
   <div>
      <Header 
      course = {props.title}/>
      <Part 
      name = {props.name}
      exercises = {props.exercises}/>
      <Part 
      name = {props.name1}
      exercises = {props.exercises1}/>
      <Part 
      name = {props.name2}
      exercises = {props.exercises2}/>
      <Part 
      name = {props.name3}
      exercises = {props.exercises3}/>
      <Total
      exercises = {props.exercisesSum}
      exercises1 = {props.exercises1Sum}
      exercises2 = {props.exercises2Sum}
      exercises3 = {props.exercises3Sum}/>
   </div>
   
 )
}

const App = () => {
  const course = {
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
  }
  
  return (
      <Course
      title = {course.name}
      name = {course.parts[0].name}
      exercises = {course.parts[0].exercises}
      name1 = {course.parts[1].name}
      exercises1 = {course.parts[1].exercises}
      name2 = {course.parts[2].name}
      exercises2 = {course.parts[2].exercises}
      name3 = {course.parts[3].name}
      exercises3 = {course.parts[3].exercises}
      exercisesSum = {course.parts[0].exercises}
      exercises1Sum = {course.parts[1].exercises}
      exercises2Sum = {course.parts[2].exercises}
      exercises3Sum = {course.parts[3].exercises}
      />
  )
}
 
  

export default App;
