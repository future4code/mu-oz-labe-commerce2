import React from 'react'
import CardItem from '../CardItem'


import {CardsGridContainer, WhiteParagraph} from './styled'



class CardsGrid extends React.Component{

    productsList = this.props.products.map((product, index) => {
        return <CardItem 
        key={index}
        index={index}
        product={product}
        AddToCart={this.props.AddToCart} />
    })

    render(){

        return (

            <CardsGridContainer>
                {this.productsList}
            </CardsGridContainer>
        )
    }
}

export default CardsGrid