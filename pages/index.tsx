import { useState } from 'react'
import { Card } from '@/componets/Card'
import { Cart, ContainerMain, Footer, Logo, Top } from './styles'
import { ShoppingCart, ShoppingBagOpen } from 'phosphor-react'
import { CartProduct } from '@/componets/Cart'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Home() {

  interface IProducts {
    id: number,
    photo: string,
    title: string,
    price: number,
    description: string
  }

  const [products,setProducts] = useState<IProducts>([])
  const {data, isLoading} = useQuery<products[]>('products', ()=> {
     return axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=35&sortBy=id&orderBy=DESC')
    .then((response) => response.data.products)
  })
 
  const handleBuy:void = (id, photo, title, price, description) => {
     
    const exist:boolean = products.some(pp => pp.id === id)
    if(exist){
      handleAddProduct(id)
    }else{
      setProducts(prods => [...prods, { id, photo , title, price, description , amount: 1}])
    }
 }

 const handleAddProduct:void = (id) => {
      const productID = products.find(pp => pp.id === id)
      productID.amount += 1
      setProducts(prods => [...prods])
 }

 const handleSubtractProduct:void = (id) => {
  const productID = products.find(pp => pp.id === id)
  productID.amount -= 1
  if(productID.amount <=0){
    const productList = products.filter(pp => pp.id != id)
    setProducts(productList)
  }
  setProducts(prods => [...prods])
}

const RemoveAllProducts:void = (id) => {
  const productList = products.filter(pp => pp.id != id)
  setProducts(productList)
  
}


function calculateTotalProducts(total, prods):number {
  return total + (prods.amount);
}

let totalProducts:number= products.reduce(calculateTotalProducts, 0);

const [isVisible,SetIsVisible]:boolean = useState(true)

const handleVisible:boolean = () => {
  isVisible ? SetIsVisible(false) : SetIsVisible(true)
}

if(isLoading){
  return <div>Esta Carregando...</div>
}

  return (
    <>
       <Top>
        <Logo>
          MKS
          <span>Sistemas</span>
        </Logo>
        <Cart onClick={handleVisible}>
        <ShoppingCart size={24} weight="fill" />
       {totalProducts}
        </Cart>
       </Top>
       <ContainerMain>
       {data.map((prod) => {
        return(
          <Card key={prod.id} id={prod.id} photo={prod.photo} title={prod.name} price={prod.price} description={prod.description} handleBuy={handleBuy} />
        )
       })}
       </ContainerMain>
       <CartProduct isVisible={isVisible} handleVisible={handleVisible} products={products} handleAddProduct={handleAddProduct} handleSubtractProduct={handleSubtractProduct} RemoveAllProducts={RemoveAllProducts}/>
       <Footer>
        MKS sistemas © Todos os direitos reservados
       </Footer>
    </>
  )
}
