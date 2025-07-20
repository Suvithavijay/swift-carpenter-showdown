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

function getRandomUnique(arr, n) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function getQuestionsByMode(mode) {
  if (mode === 'taylor') {
    return QUESTIONS.filter(q => q.artist === 'taylor');
  } else if (mode === 'sabrina') {
    return QUESTIONS.filter(q => q.artist === 'sabrina');
  } else {
    return QUESTIONS;
  }
}

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
  const [roundQuestions, setRoundQuestions] = useState([]);

  // On mount, select 5 unique random questions for this round
  useEffect(() => {
    const pool = getQuestionsByMode(mode);
    setRoundQuestions(getRandomUnique(pool, 5));
  }, [mode]);

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

  const currentQuestionData = roundQuestions[currentQuestion];

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
  if (currentQuestion >= 5) {
    let badge = '';
    if (score === 5) {
      badge = "🏆 Perfect! You're a Pop Superstar!";
    } else if (score >= 4) {
      badge = "🎉 Great job! You're a Chart Climber!";
    } else if (score >= 2) {
      badge = "✨ Not bad! Keep practicing!";
    } else {
      badge = "💪 Give it another try!";
    }
    return (
      <div className="min-h-screen flex items-center justify-center font-['Quicksand'],['Comic Sans MS'],cursive" style={{ backgroundImage: `url('${bgImg}')`, backgroundSize: 'cover', backgroundPosition: 'center', border: '5px solid red', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 0 }} />
        <div className="p-8 rounded-lg shadow-xl max-w-md w-full" style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Quiz Summary</h2>
          <ul style={{ marginBottom: '2rem' }}>
            {userAnswers.map((ans, idx) => (
              <li key={idx} style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #fff', background: 'rgba(255,255,255,0.08)', marginBottom: '1rem', color: '#fff' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{ans.question}</div>
                <div>
                  <span>Your answer: </span>
                  <span style={{ fontWeight: 'bold', color: ans.isCorrect ? '#7fffd4' : '#ffbaba' }}>
                    {ans.selected === 'No answer' ? <span style={{ fontStyle: 'italic', color: '#ccc' }}>No answer selected</span> : ans.selected}
                  </span>
                </div>
                {!ans.isCorrect && (
                  <div>
                    <span>Correct answer: </span>
                    <span style={{ fontWeight: 'bold', color: '#7fffd4' }}>{ans.correct}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
            Score: {score} / 5
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
            {badge}
          </div>
          {showNamePrompt && (
            <form
              onSubmit={e => {
                e.preventDefault();
                saveScore(playerName, score);
                setShowNamePrompt(false);
              }}
              style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <input
                style={{ border: '1px solid #fff', padding: '0.5rem', borderRadius: '0.5rem', marginBottom: '0.5rem', background: 'rgba(255,255,255,0.15)', color: '#fff' }}
                placeholder="Enter your name"
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
                required
              />
              <button style={{ background: '#fff', color: '#222', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold' }} type="submit">
                Save Score
              </button>
            </form>
          )}
          {!showNamePrompt && (
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🏆 Leaderboard</h3>
              <ul>
                {leaderboard.map((entry, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
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
    <div
      className="min-h-screen flex items-center justify-center font-['Quicksand'],['Comic Sans MS'],cursive"
      style={{
        backgroundImage: `url('${bgImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '5px solid red',
        color: '#fff'
      }}
    >
      {/* Dark overlay for contrast */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 0 }} />
      <div
        className="p-8 rounded-lg shadow-xl max-w-md w-full"
        style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', position: 'relative', zIndex: 1 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontWeight: 'bold' }}>Question {currentQuestion + 1} / 5</span>
          <span style={{ fontWeight: 'bold' }}>Score: {score}</span>
          <span style={{ fontWeight: 'bold' }}>⏰ {timer}s</span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>{currentQuestionData.question}</h1>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {currentQuestionData.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              style={{ padding: '1rem', background: '#fff', color: '#222', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer', opacity: showResult ? 0.7 : 1 }}
              disabled={showResult}
            >
              {answer.text}
            </button>
          ))}
        </div>
        {showResult && (
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(127,255,212,0.15)', color: selectedAnswer.isCorrect ? '#7fffd4' : '#ffbaba', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
            {selectedAnswer.isCorrect ? 'Correct!' : 'Incorrect!'}
          </div>
        )}
        {showResult && (
          <button
            onClick={handleNextQuestion}
            style={{ marginTop: '1rem', padding: '1rem', background: '#fff', color: '#222', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
