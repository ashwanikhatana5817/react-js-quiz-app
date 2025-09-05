import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import questionsData from "./data/questions.json";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setQuestions(questionsData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate final score
      const finalScore = questions.reduce((acc, question) => {
        const userAnswer = selectedAnswers[question.id];
        return userAnswer === question.correct ? acc + 1 : acc;
      }, 0);

      setScore(finalScore);
      setIsQuizComplete(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setIsQuizComplete(false);
  };

  if (isLoading) {
    return (
      <div className="app">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading quiz questions...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Quiz App</h1>
        </header>

        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <Quiz
                  questions={questions}
                  currentQuestionIndex={currentQuestionIndex}
                  selectedAnswers={selectedAnswers}
                  onAnswerSelect={handleAnswerSelect}
                  onNextQuestion={handleNextQuestion}
                  onPreviousQuestion={handlePreviousQuestion}
                  isQuizComplete={isQuizComplete}
                />
              }
            />
            <Route
              path="/results"
              element={
                <Results
                  questions={questions}
                  selectedAnswers={selectedAnswers}
                  score={score}
                  onRestartQuiz={handleRestartQuiz}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
