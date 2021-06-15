import React from 'react'
import Check from '../../img/check.jpg'
import { Titulo, ContainerFinal, Paragrafo, CheckIcon, Delete } from './styled'
import DeleteIcon from '../../icons/x.svg'


export default class PopUpComponent extends React.Component {

    render() {

        return (
            <div>
                <ContainerFinal>
                    <Delete src={DeleteIcon} alt="" onClick={this.props.cleanCart} />
                    <Titulo> Compra Finalizada! </Titulo>
                    <Paragrafo>
                        Muito obrigado pela preferência! <br />
                        Volte sempre 
                        <i className="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>
                    </Paragrafo>
                    <CheckIcon src={Check} alt="check" />
                </ContainerFinal>
            </div>
        )
    }
}