import React from "react"

// part1 exercises

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
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </main>
  )
}

const Total = (props) => {

  const total = parseInt(props.exercises1) + parseInt(props.exercises2) + parseInt(props.exercises3) 

  return (
    <footer>
      <p>Number of exercicses {total}</p>
    </footer>
  )
}

const App = () => {
 
  return (
    <div>
      <Header course = "Half Stack application development" />
      <Content 
        part1 = "Fundamentals of React" 
        part2 = "Using props to pass data" 
        part3 = "State of component"
        exercises1 = "10"
        exercises2 = "7"
        exercises3 = "14"
      />
      <Total exercises1 = "10" exercises2 = "7"  exercises3 = "14"/>
    </div>
   
  )
}

export default App;
