// import { ReactNode } from "react"
import { AppContext } from "./AppContext"
import { AppProviderProps } from "../../types/types"

const providerData = {
  linksNames: ["Colections", "Men", "Women", "About", "Contact"],
  userAvatarSrc: "./images/image-avatar.png",
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
  )
}
