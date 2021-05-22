import React from 'react'
import CardItem from '../CardItem'

import { CardsGridContainer, WhiteParagraph } from './styled'

class CardsGrid extends React.Component {


    render() {
        const filter = this.props.products
            .filter((item) => item.title.toLowerCase().includes(this.props.searchInputArea))
            .filter((item) => item.price >= this.props.inputFilterMin)
            .filter((item) => item.price <= this.props.inputFilterMax)
            .sort((a, b) => {
                switch (this.props.orderByPrice) {
                    case 'highToLow':
                        if (a.price > b.price) {
                            return -1
                        }
                        if (a.price < b.price) {
                            return 1
                        }
                        return 0
                    case 'lowToHigh':
                        if (a.price > b.price) {
                            return 1
                        }
                        if (a.price < b.price) {
                            return -1
                        }
                        return 0

                    case 'default':

                        break;
                }

            })


        const productsList = filter.map((product, index) => {

            return (
                <CardItem
                    key={index}
                    index={index}
                    product={product}
                    AddToCart={this.props.AddToCart}
                />
            )
        })

        return (
            <CardsGridContainer>
                { productsList}
            </CardsGridContainer >
        )
    }
}

export default CardsGrid