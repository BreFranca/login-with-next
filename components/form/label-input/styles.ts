import styled from 'styled-components'

const Label = styled.span `
    display: ${props => props.type === 'inline' ? 'inline-block' : 'block'};
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 8px;
`

const Input = styled.input `
    display: block;
    width: 100%;
    border: 1px solid #989FDB;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    padding: 17px 52px 17px 17px;
`

const Container = styled.label `
    display: block;
    margin-bottom: 16px;
    ${Input} {
        border-color: ${props => props.type === 'error' ? 'red' : '#989FDB'}
    }
`

const Error = styled(Label) `
    color: red;
    margin-top: 8px;
    margin-bottom: 0;
    text-transform: none;
`

export default {
    Container,
    Label,
    Input,
    Error
}