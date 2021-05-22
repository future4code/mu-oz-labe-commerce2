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
                  <FilterToPriceTitle>Ordenar por preço</FilterToPriceTitle>
                  <FilterToPriceP onClick={this.props.minorPrice}>Menor</FilterToPriceP>
                  <FilterToPriceP onClick={this.props.majorPrice}>Maior</FilterToPriceP>
                  <DivInputFilterToPrice>
                      <InputFilterToPrice type="number" placeholder='Minimo' value={this.props.inputFilterMin} onChange={(e) => this.props.filterByInputPriceMin(e)}/>
                      <InputFilterToPrice type="number" placeholder='Máximo' value={this.props.inputFilterMax} onChange={(e) => this.props.filterByInputPriceMax(e)}/>
                  </DivInputFilterToPrice>
                </FilterToPriceGroup>
            </FilterToPriceContainer> 
        )
    }
}

export default FilterToPrice