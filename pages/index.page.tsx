import { useState, useEffect } from 'react'
import { Card } from '@/componets/Card'
import { Cart, ContainerMain, ContainerSk, Footer, Logo, Top } from './styles'
import { ShoppingCart, ShoppingBagOpen } from 'phosphor-react'
import { CartProduct } from '@/componets/Cart'
import { useQuery } from 'react-query'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home(){
  interface IProducts {
    id: number
    photo: string
    title: string
    price: number
    description: string
    amount: number
  }

  const [products, setProducts] = useState([])
  const { data, isLoading } = useQuery('products', () => {
    return axios
      .get(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=35&sortBy=id&orderBy=DESC'
      )
      .then((response) => response.data.products)
  })

  const handleBuy = (id, photo, title, price, description) => {
    const exist = products.some((pp) => pp.id === id)
    if (exist) {
      handleAddProduct(id)
    } else {
      setProducts((prods) => [
        ...prods,
        { id, photo, title, price, description, amount: 1 },
      ])
    }
  }

  const handleAddProduct = (id:number) => {
    const productID = products.find((pp) => pp.id === id)
    productID.amount += 1
    setProducts((prods) => [...prods])
  }

  const handleSubtractProduct = (id:number) => {
    const productID = products.find((pp) => pp.id === id)
    productID.amount -= 1
    if (productID.amount <= 0) {
      const productList = products.filter((pp) => pp.id != id)
      setProducts(productList)
    }
    setProducts((prods) => [...prods])
  }

  const RemoveAllProducts = (id:number) => {
    const productList = products.filter((pp) => pp.id != id)
    setProducts(productList)
  }

  function calculateTotalProducts(total:number, prods:IProducts): number {
    return total + prods.amount
  }

  let totalProducts: number = products.reduce(calculateTotalProducts, 0)

  const [isVisible, SetIsVisible] = useState(true)

  const handleVisible = () => {
    isVisible ? SetIsVisible(false) : SetIsVisible(true)
  }

if (isLoading) {
    return (
    <>
      <Skeleton style={{position:'absolute'}} duration={0.5} width={2500} height={120}/> 

      <Skeleton style={{position:'absolute', top:'155px', left:'6rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'155px', left:'34rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'155px', left:'62rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'155px', left:'89rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'155px', left:'115rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'155px', left:'142rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'155px', left:'169rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'155px', left:'195rem'}} duration={0.5} width={250} height={350}/> 

      <Skeleton style={{position:'absolute', top:'540px', left:'6rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'540px', left:'34rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'540px', left:'62rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'540px', left:'89rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'540px', left:'115rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'540px', left:'142rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'540px', left:'169rem'}} duration={0.5} width={250} height={350}/> 
      <Skeleton style={{position:'absolute', top:'540px', left:'195rem'}} duration={0.5} width={250} height={350}/> 

    </>
    )
  
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
          return (
            <Card
              key={prod.id}
              id={prod.id}
              photo={prod.photo}
              title={prod.name}
              price={prod.price}
              description={prod.description}
              handleBuy={handleBuy}
            />
          )
        })}
      </ContainerMain>
      <CartProduct
        isVisible={isVisible}
        handleVisible={handleVisible}
        products={products}
        handleAddProduct={handleAddProduct}
        handleSubtractProduct={handleSubtractProduct}
        RemoveAllProducts={RemoveAllProducts}
      />
      <Footer>MKS sistemas © Todos os direitos reservados</Footer>
    </>
  )
}
