import React from 'react'
import CardsGrid from '../CardsGrid'
import FilterToPrice from '../FilterToPrice'

import {  
    Main,
    
} from './styled'

class Body extends React.Component {

    render() {
        return (
            <Main>
                <FilterToPrice />
                <CardsGrid />
            </Main> 
        )
    }
}

export default Body