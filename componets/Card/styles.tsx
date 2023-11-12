import styled from "styled-components";

export const CardProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25rem;
    height: 32rem;
    background-color: white;
    box-shadow: 1px 1px 5px gray;
    padding: 2rem 1.5rem 0 1.5rem;
    font-size: 1.8rem;
    border-radius: 10px;
    transition: 300ms;

    img{
       
    }
    h4{
        padding: 2rem 0;
        display: flex;
        align-items: center;
        font-weight: 400;
        
    }

    span{
        padding: 0.3rem 0.7rem;
        border-radius: 5px;
        background-color: #363636;
        color: white;
       }

    p{
        color: #8b8b8b;
        font-size: 1.3rem;
        padding-bottom: 1.5rem;
    }

    &:hover{
        background-color: #f2faff;
    }
`

export const ButtonBuy = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 0;
    background-color: #0F52BA;
    border: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: calc(100% + 3rem);

    text-transform: uppercase;
    color: white;
    transition: 300ms;

    &:hover{
        background-color: #1d68d8;
    }

    &:active{
        transition: 300ms;
       font-size: 1.15rem;

       svg{
        transform: scale(0.95);
       }
    }
`