const Question = ({ question, selectedAnswer, onAnswerSelect }) => {
  const handleAnswerClick = (answerIndex) => {
    onAnswerSelect(question.id, answerIndex);
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question.question}</h2>

      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer === index ? "selected" : ""
            }`}
            onClick={() => handleAnswerClick(index)}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
