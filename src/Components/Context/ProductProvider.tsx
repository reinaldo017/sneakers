import { ProductContextType } from "../../types/types"
import { ProductContext } from "./ProductContext"

type ProductProviderProps = {
  children: JSX.Element | JSX.Element[]
  value: ProductContextType
}

export const ProductProvider = ({ children, value }: ProductProviderProps) => {
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
