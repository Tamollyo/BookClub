import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <h1>Book Club</h1>
        </div>
        <div className='navBar'>
          <Link to='/'>Home</Link>
          <Link to='./about'>About</Link>
          <Link to='./newbook'>Add Book</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav