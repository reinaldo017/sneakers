export type AppContextProps = {
  linksNames: string[]
  userAvatarSrc: string
}

export type AppProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export type LinksProps = {
  linksNames: string[]
  mode: string
}

type Image = {
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

export type DesktopCarouselProps = {
  activeImageIndex: number
  handleSlideChange: (imageIndex: number) => void
}

export type MobileCarouselProps = {
  activeImageIndex: number
  handleNextSlide: () => void
  handlePrevSlide: () => void
}

export type Info = {
  name: string
  description: string
  price: number
  discount: number
  stock: number
}

export type ProductInfoProps = {
  info: Info
  updateStock: (itemsBuyed: number) => void
}

export type CTAProps = {
  content: string
  icon?: string
}

export type ProductContextType = {
  images: Image[]
}
