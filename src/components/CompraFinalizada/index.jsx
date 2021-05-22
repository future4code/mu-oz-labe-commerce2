import React from 'react'
import Check from '../../img/check.jpg'
import {Titulo} from './styled'
import {ContainerFinal} from './styled'
import {Paragrafo} from './styled'
import {CheckIcon} from './styled'
import  DeleteIcon  from '../../icons/x.svg'
import {Delete} from './styled'




export default class Finalizada extends React.Component {
    state = {
        botãoFinalizarClicado: this.props.botãoFinalizarClicado
    }

    finalizarCompra = () => this.setState
    ({ botãoFinalizarClicado: !this.state.botãoFinalizarClicado })
    
    
   
    render() {
        
        return (
            <div>
              
                <ContainerFinal>
                    <Delete src={DeleteIcon} alt="" onClick={this.finalizarCompra}  />
                    <p></p>
               <Titulo> {this.state.botãoFinalizarClicado ? "FUNCIONOU" : "eu estou com vontade de morrer"} </Titulo>
               <Paragrafo>Muito obrigado pela preferência! <br />  
                Volte sempre <i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i></Paragrafo>
                <CheckIcon src={Check} alt="check" />
               </ContainerFinal>
            </div>
        )
    }
}
