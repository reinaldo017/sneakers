import "./product.scss"

type ProductProps = {
  children: JSX.Element | JSX.Element[]
}

const Product = ({ children }: ProductProps) => {
  return <section className='product'>{children}</section>
}

export default Product
