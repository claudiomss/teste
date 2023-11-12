import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 20% 35% 25% 20%;
  background-color: white;
  width: 97%;
  padding: 3rem;
  border-radius: 10px;

  h4 {
    font-weight: 400;
    padding: 0 2rem;
    font-size: 2rem;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`

export const ContainerAmount = styled.div`
  span {
    font-size: 1.2rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    width: 8rem;
    padding: 0.4rem 0;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background-color: white;
  }

  p {
    font-weight: bold;
    font-size: 1.1rem;
  }
`

export const BtnClose = styled.button`
  position: relative;
  top: 15px;
  left: 94%;
  display: grid;
  place-items: center;
  background-color: black;
  border-radius: 999px;
  padding: 0.1rem;
`
