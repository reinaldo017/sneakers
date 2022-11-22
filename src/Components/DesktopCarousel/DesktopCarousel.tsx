import { useContext } from "react"
import { DesktopCarouselProps } from "../../types/types"
import { ProductContext } from "../Context/ProductContext"
import "./desktopCarousel.scss"

const DesktopCarousel = ({
  activeImageIndex,
  handleSlideChange,
}: DesktopCarouselProps) => {
  const { images } = useContext(ProductContext)

  const availableImages = images.map((image, index) => {
    const activeStyles =
      index === activeImageIndex ? "thumbnails__img--active" : ""
    return (
      <li className='thumbnails__li' key={image.alt}>
        <img
          className={`thumbnails__img ${activeStyles}`}
          src={image.src}
          alt={image.alt}
          onClick={() => handleSlideChange(index)}
        />
      </li>
    )
  })

  return (
    <div className='desktop-carousel'>
      <img
        className='desktop-carousel__main-img'
        src={images[activeImageIndex].src}
        alt={images[activeImageIndex].alt}
      />

      <ul className='thumbnails'>{availableImages}</ul>
    </div>
  )
}

export default DesktopCarousel
