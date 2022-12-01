import "./cartItem.scss"
import { Image } from "../../types/types"

type CartItemProps = {
  name: string
  price: number
  quantity: number
  image: Image
  removeFromCart: (itemName: string) => void
}

const CartItem = ({
  name,
  price,
  quantity,
  image,
  removeFromCart,
}: CartItemProps) => {
  const total = price * quantity

  return (
    <li className='item'>
      <img src={image.src} alt={image.alt} />
      <div className='item__info'>
        <p>{name}</p>
        <p>
          {`${price} x ${quantity} `}
          <span className='item__total'>{total}</span>
        </p>
      </div>
      <img
        className='item__delete'
        src='./images/icon-delete.svg'
        alt='trashcan icon'
        onClick={() => removeFromCart(name)}
      />
    </li>
  )
}

export default CartItem
