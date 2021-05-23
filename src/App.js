import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import CompraFinalizada from './components/CompraFinalizada'

import GlobalStyle from './GlobalStyle';
import {FlexContainer, DivAddedToCart, CloseMessage} from './styled';

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



const arrayDeNaves = [
    {
        image: Nave1,
        title: 'aNave 1',
        price: 3599,
        quantity: 1
    }, {
        image: Nave2,
        title: 'bNave 2',
        price: 4599,
        quantity: 1
    }, {
        image: Nave3,
        title: 'cNave 3',
        price: 5599,
        quantity: 1
    }, {
        image: Nave4,
        title: 'dNave 4',
        price: 3599,
        quantity: 1
    }, {
        image: Nave5,
        title: 'Nave 5',
        price: 6599,
        quantity: 1
    }, {
        image: Nave6,
        title: 'Nave 6',
        price: 1599,
        quantity: 1
    }, {
        image: Nave7,
        title: 'Nave 7',
        price: 599,
        quantity: 1
    }, {
        image: Nave8,
        title: 'Nave 8',
        price: 30599,
        quantity: 1
    }, {
        image: Nave9,
        title: 'Nave 9',
        price: 3599,
        quantity: 1
    }, {
        image: Nave10,
        title: 'Nave 10',
        price: 3599,
        quantity: 1
    }, {
        image: Nave11,
        title: 'Nave 11',
        price: 3599,
        quantity: 1
    }, {
        image: Nave12,
        title: 'Nave 12',
        price: 3599,
        quantity: 1
    }
]

class App extends React.Component {

    state = {
        products: arrayDeNaves,
        cart: [],
        searchInputArea: '',
        inputFilterMin: '',
        inputFilterMax: Infinity,
        orderByPrice: 'default',
        wasAddedToCart: false,
        successPopUp: false,
        isCartOpen: false
    }
 


    AddToCart = (product) => {
        let alreadyExists = false

        if (this.state.cart.length === 0) {
            this.setState({
                cart: [...this.state.cart,  product]
            })
        }

        for (let i = 0; i < this.state.cart.length; i++){

            if (this.state.cart[i].title === product.title){
                const cartCopy = [...this.state.cart]

                cartCopy[i] = {...product, quantity: cartCopy[i].quantity + 1}

                this.setState({
                    cart: [...cartCopy]
                })
                alreadyExists = true
            }
        }

        if (!alreadyExists) {
            this.setState({
                cart: [...this.state.cart,  product]
            })
            alreadyExists = false
        }

        this.addedToCartMessage(true)
    }
    
    addedToCartMessage = (controller) => {
        this.setState({
            wasAddedToCart: controller
        })
    }

    closeCartMessage = () => {
        this.setState({
            wasAddedToCart: false
        })
    }

    finishPopUp = () => {
        this.setState({
            successPopUp: true
        })
    }

    cleanCart = () => {
        this.setState({
            successPopUp: false,
            cart: [],
            isCartOpen: false
        })
    }

    openCartButton = () => {
        this.setState({ 
            isCartOpen: !this.state.isCartOpen 
        })

        this.addedToCartMessage(false)
    }

    somaValores = () => {
        const totalCompra = this.state.cart.map((item) => {
            return item.price * item.quantity
        }).reduce((accumulator, totalCompra) => totalCompra += accumulator, 0)

        return <span>{totalCompra}</span>
    }
    

    delete = (index) => {
        this.setState({
            cart: this.state.cart.filter((item, i) => {
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
            cart: this.state.cart.map((item, i) => {
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
            cart: this.state.cart.map((item, i) => {
                if (i === index && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else return item
            })
        })
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
                    cart={this.state.cart}
                    add={this.add}
                    sub={this.sub}
                    delete={this.delete}
                    totalcart={this.state.totalcart}
                    somaValores={this.somaValores}
                    searchInput={this.searchInput}
                    searchValue={this.state.searchInputArea}
                    cleanCart={this.cleanCart}
                    finishPopUp={this.finishPopUp}
                    openCartButton={this.openCartButton}
                    isCartOpen={this.state.isCartOpen}
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

                {this.state.wasAddedToCart && 
                    <DivAddedToCart>
                        Produto adicionado ao cart
                        <CloseMessage onClick={this.closeCartMessage}>
                            x
                        </CloseMessage>
                    </DivAddedToCart>
                }

                {this.state.successPopUp && 
                    <CompraFinalizada 
                    finalizarCompra={this.finalizarCompra}
                    cleanCart={this.cleanCart} 
                    />
                }
                
                <Footer />
            </FlexContainer>
        );
    }
}

export default App;

