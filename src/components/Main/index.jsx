import React from 'react'
import CardsGrid from '../CardsGrid'
import FilterToPrice from '../FilterToPrice'

import {
    Main,

} from './styled'

class MainContainer extends React.Component {

    render() {
        return (
            <Main>
                <FilterToPrice
                    inputFilterMax={this.props.inputFilterMax}
                    inputFilterMin={this.props.inputFilterMin}
                    filterByInputPriceMin={this.props.filterByInputPriceMin}
                    filterByInputPriceMax={this.props.filterByInputPriceMax}
                    majorPrice={this.props.majorPrice}
                    minorPrice={this.props.minorPrice}
                />
                <CardsGrid
                    products={this.props.products}
                    AddToCart={this.props.AddToCart}
                    searchInputArea={this.props.searchInputArea}
                    inputFilterMax={this.props.inputFilterMax}
                    inputFilterMin={this.props.inputFilterMin}
                    orderByPrice={this.props.orderByPrice}
                />
            </Main>
        )
    }
}

export default MainContainer