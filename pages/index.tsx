
import { Card } from '@/componets/Card'
import { Cart, ContainerMain, Footer, Logo, Top } from './styles'
import { ShoppingCart, ShoppingBagOpen } from 'phosphor-react'
import { CartProduct } from '@/componets/Cart'

const Produtos = [{
  photo: "https://www.eclock.com.br/media/wysiwyg/relogio-orient-com-calendario.jpg",
  title: "Apple Wath Super App Super Wath",
  price: 620,
  description: "Lorem ipsum dolor ex. Ea ipsa at, dolore architecto"
},
{
  photo: "https://www.eclock.com.br/media/wysiwyg/relogio-orient-com-calendario.jpg",
  title: "Apple Wath Super App Super Wath",
  price: 650,
  description: "Lorem ipsum dolor ex. Ea ipsa at, dolore architecto"
},
{
  photo: "https://www.eclock.com.br/media/wysiwyg/relogio-orient-com-calendario.jpg",
  title: "Apple Wath Super App Super Wath",
  price: 820,
  description: "Lorem ipsum dolor ex. Ea ipsa at, dolore architecto"
},
{
  photo: "https://www.eclock.com.br/media/wysiwyg/relogio-orient-com-calendario.jpg",
  title: "Apple Wath Super App Super Wath",
  price: 620,
  description: "Lorem ipsum dolor ex. Ea ipsa at, dolore architecto"
},
{
  photo: "https://www.eclock.com.br/media/wysiwyg/relogio-orient-com-calendario.jpg",
  title: "Apple Wath Super App Super Wath",
  price: 650,
  description: "Lorem ipsum dolor ex. Ea ipsa at, dolore architecto"
},
{
  photo: "https://www.eclock.com.br/media/wysiwyg/relogio-orient-com-calendario.jpg",
  title: "Apple Wath Super App Super Wath",
  price: 820,
  description: "Lorem ipsum dolor ex. Ea ipsa at, dolore architecto"
},
]

export default function Home() {
  return (
    <>
       <Top>
        <Logo>
          MKS
          <span>Sistemas</span>
        </Logo>
        <Cart>
        <ShoppingCart size={24} weight="fill" />
       5
        </Cart>
       </Top>
       <ContainerMain>
       {Produtos.map((prod) => {
        return(
          <Card key={prod.price} photo={prod.photo} title={prod.title} price={prod.price} description={prod.description}/>
        )
       })}
       </ContainerMain>
       <CartProduct/>
       <Footer>
        MKS sistemas © Todos os direitos reservados
       </Footer>
    </>
  )
}
