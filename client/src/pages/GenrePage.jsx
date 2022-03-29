import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Book from '../components/Book'

const Genre = (props) => {

  const [books, setBooks] = useState([])
  const BASE_URL = 'http://localhost:3001/api'

  let { gid } = useParams()

  console.log(props)

  useEffect(() => {
    const getBooksByGenre = async () => {
      const response = await axios.get(
        `${BASE_URL}/genre/${gid}/book`
      )
      setBooks(response.data)
    }
    getBooksByGenre()
  }, [])

  // const deleteBook = async (gid) => {
  //   await axios
  //     .delete(`${BASE_URL}/genre/${gid}/book`)
  //     .then(function(response) {
  //       getBooksByGenre()
  //     })
  // }

  return(
    <div>
      <div className='GenreGrid'>
        {books.map((book) => (
            <Book key={book._id}{...book} />
        ))}
      </div>

    </div>
  )
}

export default Genre