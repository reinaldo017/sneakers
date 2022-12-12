import ReactDOM from "react-dom"

type ModalProps = {
  children: JSX.Element | JSX.Element[]
}

const Modal = ({ children }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <div className='overlay'></div>
      <div className='modal'>{children}</div>
    </>,
    document.getElementById("portal")!
  )
}

export default Modal
