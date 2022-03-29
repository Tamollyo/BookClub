import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import GenrePage from './GenrePage'
// import BookPage from './BookPage'

const Home = () => {
  const [genres, setGenres] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get('/genre/:gid')
      console.log(response)
      setGenres(response)
    }
    getGenres()
  }, [])

  const showGenre = (genreId) => {
    navigate(`/api/genre/${gid}`)
  }

  return (
    <div>
      <GenrePage
        key={genre.id}
        type={genre.type}
        description={genre.description}
        image={genre.image}
        onClick={() => showGenre(genre.id)}
      />
    </div>
  )
}

export default Home