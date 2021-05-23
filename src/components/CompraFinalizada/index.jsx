import React from 'react'
import Check from '../../img/check.jpg'
import {Titulo} from './styled'
import {ContainerFinal} from './styled'
import {Paragrafo} from './styled'
import {CheckIcon} from './styled'
import  DeleteIcon  from '../../icons/x.svg'
import {Delete} from './styled'




export default class Finalizada extends React.Component {
  

    
    
   
    render() {
        
        return (
            <div>
              
                <ContainerFinal>
                    <Delete src={DeleteIcon} alt="" onClick={() => this.props.finalizarCompra("cleanCart")}  />
                    <p></p>
               <Titulo> Compra Finalizada! </Titulo>
               <Paragrafo>Muito obrigado pela preferência! <br />  
                Volte sempre <i className="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i></Paragrafo>
                <CheckIcon src={Check} alt="check" />
               </ContainerFinal>
            </div>
        )
    }
}
// {this.state.botãoFinalizarClicado ? "FUNCIONOU" : "eu estou com vontade de morrer"}