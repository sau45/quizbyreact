import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './Component/quiz/Quiz';
import Score from './Component/score/Score';




const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the capital of India?',
    options: ['Paris', 'Delhi', 'Berlin', 'Madrid'],
    correctAnswer: 'Delhi',
  },
  {
    question: 'What is the capital of Srilanks?',
    options: ['Paris', 'London', 'Berlin', 'colombo'],
    correctAnswer: 'colombo',
  },
  {
    question: 'What is the capital of Bihar?',
    options: ['Paris', 'London', 'Patna', 'Madrid'],
    correctAnswer: 'Patna',
  },
  // Add more questions here
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<button onClick={() => window.location.href = "/quiz"}>Start Quiz</button>}
        />
        <Route path="/quiz" element={<Quiz questions={questions} />} />
        <Route path="/score" element={<Score />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
