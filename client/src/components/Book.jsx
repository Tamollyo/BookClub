
const Book = ({_id, name, author, description, image, deleteBook}) => {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{author}</h2>
      <img src={image} alt={`book`} />
      <h4>{description}</h4>
      <button onClick={() => deleteBook(_id)}>Delete Book</button>
    </div>
  )
}

export default Book