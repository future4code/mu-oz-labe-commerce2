import React from 'react'
import ItemsChoicedByUser from '../ItemsChoicedByUser'
import ItensCarrinho from '../ItensCarrinho/index'
import nave02 from '../../img/nave-02.png'

import {
    HeaderBackground,
    HeaderContainer,
} from './styled'

class Header extends React.Component{
    state = {
        buttonHasClicked: false
    }

    clickHeaderButton = () => this.setState({buttonHasClicked: !this.state.buttonHasClicked})
  

    render(){
        return (
            <HeaderBackground>
                <HeaderContainer>
                    <button onClick={this.clickHeaderButton}>MiClika</button>
                    {this.state.buttonHasClicked && <ItensCarrinho/>}
                   
                </HeaderContainer>
               
            </HeaderBackground>
        )
    }
}

export default Header