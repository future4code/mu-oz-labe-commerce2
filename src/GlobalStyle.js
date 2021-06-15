import { createGlobalStyle } from 'styled-components'

export const backgroundBlack = '#1c1c1c'
export const black = '#272727'
export const white = '#EBEBEB'

export const flexColumn = () => {
    return `
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `
}

export const flexRow = () => {
    return `
        display:flex;
        justify-content: center;
        align-items: center;    
    `
}

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${backgroundBlack};
        font-family: 'Ropa Sans', sans-serif;
        color: ${white};
    }
`

export default GlobalStyle