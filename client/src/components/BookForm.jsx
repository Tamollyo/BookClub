import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookForm = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addBook(e)
    navigate('/genres')
  }


  const newBook = props.newBook

  return (
    <div>
      <h1>Create a Book</h1>
      <form onSubmit={ handleSubmit }>
      <input type="text" value={newBook.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
      <input type="text" value={newBook.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
      <input type="text-area" value={newBook.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
      <input type="text" value={newBook.genre} onChange={ props.handleChange} name={'genre'} placeholder={'genre'} />
      </form>
    </div>
  )
}

export default BookForm