import styled from 'styled-components'

import { flexColumn, white, black, flexRow } from '../../GlobalStyle'

export const FilterToPriceContainer = styled.div`

    ${flexColumn()}
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
    width: 386px;   
   
`

export const FilterToPriceTitle = styled.h1`
    font-size: 40px;
    line-height: 43px;
    letter-spacing: 0.1em;
`

export const FilterToPriceP = styled.p`
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.1em;
`

export const InputFilterToPrice = styled.input`
    background: ${white};
    color: ${black};
    width: 140px;
    height: 36px;
    margin:0;
    padding: 0;
    text-align: center;
    font-size: 16px;
    line-height: 17px;
    letter-spacing: 0.1em;

`

export const DivInputFilterToPrice = styled.div`
    width: 100%;
    ${flexRow()}
    justify-content:space-between
`