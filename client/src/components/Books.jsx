
const Book = (props) => {

  return (
    <div>
      <h3>{book.title}</h3>
      <img src={book.image} alt='book cover' />
      <h4>{book.description}</h4>
    </div>
  )
}

export default Book