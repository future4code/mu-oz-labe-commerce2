import React from 'react'
import ItemsChosenByUser from '../ItemsChosenByUser'


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
                    {this.state.buttonHasClicked && <ItemsChosenByUser/>}
                   
                </HeaderContainer>
               
            </HeaderBackground>
        )
    }
}

export default Header