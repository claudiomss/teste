import { BtnClose, ContainerAmount, ContainerCard } from "./styles";
import { Minus, Plus, X } from 'phosphor-react'

export function CardCart({photo, title, amount, priceTotal}){
    return(
        <>
        <BtnClose>
        <X size={20} color="#ffffff"/>
        </BtnClose>
        <ContainerCard>
            <img src={photo} width={100} alt="" />
            <h4>{title}</h4>
            <ContainerAmount>
                <span>Qnt</span>
                <div>
                    <button><Minus size={20} color="#535353"/></button>
                    <p>{amount}</p>
                    <button><Plus size={20} color="#535353"/></button>
                </div>
            </ContainerAmount>
            <p>R${priceTotal}</p>
        </ContainerCard>
        </>
    )
}