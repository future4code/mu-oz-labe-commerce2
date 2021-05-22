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
    .div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height: 100vh;
  position: relative;
`

const arrayDeNaves = [
    {
        image: Nave1,
        title: 'aNave 1',
        price: 3599,
        quantity: 0
    }, {
        image: Nave2,
        title: 'bNave 2',
        price: 4599,
        quantity: 0
    }, {
        image: Nave3,
        title: 'cNave 3',
        price: 5599,
        quantity: 0
    }, {
        image: Nave4,
        title: 'dNave 4',
        price: 3599,
        quantity: 0
    }, {
        image: Nave5,
        title: 'Nave 5',
        price: 6599,
        quantity: 0
    }, {
        image: Nave6,
        title: 'Nave 6',
        price: 1599,
        quantity: 0
    }, {
        image: Nave7,
        title: 'Nave 7',
        price: 599,
        quantity: 0
    }, {
        image: Nave8,
        title: 'Nave 8',
        price: 30599,
        quantity: 0
    }, {
        image: Nave9,
        title: 'Nave 9',
        price: 3599,
        quantity: 0
    }, {
        image: Nave10,
        title: 'Nave 10',
        price: 3599,
        quantity: 0
    }, {
        image: Nave11,
        title: 'Nave 11',
        price: 3599,
        quantity: 0
    }, {
        image: Nave12,
        title: 'Nave 12',
        price: 3599,
        quantity: 0
    }
]

class App extends React.Component {

    state = {
        products: arrayDeNaves,
        carrinho: [],
        totalCarrinho: 0,
        searchInputArea: '',
        inputFilterMin: '',
        inputFilterMax: Infinity,
        orderByPrice: 'default',
    }

    AddToCart = (product) => {
        this.setState({
            carrinho: [...this.state.carrinho,  product]
        })
        this.somaValores()
    }
    
    somaValores = () => {
        // let accumulator = 0
        const totalCompra = this.state.carrinho.map((item) => {
            return item.price * item.quantity
        }).reduce((accumulator, totalCompra) => totalCompra += accumulator, 0)

        return <span>{totalCompra}</span>
        //  this.setState({totalCarrinho:totalCompra})

        // this.atualizaTotal(totalCompra)
    }
    
  //     atualizaTotal = (item) => this.setState({ totalCarrinho: item })

    delete = (index) => {
        this.setState({
            carrinho: this.state.carrinho.filter((item, i) => {
                    if (i !== index) {
                        return true
                    } else {
                        return false
                    }
                })
        })
        this.somaValores()
    }
    
    add = (index) => {
        this.setState({
            carrinho: this.state.carrinho.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else
                    return item
            })
        })
        this.somaValores()
    }
  
    sub = (index) => {

        this.setState({
            carrinho: this.state.carrinho.map((item, i) => {
                if (i === index && item.quantity > 0) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else return item
             })
        })
    //possível erro da função
        this.somaValores()
     }
      

    searchInput = (e) => this.funcToUpdateComponentsByInputSearch(e)
    funcToUpdateComponentsByInputSearch = (e) => {
        this.setState({
            searchInputArea: e.target.value,
        })
    }

    filterByInputPriceMax = (e) => this.functToUpdateByInutPrice({ isMaxInputValue: true, value: e.target.value })
    filterByInputPriceMin = (e) => this.functToUpdateByInutPrice({ isMaxInputValue: false, value: e.target.value })
    functToUpdateByInutPrice = (objectValues) => {
        if (objectValues.isMaxInputValue) {
            if (objectValues.value.length === 0 || objectValues.value === " ") {
                this.setState({
                    inputFilterMax: Infinity
                })
            } else {
                this.setState({
                    inputFilterMax: objectValues.value
                })
            }
        } else {
            this.setState({
                inputFilterMin: objectValues.value
            })
        }
    }

    majorPrice = () => {
        this.setState({
            orderByPrice: 'highToLow'
        })

    }

    minorPrice = () => {
        this.setState({
            orderByPrice: 'lowToHigh'
        })
    }
  
    render() {
        return (
            <FlexContainer>
                <GlobalStyle />
                <Header
                    cart={this.state.carrinho}
                    add={this.add}
                    sub={this.sub}
                    delete={this.delete}
                    totalCarrinho={this.state.totalCarrinho}
                    somaValores={this.somaValores}
                    searchInput={this.searchInput}
                    searchValue={this.state.searchInputArea}
                    carrinho={this.state.carrinho}
                />
                                            
                <Main
                    products={this.state.products}
                    AddToCart={this.AddToCart}
                    searchInputArea={this.state.searchInputArea}
                    inputFilterMax={this.state.inputFilterMax}
                    inputFilterMin={this.state.inputFilterMin}
                    filterByInputPriceMin={this.filterByInputPriceMin}
                    filterByInputPriceMax={this.filterByInputPriceMax}
                    majorPrice={this.majorPrice}
                    minorPrice={this.minorPrice}
                    orderByPrice={this.state.orderByPrice}
                />
                <Footer />
            </FlexContainer>
        );
    }
}

export default App;

