import { process_params } from 'express/lib/router'
import Book from './Books'

const Genre = ({ bookGenre }) => {
  return (
    <div>
      <h3>{bookGenre.title}</h3>
      {props.books.map((book) => {
        return <Book title={book.title} description={book.description} image={book.image}/>
      })}
    </div>
  )
}

export default Genre