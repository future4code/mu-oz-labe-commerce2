import styled from 'styled-components'

export const FooterBackground = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
`

export const ContainerFooter = styled.div`
    color:white;
    display: flex;
`

export const Text = styled.p`
    color:white;
`

export const Circulo = styled.div`

    border-radius: 50%;
    margin: 0 5px;
    height: 25px;
    width: 25px;
    transition: width 0.5s cubic-bezier(0.000, 0.985, 0.635, 1.025), border-radius 0s linear;
    overflow: hidden;
    
    :hover {
        width: 200px;
        border-radius: 10px;
        cursor: pointer;
        text-align: center;
    }
`
export const R = styled(Circulo)`
    background-color: red;
    :hover {
        :after {
            content: "Rafael S. da Rosa";
            line-height: 25px;
        }
    }
    
    `
export const G = styled(Circulo)`
    background-color: green;
    :hover {
        :after {
            content: "Guilherme G. Cassettari";
            line-height: 25px;
        }
    }
`
export const B = styled(Circulo)`
    background-color: blue;
    :hover {
        :after {
            content: "Brendha L. B. Pereira";
            line-height: 25px;
        }
    }
`