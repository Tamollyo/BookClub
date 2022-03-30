import Book from './Book'

const Genre = ({type, description, image}) => {
  return (
    <div>
    <img className='genreImg' src={image} alt={`genre`} />
    </div>
  )
}

export default Genre