import React from 'react'
import { FooterBackground, Text, ContainerFooter, R, G, B } from './styled'


class Footer extends React.Component {

    render() {

        return (
            <FooterBackground>
                <Text>Desenvolvido por</Text>
                <ContainerFooter>
                    <R></R>
                    <G></G>
                    <B></B>
                </ContainerFooter>
            </FooterBackground>
        )
    }
}

export default Footer