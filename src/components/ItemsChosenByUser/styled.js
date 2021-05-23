import styled from 'styled-components'

import { CardButton } from '../CardItem/styled'

import {
    white
} from '../../GlobalStyle'


export const CartContainer = styled.div`

    z-index: 99;
    width: 100%;
    margin: 0 auto;

    background-color: ${white};
    animation: bounce 1s ease-in forwards;

    @keyframes bounce {
        0% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`
export const CartAnimation = styled.div`
    /* animation: bounce 1s ease-in forwards;

    @keyframes bounce {
        0% {
            transform: translateY(-200px);
        }
        100% {
            transform: translateY(0px);
        }
    } */
`

export const ContainerItem = styled(CartAnimation)`
/* border-top: 1px rgba(39, 39, 39, 1) solid; */
    display:flex;
    align-items:center;
    margin: 0 auto;
    width: 95%;
    height: 25vh;
    padding:20px 0;
    box-shadow: 0px 13px 16px 0 rgb(36 36 36 / 40%);
`
export const DeleteIcon = styled.div`
    width: 10%;
    margin-bottom:12%;
    padding-top: 20px;
    cursor: pointer;
    text-align: center;

`
export const Nave = styled.div`
    width: 15%;
    img {
        max-height: 24vh;
    }
`
export const ContainerNomeDescricao = styled.div`
    width: 45%;
    display:block;
`
export const Nome = styled.h1`
    letter-spacing: 0.1em;
    color:rgba(39, 39, 39, 1);
    font-size:42px;
`
export const Paragrafo = styled.p`
    letter-spacing: 0.1em;
    color:rgba(39, 39, 39, 1);
`

export const ContainerContador = styled.div`
    width:20%;
    /* margin-left:30%; */
    letter-spacing: 0.1em;
`
export const PQuantidade = styled.p`
    text-align: center;
    color: #000;
`
export const ContainerPlusMinus = styled.div`
    display:flex;
    justify-content:center;
`
export const BotãoContador = styled.button`
    border:none;
    background-color: ${white};
    cursor: pointer;
`

export const ContainerQuantity = styled.div`
    background-color: rgba(28, 28, 28, 1);
    color: white;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:8px;
    width:4vw;
    height:7vh;
    margin-left:10%;
    margin-right:10%;
`



export const ContainerCompra = styled(CartAnimation)`
/* border: 3px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 26vh;
    width: 95%;
    margin: 0 auto;
    max-width: 1440px;
    box-shadow: 0 1em 1em 0 rgb(36 36 36 / 40%);
    /* box-shadow:0  1em 1em  0 rgba(36, 36, 36, 0.404); */

`

export const Logo = styled.img`
width: 15vw;
opacity: 0.2;
margin-left: 16px;
margin-bottom: 25px;
`

export const ContainerTotal = styled.div`
border-top:1px solid black;
display: flex;
align-items: flex-end;
justify-content: space-between;
height: 15vh;
width: 30vw;
margin-right: 40px;
`
export const H1Total = styled.h1`
    color:rgba(39, 39, 39, 1);
`
export const H3Valor = styled.h3`
    color:rgba(39, 39, 39, 1);
`
export const Finalizar = styled(CardButton)`
    height: 8vh;
    width: 15vw;
    margin-bottom: 20px;
    background-color: rgba(39, 39, 39, 1);
    color:white;
    font-size: 18px;
    border-radius: 8px;
`