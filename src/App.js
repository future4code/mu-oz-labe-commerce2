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

const FlexContainer = styled.div`
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
        title: 'Vostok',
        price: 12599,
        quantity: 1,
        description: 'A Vostok entrou para a história como a nave que transportou o primeiro humano a ir para o espaço. A nave tem o formato retrô típico dos projetos soviéticos e é capaz de transportar apenas uma pessoa dentro de sua cabine esférica. '
    }, {
        image: Nave2,
        title: 'Galactica',
        price: 4599,
        quantity: 1,
        description: 'Sobrevivente de uma guerra com os seres cibernéticos cilônios, a Galactica lidera dezenas de outras pequenas naves na busca por um planeta conhecido como Terra.'
    }, {
        image: Nave3,
        title: 'Enterprise',
        price: 7599,
        quantity: 1,
        description: 'Uma das naves mais reconhecidas e requisitadas de todos os tempos, capaz de transportar até duas pessoas em sua cabine'
    }, {
        image: Nave4,
        title: 'Soyuz',
        price: 10599,
        quantity: 1,
        description:'As Soyuzs são pequenas naves de apenas um ocupante, fáceis de manobrar, e armadas com lasers.'
    }, {
        image: Nave5,
        title: 'Shengzhou',
        price: 9599,
        quantity: 1,
        description:'A nave é bastante semelhante aos veículos russos Soyuz. Desse modo, ela possui três módulos: orbital, de reentrada e de serviço. O módulo orbital, no entanto, possui painéis solares próprios.'
    }, {
        image: Nave6,
        title: 'Millenium Falcon',
        price: 67599,
        quantity: 1,
        description:'A Millenium Falcon se destaca pela sua amplitude e sua versatilidade em quesito conforto e adaptação, podendo transportar até 3 pessoas em sua cabine.'
    }, {
        image: Nave7,
        title: 'Colonial Viper',
        price: 5299,
        quantity: 1,
        description:'A Viper é a nave espacial com maior período de uso na história da exploração espacial e é considerada muito eficiente e segura'
    }, {
        image: Nave8,
        title: 'Tie Fighter',
        price: 30599,
        quantity: 1,
        description:'Este modelo costuma ser escohido para missões mais perigosas, esta nave possui uma velocidade jamais vista até os dias atuais, e transporta apenas 1 pessoa.'
    }, {
        image: Nave9,
        title: 'X-Wing',
        price: 34599,
        quantity: 1,
        description:'Possui 3 cabines separadas, podendo transportar até 8 pessoas em cada.'
    }, {
        image: Nave10,
        title: 'Yamato',
        price: 98599,
        quantity: 1,
        description:'Modelo Yamato é o modelo clássico para viagens espaciais, pode transportar até 4 pessoas.'
    }, {
        image: Nave11,
        title: 'Axiom',
        price: 87999,
        quantity: 1,
        description:'Modelo Axiom se tornou a maior nave já vista, podendo transportar até 30 tripulantes.'
    }, {
        image: Nave12,
        title: 'Cygnus',
        price: 210599,
        quantity: 1,
        description:'O modelo mais recente, do ano de 2020, possui asas planejadas para maior velocidade. Possui 4 cabines diferentes, podendo transportar até 5 pessoas. '
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
 
    cleanCart = () => {
        this.setState({carrinho: []})
    }

    AddToCart = (product) => {
        this.setState({
            carrinho: [...this.state.carrinho,  product]
        })
        this.somaValores()
    }
    
    somaValores = () => {
        let accumulator = 0
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
                if (i === index && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else return item
             })
             
        }
        
        )
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
                    cleanCart={this.cleanCart}
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

