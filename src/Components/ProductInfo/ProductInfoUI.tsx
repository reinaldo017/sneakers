import "./productInfo.scss"
import CTA from "../CTA/CTA"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import { ProductType, ItemType } from "../../types/types"

type ProductInfoUIProps = {
  product: ProductType
  item: ItemType
  addToCart: (item: ItemType) => void
  addItem: () => void
  removeItem: () => void
}

const ProductInfoUI = ({
  product,
  item,
  addToCart,
  addItem,
  removeItem,
}: ProductInfoUIProps) => {
  return (
    <section className='productInfo'>
      <h6 className='productInfo__manufacturer'>SNEAKER COMPANY</h6>
      <h1 className='productInfo__name'>{product.name}</h1>
      <p className='productInfo__description'>{product.description}</p>
      <div className='productInfo__price-container'>
        <h2 className='productInfo__price'>{`$${item.finalPrice}`}</h2>
        <span className='productInfo__discount'>{`${product.discount}%`}</span>
      </div>
      <h6 className='productInfo__price-before'>{`$${product.price}`}</h6>
      <footer className='productInfo__buttons'>
        <QuantitySelector
          itemsSelected={item.quantity}
          addItem={addItem}
          removeItem={removeItem}
        />
        <CTA
          content='Add to cart'
          icon='./images/icon-cart.svg'
          onClick={() => addToCart(item)}
        />
      </footer>
    </section>
  )
}

export default ProductInfoUI
