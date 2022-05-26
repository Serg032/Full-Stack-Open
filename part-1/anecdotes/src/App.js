import { useState } from "react";

const Header = ({text}) => {
  return <h1>{text}</h1>
}

const MostVoted = ({arr, index}) => {
  let maxVotes = Math.max(...index)
  let indexMaxVotes = index.indexOf(maxVotes)
  let winner = arr[indexMaxVotes]
  if (maxVotes === 0) {
    return "no votes yet"
  }else{
    return winner
  }
}

function App() {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  

  const votes = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votess, setVotes] = useState(votes)

  const randomAnecdote = (arr) => {
    let max = arr.length - 1
    setSelected((Math.random() * max).toFixed(0))
  }

  const addVote = (arr, state) => {
    let newVotes = [...arr]
    newVotes[state] += 1
    setVotes(newVotes)
    return arr[state]
  }

  const showPhrase = (arr, state) => {
    return arr[state]
  }

  return (
    <div id="anecdotes">
      <Header text= "Anecdote of the day"/>
      <p>{showPhrase(anecdotes, selected)}</p>
      <p>has {votess[selected]} votes.</p>
      <button onClick={() => randomAnecdote(anecdotes)}>next anecdote</button>
      <button onClick={() => addVote(votess, selected)}>vote</button>
      <Header text= "Anecdote with most votes"/>
      <MostVoted 
      arr = {anecdotes}
      index = {votess}/>
    </div>
  );
}

export default App;
