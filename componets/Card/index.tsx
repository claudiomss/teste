import { ButtonBuy, CardProduct } from './styles'
import { ShoppingBagOpen } from 'phosphor-react'

export function Card({ id, photo, title, price, description, handleBuy }) {
  const AddCart: void = () => {
    handleBuy(id, photo, title, price, description)
  }

  return (
    <>
      <CardProduct>
        <img src={photo} width={150} alt="" />
        <h4>
          {title}
          <span>R${price}</span>
        </h4>
        <p>{description}</p>
        <ButtonBuy onClick={AddCart}>
          <ShoppingBagOpen size={24} />
          Comprar
        </ButtonBuy>
      </CardProduct>
    </>
  )
}
