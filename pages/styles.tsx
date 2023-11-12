import styled from 'styled-components'

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
`
export const Logo = styled.div`
  display: flex;
  align-items: end;
  color: white;
  padding: 3rem 0 3rem 6rem;
  font-size: 5rem;

  span {
    font-size: 2.2rem;
    padding: 1rem;
  }
`
export const Cart = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  margin-right: 6rem;
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
`

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 81.5vh;
  gap: 2rem;
  background-color: #f9f9f9;
  padding: 10rem 23rem;
`
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-size: 1.4rem;
  background-color: #eeeeee;
`
