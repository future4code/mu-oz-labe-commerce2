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
import Carrinho from '../../icons/Carrinho.svg'
import Lupa from '../../icons/Lupa.svg'
import UpArrow from '../../icons/up-arrow.svg'


class Header extends React.Component {
    state = {
        buttonHasClicked: false
    }

    clickHeaderButton = () => this.setState({ buttonHasClicked: !this.state.buttonHasClicked })


    render() {
        return (
            <HeaderTag>
                <HeaderBackground>
                    <HeaderContainer>
                        <HeaderItems>
                            <LogoHeader src={Logo} alt="Logo Space eComerce" />
                            <DivSearch>
                                <InputSearch
                                    type="text"
                                    name="Digite os items"
                                    placeholder="Digite sua busca..."
                                    onChange={(e) => this.props.searchInput(e)}
                                    value={this.props.searchInputArea}
                                />
                                <LupaIcon src={Lupa} alt="" srcset="" />
                            </DivSearch>
                            <ButtonCart
                                onClick={this.clickHeaderButton}>
                                <img
                                    src={this.state.buttonHasClicked ?
                                        UpArrow :
                                        Carrinho
                                }
                                alt="Carrinho de compras" />
                                {this.state.buttonHasClicked || 
                                <CartCounter>{this.props.cart.length}</CartCounter>
                                }
                            </ButtonCart>
                        </HeaderItems>
                    </HeaderContainer>

                </HeaderBackground>
                {this.state.buttonHasClicked && <ItemsChosenByUser
                    cart={this.props.cart}
                    add={this.props.add}
                    sub={this.props.sub}
                    delete={this.props.delete}
                    totalCarrinho={this.props.totalCarrinho}
                    somaValores={this.props.somaValores}
                    cleanCart={this.props.cleanCart}
                />}
            </HeaderTag>
        )
    }
}

export default Header