import { useState } from "react";

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}:</td>
      <td>{props.value}</td>
    </tr>

  )
}

const Statistics = (props) => {
  
    if(props.total === 0){
      return (
        <div>
          <h1>Statistics</h1>
          <p>No feedbacks yet</p>
        </div>
       
      )
    }else{
      return (
        <div id="statistics">
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine
            text = "good"
            value = {props.good}/>
            <StatisticLine
            text = "neutral"
            value = {props.neutral}/>
            <StatisticLine
            text = "bad"
            value = {props.bad}/>
            <StatisticLine
            text = "average"
            value = {props.average}/>
            <StatisticLine
            text = "percentage"
            value = {props.percentage} />
          </tbody>
        </table>
       
      </div>
      )
    }
}

const Button = (props) => {
  return(
    <button onClick={props.function}>{props.text}</button>
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
      return (result / arr.length).toFixed(2) 
    }
  }

  const positivePercentage = (arr) => {
    let positives = 0
    let total = arr.length
    if(arr.length === 0){
      return 'No feedbacks'
    }else{
      for(let i = 0; i <= total -1; i++){
        if(arr[i] === "G"){
          positives += 1
        }
      }
    }
    return ((positives * 100) / total).toFixed(2) + "%"
  }

  return (
    <div id="unicafe">
      <h1>give feedback</h1>
      <div id="buttons">
        <Button 
        function = {handleOnClickGood}
        text = "good"
          />
        <Button 
        function = {handleOnClickNeutral}
        text = "neutral"/>
        <Button 
        function = {handleOnClickBad}
        text = "bad"/>
      </div>
      <br/>
      <Statistics
        total = {allFeedbacks.length}
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
