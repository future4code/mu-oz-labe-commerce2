import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';

import Nave1 from './img/nave-01.png'
import Nave2 from './img/nave-02.png'
import Nave3 from './img/nave-03.png'
import Nave4 from './img/nave-04.png'
import Nave5 from './img/nave-05.png'
import Nave6 from './img/nave-06.png'
import Nave7 from './img/nave-07.png'
import Nave8 from './img/nave-08.png'
import Nave9 from './img/nave-09.png'
import Nave10 from './img/nave-010.png'
import Nave11 from './img/nave-011.png'
import Nave12 from './img/nave-012.png'

import styled from 'styled-components'

const FlexContainer = styled
    .div `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height: 100vh;
  position: relative;
`

    class App extends React
    .Component {

        state = {
            products: [
                {
                    image: Nave1,
                    title: 'Nave 1',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave2,
                    title: 'Nave 2',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave3,
                    title: 'Nave 3',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave4,
                    title: 'Nave 4',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave5,
                    title: 'Nave 5',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave6,
                    title: 'Nave 6',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave7,
                    title: 'Nave 7',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave8,
                    title: 'Nave 8',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave9,
                    title: 'Nave 9',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave10,
                    title: 'Nave 10',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave11,
                    title: 'Nave 11',
                    price: 3.599,
                    quantity: 0
                }, {
                    image: Nave12,
                    title: 'Nave 12',
                    price: 3.599,
                    quantity: 0
                }
            ],
            carrinho: [
               
            ]
        }

        AddToCart = (item) => {
            console.log(item);
        }
        delete = (index) => {
            console.log(index)
            this.setState({
                carrinho: this.state.carrinho.filter((item, i) => {
                        if (i !== index) {
                            return true
                        } else {
                            return false

                        }
                    })
            })
        }
        add = (index) => {

            this.setState({
                carrinho: this
                    .state
                    .carrinho
                    .map((item, i) => {
                        if (i === index) {

                            return {
                                ...item,
                                quantity: item.quantity + 1
                            }
                        } else 
                            return item

                    })
            })
        }
        sub = (index) => {

            this.setState({
                carrinho: this
                    .state
                    .carrinho
                    .map((item, i) => {
                        if (i === index) {

                            return {
                                ...item,
                                quantity: item.quantity - 1
                            }
                        } else 
                            return item
                    })
            })
        }

        // if (this.state.carrinho - 1 > 0) {     this.setState({         contador:
        // this.state.contador - 1     }) }

        render() {
            return (
                <FlexContainer>
                    <GlobalStyle/>
                    <Header
                        cart={this.state.carrinho}
                        add={this.add}
                        sub={this.sub}
                        delete={this.delete}/>
                    <Main products={this.state.products} AddToCart={this.AddToCart}/>
                    <Footer/>
                </FlexContainer>
            );
        }
    }

    export default App;
