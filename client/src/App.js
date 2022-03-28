import { Routes, Route } from 'react-router-dom'
import './App.css'
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
// import BookPage from './pages/BookPage'
// import GenrePage from './pages/GenrePage'

function App() {
  // let navigate = useNavigate()

  // const showGenre = () => {
  //   navigate(`/genre/:gid`)
  // }

  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/genre/book/:bid" element={<BookPage />} />
          <Route path="/genre" element={<GenrePage />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
