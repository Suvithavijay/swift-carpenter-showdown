<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import taylorImg from './assets/taylor.jpg';
import sabrinaImg from './assets/sabrina.png';

const QUESTIONS = {
  taylor: {
    eras: [
      {
        type: 'multiple',
        question: "Which album marked the start of Taylor's 'Reputation' era?",
        options: ['1989', 'Red', 'Reputation', 'Lover'],
        answer: 'Reputation',
      },
      {
        type: 'truefalse',
        question: 'The "Fearless" era came before the "Speak Now" era.',
        answer: true,
      },
      {
        type: 'multiple',
        question: 'Which color is most associated with the "Red" era?',
        options: ['Blue', 'Red', 'Green', 'Gold'],
        answer: 'Red',
      },
      {
        type: 'multiple',
        question: 'Which Taylor Swift album features the song "All Too Well"?',
        options: ['Red', 'Lover', '1989', 'Midnights'],
        answer: 'Red',
      },
      {
        type: 'truefalse',
        question: 'Taylor Swift has an album called "Midnights".',
        answer: true,
      },
      {
        type: 'multiple',
        question: 'Which Taylor Swift album won Album of the Year at the 2016 Grammys?',
        options: ['1989', 'Red', 'Fearless', 'Lover'],
        answer: '1989',
      },
      {
        type: 'multiple',
        question: 'Which era is known for the snake motif and the song "Look What You Made Me Do"?',
        options: ['Reputation', 'Lover', 'Red', 'Speak Now'],
        answer: 'Reputation',
      },
    ],
    'guess-lyric': [
      {
        type: 'multiple',
        question: '"Cause darling I’m a nightmare dressed like a daydream" is a lyric from which song?',
        options: ['Blank Space', 'Style', 'Bad Blood', 'Wildest Dreams'],
        answer: 'Blank Space',
      },
      {
        type: 'multiple',
        question: 'Finish the lyric: "You belong with ___"',
        options: ['me', 'her', 'him', 'us'],
        answer: 'me',
      },
      {
        type: 'multiple',
        question: 'Which Taylor Swift song contains the lyric "I remember it all too well"?',
        options: ['All Too Well', 'Red', 'Enchanted', 'Lover'],
        answer: 'All Too Well',
      },
      {
        type: 'truefalse',
        question: 'The lyric "I shake it off" is from the song "Shake It Off".',
        answer: true,
      },
    ],
    'who-said-it': [
      {
        type: 'multiple',
        question: 'Who said: "Just be yourself, there is no one better"?',
        options: ['Taylor Swift', 'Selena Gomez', 'Ariana Grande', 'Billie Eilish'],
        answer: 'Taylor Swift',
      },
      {
        type: 'truefalse',
        question: 'Taylor Swift said: "No matter what happens in life, be good to people."',
        answer: true,
      },
      {
        type: 'multiple',
        question: 'Who said: "People haven’t always been there for me but music always has."',
        options: ['Taylor Swift', 'Demi Lovato', 'Sabrina Carpenter', 'Olivia Rodrigo'],
        answer: 'Taylor Swift',
      },
    ],
    'finish-line': [
      {
        type: 'multiple',
        question: 'Finish the line: "We are never ever getting back ___"',
        options: ['together', 'again', 'soon', 'here'],
        answer: 'together',
      },
      {
        type: 'multiple',
        question: 'Finish the line: "I knew you were ___ when you walked in"',
        options: ['trouble', 'happy', 'sad', 'mine'],
        answer: 'trouble',
      },
      {
        type: 'multiple',
        question: 'Finish the line: "Loving him was ___"',
        options: ['red', 'blue', 'gold', 'fun'],
        answer: 'red',
      },
    ],
    'album-match': [
      {
        type: 'multiple',
        question: 'Which album is the song "Love Story" from?',
        options: ['Fearless', 'Red', '1989', 'Speak Now'],
        answer: 'Fearless',
      },
      {
        type: 'multiple',
        question: 'Which album features "Cardigan"?',
        options: ['Lover', 'Folklore', 'Evermore', 'Reputation'],
        answer: 'Folklore',
      },
      {
        type: 'multiple',
        question: '"Enchanted" is from which album?',
        options: ['Speak Now', 'Red', '1989', 'Midnights'],
        answer: 'Speak Now',
      },
    ],
  },
  sabrina: {
    singles: [
      {
        type: 'multiple',
        question: 'Which Sabrina Carpenter single features the lyric "I can love me better than you can"?',
        options: ['Nonsense', 'Feather', 'Because I Liked a Boy', 'Vicious'],
        answer: 'Feather',
      },
      {
        type: 'truefalse',
        question: 'Sabrina released "Skin" in 2021.',
        answer: true,
      },
      {
        type: 'multiple',
        question: 'Which song is NOT by Sabrina Carpenter?',
        options: ['Thumbs', 'Eyes Wide Open', 'Enchanted', 'Sue Me'],
        answer: 'Enchanted',
      },
      {
        type: 'multiple',
        question: 'Which Sabrina Carpenter song went viral on TikTok for its outro?',
        options: ['Nonsense', 'Skinny Dipping', 'Paris', 'Sue Me'],
        answer: 'Nonsense',
      },
      {
        type: 'truefalse',
        question: 'Sabrina Carpenter starred in the Disney Channel show "Girl Meets World".',
        answer: true,
      },
      {
        type: 'multiple',
        question: 'Which Sabrina Carpenter single features the lyric "I’m so good at goodbyes, I could do it with my eyes closed"?',
        options: ['Vicious', 'Feather', 'Nonsense', 'Skin'],
        answer: 'Vicious',
      },
      {
        type: 'multiple',
        question: 'Which Sabrina Carpenter song includes the lyric "I’m not even half as pretty"?',
        options: ['Because I Liked a Boy', 'Skinny Dipping', 'Sue Me', 'Thumbs'],
        answer: 'Because I Liked a Boy',
      },
    ],
    'guess-lyric': [
      {
        type: 'multiple',
        question: '"I got a confession, I don’t think I want you anymore" is from which song?',
        options: ['Vicious', 'Feather', 'Nonsense', 'Skin'],
        answer: 'Vicious',
      },
      {
        type: 'multiple',
        question: 'Finish the lyric: "I’m so good at ___, I could do it with my eyes closed"',
        options: ['goodbyes', 'lies', 'love', 'games'],
        answer: 'goodbyes',
      },
      {
        type: 'multiple',
        question: 'Which Sabrina song contains the lyric "I’m not even half as pretty"?',
        options: ['Because I Liked a Boy', 'Skinny Dipping', 'Sue Me', 'Thumbs'],
        answer: 'Because I Liked a Boy',
      },
      {
        type: 'truefalse',
        question: 'The lyric "He said he’s so mature, he’s got his own apartment" is from "Nonsense".',
        answer: false,
      },
    ],
    'who-said-it': [
      {
        type: 'multiple',
        question: 'Who said: "I want to be remembered for the things I create"?',
        options: ['Sabrina Carpenter', 'Taylor Swift', 'Selena Gomez', 'Billie Eilish'],
        answer: 'Sabrina Carpenter',
      },
      {
        type: 'truefalse',
        question: 'Sabrina Carpenter said: "Music is the only thing that makes sense anymore."',
        answer: true,
      },
      {
        type: 'multiple',
        question: 'Who said: "I’m not perfect, but I’m perfectly me."',
        options: ['Sabrina Carpenter', 'Ariana Grande', 'Taylor Swift', 'Olivia Rodrigo'],
        answer: 'Sabrina Carpenter',
      },
    ],
    'finish-line': [
      {
        type: 'multiple',
        question: 'Finish the line: "You can’t spell awesome without ___"',
        options: ['me', 'us', 'love', 'fun'],
        answer: 'me',
      },
      {
        type: 'multiple',
        question: 'Finish the line: "I’m a little bit ___, a little bit reckless"',
        options: ['lost', 'found', 'wild', 'shy'],
        answer: 'lost',
      },
      {
        type: 'multiple',
        question: 'Finish the line: "I’m not your ___, I’m not your friend"',
        options: ['baby', 'girl', 'boy', 'pal'],
        answer: 'baby',
      },
    ],
    'album-match': [
      {
        type: 'multiple',
        question: 'Which album is the song "Sue Me" from?',
        options: ['Singular: Act I', 'Singular: Act II', 'Eyes Wide Open', 'Evolution'],
        answer: 'Singular: Act II',
      },
      {
        type: 'multiple',
        question: 'Which album features "Thumbs"?',
        options: ['Singular: Act I', 'Singular: Act II', 'Eyes Wide Open', 'Evolution'],
        answer: 'Evolution',
      },
      {
        type: 'multiple',
        question: '"Skin" is from which album?',
        options: ['Singular: Act II', 'Emails I Can’t Send', 'Eyes Wide Open', 'Evolution'],
        answer: 'Emails I Can’t Send',
      },
    ],
  },
  both: {
    'guess-lyric': [
      {
        type: 'multiple',
        question: 'Who sings the lyric: "He said he’s so mature, he’s got his own apartment"?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Sabrina Carpenter',
      },
      {
        type: 'multiple',
        question: 'Who sings: "I remember it all too well"?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Taylor Swift',
      },
      {
        type: 'multiple',
        question: 'Who sings: "I can love me better than you can"?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Sabrina Carpenter',
      },
    ],
    'who-said-it': [
      {
        type: 'multiple',
        question: 'Who said: "Just be yourself, there is no one better"?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Taylor Swift',
      },
      {
        type: 'multiple',
        question: 'Who said: "I want to be remembered for the things I create"?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Sabrina Carpenter',
      },
      {
        type: 'multiple',
        question: 'Who said: "No matter what happens in life, be good to people."?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Taylor Swift',
      },
    ],
    'finish-line': [
      {
        type: 'multiple',
        question: 'Finish the line: "We are never ever getting back ___"',
        options: ['together', 'again', 'soon', 'here'],
        answer: 'together',
      },
      {
        type: 'multiple',
        question: 'Finish the line: "I’m not your ___, I’m not your friend"',
        options: ['baby', 'girl', 'boy', 'pal'],
        answer: 'baby',
      },
      {
        type: 'multiple',
        question: 'Finish the line: "Loving him was ___"',
        options: ['red', 'blue', 'gold', 'fun'],
        answer: 'red',
      },
    ],
    'album-match': [
      {
        type: 'multiple',
        question: 'Which artist released the album "Red"?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Taylor Swift',
      },
      {
        type: 'multiple',
        question: 'Which artist released the album "Emails I Can’t Send"?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Sabrina Carpenter',
      },
      {
        type: 'multiple',
        question: 'Which artist released the album "Speak Now"?',
        options: ['Taylor Swift', 'Sabrina Carpenter'],
        answer: 'Taylor Swift',
      },
    ],
  },
}

function getQuestions(mode, genre) {
  return (QUESTIONS[mode] && QUESTIONS[mode][genre]) || [];
}

const ARTIST_IMAGES = {
  taylor: '', // No external image
  sabrina: '', // No external image
  both: '', // fallback to none
};

const ARTIST_BRIGHT_IMAGES = {
  taylor: taylorImg,
  sabrina: sabrinaImg,
  both: taylorImg,
};

const TAYLOR_IMAGES = [
  '/images/ts/21167-1-taylor-swift-image-thumb.png',
  '/images/ts/521864.jpg',
  '/images/ts/70+ Taylor Swift HD Wallpapers - Download at WallpaperBro.jpeg',
  '/images/ts/taylor-swift-1920x1080.jpg',
  '/images/ts/taylor-swift-pictures.jpg',
];

// Add Sabrina images array
const SABRINA_IMAGES = [
  '/images/SC/bs-bst-hp-n1_000.jpg',
  '/images/SC/bs-bst-hp-n1_001.jpg',
  '/images/SC/bst-hp-n2-2025_005.jpg',
  '/images/SC/prada-lipstick-ps_001.jpg',
  '/images/SC/prada-lipstick-ps_002.jpg',
];

function SparkleOverlay() {
  const sparkleIcons = ['✨', '💖', '⭐', '💫', '🌟', '🩷', '🩵', '💜', '💛', '💙', '💚'];
  const sparkleColors = [
    'text-pink-300', 'text-pink-400', 'text-fuchsia-300', 'text-purple-300', 'text-purple-400', 'text-cyan-300', 'text-cyan-400', 'text-yellow-300', 'text-yellow-400', 'text-white/80'
  ];
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {[...Array(48)].map((_, i) => {
        const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
        const icon = sparkleIcons[Math.floor(Math.random() * sparkleIcons.length)];
        return (
          <motion.span
            key={i}
            className={`absolute ${color} text-3xl md:text-4xl select-none`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 12px #fff) drop-shadow(0 0 24px #f0f) drop-shadow(0 0 32px #0ff)'
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.7, 1.5, 0.7],
              rotate: [0, 180, 360],
              color: [
                '#f472b6', '#f0abfc', '#a78bfa', '#facc15', '#f472b6', '#f0abfc', '#a78bfa', '#facc15'
              ],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2.5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          >
            {icon}
          </motion.span>
        )
      })}
    </div>
  )
}

// Add extra floating hearts and stars
function ExtraGirlyOverlay() {
  const icons = [
    '💖', '💗', '💜', '💙', '💚', '💛', '💞', '💫', '⭐', '🌈', '🦋', '✨', '🎀', '🩷', '🩵', '🧡', '🤍', '💐', '🌸', '🌺', '🦄'
  ];
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {[...Array(24)].map((_, i) => {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        return (
          <motion.span
            key={i}
            className="absolute text-2xl md:text-3xl select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #f0f) drop-shadow(0 0 24px #0ff)'
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          >
            {icon}
          </motion.span>
        )
      })}
    </div>
  )
}

// Add animated rainbow overlay
function RainbowOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 mix-blend-screen animate-rainbow-glow">
      <div className="w-full h-full bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-400 via-purple-400 to-pink-400 opacity-30 animate-gradient-x" />
    </div>
  );
}

// Add badge logic for leaderboard
const BADGES = [
  { emoji: '👑', label: 'Swiftie Queen/King' },
  { emoji: '✨', label: 'Pop Sparkle' },
  { emoji: '⭐', label: 'Chart Star' },
  { emoji: '💖', label: 'Heartthrob' },
  { emoji: '🎀', label: 'Glam Bow' },
];

// Helper to get leaderboard key
function getLeaderboardKey(mode, genre) {
  return `leaderboard_${mode}_${genre}`;
}

// Helper to get a shuffled, repeated array of images for the number of questions
function getShuffledImages(images, num) {
  let arr = [];
  while (arr.length < num) arr = arr.concat(images);
  // Shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, num);
}

export default function QuestionsPage() {
  const { mode, genre } = useParams();
  const questions = getQuestions(mode, genre);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  const leaderboardKey = getLeaderboardKey(mode, genre);

  useEffect(() => {
    // Load leaderboard for this mode/genre
    const lb = JSON.parse(localStorage.getItem(leaderboardKey) || '[]');
    setLeaderboard(lb);
  }, [leaderboardKey]);

  useEffect(() => {
    if (finished) {
      setShowNamePrompt(true);
    }
  }, [finished]);

  function saveScore(name, score) {
    const lb = JSON.parse(localStorage.getItem(leaderboardKey) || '[]');
    lb.push({ name, score, date: Date.now() });
    lb.sort((a, b) => b.score - a.score || a.date - b.date);
    const top5 = lb.slice(0, 5);
    localStorage.setItem(leaderboardKey, JSON.stringify(top5));
    setLeaderboard(top5);
  }

  function handleNameSubmit(e) {
    e.preventDefault();
    if (playerName.trim()) {
      saveScore(playerName.trim(), score);
      setShowNamePrompt(false);
    }
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-fuchsia-100 to-cyan-50 text-gray-900 relative overflow-hidden">
        <SparkleOverlay />
        <div className="relative z-10 backdrop-blur-md bg-white/40 rounded-3xl shadow-2xl p-8 max-w-lg w-full border border-pink-200/30 mt-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center drop-shadow-glow animate-pulse">
            No questions found for this genre yet!
          </h2>
        </div>
      </div>
    )
  }

  const q = questions[current];
  const isLast = current === questions.length - 1;

  function handleSelect(option) {
    setSelected(option);
    setShowAnswer(true);
    if ((q.type === 'multiple' && option === q.answer) || (q.type === 'truefalse' && option === q.answer)) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3500);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowAnswer(false);
    }
  }

  // In QuestionsPage, use useMemo for bgOrder
  const bgOrder = useMemo(() => {
    if (mode === 'taylor') return getShuffledImages(TAYLOR_IMAGES, questions.length);
    if (mode === 'sabrina') return getShuffledImages(SABRINA_IMAGES, questions.length);
    return [];
  }, [mode, questions.length]);
  const bgImg = (mode === 'taylor' || mode === 'sabrina') ? bgOrder[current] : null;

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-pink-400 via-pink-300 via-fuchsia-300 to-pink-200 text-gray-900 relative overflow-hidden font-['Quicksand'],['Comic Sans MS'],cursive">
      <SparkleOverlay />
      <ExtraGirlyOverlay />
      {/* Glam background blobs - more pink and hearts */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-pink-400 opacity-60 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-fuchsia-400 opacity-50 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-44 h-44 bg-pink-300 opacity-60 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-200 opacity-60 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-fuchsia-300 opacity-50 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-gradient-to-br from-pink-400 via-pink-200 to-fuchsia-400 opacity-50 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" />
      </div>
      {/* Remove the <img> for the background and use a <div> with backgroundImage instead */}
      <div
        className="absolute inset-0 w-full h-full z-0 opacity-80 bg-center bg-cover"
        style={{ backgroundImage: bgImg ? `url('${bgImg}')` : 'none', filter: 'brightness(1.05) saturate(1.2)' }}
      />
      {/* Add a dark overlay for readability over the background image for both Taylor and Sabrina */}
      {(mode === 'taylor' && bgImg) || (mode === 'sabrina' && bgImg) ? (
        <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />
      ) : null}
      {((mode === 'taylor' && bgImg) || (mode === 'sabrina' && bgImg)) && (
        <div className="absolute inset-0 z-15 bg-gradient-to-br from-pink-400 via-fuchsia-400 to-purple-400 opacity-30 pointer-events-none" />
      )}
      {ARTIST_BRIGHT_IMAGES[mode] && (
        <img
          src={ARTIST_BRIGHT_IMAGES[mode]}
          alt={mode === 'taylor' ? 'Taylor Swift' : mode === 'sabrina' ? 'Sabrina Carpenter' : 'Taylor & Sabrina'}
          className="block md:hidden w-full max-h-60 object-cover z-10 opacity-95 drop-shadow-2xl"
          style={{ objectPosition: 'top center', filter: 'brightness(1.1) saturate(1.3)' }}
        />
      )}
      {/* Translucent overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-pink-100/60 to-pink-200/80 z-10" />
      {/* Progress bar */}
      <div className="w-full max-w-2xl mx-auto z-20 mt-8 mb-4 px-4">
        <div className="h-3 rounded-full bg-yellow-200/60 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-yellow-300 via-green-300 to-blue-400 rounded-full transition-all duration-500 animate-pulse"
            style={{ width: `${((current + (finished ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>
      {/* Main quiz content - always visible, no flicker */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full md:w-1/2 px-4 py-8">
        <div className="rounded-3xl p-2 bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-300 shadow-2xl mb-6 w-full max-w-2xl">
          <div className="bg-white/95 rounded-3xl px-8 py-10 w-full flex flex-col items-center shadow-xl" style={{background: 'rgba(255,255,255,0.95)'}}>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-2 text-center drop-shadow-glow animate-pulse bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-['Quicksand'],['Comic Sans MS'],cursive" style={{textShadow: '0 2px 8px #000, 0 1px 0 #fff'}}>
              {mode === 'taylor' && 'Taylor Swift'}
              {mode === 'sabrina' && 'Sabrina Carpenter'}
              {mode === 'both' && 'Taylor & Sabrina'}
            </h2>
            <div className="block text-3xl md:text-4xl font-semibold mb-6 text-fuchsia-600 text-center drop-shadow-glow">
              {genre.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Trivia
            </div>
            <div className="mb-4 text-center text-2xl text-pink-600 font-bold">Question {current + 1} of {questions.length} <span className="mx-2">|</span> <span className="text-yellow-500">Score: {score}</span></div>
            {finished ? (
              <div className="text-center text-3xl font-bold text-pink-600 mt-8 bg-white/70 rounded-2xl px-8 py-8 shadow-xl animate-bounce">
                🎉 You scored {score} out of {questions.length}!<br/>
                <span className="text-2xl text-fuchsia-500">Thanks for playing!</span>
              </div>
            ) : (
              <>
                <div className="mb-8 text-3xl md:text-4xl font-extrabold text-center min-h-[60px] rounded-xl px-8 py-6 shadow-lg" style={{color: '#2d0036', background: 'rgba(255,255,255,0.98)', textShadow: '0 2px 8px #fff, 0 1px 0 #000'}}>
                  {q.question}
                </div>
                {q.type === 'multiple' && (
                  <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        className={`py-5 px-8 rounded-2xl border-2 font-bold text-2xl w-full shadow-md bg-gradient-to-r from-pink-200 via-fuchsia-200 to-pink-100 text-pink-700 border-pink-300/80 ${selected === opt ? (opt === q.answer ? 'bg-green-200 border-green-400 text-green-900' : 'bg-red-200 border-red-400 text-red-900') : ''}`}
                        onClick={() => handleSelect(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
                {q.type === 'truefalse' && (
                  <div className="flex flex-row gap-10 justify-center">
                    {[true, false].map((opt) => (
                      <button
                        key={String(opt)}
                        className={`py-5 px-12 rounded-2xl border-2 font-bold text-2xl shadow-md bg-gradient-to-r from-pink-200 via-fuchsia-200 to-pink-100 text-pink-700 border-pink-300/80 ${selected === opt ? (opt === q.answer ? 'bg-green-200 border-green-400 text-green-900' : 'bg-red-200 border-red-400 text-red-900') : ''}`}
                        onClick={() => handleSelect(opt)}
                      >
                        {opt ? 'True' : 'False'}
                      </button>
                    ))}
                  </div>
                )}
                {q.type === 'fill' && (
                  <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
                    <input
                      type="text"
                      className="py-5 px-8 rounded-2xl border-2 font-bold text-2xl transition-all w-full shadow-md bg-white/90 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                      placeholder={`Enter your answer for "${q.question}"`}
                      value={selected || ''}
                      onChange={(e) => setSelected(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSelect(selected);
                        }
                      }}
                      disabled={showAnswer}
                    />
                  </div>
                )}
                {showAnswer && (
                  <div className="mt-10 text-center">
                    {selected === q.answer ? (
                      <span className="text-green-600 font-bold text-2xl">Correct!</span>
                    ) : (
                      <span className="text-red-600 font-bold text-2xl">Incorrect. The answer is: {String(q.answer)}</span>
                    )}
                    <br/>
                    <button
                      className="mt-8 py-4 px-14 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-300 text-gray-900 font-bold text-2xl shadow-lg hover:from-pink-600 hover:to-fuchsia-400 border-2 border-pink-200/60 animate-bounce"
                      onClick={handleNext}
                    >
                      {isLast ? 'Finish' : 'Next'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {showNamePrompt && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <form onSubmit={handleNameSubmit} className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 border-4 border-pink-200 animate-bounce-in">
            <div className="text-2xl font-bold text-pink-500 mb-2">Enter your name for the leaderboard!</div>
            <input
              className="py-3 px-6 rounded-xl border-2 border-pink-300 text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={playerName}
              onChange={e => setPlayerName(e.target.value)}
              placeholder="Your name"
              maxLength={20}
              autoFocus
            />
            <button type="submit" className="py-2 px-8 rounded-xl bg-gradient-to-r from-pink-400 via-fuchsia-300 to-cyan-200 text-gray-900 font-bold shadow-md border-2 border-pink-100/40 mt-2">Save</button>
          </form>
        </div>
      )}
      {finished && leaderboard.length > 0 && (
        <div className="mt-10 w-full max-w-xl mx-auto bg-white/80 rounded-2xl shadow-xl border-2 border-pink-200 p-6 z-30 relative animate-fade-in">
          <h3 className="text-2xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">🏆 Leaderboard</h3>
          <ol className="space-y-2">
            {leaderboard.map((entry, i) => (
              <li key={i} className="flex items-center justify-between px-4 py-2 rounded-xl bg-gradient-to-r from-pink-100 via-fuchsia-100 to-cyan-100 shadow-sm">
                <span className="flex items-center gap-2 font-bold text-pink-600 text-lg">
                  <span className="text-2xl" title={BADGES[i]?.label || ''}>{BADGES[i]?.emoji || ''}</span>
                  {i + 1}. {entry.name}
                </span>
                <span className="font-extrabold text-fuchsia-500 text-xl">{entry.score}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
} 
=======
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import taylorImg from './assets/taylor.jpg';
import sabrinaImg from './assets/sabrina.png';
import { QUESTIONS } from './questions';

const TIMER_SECONDS = 15;

const QuestionsPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [playerName, setPlayerName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-['Quicksand'],['Comic Sans MS'],cursive">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
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
>>>>>>> 9d03b7b (feat: 5-question quiz with unique backgrounds per question, artist-specific logic, and expanded question pool)
