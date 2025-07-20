import React from 'react'
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