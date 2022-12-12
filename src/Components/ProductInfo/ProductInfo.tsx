import { useState } from "react"
import ProductInfoUI from "./ProductInfoUI"
import { ProductType, ItemType } from "../../types/types"

type ProductInfoProps = {
  product: ProductType
  addToCart: (item: ItemType) => void
}

const ProductInfo = ({ product, addToCart }: ProductInfoProps) => {
  const [itemsSelected, setItemsSelected] = useState(1)

  if (itemsSelected > product.stock) {
    setItemsSelected(product.stock)
  }

  const addItem = () => {
    setItemsSelected(prev => (prev + 1 > product.stock ? prev : prev + 1))
  }

  const removeItem = () => {
    setItemsSelected(prev => (prev - 1 < 0 ? prev : prev - 1))
  }

  const finalPrice = product.discount
    ? ((100 - product.discount) / 100) * product.price
    : product.price

  const item = {
    name: product.name,
    description: product.description,
    finalPrice: finalPrice,
    quantity: itemsSelected,
    image: product.images[0],
  }

  return (
    <ProductInfoUI
      product={product}
      item={item}
      addToCart={addToCart}
      addItem={addItem}
      removeItem={removeItem}
    />
  )
}

export default ProductInfo
