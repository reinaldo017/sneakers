import { CTAProps } from "../../types/types"
import "./cta.scss"

const CTA = ({ content, icon }: CTAProps) => {
  return (
    <button className='cta'>
      {icon && <img className='cta__img' src={icon} alt='icon' />}
      {content}
    </button>
  )
}

export default CTA
