import Links from "../Links/Links"
import "./nav.scss"

type NavProps = {
  children: any
  linksNames: string[]
  userAvatarSrc: string
  toggleMenu: () => void
  toggleCart: () => void
}

const Nav = ({ children, linksNames, userAvatarSrc, toggleMenu, toggleCart}: NavProps) => {
  return (
    <nav className='nav'>
      <div className='nav__logo-container'>
        <img
          className='nav__hamburger-icon'
          src='./images/icon-menu.svg'
          alt='hamburger icon'
          onClick={toggleMenu}
        />
        <img
          className='nav__logo'
          src='./images/logo.svg'
          alt='sneakers logo'
        />
        <Links linksNames={linksNames} mode='desktop' />
      </div>
      <div className='nav__user-container'>
        <img
          className='nav__cart-icon'
          src='./images/icon-cart.svg'
          alt='cart icon'
          onClick={toggleCart}
        />
        <img
          className='nav__user-avatar'
          src={userAvatarSrc}
          alt='user avatar'
        />
      </div>
      {children}
    </nav>
  )
}

export default Nav
