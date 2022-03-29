import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import GenrePage from './pages/GenrePage'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/genre/:gid" element={<GenrePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
