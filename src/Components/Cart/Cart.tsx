import "./cart.scss"

const Cart = ({ children }: { children: any }) => {
  return (
    <article>
      <header>
        <h2>Cart</h2>
      </header>
      <ul>{children}</ul>
    </article>
  )
}

export default Cart
