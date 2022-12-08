import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className='main-header'>
      <Link className={'nav-link logo'} to={'/'}>
        Logo
      </Link>
      <nav>
        <NavLink
          className={'nav-link'}
          to={'/'}
          activeClassName='currentPage'
          exact
        >
          Home
        </NavLink>
        <NavLink
          className={'nav-link'}
          to={'/add-post'}
          activeClassName='currentPage'
        >
          Add post
        </NavLink>
        <NavLink
          className={'nav-link'}
          to={'/posts'}
          activeClassName='currentPage'
        >
          All posts
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
