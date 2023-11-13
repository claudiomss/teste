import { ButtonBuy, CardProduct } from './styles'
import { ShoppingBagOpen } from 'phosphor-react'

type Card = {
  id: number,
  photo: string,
  title: string,
  price: number,
  description: string,
  handleBuy: any
}

export function Card({ id, photo, title, price, description, handleBuy }: Card ) {
  const AddCart = () => {
    handleBuy(id, photo, title, price, description)
  }

  return (
    <>
      <CardProduct>
        <img src={photo} width={105} alt="" />
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
