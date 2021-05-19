import React from 'react'
import CardItem from '../CardItem'
import Nave1 from '../../img/nave-01.png'
import Nave2 from '../../img/nave-02.png'
import Nave3 from '../../img/nave-03.png'
import Nave4 from '../../img/nave-04.png'
import Nave5 from '../../img/nave-05.png'
import Nave6 from '../../img/nave-06.png'
import Nave7 from '../../img/nave-07.png'
import Nave8 from '../../img/nave-08.png'
import Nave9 from '../../img/nave-09.png'
import Nave10 from '../../img/nave-010.png'
import Nave11 from '../../img/nave-011.png'
import Nave12 from '../../img/nave-012.png'

import {CardsGridContainer, WhiteParagraph} from './styled'

const products = [
    {image: Nave1, title: 'Nave 1', price: 3.599},
    {image: Nave2, title: 'Nave 2', price: 3.599},
    {image: Nave3, title: 'Nave 3', price: 3.599},
    {image: Nave4, title: 'Nave 4', price: 3.599},
    {image: Nave5, title: 'Nave 5', price: 3.599},
    {image: Nave6, title: 'Nave 6', price: 3.599},
    {image: Nave7, title: 'Nave 7', price: 3.599},
    {image: Nave8, title: 'Nave 8', price: 3.599},
    {image: Nave9, title: 'Nave 9', price: 3.599},
    {image: Nave10, title: 'Nave 10', price: 3.599},
    {image: Nave11, title: 'Nave 11', price: 3.599},
    {image: Nave12, title: 'Nave 12', price: 3.599}
]

class CardsGrid extends React.Component{

    productsList = products.map((product, index) => {
        return <CardItem product={product} index={index} />
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