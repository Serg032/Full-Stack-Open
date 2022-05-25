import { useState } from "react";

const Statistics = (props) => {
  return(
    <div id="statistics">
        <h1>Statistics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>average: {props.average}</p>
        <p>percentage: {props.percentage}%</p>
      </div>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedbacks, setAllFeedbacks] = useState([])

  const handleOnClickGood = () => {
    setGood(good +1)
    setAllFeedbacks(allFeedbacks.concat('G'))
  }

  const handleOnClickNeutral = () => {
    setNeutral(neutral +1)
    setAllFeedbacks(allFeedbacks.concat('N'))
  }
  
  const handleOnClickBad = () => {
    setBad(bad +1)
    setAllFeedbacks(allFeedbacks.concat('B'))
  }

  const average = (arr) => {
    let result = 0
    if(arr.length === 0){
      return "No feddbacks yet"
    }else{
      for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] === "G"){
          result += 1
        }else if(arr[i] === "N"){
          result += 0
        }else{
          result -= 1
        }
      }
      return result / arr.length
    }
  }

  const positivePercentage = (arr) => {
    let positives = 0
    let total = arr.length
    for(let i =0; i <= total -1; i++){
      if(arr[i] === "G"){
        positives += 1
      }
    }
    return ((positives * 100) / total)
  }

  return (
    <div id="unicafe">
      <h1>give feedback</h1>
      <div id="buttons">
        <button onClick={handleOnClickGood}>good</button>
        <button onClick={handleOnClickNeutral}>neutral</button>
        <button onClick={handleOnClickBad}>bad</button>
      </div>
      <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
        average = {average(allFeedbacks)}
        percentage = {positivePercentage(allFeedbacks)}
      />      
    </div>
  );
}

export default App;
