import React from 'react'
import ItemsChosenByUser from '../ItemsChosenByUser'


import {
    HeaderBackground,
    HeaderContainer,
    HeaderItems,
    LogoHeader,
    DivSearch,
    InputSearch,
    LupaIcon,
    ButtonCart,
} from './styled'

import Logo from '../../icons/Logo.svg'
import Carrinho from '../../icons/Carrinho.svg'
import Lupa from '../../icons/Lupa.svg'

class Header extends React.Component {
    state = {
        buttonHasClicked: false
    }

    clickHeaderButton = () => this.setState({ buttonHasClicked: !this.state.buttonHasClicked })


    render() {
        return (
            <HeaderBackground>
                <HeaderContainer>
                    <HeaderItems>
                        <LogoHeader src={Logo} alt="Logo Space eComerce" />
                        <DivSearch>
                            <InputSearch type="text" name="Digite os items" placeholder="Digite sua busca..." />
                            <LupaIcon src={Lupa} alt="" srcset="" />
                        </DivSearch>
                        <ButtonCart onClick={this.clickHeaderButton}><img src={Carrinho} alt="Carrinho de compras"  /></ButtonCart>
                    </HeaderItems>
                    {this.state.buttonHasClicked && <ItemsChosenByUser cart={this.props.cart} 
                    add={this.props.add} 
                    sub={this.props.sub} 
                    delete={this.props.delete} 
                    totalCarrinho={this.props.totalCarrinho}
                    somaValores={this.props.somaValores}
                    />}
                </HeaderContainer>

            </HeaderBackground>
        )
    }
}

export default Header