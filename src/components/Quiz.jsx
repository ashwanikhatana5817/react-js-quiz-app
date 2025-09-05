import { useNavigate } from "react-router-dom";
import Question from "./Question";
import ProgressBar from "./ProgressBar";

const Quiz = ({
  questions,
  currentQuestionIndex,
  selectedAnswers,
  onAnswerSelect,
  onNextQuestion,
  onPreviousQuestion,
  isQuizComplete,
}) => {
  const navigate = useNavigate();
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleNext = () => {
    if (isQuizComplete) {
      navigate("/results");
    } else {
      onNextQuestion();
    }
  };

  const isAnswerSelected = selectedAnswers[currentQuestion?.id] !== undefined;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  if (!currentQuestion) {
    return (
      <div className="quiz-container">
        <div className="error-message">
          <h2>No questions available</h2>
          <p>Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <ProgressBar progress={progress} />
        <div className="question-counter">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>
      </div>

      <Question
        question={currentQuestion}
        selectedAnswer={selectedAnswers[currentQuestion.id]}
        onAnswerSelect={onAnswerSelect}
      />

      <div className="quiz-navigation">
        <button
          className="nav-button prev-button"
          onClick={onPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>

        <button
          className="nav-button next-button"
          onClick={handleNext}
          disabled={!isAnswerSelected}
        >
          {isLastQuestion ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
