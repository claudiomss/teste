import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: grid;
  gap: 1rem;
  place-items: center;
    /* grid-template-columns: 20% 35% 25% 20%; */
  background-color: white;
  width: 97%;
  /* margin: 0 auto; */
  /* padding: 3rem; */
  padding: 2rem 0;
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

  @media screen and (min-width: 520px){
      padding: 2rem 0;
      grid-template-columns: 27% 27% 30%;
  }


`

export const ContainerAmount = styled.div`
  span {
    font-size: 1.4rem;
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
    font-size: 1.2rem;
  }

  h5{
    font-size: 1.7rem;
    font-weight: bold;
  }

  @media screen and (min-width: 320px){
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @media screen and (min-width: 520px){
    
  }

`

export const BtnClose = styled.button`
  position: relative;
  /* top: 15px; */
  /* left: 94%; */
  /* width: 20px;
  height: 20px; */
  top: 13px;
  left: 93%;
  display: grid;
  place-items: center;
  background-color: black;
  border-radius: 999px;
  /* padding: 0.1rem; */
  

  @media screen and (min-width: 1180px){
    left: 95%;
  }

  @media screen and (min-width: 2000px){
    left: 95.5%;
  }
`
