import {styled} from 'styled-components'

interface ContainerProps {
  isVisible: boolean;
}

export const ContainerCart = styled.div<ContainerProps>`
  background-color: #0f52ba;
  /* position: absolute; */
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 97.5%;
   /* padding: 5rem; */
   padding: 2rem 0 2rem 2rem;
  display: ${(props) => (props.isVisible ? 'none' : 'grid')};

  @media screen and (min-width: 768px){
    width: 55%;
  }

  @media screen and (min-width: 836px){
    width: 50%;
  }

  @media screen and (min-width: 1024px){
    width: 45%;
  }

  @media screen and (min-width: 1440px){
    width: 40%;
  }

  @media screen and (min-width: 2000px){
    width: 30%;
  }
`
export const Cards = styled.div`
  /* margin-top: 3.3rem; */
  /* height: 70vh; */
  /* height: 60vh; */
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
  /* height: 2rem; */
  margin-bottom: 2rem;
  svg {
    display: grid;
    place-items: center;
    background-color: black;
    border-radius: 999px;
    width: 20px;
    height: 20px;
    padding: 0.3rem;
  }
`

export const TextCartTotal = styled(TextCart)`
  position: absolute;
  /* bottom: 11rem; */
  bottom: 7rem;
  padding: 2rem;
  background-color: #0f52ba;
  width: 100vw;
  
  span {
    padding: 0 4rem;
    /* position: absolute; */
    /* left: rem; */

  @media screen and (min-width: 768px){
    position: absolute;
    left: 37vw;
  }

  @media screen and (min-width: 836px){
    left: 33vw;
  }

  @media screen and (min-width: 1024px){
    left: 29vw;
  }

  @media screen and (min-width: 2000px){
    left: 22vw;
  }

  }
`

export const BtnCart = styled.button`
  /* position: absolute; */
  /* bottom: 0; */
  border: none;
  cursor: pointer;
  width: calc(100% + 3rem);

  /* transform: translateY(-5rem); */
  margin-bottom: 2rem;
  /* transform: translateX(-3rem); */
  transform: translateX(-2rem);
  padding: 1rem;
  background-color: black;
  color: white;
  font-size: 3rem;
`
