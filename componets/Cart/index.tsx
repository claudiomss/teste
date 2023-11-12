import { CardCart } from "./Card";
import { BtnCart, Cards, ContainerCart, TextCart, TextCartTotal } from "./styles";
import { X } from 'phosphor-react'

const Produtos = [{
    photo: "https://www.eclock.com.br/media/wysiwyg/relogio-orient-com-calendario.jpg",
    title: "Apple Wath Super App",
    priceTotal: 620,
    amount: 5
  },
  {
    photo: "https://www.eclock.com.br/media/wysiwyg/relogio-orient-com-calendario.jpg",
    title: "Apple Wath Super App",
    priceTotal: 620,
    amount: 4
  },
  
]

export function CartProduct(){
    return(
        <>
        <ContainerCart>
       
            <TextCart>
                Carrinho de Compras
                <X size={40} color="#ffffff"/>
            </TextCart>
            <Cards>
           {Produtos.map((prod) => {
            return(
                <CardCart key={prod.amount} photo={prod.photo} title={prod.title} amount={prod.amount} priceTotal={prod.priceTotal}/>
            )
           })}
           
            </Cards>
            
            <TextCartTotal>
                Total:<span>R$600</span>  
            </TextCartTotal>
            <BtnCart>
                Finalizar Compra
            </BtnCart>
        </ContainerCart>
        </>
    )
}