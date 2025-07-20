import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

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

export default function GenreSelection() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const genres = GENRES[mode] || [];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-fuchsia-200 via-30% via-yellow-100 via-60% to-cyan-100 text-gray-900 font-['Quicksand'],['Comic Sans MS'],cursive">
      <div className="flex flex-col items-center justify-center w-full px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-pink-400 via-fuchsia-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent font-['Quicksand'],['Comic Sans MS'],cursive">
          Choose a Genre
        </h2>
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
          {genres.map((genre) => (
            <button
              key={genre.key}
              className="py-4 px-8 rounded-2xl border-2 font-bold text-lg transition-all w-full shadow-md bg-gradient-to-r from-pink-100 via-yellow-100 to-fuchsia-100 text-pink-700 hover:from-pink-200 hover:to-fuchsia-200 border-pink-200/60"
              onClick={() => navigate(`/questions/${mode}/${genre.key}`)}
            >
              {genre.label}
            </button>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-700">
          <span className="inline-block">🎤</span> Pick your favorite round!
        </div>
      </div>
    </div>
  )
} 