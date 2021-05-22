import styled from 'styled-components'

import {white, backGroundBlack, black} from '../../GlobalStyle'

export const CardItemContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 29%;
    min-width: 300px;
    margin: 1%;
    padding: 10px;
    background-color: ${white};
    border-radius: 10px;
`
export const CardImageContainer = styled.div`
    /* background-color: #000; */
    background-image: url('https://i.giphy.com/media/TZf4ZyXb0lXXi/giphy.webp');
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    min-height: 300px;
    width: 100%;
`
export const CardImage = styled.img`
    max-width: 80%;
    max-height: 100%;

    :hover {
        animation: float 4s ease-in-out infinite;
        transition: 2s ease-in-out;
    }

    @keyframes float{
        0%, 100%{
            /* box-shadow:0 5px 15px 0 rgba(0,0,0,.6); */
            transform:  rotate(0deg);
        }
        25%{
            /* box-shadow:0 25px 15px 0 rgba(0,0,0,.2); */
            transform: translatey(-10px) rotate(15deg);
        }

        75%{
            /* box-shadow:0 25px 15px 0 rgba(0,0,0,.2); */
            transform: translatey(10px) rotate(-15deg);
        }
    }
    /* transform: rotate(45deg); */
`

export const CardContentContainer = styled.div`
    width: 70%;
    text-align: center;
`

export const CardTitle = styled.h2`
    color: ${black};
`

export const CardPrice = styled.h3`
    color: ${black};
    border-top: 1px solid ${black};
    border-bottom: 1px solid ${black};
    padding: 5px 0;
`

export const CardButton = styled.button`
    background-color: ${backGroundBlack};
    color: ${white};
    border: none;
    border-radius: 5px;
    width: 90%;
    padding: 10px 25px;

    background-image: -webkit-linear-gradient(45deg, #9a0000 50%, transparent 50%);
    background-image: linear-gradient(45deg, #9a0000 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 500ms ease-in-out;
    transition: background 500ms ease-in-out;

    :hover {
        background-position: 0;
        cursor: pointer;
        outline: 0;
        background-color: #9a0000;
        /* transition: 0.08s ease-in; */
    }
`
