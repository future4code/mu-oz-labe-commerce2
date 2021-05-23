import styled from 'styled-components'

import {
    white,
    flexColumn,
    flexRow,
    // black,
    backGroundBlack
} from '../../GlobalStyle'

export const HeaderBackground = styled.header`

    /* background-color: ${white}; */
    background-color: ${white};
    width: 100%;
    min-height: 100px;
    position: absolute;
    top: 0;
    z-index: 99;

`

export const HeaderContainer = styled.div`
    margin: 0 auto;
    width: 95%;
    max-width: 1440px;
    height: 100%;
    ${flexColumn()}  
   
`

export const HeaderItems = styled.div`
    width: 100%;
    margin: 10px 0;
    ${flexRow()}
`

export const LogoHeader = styled.img`

`

export const DivSearch = styled.div`
    width:100%;
    margin-left: 74px;
    margin-right: 28px;
    position: relative;
    ${flexRow()}
`

export const InputSearch = styled.input`
    width:100%;
    height:60px;
    border-radius: 10px;
    border: none;
    background: ${backGroundBlack};
    outline: none;
    color: ${white};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.1em;
    padding: 0 20px;
`

export const LupaIcon = styled.img`
    position: absolute;
    right: 0;
    margin-right: 16px;
`

export const ButtonCart = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
`