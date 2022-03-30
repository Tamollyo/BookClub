
const Book = ({_id, name, author, description, image, read, deleteBook, updateBook, updateBookAgain}) => {

  return (
    <div className='book'>
      <h1>{name}</h1>
      <h2>{author}</h2>
      <img src={image} alt={`book`} />
      <p>{description}</p>
      <h4>read? {read}</h4>
      <button onClick={() => deleteBook(_id)}>Delete Book</button>
      <button onClick={() => updateBook(_id)}>Read?</button>
      <button onClick={() => updateBookAgain(_id)}>Unread?</button>
    </div>
  )
}

export default Book