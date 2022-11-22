import { createContext } from "react"
import { ProductContextType } from "../../types/types"

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
)
