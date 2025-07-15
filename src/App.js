import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Tasks from './pages/Tasks'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


