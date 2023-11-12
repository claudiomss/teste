import styled from "styled-components";

export const ContainerCart = styled.div`
    background-color: #0F52BA;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 37vw;
    padding: 5rem;
   `
export const Cards = styled.div`
   margin-top: 3.3rem;
   
   height: 70vh;
   overflow-y: scroll;

   &::-webkit-scrollbar {
    display: none;
}
`

export const TextCart = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: white;
font-size: 3rem;
font-weight: bold;

    svg{
    display: grid;
    place-items: center;
    background-color: black;
    border-radius: 999px;
    padding: 0.3rem;
    }
`

export const TextCartTotal = styled(TextCart)`
    position: absolute;
    bottom: 11rem;

    span{
        position: absolute;
        left: 38rem;
    }
    
`

export const BtnCart = styled.button`
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateX(-5rem);
    padding: 2rem;
    background-color: black;
    color: white;
    font-size: 3rem;
`