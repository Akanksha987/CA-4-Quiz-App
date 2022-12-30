import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(true)
  const [themeName, setThemeName] = useState("dark")


  const clickOption = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const handleToggleButton = ()=>{
    setTheme(theme?false:true);
  }
  function backGroundColors(color){
    document.body.style.backgroundColor = color? "grey":"azure";
    return{
      backgroundColor : color? "grey":"beige",
    }
  }

  function textColor(color){
    return{
      color:color?"azure":"grey",
    }
  }
  useEffect(()=>{
    setThemeName(themeName==="light"?"light":"dark")
  },[theme])
  return (
      <div className="style" style={backGroundColors(theme)}>
        <div className="flex">
          <h2 style={textColor(theme)} className="title">Kalvium</h2>
          <button className="button" onClick={handleToggleButton}>{themeName}</button>
        </div>
      
        {
          showResults ? <Result setScore={setScore} score={score} setCurrentQuestion={setCurrentQuestion} setShowResults={setShowResults} length={questions.length}/> : 
          <QuestionBox questions={questions} clickOption={clickOption} currentQuestion={currentQuestion}/>
        }
      </div>

  );
}

export default App;