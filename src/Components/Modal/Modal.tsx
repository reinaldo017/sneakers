import ReactDOM from "react-dom"
import "./modal.scss"

type ModalProps = {
  children: JSX.Element | JSX.Element[]
  toggleModal: () => void
  handlePrevSlide: () => void
  handleNextSlide: () => void
}

const Modal = ({
  children,
  toggleModal,
  handlePrevSlide,
  handleNextSlide,
}: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <div className='modal-overlay'></div>
      <div className='modal'>
        <img
          className='modal__close'
          src='./images/icon-close.svg'
          alt='close icon'
          onClick={toggleModal}
        />
        <img
          className='modal__arrow modal__arrow--prev'
          src='./images/icon-previous.svg'
          alt='arrow pointing left'
          onClick={handlePrevSlide}
        />
        <img
          className='modal__arrow modal__arrow--next'
          src='./images/icon-next.svg'
          alt='arrow pointing right'
          onClick={handleNextSlide}
        />
        {children}
      </div>
    </>,
    document.getElementById("portal")!
  )
}

export default Modal
