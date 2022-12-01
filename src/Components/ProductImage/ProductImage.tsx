import { useState } from "react"
import { ProductImageProps } from "../../types/types"
import MobileCarousel from "../MobileCarousel/MobileCarousel"
import DesktopCarousel from "../DesktopCarousel/DesktopCarousel"

const ProductImage = ({ images }: ProductImageProps) => {
  const [activeImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextSlide = () => {
    const nextIndex = activeImageIndex + 1

    if (nextIndex > images.length - 1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(nextIndex)
    }
  }

  const handlePrevSlide = () => {
    const nextIndex = activeImageIndex - 1

    if (nextIndex < 0) {
      setCurrentImageIndex(images.length - 1)
    } else {
      setCurrentImageIndex(nextIndex)
    }
  }

  const handleSlideChange = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex)
  }

  return (
    <>
      <MobileCarousel
        images={images}
        activeImageIndex={activeImageIndex}
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
      />
      <DesktopCarousel
        images={images}
        activeImageIndex={activeImageIndex}
        handleSlideChange={handleSlideChange}
      />
    </>
  )
}

export default ProductImage
