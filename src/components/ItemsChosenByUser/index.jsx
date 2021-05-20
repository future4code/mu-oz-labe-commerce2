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
import Nave01 from '../../img/nave-01.png'
import Delete from '../../icons/x.svg'
import Plus from '../../icons/plus.svg'
import Minus from '../../icons/minus.svg'





export default class ItensCarrinho extends React.Component {
    // state={
    //     contador: 1,

    // }
    
   

    
    render() {
        
       
        return (
            <>
            { this.props.cart.map( (item, index) => {
            return(

            
            
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
                     <BotãoContador onClick={()=> this.props.add(index)}><img src={Plus} alt="mais" /></BotãoContador>
                        <ContainerNumeroContador>{item.quantity}</ContainerNumeroContador>
                       <BotãoContador onClick={()=>this.props.sub(index)}> <img src={Minus} alt="menos" /></BotãoContador>
                       
                       </ContainerPlusMinus>
                       </ContainerContador>
                        
               </ContainerItem>
            )
               }

            )
            } 
            </>
            
        )

    }
}

