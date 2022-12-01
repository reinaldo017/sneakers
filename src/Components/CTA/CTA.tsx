import "./cta.scss"

type CTAProps = {
  content: string
  icon?: string
  onClick: () => void
}

const CTA = ({ content, icon, onClick }: CTAProps) => {
  return (
    <button className='cta' onClick={onClick}>
      {icon && <img className='cta__img' src={icon} alt='icon' />}
      {content}
    </button>
  )
}

export default CTA
