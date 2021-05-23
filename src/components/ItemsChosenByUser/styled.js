import styled from 'styled-components'

import { CardButton } from '../CardItem/styled'


export const CartAnimation = styled.div`
    animation: bounce 1s ease-in forwards;

    @keyframes bounce {
        0% {
            transform: translateY(-200px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`

export const ContainerItem = styled(CartAnimation)`
border-top: 1px rgba(39, 39, 39, 1) solid;
display:flex;
align-items:center;
margin-bottom:10px;
margin-left:20px;
width: 85%;
height: 25vh;
margin-top:2%;
padding-top:20px;

`
export const ContainerNomeDescricao = styled.div`
display:block;
margin-left:40px;
 width: 50%;
`
export const ContainerNumeroContador = styled.div`
background-color:rgba(28, 28, 28, 1);
color: white;
align-items:center;
display:flex;
justify-content:center;
border-radius:8px;
width:4vw;
height:7vh;
margin-left:10%;
margin-right:10%;
`
export const BotãoContador = styled.button`
border:none;
`
export const ContainerContador = styled.div`
/* border: 2px solid red; */
width:40vw;
margin-left:30%;
font-family: 'Ropa Sans', sans-serif;
letter-spacing: 0.1em;


`
export const ContainerPlusMinus = styled.div`
display:flex;
/* border: 2px solid blue; */
justify-content:center;
`
export const PQuantidade = styled.p`
text-align:center;
`
export const Nave = styled.img`
width: 10vw;
height: 24vh;
`
export const DeleteIcon = styled.img`
 margin-bottom:12%;
 cursor: pointer;

`
export const Nome = styled.h1`
font-family: 'Ropa Sans', sans-serif;
letter-spacing: 0.1em;
color:rgba(39, 39, 39, 1);
font-size:42px;
`
export const Paragrafo = styled.p`
font-family: 'Ropa Sans', sans-serif;
letter-spacing: 0.1em;
color:rgba(39, 39, 39, 1);
font-size: 20px;

`

export const ContainerCompra = styled(CartAnimation)`
/* border: 3px solid red; */
display: flex;
height: 26vh;
width: 100%;
max-width: 1440px;
justify-content: space-between;
align-items: flex-end;
box-shadow:0  1em 1em  0 rgba(36, 36, 36, 0.404);

`

export const Logo = styled.img`
width: 15vw;
opacity: 0.2;
margin-left: 16px;
margin-bottom: 25px;
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
export const ContainerTotal = styled.div`
border-top:1px solid black;
display: flex;
height: 15vh;
width: 30vw;
margin-right: 40px;
align-items: flex-end;
`
export const H1Total = styled.h1`
color:rgba(39, 39, 39, 1);
margin-right: 50px;
`
export const H3Valor = styled.h3`
color:rgba(39, 39, 39, 1);
margin-right: 60px;
`