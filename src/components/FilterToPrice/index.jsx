import React from 'react'

import {
    FilterToPriceContainer,
    FilterToPriceGroup,
    FilterToPriceTitle,
    FilterToPriceP,
    InputFilterToPrice,
    DivInputFilterToPrice
} from './styled'

class FilterToPrice extends React.Component {

    render() {

        return (
            <FilterToPriceContainer>
                <FilterToPriceGroup>
                    <FilterToPriceTitle>Preço</FilterToPriceTitle>
                    <FilterToPriceP>Até $ 2500</FilterToPriceP>
                    <FilterToPriceP>De $ 2500 até $ 5000</FilterToPriceP>
                    <FilterToPriceP>Acima de $ 5000</FilterToPriceP>
                    <DivInputFilterToPrice>
                        <InputFilterToPrice type="number" placeholder='Minimo' />
                        <InputFilterToPrice type="number" placeholder='Máximo' />
                    </DivInputFilterToPrice>
                </FilterToPriceGroup>
            </FilterToPriceContainer>
        )
    }
}

export default FilterToPrice