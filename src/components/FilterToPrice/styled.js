import styled from 'styled-components'
import { flexColumn, white, black, flexRow } from '../../GlobalStyle'

export const FilterToPriceContainer = styled.div`
    min-width: 240px;
`

export const FilterToPriceGroup = styled.div`

    ${flexColumn()}
    align-items: flex-start;
    justify-content: flex-start;
    position: -webkit-sticky;
    position: sticky;
    top: 10px;
    width: 98%;
   
`

export const FilterToPriceTitle = styled.h1`
    font-size: 40px;
    line-height: 43px;
    letter-spacing: 0.1em;
    margin-bottom: 10px;;
`

export const FilterToPriceP = styled.p`
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.1em;
    border-bottom: 1px solid transparent;
    margin: 10px 0;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);

    :hover{
        color: #adadad;
        border-bottom: 1px solid #FFF;
        padding-right: 10px;
    }
`

export const InputFilterToPrice = styled.input`
    background: ${white};
    color: ${black};
    border: none;
    border-radius: 5px;
    width: 46%;
    min-width: 50px;
    height: 36px;
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 16px;
    line-height: 17px;
    letter-spacing: 0.1em;

    :focus-visible{
        outline: none;
        background-color: #adadad;
    }
`

export const DivInputFilterToPrice = styled.div`
    width: 100%;
    margin: 10px 0;
    ${flexRow()}
    justify-content:space-between
`