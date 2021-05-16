import React from 'react'
import ItemsChoicedByUser from '../ItemsChoicedByUser'

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
                    {this.state.buttonHasClicked && <ItemsChoicedByUser />}
                </HeaderContainer>
               
            </HeaderBackground>
        )
    }
}

export default Header