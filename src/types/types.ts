export type AppContextProps = {
  linksNames: string[]
  userAvatarSrc: string
}

export type AppProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export type Image = {
  src: string
  alt: string
}

export type ProductImageProps = {
  images: Image[]
}

export type ProductImageUIProps = {
  images: Image[]
  activeImageIndex: number
  handleNextSlide: () => void
  handlePrevSlide: () => void
  handleSlideChange: (imageIndex: number) => void
}

export type Info = {
  name: string
  description: string
  price: number
  discount: number
  stock: number
}

export type ProductContextType = {
  images: Image[]
}
