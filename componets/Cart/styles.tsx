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
  box-shadow: 1px 1px 20px #394b9c;

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
/* background-color: antiquewhite; */
  display: flex;
  flex-direction: column;
  align-items: start;
  transform: translateY(-10rem);
  /* margin-top: 3.3rem; */
  /* height: 50vh; */
  
  height: 65vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  
`

export const TextCart = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  padding: 2rem;
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
  bottom: 10rem;
  padding: 2rem;
  background-color: #0f52ba;
  width: 100vw;
  
  span {
   
    position: absolute;
    /* left: 73vw; */
    right: 10%;

  @media screen and (min-width: 768px){
    /* position: absolute; */
    left: 43vw;
  }

  @media screen and (min-width: 836px){
    left: 39vw;
  }

  @media screen and (min-width: 1024px){
    left: 35vw;
  }

  @media screen and (min-width: 1440px){
    left: 33vw;
  }

  @media screen and (min-width: 2000px){
    left: 24vw;
  }

  }
`

export const BtnCart = styled.button`
  position: absolute;
  bottom: 1.5%;
  border: none;
  cursor: pointer;
  width: calc(100%);
  height: 7rem;
  margin-bottom: 2rem;
  /* transform: translateX(-3rem); */
  /* transform: translateX(-2rem); */
  padding: 1rem;
  background-color: black;
  color: white;
  font-size: 3rem;
`
