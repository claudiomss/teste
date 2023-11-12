import { CardCart } from "./Card";
import { BtnCart, Cards, ContainerCart, TextCart, TextCartTotal } from "./styles";
import { X } from 'phosphor-react'


export function CartProduct({products, handleAddProduct, handleSubtractProduct,RemoveAllProducts}){
    
    const handleAdd = (id) => {
        return handleAddProduct(id)
     }

     const handleSubtract = (id) => {
        return handleSubtractProduct(id)
     }
    
     const handleClose = (id) => {
        return RemoveAllProducts(id)
     }
    
     
     function calculateTotalPrice(total, prods) {
         return total + (prods.price * prods.amount);
    }
        
    let total = products.reduce(calculateTotalPrice, 0);
   
    return(
        <>
        <ContainerCart>
       
            <TextCart>
                Carrinho de Compras
                <X size={40} color="#ffffff"/>
            </TextCart>
            <Cards>
           {products.map((prod) => {
            return(
                <CardCart key={prod.id} id={prod.id} photo={prod.photo} title={prod.title} amount={prod.amount} price={prod.price} handleAdd={handleAdd} handleSubtract={handleSubtract} handleClose={handleClose}/>
            )
           })}
           
            </Cards>
            
            <TextCartTotal>
                Total:<span>R${total}</span>  
            </TextCartTotal>
            <BtnCart>
                Finalizar Compra
            </BtnCart>
        </ContainerCart>
        </>
    )
}