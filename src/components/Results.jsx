import { useNavigate } from "react-router-dom";

const Results = ({ questions, selectedAnswers, score, onRestartQuiz }) => {
  const navigate = useNavigate();
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent! 🎉";
    if (percentage >= 70) return "Good job! 👍";
    if (percentage >= 50) return "Not bad! 😊";
    return "Keep practicing! 💪";
  };

  const handleRestart = () => {
    onRestartQuiz();
    navigate("/");
  };

  return (
    <div className="results-container">
      <div className="results-header">
        <h2>Quiz Complete!</h2>
        <div className="score-display">
          <div className="score-circle">
            <span className="score-number">{score}</span>
            <span className="score-total">/{totalQuestions}</span>
          </div>
          <div className="score-details">
            <p className="score-percentage">{percentage}%</p>
            <p className="score-message">{getScoreMessage()}</p>
          </div>
        </div>
      </div>

      <div className="results-summary">
        <h3>Answer Summary</h3>
        <div className="answers-list">
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[question.id];
            const isCorrect = userAnswer === question.correct;
            const userAnswerText =
              question.options[userAnswer] || "Not answered";
            const correctAnswerText = question.options[question.correct];

            return (
              <div
                key={question.id}
                className={`answer-item ${isCorrect ? "correct" : "incorrect"}`}
              >
                <div className="answer-header">
                  <span className="question-number">Q{index + 1}</span>
                  <span
                    className={`answer-status ${
                      isCorrect ? "correct" : "incorrect"
                    }`}
                  >
                    {isCorrect ? "✓" : "✗"}
                  </span>
                </div>
                <p className="question-text">{question.question}</p>
                <div className="answer-details">
                  <div className="user-answer">
                    <strong>Your answer:</strong> {userAnswerText}
                  </div>
                  {!isCorrect && (
                    <div className="correct-answer">
                      <strong>Correct answer:</strong> {correctAnswerText}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="results-actions">
        <button className="restart-button" onClick={handleRestart}>
          Take Quiz Again
        </button>
      </div>
    </div>
  );
};

export default Results;
