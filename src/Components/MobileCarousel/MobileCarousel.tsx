import { useContext } from "react"
import { MobileCarouselProps } from "../../types/types"
import { ProductContext } from "../Context/ProductContext"
import "./mobileCarousel.scss"

const MobileCarousel = ({
  activeImageIndex,
  handleNextSlide,
  handlePrevSlide,
}: MobileCarouselProps) => {
  const { images } = useContext(ProductContext)

  return (
    <div className='carousel'>
      <img
        className='carousel__img'
        src={images[activeImageIndex].src}
        alt={images[activeImageIndex].alt}
      />

      <button
        className='carousel__button carousel__button--prev'
        onClick={handlePrevSlide}></button>
      <button
        className='carousel__button carousel__button--next'
        onClick={handleNextSlide}></button>
    </div>
  )
}

export default MobileCarousel
