import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Book from '../components/Book'
import BookForm from '../components/BookForm'

const BookReview = (props) => {

  const [books, setBooks] = useState([])
  const BASE_URL = 'http://localhost:3001/api'

  let { gid } = useParams()

  console.log(props)

  const getBooksByGenre = async () => {
    const response = await axios.get(
      `${BASE_URL}/genre/${gid}/book`
    )
    setBooks(response.data)
  }

  useEffect(() => {
    getBooksByGenre()
  }, [])

  const [newBook, setNewBook] = useState({
    name: '', 
    author: '', 
    description: '', 
    genre: gid,
    image: '', 
    read: ''
  }
)

  const handleChange = (e) => {
    setNewBook({
      ...newBook, 
      [e.target.name]: e.target.value
    })
  } 

  const createBook = async (e) => {
    e.preventDefault()
    console.log(newBook, "newbook")
    const response = await axios 
      .post(`${BASE_URL}/book`, newBook)
      .then(response => {
        console.log(response.data, "response")
        getBooksByGenre()
      })
    setNewReview({
      name: '', 
      author: '', 
      description: '', 
      genre: gid,
      image: '', 
      read: ''
    })
  }


  return(
    
    <div>
      <section>
        <BookReview
          newBook={newBook}
          createBook={createBook}
          handleChange={handleChange}
        />
      </section>
      <section className='bookGrid'>
      </section>

    </div>
  )
}

export default BookReview