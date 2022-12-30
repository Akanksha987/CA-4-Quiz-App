import React, {useRef} from 'react';
import '../App.css'
export default function QuestionBox({questions,clickOption,currentQuestion}) {
  const focusQuestion = useRef();
  function handleFocus(){
    focusQuestion.current.style.color = "red";
  }
  function handleNoFocus(){
    focusQuestion.current.style.color = "darkblue";
  }
  return (      
      <div className="container" >
        <h2>
          Question: {currentQuestion + 1} out of {questions.length}
        </h2>
        <h3 ref={focusQuestion} className="text">{questions[currentQuestion].text}</h3>

        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => clickOption(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>

        <button onClick={handleFocus}>Highlight</button>
        <button onClick={handleNoFocus}>Remove Highlight</button>
    </div>

          
        
      

  
  )
}
