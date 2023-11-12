import { CardCart } from './Card'
import {
  BtnCart,
  Cards,
  ContainerCart,
  TextCart,
  TextCartTotal,
} from './styles'
import { X } from 'phosphor-react'

export function CartProduct({
  isVisible,
  handleVisible,
  products,
  handleAddProduct,
  handleSubtractProduct,
  RemoveAllProducts,
}) {

  interface IProducts {
    id: number
    photo: string
    title: string
    price: number
    description: string
    amount: number
  }

  const VisibleCart: void = () => {
    handleVisible()
  }

  const handleAdd: number = (id:number) => {
    return handleAddProduct(id)
  }

  const handleSubtract: number = (id:number) => {
    return handleSubtractProduct(id)
  }

  const handleClose: number = (id:number) => {
    return RemoveAllProducts(id)
  }

  function calculateTotalPrice(total:number, prods:Array<IProducts>): number {
    return total + prods.price * prods.amount
  }

  let total: void = products.reduce(calculateTotalPrice, 0)

  return (
    <>
      <ContainerCart isVisible={isVisible}>
        <TextCart>
          Carrinho de Compras
          <X onClick={VisibleCart} size={40} color="#ffffff" />
        </TextCart>
        <Cards>
          {products.map((prod) => {
            return (
              <CardCart
                key={prod.id}
                id={prod.id}
                photo={prod.photo}
                title={prod.title}
                amount={prod.amount}
                price={prod.price}
                handleAdd={handleAdd}
                handleSubtract={handleSubtract}
                handleClose={handleClose}
              />
            )
          })}
        </Cards>

        <TextCartTotal>
          Total:<span>R${total}</span>
        </TextCartTotal>
        <BtnCart>Finalizar Compra</BtnCart>
      </ContainerCart>
    </>
  )
}
