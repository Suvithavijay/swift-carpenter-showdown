import React from 'react'
<<<<<<< HEAD
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function SparkleOverlay() {
  // More sparkles, with pink, purple, and turquoise
  const sparkleColors = [
    'text-pink-300', 'text-pink-400', 'text-fuchsia-300', 'text-purple-300', 'text-purple-400', 'text-cyan-300', 'text-cyan-400', 'text-teal-300', 'text-teal-400', 'text-white/80'
  ];
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {[...Array(36)].map((_, i) => {
        const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
        return (
          <motion.span
            key={i}
            className={`absolute ${color} text-lg select-none`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #f0f) drop-shadow(0 0 24px #0ff)'
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.7, 1.3, 0.7],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          >
            ✨
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

export default function StartPage() {
  const navigate = useNavigate();
  return (
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
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-center drop-shadow-glow animate-pulse bg-gradient-to-r from-pink-400 via-fuchsia-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent font-['Quicksand'],['Comic Sans MS'],cursive">
          Swift & Carpenter Showdown
        </h1>
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          {/* Buttons for modes */}
=======
import { useNavigate } from 'react-router-dom'

export default function StartPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-fuchsia-200 via-30% via-yellow-100 via-60% to-cyan-100 text-gray-900 font-['Quicksand'],['Comic Sans MS'],cursive">
      <div className="flex flex-col items-center justify-center w-full px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-center bg-gradient-to-r from-pink-400 via-fuchsia-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent font-['Quicksand'],['Comic Sans MS'],cursive">
          Swift & Carpenter Showdown
        </h1>
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
>>>>>>> 9d03b7b (feat: 5-question quiz with unique backgrounds per question, artist-specific logic, and expanded question pool)
          <button
            className="py-4 px-8 rounded-2xl border-2 font-bold text-lg transition-all w-full shadow-md bg-gradient-to-r from-pink-100 via-yellow-100 to-fuchsia-100 text-pink-700 hover:from-pink-200 hover:to-fuchsia-200 border-pink-200/60"
            onClick={() => navigate('/genres/taylor')}
          >
            Taylor Swift Trivia
          </button>
          <button
            className="py-4 px-8 rounded-2xl border-2 font-bold text-lg transition-all w-full shadow-md bg-gradient-to-r from-fuchsia-100 via-yellow-100 to-pink-100 text-fuchsia-700 hover:from-fuchsia-200 hover:to-pink-200 border-fuchsia-200/60"
            onClick={() => navigate('/genres/sabrina')}
          >
            Sabrina Carpenter Trivia
          </button>
          <button
            className="py-4 px-8 rounded-2xl border-2 font-bold text-lg transition-all w-full shadow-md bg-gradient-to-r from-yellow-100 via-pink-100 to-fuchsia-100 text-yellow-700 hover:from-yellow-200 hover:to-fuchsia-200 border-yellow-200/60"
            onClick={() => navigate('/genres/both')}
          >
            Both
          </button>
        </div>
      </div>
    </div>
  )
} 