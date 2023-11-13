import { CardCart } from './Card'
import {
  BtnCart,
  Cards,
  ContainerCart,
  TextCart,
  TextCartTotal,
} from './styles'
import { X } from 'phosphor-react'


type CartProduct = {
  isVisible:any,
  handleVisible: any,
  products: any
  handleAddProduct: any,
  handleSubtractProduct : any,
  RemoveAllProducts: any
}

export function CartProduct({
  isVisible,
  handleVisible,
  products,
  handleAddProduct,
  handleSubtractProduct,
  RemoveAllProducts,
}:CartProduct) {

  type  Products = {
    id: number
    photo: string
    title: string
    price: number
    description: string
    amount: number
  
  }

  const VisibleCart = () => {
    handleVisible()
  }

  const handleAdd= (id:number) => {
    return handleAddProduct(id)
  }

  const handleSubtract= (id:number) => {
    return handleSubtractProduct(id)
  }

  const handleClose = (id:number) => {
    return RemoveAllProducts(id)
  }

  function calculateTotalPrice(total:number, prods:Products): number {
    return total + prods.price * prods.amount
  }

  // let total = products.reduce(calculateTotalPrice, 0)

  let total = products.reduce((calculateTotalPrice:any, current) =>{},[])

 
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
