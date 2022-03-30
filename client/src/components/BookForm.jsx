
const BookForm = ({newBook, handleChange, createBook}) => {

  return (
    <div>
      <h1>Add a book to your library!</h1>
      <form onSubmit={createBook}>
        <input type="text" value={newBook.name} onChange={ handleChange} name={'name'} placeholder={'title'} required/>
        <input type="text" value={newBook.author} onChange={ handleChange} name={'author'} placeholder={'author'} required/>
        <input type="text" value={newBook.img} onChange={ handleChange} name={'image'} placeholder={'image'} required/>
        <input type="text" value={newBook.read} onChange={ handleChange} name={'read'} placeholder={'read'} list='read?' required/>
        <datalist id='read?'>
              <option value='Read'>I have read the book</option>
              <option value='Unread'>I have not read the book</option>
          </datalist>
        <input type="text-area" value={newBook.description} onChange={ handleChange} name={'description'} placeholder={'description'} required/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BookForm