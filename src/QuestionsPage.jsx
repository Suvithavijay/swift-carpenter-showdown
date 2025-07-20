import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { QUESTIONS } from './questions';

const TAYLOR_IMAGES = [
  "/images/ts/21167-1-taylor-swift-image-thumb.png",
  "/images/ts/521864.jpg",
  "/images/ts/70+ Taylor Swift HD Wallpapers - Download at WallpaperBro.jpeg",
  "/images/ts/taylor-swift-1920x1080.jpg",
  "/images/ts/taylor-swift-pictures.jpg"
];
const SABRINA_IMAGES = [
  "/images/SC/bs-bst-hp-n1_000.jpg",
  "/images/SC/bs-bst-hp-n1_001.jpg",
  "/images/SC/bst-hp-n2-2025_005.jpg",
  "/images/SC/prada-lipstick-ps_001.jpg",
  "/images/SC/prada-lipstick-ps_002.jpg"
];

const TIMER_SECONDS = 15;

const QuestionsPage = () => {
  const { mode } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [playerName, setPlayerName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

  // Memoize background image order for the session
  const bgOrder = useMemo(() => {
    let arr = [];
    if (mode === 'taylor') arr = [...TAYLOR_IMAGES];
    else if (mode === 'sabrina') arr = [...SABRINA_IMAGES];
    else arr = [...TAYLOR_IMAGES, ...SABRINA_IMAGES];
    // Shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [mode]);
  const bgImg = bgOrder[currentQuestion % bgOrder.length];

  const currentQuestionData = QUESTIONS[currentQuestion];

  useEffect(() => {
    if (!showResult && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !showResult) {
      handleAnswerClick({ text: 'No answer', isCorrect: false });
    }
  }, [timer, showResult]);

  useEffect(() => {
    const lb = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    setLeaderboard(lb);
  }, []);

  const handleAnswerClick = (answer) => {
    if (showResult || selectedAnswer) return; // Prevent multiple answers
    setSelectedAnswer(answer);
    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestionData.question,
        selected: answer.text,
        correct: currentQuestionData.answers.find(a => a.isCorrect).text,
        isCorrect: answer.isCorrect,
      }
    ]);
    if (answer.isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
    setTimer(TIMER_SECONDS);
  };

  const saveScore = (name, score) => {
    const lb = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    lb.push({ name, score, date: Date.now() });
    lb.sort((a, b) => b.score - a.score || a.date - b.date);
    const top5 = lb.slice(0, 5);
    localStorage.setItem('leaderboard', JSON.stringify(top5));
    setLeaderboard(top5);
  };

  // Show summary page at the end
  if (currentQuestion >= QUESTIONS.length) {
    let badge = '';
    if (score === QUESTIONS.length) {
      badge = "🏆 Perfect! You're a Pop Superstar!";
    } else if (score >= QUESTIONS.length * 0.7) {
      badge = "🎉 Great job! You're a Chart Climber!";
    } else if (score >= QUESTIONS.length * 0.4) {
      badge = "✨ Not bad! Keep practicing!";
    } else {
      badge = "💪 Give it another try!";
    }
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Quiz Summary</h2>
          <ul className="space-y-4">
            {userAnswers.map((ans, idx) => (
              <li key={idx} className="p-4 rounded-lg border border-gray-300 bg-gray-50">
                <div className="font-semibold mb-2 text-gray-900">{ans.question}</div>
                <div>
                  <span className="text-gray-800">Your answer: </span>
                  <span className={ans.isCorrect ? "text-green-700 font-bold" : "text-red-700 font-bold"}>
                    {ans.selected === 'No answer' ? <span className="italic text-gray-500">No answer selected</span> : ans.selected}
                  </span>
                </div>
                {!ans.isCorrect && (
                  <div>
                    <span className="text-gray-800">Correct answer: </span>
                    <span className="text-green-700 font-bold">{ans.correct}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-xl font-bold text-center text-gray-900">
            Score: {score} / {QUESTIONS.length}
          </div>
          <div className="mt-4 text-lg font-bold text-center text-gray-900">
            {badge}
          </div>
          {showNamePrompt && (
            <form
              onSubmit={e => {
                e.preventDefault();
                saveScore(playerName, score);
                setShowNamePrompt(false);
              }}
              className="mt-6 flex flex-col items-center"
            >
              <input
                className="border p-2 rounded mb-2"
                placeholder="Enter your name"
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
                required
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
                Save Score
              </button>
            </form>
          )}
          {!showNamePrompt && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-2">🏆 Leaderboard</h3>
              <ul>
                {leaderboard.map((entry, idx) => (
                  <li key={idx} className="mb-1">
                    {idx + 1}. {entry.name} — {entry.score}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!currentQuestionData) return null;

  return (
    <div className="min-h-screen flex items-center justify-center font-['Quicksand'],['Comic Sans MS'],cursive" style={{ backgroundImage: `url('${bgImg}')`, backgroundSize: 'cover', backgroundPosition: 'center', border: '5px solid red' }}>
      <div className="p-8 rounded-lg shadow-xl max-w-md w-full" style={{ background: 'rgba(255,255,255,0.6)' }}>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">Question {currentQuestion + 1} / {QUESTIONS.length}</span>
          <span className="text-lg font-bold text-blue-600">Score: {score}</span>
          <span className="text-lg font-bold text-red-600">⏰ {timer}s</span>
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">{currentQuestionData.question}</h1>
        <div className="grid gap-4">
          {currentQuestionData.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className="p-4 bg-blue-500 text-white rounded-lg text-lg font-semibold focus:outline-none"
              disabled={showResult}
            >
              {answer.text}
            </button>
          ))}
        </div>
        {showResult && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-lg font-semibold">
            {selectedAnswer.isCorrect ? 'Correct!' : 'Incorrect!'}
          </div>
        )}
        {showResult && (
          <button
            onClick={handleNextQuestion}
            className="mt-4 p-4 bg-blue-500 text-white rounded-lg text-lg font-semibold focus:outline-none"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
