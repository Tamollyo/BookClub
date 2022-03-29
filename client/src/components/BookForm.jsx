import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const BookForm = (props) => {
  
  let navigate = useNavigate()

  const [newBook, setNewbook] = useState({})

  const handleSubmit = (e) => {
    props.addBook(e)
    navigate('/home')

  }

  return (
    <div>
      <h1>Create a Book</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={newBook.name} onChange={ props.handleChange} name={'name'} placeholder={'title'} />
        <input type="text" value={newBook.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
        <input type="text-area" value={newBook.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
        <input type="text" value={newBook.genre} onChange={ props.handleChange} name={'genre'} placeholder={'genre'} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default BookForm