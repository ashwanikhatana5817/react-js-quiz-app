# Quiz App

A modern, responsive React quiz application built with Vite. Test your knowledge with multiple-choice questions and get instant feedback on your performance.

## Features

- 🎯 **Interactive Quiz**: Answer multiple-choice questions one at a time
- 📊 **Progress Tracking**: Visual progress bar and question counter
- 🏆 **Score Calculation**: Real-time scoring with percentage display
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🎨 **Modern UI**: Clean, beautiful interface with smooth animations
- 📋 **Detailed Results**: Complete answer summary with correct/incorrect indicators
- 🔄 **Restart Functionality**: Take the quiz multiple times

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:

   ```bash
   cd quiz-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
quiz-app/
├── src/
│   ├── components/
│   │   ├── Quiz.jsx          # Main quiz component
│   │   ├── Question.jsx      # Individual question display
│   │   ├── ProgressBar.jsx   # Progress indicator
│   │   └── Results.jsx       # Results page
│   ├── data/
│   │   └── questions.json    # Quiz questions data
│   ├── App.jsx              # Main app component
│   ├── App.css              # Styling
│   └── main.jsx             # Entry point
├── package.json
├── vite.config.js
└── index.html
```

## How to Use

1. **Start the Quiz**: The quiz begins automatically when you load the page
2. **Answer Questions**: Click on one of the four answer options for each question
3. **Navigate**: Use the "Previous" and "Next" buttons to move between questions
4. **Complete**: Click "Finish Quiz" on the last question to see your results
5. **Review Results**: See your score, percentage, and detailed answer summary
6. **Restart**: Click "Take Quiz Again" to start over

## Customization

### Adding Questions

Edit `src/data/questions.json` to add, modify, or remove questions:

```json
{
  "id": 1,
  "question": "Your question here?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 2
}
```

- `id`: Unique identifier for the question
- `question`: The question text
- `options`: Array of 4 answer options
- `correct`: Index (0-3) of the correct answer

### Styling

The app uses CSS for styling. Main styles are in `src/App.css`. The design is fully responsive and includes:

- Modern gradient backgrounds
- Smooth animations and transitions
- Mobile-first responsive design
- Accessible color contrasts

## Technical Details

- **Framework**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router for navigation between quiz and results
- **State Management**: React useState and useEffect hooks
- **Styling**: Pure CSS with modern features (flexbox, grid, gradients)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
