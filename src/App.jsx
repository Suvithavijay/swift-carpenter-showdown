import { Routes, Route } from 'react-router-dom'
import StartPage from './StartPage'
import GenreSelection from './GenreSelection'
import QuestionsPage from './QuestionsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/genres/:mode" element={<GenreSelection />} />
      <Route path="/questions/:mode/:genre" element={<QuestionsPage />} />
    </Routes>
  )
}

export default App
