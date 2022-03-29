
const Book = ({name, author, description, image}) => {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{author}</h2>
      <img src={image} alt={`book`} />
      <h4>{description}</h4>
    </div>
  )
}

export default Book