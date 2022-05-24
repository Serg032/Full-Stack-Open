import { useState } from "react";

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

 
  const average = () => {
    let result = 0
    if(allFeedbacks.length === 0){
      return "No feddbacks yet"
    }else{
      for(let i = 0; i <= allFeedbacks.length - 1; i++){
        if(allFeedbacks[i] === "G"){
          console.log(result += 1)
        }else if(allFeedbacks[i] === "N"){
          result += 0
        }else{
          result -= 1
        }
      }
      return result / allFeedbacks.length
    }
    
  }

  return (
    <div id="unicafe">
      <h1>give feedback</h1>
      <div id="buttons">
        <button onClick={handleOnClickGood}>good</button>
        <button onClick={handleOnClickNeutral}>neutral</button>
        <button onClick={handleOnClickBad}>bad</button>
      </div>
      <div id="statistics">
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all feeds: {allFeedbacks.join(' ')}</p>
        <p>average: {average()}</p>
      </div>
    </div>
  );
}

export default App;
