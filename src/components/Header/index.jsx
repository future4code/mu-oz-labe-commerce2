import React from 'react'
import ItemsChosenByUser from '../ItemsChosenByUser'

import {
    HeaderTag,
    HeaderBackground,
    HeaderContainer,
    HeaderItems,
    LogoHeader,
    DivSearch,
    InputSearch,
    LupaIcon,
    ButtonCart,
    CartCounter
} from './styled'

import Logo from '../../icons/Logo.svg'
import CartIcon from '../../icons/Carrinho.svg'
import Lupa from '../../icons/Lupa.svg'
import UpArrow from '../../icons/up-arrow.svg'


export default class Header extends React.Component {
    state = {
        buttonHasClicked: false
    }

    clickHeaderButton = () => this.setState({ 
        buttonHasClicked: !this.state.buttonHasClicked 
    })


    render() {
        return (
            <HeaderTag>
                <HeaderBackground>
                    <HeaderContainer>
                        <HeaderItems>
                            <LogoHeader src={Logo} alt="Logo Space eCommerce" />
                            <DivSearch>
                                <InputSearch
                                    type="text"
                                    name="Digite os items"
                                    placeholder="Digite sua busca..."
                                    onChange={(e) => this.props.searchInput(e)}
                                    value={this.props.searchInputArea}
                                />
                                <LupaIcon src={Lupa} alt="Lupa Icon" />
                            </DivSearch>
                            <ButtonCart
                                onClick={this.props.openCartButton}>
                                <img
                                    src={this.props.isCartOpen ?
                                        UpArrow :
                                        CartIcon
                                    }
                                    alt="Carrinho de compras" 
                                />
                                {this.props.isCartOpen || 
                                <CartCounter>{this.props.cart.length}</CartCounter>
                                }
                            </ButtonCart>
                        </HeaderItems>
                    </HeaderContainer>
                </HeaderBackground>
                
                {this.props.isCartOpen && 
                <ItemsChosenByUser
                    cart={this.props.cart}
                    add={this.props.add}
                    sub={this.props.sub}
                    delete={this.props.delete}
                    CartTotal={this.props.CartTotal}
                    cleanCart={this.props.cleanCart}
                    finishPopUp={this.props.finishPopUp}
                />
                }
            </HeaderTag>
        )
    }
}