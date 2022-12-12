export type Image = {
  src: string
  alt: string
}

export type ItemType = {
  name: string
  finalPrice: number
  quantity: number
  image: Image
}

export type ProductType = {
  name: string
  description: string
  price: number
  discount: number
  stock: number
  images: Image[]
}

export type AppContextProps = {
  linksNames: string[]
  userAvatarSrc: string
}

export type AppProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export type ProductContextType = {
  images: Image[]
}
