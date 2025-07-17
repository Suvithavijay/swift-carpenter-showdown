import { Routes, Route } from 'react-router-dom'
import StartPage from './StartPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      {/* Future routes for trivia, results, leaderboard, etc. */}
    </Routes>
  )
}

export default App
