import React from "react"

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Content = (props) => {
  return (
    <main>
      <p>{props.name1} {props.exercises1}</p>
      <p>{props.name2} {props.exercises2}</p>
      <p>{props.name3} {props.exercises3}</p>
    </main>
  )
}

const Total = (props) => {

  const total = 
    props.exercises1 + 
    props.exercises2 + 
    props.exercises3 

  return (
    <footer>
      <p>Number of exercicses {total}</p>
    </footer>
  )
}

const App = () => {

  const course = {

    name: 'Half Stack application development',
    
    parts: [
    
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
    
      {
        name: 'Using props to pass data',
        exercises: 7
      },
    
      {
        name: 'State of a component',
        exercises: 14
      }
    
    ]
  
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content 
        name1 = {course.parts[0].name}
        name2 = {course.parts[1].name}
        name3 = {course.parts[2].name}
        exercises1 = {course.parts[0].exercises}  
        exercises2 = {course.parts[1].exercises}  
        exercises3 = {course.parts[2].exercises}  
        />
      <Total 
        exercises1 = {course.parts[0].exercises}
        exercises2 = {course.parts[1].exercises}
        exercises3 = {course.parts[2].exercises}
        />
    </div>
  )
}
 
  

export default App;
