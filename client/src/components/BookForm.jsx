
const BookForm = ({newBook, handleChange, createBook}) => {

  return (
    <div>
      <h1>Add a book to your library!</h1>
      <form onSubmit={createBook}>
        <input type="text" value={newBook.name} onChange={ handleChange} name={'name'} placeholder={'title'} required/>
        <input type="text" value={newBook.author} onChange={ handleChange} name={'author'} placeholder={'author'} required/>
        <input type="text" value={newBook.img} onChange={ handleChange} name={'image'} placeholder={'image'} required/>
        <input type="text" value={newBook.read} onChange={ handleChange} name={'read'} placeholder={'read'} required/>
        <input type="text-area" value={newBook.description} onChange={ handleChange} name={'description'} placeholder={'description'} required/>
        {/* <input type="text" onChange={ handleChange} name={'genre'} list='genre' placeholder={'genre'}/>
          <datalist id='genre'>
              <option value='Adventure' label="Fiction"></option>
              <option value='Fiction'></option>
              <option value='Adventure'></option>
          </datalist> */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BookForm