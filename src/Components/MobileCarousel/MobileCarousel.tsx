import { Image } from "../../types/types"
import "./mobileCarousel.scss"

type MobileCarouselProps = {
  images: Image[]
  activeImageIndex: number
  handleNextSlide: () => void
  handlePrevSlide: () => void
}

const MobileCarousel = ({
  images,
  activeImageIndex,
  handleNextSlide,
  handlePrevSlide,
}: MobileCarouselProps) => {
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
