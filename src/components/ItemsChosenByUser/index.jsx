import React from 'react'
import {ContainerItem} from './styled'
import {Nave} from './styled'
import {DeleteIcon} from './styled'
import {Nome} from './styled'
import {Paragrafo} from './styled'
import {ContainerNomeDescricao} from './styled'
import {ContainerNumeroContador} from './styled'
import {ContainerContador} from './styled'
import {ContainerPlusMinus} from './styled'
import {PQuantidade} from './styled'
import {BotãoContador} from './styled'
import {Finalizar} from './styled'
import {Logo} from './styled'
import {ContainerTotal} from './styled'
import { H1Total } from './styled';
import { H3Valor } from "./styled";
import Nave01 from '../../img/nave-01.png'
import LogoFinalizar from '../../icons/Logo.svg'
import Delete from '../../icons/x.svg'
import Plus from '../../icons/plus.svg'
import Minus from '../../icons/minus.svg'
import {ContainerCompra} from './styled'




export default class ItensCarrinho extends React.Component {
  
   //   somaDosProdutos = this.props.products.reduce((accumulator, item)=>{
   //    return accumulator += item.price 
   //  })
    render() {
        
      
     
        return (
         
            <>
            { this.props.cart.map( (item, index) => {
               
            return(

            
               <>
               
               <ContainerItem>
                <DeleteIcon src={Delete} alt="delete" onClick={()=> this.props.delete(index)} />
                   <Nave src={item.image} alt="nave01" /> 
                   
                   <ContainerNomeDescricao>
                   <Nome>{item.title}</Nome> 
                   <Paragrafo>Nave espacial modelo tesla sei la das contas com
                        garantia de fabrica e isso e aquilo la da outra Nave espacial
                         modelo tesla sei la das contas com garantia de fabrica e isso e 
                         aquilo la da  </Paragrafo>
                        </ContainerNomeDescricao>
                       <ContainerContador>
                       <PQuantidade>Quantidade</PQuantidade>
                       <ContainerPlusMinus>
                       <BotãoContador onClick={()=>this.props.sub(index)}> <img src={Minus} alt="menos" /></BotãoContador>
                        <ContainerNumeroContador>{item.quantity}</ContainerNumeroContador>
                       
                       <BotãoContador onClick={()=> this.props.add(index)}><img src={Plus} alt="mais" /></BotãoContador>
                       
                       </ContainerPlusMinus>
                       </ContainerContador>
                        
               </ContainerItem>
             
               </>
            )
               }

            )
            } 
               <ContainerCompra> 
                  <Logo src={LogoFinalizar} alt="" />
                  <ContainerTotal>
                     <div>
                      <H1Total>Total</H1Total>
                        <H3Valor> R$ {this.props.somaValores()}
                         </H3Valor>
                      </div>
                    <Finalizar>Finalizar Compra</Finalizar>
                  </ContainerTotal>
                   </ContainerCompra> 
            </>
            
        )

    }
}

// 

// {this.props.cart.reduce((accumulator, item)=>{
            
//    return accumulator += item.price
// })}]
// {this.somaDosProdutos}