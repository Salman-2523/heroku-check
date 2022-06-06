import {useState} from 'react'

function App() {
  
  const [score, setScore] = useState(76)
  const [wicket, setWicket] = useState(2)
  const [ballCount, setBallCount] = useState(50)
  // const [status, setStatus] = useState("India Won")
  const [value, setValue] = useState(false)
  
  const handleAddScore = (addScore) => {
    if(score > 100){
      setValue(true)
    }else{
      setScore(score+addScore)

    }

  }
  const handleWicket = () => {
    if(wicket===12 || value === true){
      return;
    }else{

      setWicket(wicket + 1)
    }
  }

  const handleAddBall = () => {
    if(value){
      return;
    }else{

      setBallCount(ballCount + 1)
    }
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              `${Math.floor(ballCount/6)}.${ballCount % 6}`
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>{handleAddScore(1)}} disabled = {score>100} className="addScore1">Add 1</button>
        <button onClick={()=>{handleAddScore(4)}} className="addScore4">Add 4</button>
        <button onClick={()=>{handleAddScore(6)}} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={handleWicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick = {handleAddBall}>Add 1</button>
      </div>
      <h1 className = "status">{score> 100?"India Won":""}</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;