
const Book = ({_id, name, author, description, image, deleteBook}) => {

  return (
    <div className='book'>
      <h1>{name}</h1>
      <h2>{author}</h2>
      <img src={image} alt={`book`} />
      <p>{description}</p>
      <button onClick={() => deleteBook(_id)}>Delete Book</button>
    </div>
  )
}

export default Book