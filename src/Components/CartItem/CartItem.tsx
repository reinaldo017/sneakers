import "./cartItem.scss"
import { Image } from "../../types/types"

type ItemType = {
  name: string
  finalPrice: number
  quantity: number
  image: Image
}

type CartItemProps = {
  item: ItemType
  removeFromCart: (itemName: string) => void
}

const CartItem = ({ item, removeFromCart }: CartItemProps) => {
  return (
    <li className='item'>
      <img
        className='item__img'
        src={item.image.src}
        alt={item.image.alt}
      />
      <div className='item__info'>
        <p>{item.name}</p>
        <p>
          {` $${item.finalPrice} x ${item.quantity} `}
          <span className='item__total'>
            ${item.finalPrice * item.quantity}
          </span>
        </p>
      </div>
      <img
        className='item__delete'
        src='./images/icon-delete.svg'
        alt='trashcan icon'
        onClick={() => removeFromCart(item.name)}
      />
    </li>
  )
}

export default CartItem
