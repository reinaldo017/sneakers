import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import Links from "../Links/Links"
import "./mobileMenu.scss"

type MobileMenuProps = {
  visible: boolean
  toggleMenu: () => void
}

const MobileMenu = ({ visible, toggleMenu }: MobileMenuProps) => {
  const { linksNames } = useContext(AppContext)
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
