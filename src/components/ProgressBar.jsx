const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="progress-text">{Math.round(progress)}%</span>
    </div>
  );
};

export default ProgressBar;
