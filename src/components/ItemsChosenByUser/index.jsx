import React from 'react'

import {
   CartContainer,
   ContainerItem,
   ContainerItemImg,
   DeleteIcon,
   ContainerProductText,
   ItemName,
   ItemDescription,
   ItemQuantity,
   ContainerQuantity,
   QuantityController,
   QuantityTitle,
   QuantityControllerButton,
   CartFooter,
   Logo,
   ContainerTotal,
   H1Total,
   H3Total,
   FinishButton
} from './styled'

import LogoFinalizar from '../../icons/Logo.svg'
import Delete from '../../icons/x.svg'
import Plus from '../../icons/plus.svg'
import Minus from '../../icons/minus.svg'


export default class CartList extends React.Component {

   render() {

      return (
         <CartContainer>
            { this.props.cart.map(
               (item, index) => {
                  return (
                     <ContainerItem>
                        <DeleteIcon >
                           <img
                              src={Delete}
                              alt="delete"
                              onClick={() => this.props.delete(index)}
                           />
                        </DeleteIcon>
                        <ContainerItemImg>
                           <img
                              src={item.image}
                              alt={item.name}
                           />
                        </ContainerItemImg>
                        <ContainerProductText>
                           <ItemName>{item.title} - R$ {item.price},00</ItemName>
                           <ItemDescription>{item.description}</ItemDescription>
                        </ContainerProductText>
                        <ContainerQuantity>
                           <QuantityTitle>Quantidade</QuantityTitle>
                           <QuantityController>
                              <QuantityControllerButton
                                 onClick={() => this.props.sub(index)}>
                                 <img src={Minus} alt="menos"
                              />
                              </QuantityControllerButton>
                              <ItemQuantity>
                                 {item.quantity}
                              </ItemQuantity>
                              <QuantityControllerButton
                                 onClick={() => this.props.add(index)}>
                                 <img src={Plus} alt="mais" 
                              />
                              </QuantityControllerButton>
                           </QuantityController>
                        </ContainerQuantity>
                     </ContainerItem>
                  )
               })
            }

            <CartFooter>
               <Logo src={LogoFinalizar} alt="Space eCommerce logo" />
               <ContainerTotal>
                  <div>
                     <H1Total> Total </H1Total>
                     <H3Total> R$ {this.props.CartTotal()},00 </H3Total>
                  </div>
                  <FinishButton onClick={this.props.finishPopUp}>Finalizar Compra</FinishButton>
               </ContainerTotal>
            </CartFooter>
         </CartContainer>
      )
   }
}