import "./quantitySelector.scss"

type QuantitySelectorProps = {
  itemsSelected: number
  addItem: () => void
  removeItem: () => void
}

const QuantitySelector = ({
  itemsSelected,
  addItem,
  removeItem,
}: QuantitySelectorProps) => {
  return (
    <div className='quantity-selector'>
      <button className='quantity-selector__button' onClick={removeItem}>
        <img
          className='quantity-selector__icon'
          src='./images/icon-minus.svg'
          alt='orange minus icon'
        />
      </button>
      <p className='quantity-selector__number'>{itemsSelected}</p>
      <button className='quantity-selector__button' onClick={addItem}>
        <img
          className='quantity-selector__icon'
          src='./images/icon-plus.svg'
          alt='orange plus icon'
        />
      </button>
    </div>
  )
}

export default QuantitySelector
