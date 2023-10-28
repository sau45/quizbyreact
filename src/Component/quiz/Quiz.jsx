import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'; // Import the SCSS stylesheet
import Question from '../question/Question';
import Score from '../score/Score';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setUserAnswers([...userAnswers, option]);

    if (currentQuestion <= questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is over; you can display the score.
      navigate("/score");
    }
  };

  return (
    <div className="quiz-container">
      <h1>MCQ Quiz Game</h1>
      {currentQuestion < questions.length ? (
        <div className="question">
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSelect={handleSelect}
          />
        </div>
      ) : (
        <Score userAnswers={userAnswers} questions={questions} />
      )}
    </div>
  );
};

export default Quiz;
