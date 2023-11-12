
import { BtnClose, ContainerAmount, ContainerCard } from "./styles";
import { Minus, Plus, X } from 'phosphor-react'

export function CardCart({id, photo, price,title,amount, handleAdd, handleSubtract, handleClose}){
     
   
    const handleAddAmount = () => {
      handleAdd(id)
    }

    const handleSubtractAmount = () => {
        handleSubtract(id)
    }

    const handleCloseBtn = () => {
        handleClose(id)
    }
    
    return(
        <>
        <BtnClose onClick={handleCloseBtn}>
        <X size={20} color="#ffffff"/>
        </BtnClose>
        <ContainerCard>
            <img src={photo} width={100} alt="" />
            <h4>{title}</h4>
            <ContainerAmount>
                <span>Qnt</span>
                <div>
                    <button onClick={handleSubtractAmount}><Minus size={20} color="#535353"/></button>
                    <p>{amount}</p>
                    <button onClick={handleAddAmount}><Plus size={20} color="#535353"/></button>
                </div>
            </ContainerAmount>
            <p>R${price * amount}</p>
        </ContainerCard>
        </>
    )
    }