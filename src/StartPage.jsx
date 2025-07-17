import React from 'react'
import { motion } from 'framer-motion'

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

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-pink-400 via-60% to-fuchsia-300 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #ffb6e6 0%, #ff7eb3 40%, #ff65a3 100%)'}}>
      <SparkleOverlay />
      {/* Sparkle background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-pink-200 opacity-40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-fuchsia-200 opacity-30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-purple-200 opacity-40 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-10 right-10 w-16 h-16 bg-pink-100 opacity-40 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-fuchsia-300 opacity-30 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-20 backdrop-blur-md bg-white/10 rounded-3xl shadow-2xl p-8 max-w-md w-full border border-pink-200/30">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center drop-shadow-glow animate-pulse">
          Are you a real <span className="text-pink-400 drop-shadow">Swiftie</span> or a <span className="text-cyan-300 drop-shadow">Carpenter Cutie</span>?
        </h1>
        <div className="flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #f472b6, 0 0 48px #f0abfc' }}
            whileTap={{ scale: 0.97 }}
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-300 hover:from-pink-600 hover:to-fuchsia-400 transition text-lg font-bold shadow-lg shadow-pink-400/30 border-2 border-pink-200/40 focus:outline-none focus:ring-4 focus:ring-pink-300/40"
          >
            Play Taylor Swift Trivia
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #a5f3fc, 0 0 48px #fbbf24' }}
            whileTap={{ scale: 0.97 }}
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-200 via-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-400 transition text-lg font-bold shadow-lg shadow-cyan-200/30 text-gray-900 border-2 border-cyan-100/40 focus:outline-none focus:ring-4 focus:ring-cyan-200/40"
          >
            Play Sabrina Carpenter Trivia
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #f472b6, 0 0 48px #a5f3fc, 0 0 48px #a78bfa' }}
            whileTap={{ scale: 0.97 }}
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 hover:from-pink-500 hover:to-cyan-300 transition text-lg font-bold shadow-lg shadow-purple-400/30 text-gray-900 border-2 border-purple-200/40 focus:outline-none focus:ring-4 focus:ring-purple-200/40"
          >
            Play Both!
          </motion.button>
        </div>
        <div className="mt-8 text-center text-sm text-white/80 animate-fade-in">
          <span className="inline-block animate-bounce">✨</span> Glam UI powered by Tailwind CSS & Framer Motion
        </div>
      </div>
    </div>
  )
} 