import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Genre from '../components/Genre'


const Home = () => {
  
  const [genres, setGenres] = useState([])
  const BASE_URL = 'http://localhost:3001/api'

  useEffect(async () => {
      const response = await axios.get(
        `${BASE_URL}/genre`
      )
      console.log(response)
      setGenres(response.data)
  }, [])

  return (
    <div>
      <div>
        <h1>GENRE</h1>
      </div>
      <section>
        {genres.map((genre) => (
          <Link to={`/genre/${genre._id}`} key={genre._id}>
            <Genre key={genre._id}{...genre} />
          </Link> 
        ))}
      </section>
    </div>
  )
}

export default Home