import "./cart.scss"
import CTA from "../CTA/CTA"

type CartProps = {
  children: JSX.Element[]
  visible: boolean
}

const Cart = ({ children, visible }: CartProps) => {
  const cartStyles = visible ? "cart" : "cart cart--hidden"
  return (
    <article className={cartStyles}>
      <header className='cart__header'>
        <h4 className='cart__title'>Cart</h4>
      </header>
      <div className='cart__body'>
        {children.length === 0 ? (
          <p className='cart__empty'>Your cart is empty.</p>
        ) : (
          <ul className='cart__items-container'>{children}</ul>
        )}
        <CTA
          content='Checkout'
          onClick={() => console.log("To Checkout")}
        />
      </div>
    </article>
  )
}

export default Cart
