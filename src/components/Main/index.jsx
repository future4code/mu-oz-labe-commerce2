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
                <FilterToPrice />
                <CardsGrid 
                products={this.props.products} 
                AddToCart={this.props.AddToCart} />
            </Main> 
        )
    }
}

export default MainContainer