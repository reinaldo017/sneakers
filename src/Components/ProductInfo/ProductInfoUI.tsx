import CTA from "../CTA/CTA"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import { Image } from "../../types/types"
import "./productInfo.scss"

type ProductType = {
  name: string
  description: string
  price: number
  discount: number
  stock: number
  images: Image[]
}

type ProductInfoUIProps = {
  product: ProductType
  itemsSelected: number
  addToCart: (product: ProductType, quantity: number) => void
  addItem: () => void
  removeItem: () => void
  finalPrice: number
}

const ProductInfoUI = ({
  product,
  itemsSelected,
  addToCart,
  addItem,
  removeItem,
  finalPrice,
}: ProductInfoUIProps) => {
  return (
    <section className='productInfo'>
      <h6 className='productInfo__manufacturer'>SNEAKER COMPANY</h6>
      <h1 className='productInfo__name'>{product.name}</h1>
      <p className='productInfo__description'>{product.description}</p>
      <div className='productInfo__price-container'>
        <h2 className='productInfo__price'>{`$${finalPrice}`}</h2>
        <span className='productInfo__discount'>{`${product.discount}%`}</span>
      </div>
      <h6 className='productInfo__price-before'>{`$${product.price}`}</h6>
      <footer className='productInfo__buttons'>
        <QuantitySelector
          itemsSelected={itemsSelected}
          addItem={addItem}
          removeItem={removeItem}
        />
        <CTA
          content='Add to cart'
          icon='./images/icon-cart.svg'
          onClick={() => addToCart(product, itemsSelected)}
        />
      </footer>
    </section>
  )
}

export default ProductInfoUI
