import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import { motion } from 'framer-motion'
=======
>>>>>>> 9d03b7b (feat: 5-question quiz with unique backgrounds per question, artist-specific logic, and expanded question pool)

const GENRES = {
  taylor: [
    { key: 'eras', label: "Taylor's Eras" },
    { key: 'guess-lyric', label: 'Guess the Lyric' },
    { key: 'who-said-it', label: 'Who Said It?' },
    { key: 'finish-line', label: 'Finish the Line' },
    { key: 'album-match', label: 'Album Match' },
  ],
  sabrina: [
    { key: 'singles', label: "Sabrina's Singles" },
    { key: 'guess-lyric', label: 'Guess the Lyric' },
    { key: 'who-said-it', label: 'Who Said It?' },
    { key: 'finish-line', label: 'Finish the Line' },
    { key: 'album-match', label: 'Album Match' },
  ],
  both: [
    { key: 'guess-lyric', label: 'Guess the Lyric' },
    { key: 'who-said-it', label: 'Who Said It?' },
    { key: 'finish-line', label: 'Finish the Line' },
    { key: 'album-match', label: 'Album Match' },
  ],
}

<<<<<<< HEAD
// Add extra floating hearts and stars
function ExtraGirlyOverlay() {
  const icons = [
    '💖', '💗', '💜', '💙', '💚', '💛', '💞', '💫', '⭐', '🌈', '🦋', '✨', '🎀', '🩷', '🩵', '🧡', '🤍', '💐', '🌸', '🌺', '🦄'
  ];
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {[...Array(18)].map((_, i) => {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        return (
          <span
            key={i}
            className="absolute text-2xl md:text-3xl select-none animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #f0f) drop-shadow(0 0 24px #0ff)'
            }}
          >
            {icon}
          </span>
        )
      })}
    </div>
  )
}

=======
>>>>>>> 9d03b7b (feat: 5-question quiz with unique backgrounds per question, artist-specific logic, and expanded question pool)
export default function GenreSelection() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const genres = GENRES[mode] || [];

  return (
<<<<<<< HEAD
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-fuchsia-200 via-30% via-yellow-100 via-60% to-cyan-100 text-gray-900 relative overflow-hidden font-['Quicksand'],['Comic Sans MS'],cursive">
      <ExtraGirlyOverlay />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-pink-200 opacity-40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-fuchsia-200 opacity-30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-purple-200 opacity-40 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-10 right-10 w-16 h-16 bg-pink-100 opacity-40 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-cyan-200 opacity-30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-100 via-yellow-100 to-fuchsia-100 opacity-30 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-center drop-shadow-glow animate-pulse bg-gradient-to-r from-pink-400 via-fuchsia-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent font-['Quicksand'],['Comic Sans MS'],cursive">
=======
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-fuchsia-200 via-30% via-yellow-100 via-60% to-cyan-100 text-gray-900 font-['Quicksand'],['Comic Sans MS'],cursive">
      <div className="flex flex-col items-center justify-center w-full px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-pink-400 via-fuchsia-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent font-['Quicksand'],['Comic Sans MS'],cursive">
>>>>>>> 9d03b7b (feat: 5-question quiz with unique backgrounds per question, artist-specific logic, and expanded question pool)
          Choose a Genre
        </h2>
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          {genres.map((genre) => (
<<<<<<< HEAD
            <motion.button
              key={genre.key}
              whileHover={{ scale: 1.06, boxShadow: '0 0 16px #f472b6, 0 0 32px #a5f3fc' }}
              whileTap={{ scale: 0.97 }}
=======
            <button
              key={genre.key}
>>>>>>> 9d03b7b (feat: 5-question quiz with unique backgrounds per question, artist-specific logic, and expanded question pool)
              className="py-4 px-8 rounded-2xl border-2 font-bold text-lg transition-all w-full shadow-md bg-gradient-to-r from-pink-100 via-yellow-100 to-fuchsia-100 text-pink-700 hover:from-pink-200 hover:to-fuchsia-200 border-pink-200/60"
              onClick={() => navigate(`/questions/${mode}/${genre.key}`)}
            >
              {genre.label}
<<<<<<< HEAD
            </motion.button>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-700 animate-fade-in">
          <span className="inline-block animate-bounce">🎤</span> Pick your favorite round!
=======
            </button>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-700">
          <span className="inline-block">🎤</span> Pick your favorite round!
>>>>>>> 9d03b7b (feat: 5-question quiz with unique backgrounds per question, artist-specific logic, and expanded question pool)
        </div>
      </div>
    </div>
  )
} 