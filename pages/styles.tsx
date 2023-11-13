import styled from 'styled-components'

export const Top = styled.div`
  display: flex;
  width: 100%;
  
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
`
export const Logo = styled.div`
  display: flex;
  align-items: end;
  color: white;
  font-size: 5rem;

  span {
    font-size: 2.2rem;
    padding: 1rem;
  }

  @media screen and (min-width:320px){
    padding: 1rem;
  }

  @media screen and (min-width:425px){
    padding: 2rem;    
  }

`
export const Cart = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;
  background-color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  transition: 300ms;

  &:hover {
    border: solid 1px white;
    background-color: #0f52ba;
    color: white;

    &svg {
      color: white;
    }
  }

  &:active {
    transform: scale(0.96);
    background-color: #1d68d8;
  }

  @media screen and (min-width:320px){
    margin-right: 1rem;    
  }

  @media screen and (min-width:425px){
    margin-right: 2rem;    
  }
`

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1300px;
  min-height: 81.5vh;
  gap: 4rem;
  padding: 5rem;
 `
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-size: 1.4rem;
  background-color: #eeeeee;
`
