import Book from './Book'

const Genre = ({type, description, image}) => {
  return (
    <div>
    <h1>{type}</h1>
    <img src={image} alt={`genre`} />
    </div>
  )
}

export default Genre