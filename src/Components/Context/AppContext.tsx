import { createContext } from "react"
import { AppContextProps } from "../../types/types"

export const AppContext = createContext<AppContextProps>({} as AppContextProps)
