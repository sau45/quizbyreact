// Score.js
import React from 'react';
import './style.scss'; // Import the CSS stylesheet

const Score = ({ userAnswers, questions }) => {
  const calculateScore = () => {
    if (!questions || questions.length === 0) {
      return 0;
    }
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className="score-container">
      <h1>Your Score</h1>
      <p className="score-text">You got {calculateScore()} out of {questions?.length} questions correct!</p>
    </div>
  );
};

export default Score;
