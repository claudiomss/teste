import { BtnClose, ContainerAmount, ContainerCard } from './styles'
import { Minus, Plus, X } from 'phosphor-react'
export function CardCart({
  id,
  photo,
  price,
  title,
  amount,
  handleAdd,
  handleSubtract,
  handleClose,
}) {
  const handleAddAmount: void = () => {
    handleAdd(id)
  }

  const handleSubtractAmount: void = () => {
    handleSubtract(id)
  }

  const handleCloseBtn: void = () => {
    handleClose(id)
  }

  return (
    <>
      <BtnClose onClick={handleCloseBtn}>
        <X size={15} color="#ffffff" />
      </BtnClose>
      <ContainerCard>
        <img src={photo} width={100} alt="" />
        <h4>{title}</h4>
        <ContainerAmount>
          <span>Qnt</span>
          <div>
            <button onClick={handleSubtractAmount}>
              <Minus size={15} color="#535353" />
            </button>
            <p>{amount}</p>
            <button onClick={handleAddAmount}>
              <Plus size={15} color="#535353" />
            </button>
          </div>
          <h5>R${price * amount}</h5>
        </ContainerAmount>
        {/* <p>R${price * amount}</p> */}
      </ContainerCard>
    </>
  )
}
