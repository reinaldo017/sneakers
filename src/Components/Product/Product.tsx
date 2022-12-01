import ProductImage from "../ProductImage/ProductImage"
import ProductInfo from "../ProductInfo/ProductInfo"
import "./product.scss"

type Image = {
  src: string
  alt: string
}

type ProductType = {
  name: string
  description: string
  price: number
  discount: number
  stock: number
  images: Image[]
}

type ProductProps = {
  product: ProductType
  addToCart: (product: ProductType, quantity: number) => void
}

const Product = ({ product, addToCart }: ProductProps) => {
  return (
    <section className='product'>
      <ProductImage images={product.images} />
      <ProductInfo product={product} addToCart={addToCart} />
    </section>
  )
}

export default Product
