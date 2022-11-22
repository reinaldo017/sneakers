import { useState } from "react"
import { ProductInfoProps } from "../../types/types"
import CTA from "../CTA/CTA"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import "./productInfo.scss"

const ProductInfo = ({ info, updateStock }: ProductInfoProps) => {
  const [itemsSelected, setItemsSelected] = useState(0)

  const addItem = () => {
    setItemsSelected((prev) => (prev + 1 > info.stock ? prev : prev + 1))
  }

  const removeItem = () => {
    setItemsSelected((prev) => (prev - 1 < 0 ? prev : prev - 1))
  }

  const finalPrice = ((100 - info?.discount) / 100) * info.price

  return (
    <section className='productInfo'>
      <h6 className='productInfo__manufacturer'>SNEAKER COMPANY</h6>
      <h1 className='productInfo__name'>{info.name}</h1>
      <p className='productInfo__description'>{info.description}</p>
      <div className='productInfo__price-container'>
        <h2 className='productInfo__price'>{`$${finalPrice}`}</h2>
        <span className='productInfo__discount'>{`${info.discount}%`}</span>
      </div>
      <h6 className='productInfo__price-before'>{`$${info.price}`}</h6>
      <footer className='productInfo__buttons'>
        <QuantitySelector
          itemsSelected={itemsSelected}
          addItem={addItem}
          removeItem={removeItem}
        />
        <CTA content='Add to cart' icon='./images/icon-cart.svg' />
      </footer>
    </section>
  )
}

export default ProductInfo
