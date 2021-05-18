import { createGlobalStyle } from 'styled-components'

export const backGroundBlack = '#1c1c1c'
export const black = '#272727'
export const white = '#EBEBEB'

export const flexColumn = () => {
    return `
        display:flex;
        justfy-content: center;
        align-items: center;
        flex-direction: column;
    `
}

export const flexRow = () => {
    return `
        display:flex;
        justfy-content: center;
        align-items: center;    
    `
}

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${backGroundBlack};
    }
`

export default GlobalStyle