import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
        <div className='navBar'>
          <div className='navTitle'>
            Book Club
          </div>
          <Link className='nav' to='/'>Home</Link>
          <Link className='nav' to='./about'>About</Link>
          <Link className='nav' to='./newbook'>Add Book</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav