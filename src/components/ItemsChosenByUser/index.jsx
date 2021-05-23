import React from 'react'

import {
   CartContainer,
   ContainerItem,
   Nave,
   DeleteIcon,
   Nome,
   Paragrafo,
   ContainerNomeDescricao,
   ContainerQuantity,
   ContainerContador,
   ContainerPlusMinus,
   PQuantidade,
   BotãoContador,
   Finalizar,
   Logo,
   ContainerTotal,
   H1Total,
   H3Valor,
   ContainerCompra
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
                        <Nave>
                           <img
                              src={item.image}
                              alt={item.name}
                           />
                        </Nave>
                        <ContainerNomeDescricao>
                           <Nome>{item.title} - R$ {item.price},00</Nome>
                           <Paragrafo>{item.description}</Paragrafo>
                        </ContainerNomeDescricao>
                        <ContainerContador>
                           <PQuantidade>Quantidade</PQuantidade>
                           <ContainerPlusMinus>
                              <BotãoContador
                                 onClick={() => this.props.sub(index)}>
                                 <img src={Minus} alt="menos" />
                              </BotãoContador>
                              <ContainerQuantity>
                                 {item.quantity}
                              </ContainerQuantity>
                              <BotãoContador
                                 onClick={() => this.props.add(index)}>
                                 <img src={Plus} alt="mais" />
                              </BotãoContador>
                           </ContainerPlusMinus>
                        </ContainerContador>
                     </ContainerItem>
                  )
               })
            }

            <ContainerCompra>
               <Logo src={LogoFinalizar} alt="" />
               <ContainerTotal>
                  <div>
                     <H1Total>Total</H1Total>
                     <H3Valor> R$ {this.props.somaValores()},00
                     </H3Valor>
                  </div>
                  <Finalizar onClick={this.props.finishPopUp}>Finalizar Compra</Finalizar>
               </ContainerTotal>
            </ContainerCompra>
         </CartContainer>

      )

   }
}