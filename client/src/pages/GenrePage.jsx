import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Book from '../components/Book'

const Genre = (props) => {

  const [books, setBooks] = useState([])
  const BASE_URL = 'http://localhost:3001/api'

  let { gid } = useParams()
  let navigate = useNavigate()

  const showBook = ( book ) => {
    navigate(`${book._id}`)
  }
  console.log(props)

  const getBooksByGenre = async () => {
    const response = await axios.get(
      `${BASE_URL}/genre/${gid}/book`
    )
    setBooks(response.data)
  }

  const handleChange = () => {
    
  }

  useEffect(() => {
    getBooksByGenre()
  }, [])

const deleteBook = async (bid) => {
  const response = await axios
    .delete(`${BASE_URL}/book/:bid`)
    setBooks(response.data)
    // (response => {
    //   getBooksByGenre()
}

  return(
    <div>
      <div className='GenreGrid'>
        {books.map((book) => (
            <Book key={book._id}{...book} deleteBook={deleteBook}/>
        ))}
      </div>
    </div>
  )
}

export default Genre