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
  
    const array = props.exercs
    const result = array.reduce((acc, crv) => {
      return acc + crv
    }, 0)
  
    return (
      <footer>
        <p><b>total of {result} exercises</b></p>
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
        exercs = {props.exercisess}
        />
     </div>
   )
  }

  export default Course