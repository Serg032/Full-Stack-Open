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
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </main>
  )
}

const Total = (props) => {

  const total = 
    parseInt(props.parts[0].exercises) + 
    parseInt(props.parts[1].exercises) + 
    parseInt(props.parts[2].exercises) 

  return (
    <footer>
      <p>Number of exercicses {total}</p>
    </footer>
  )
}

const App = () => {

  const course = 'Half Stack application development'

  const parts = [

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
  

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}
 
  

export default App;
