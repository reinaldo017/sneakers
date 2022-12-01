import Links from "../Links/Links"
import "./mobileMenu.scss"

type MobileMenuProps = {
  linksNames: string[]
  visible: boolean
  toggleMenu: () => void
}

const MobileMenu = ({ linksNames, visible, toggleMenu }: MobileMenuProps) => {
  const visibleClass = visible ? "--visible" : ""
  return (
    <>
      <div className={`overlay overlay${visibleClass}`}></div>
      <div className={`menu menu${visibleClass}`}>
        <div className='menu__container'>
          <img
            className='menu__close-icon'
            src='./images/icon-close.svg'
            alt='close icon'
            onClick={toggleMenu}
          />
          <Links linksNames={linksNames} mode='mobile' />
        </div>
      </div>
    </>
  )
}

export default MobileMenu
