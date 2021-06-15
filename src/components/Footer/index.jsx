import React from 'react'
import { FooterBackground, Text, ContainerFooter, R, G, B } from './styled'


export default class Footer extends React.Component {

    render() {

        return (
            <FooterBackground>
                <Text>Desenvolvido por</Text>
                <ContainerFooter>
                    <a href={'https://www.linkedin.com/in/rafaelsilveiradarosa'} target={'_blank'}>
                        <R></R>
                    </a>
                    <a href={'https://www.linkedin.com/in/guilherme-gasparotti-cassettari-2759a81b0'} target={'_blank'}>
                        <G></G>
                    </a>
                    <a href={'https://www.linkedin.com/in/brendha-luiza-barbosa-587154201'} target={'_blank'}>
                        <B></B>
                    </a>
                </ContainerFooter>
            </FooterBackground>
        )
    }
}