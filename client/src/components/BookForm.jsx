import React from 'react'

const BookForm = ({addBook, handleChange, createBook }) => {
  return (
    <div>
      <h1>Create a Book</h1>
      <form onSubmit={ createBook }>
        <input type="text" value={newBook.name} onChange={ props.handleChange} name={'name'} placeholder={'title'} />
        <input type="text" value={newBook.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
        <input type="text-area" value={newBook.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
        <input type="text" value={newBook.genre} onChange={ props.handleChange} name={'genre'} placeholder={'genre'} />
      </form>
    </div>
  )
}

export default BookForm