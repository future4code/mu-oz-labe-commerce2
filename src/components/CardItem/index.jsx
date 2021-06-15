import React from 'react'

import {CardItemContainer, CardImageContainer, CardImage, CardContentContainer, CardTitle, CardPrice, CardButton} from './styled'

export default class CardItem extends React.Component{

    render(){
        return (
            <CardItemContainer>
                <CardImageContainer>
                    <CardImage src={this.props.product.image}></CardImage>
                </CardImageContainer>
                <CardContentContainer>
                    <CardTitle>{this.props.product.title}</CardTitle>
                    <CardPrice>R$ {this.props.product.price},00</CardPrice>
                    <CardButton onClick={() => this.props.addToCart(this.props.product)}>Adicionar</CardButton>
                </CardContentContainer>
            </CardItemContainer>
        )
    }
}