import styled from 'styled-components'
import variables from '../../../config/consts'

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

const InputContainer = styled.div `
    position: relative;
    &::before, 
    &::after {
        content: '';
        width: 12px;
        height: 2px;
        background: ${variables.ERROR_COLOR};
        display: none;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%) rotate(45deg);
    }
    &::after {
        transform: translateY(-50%) rotate(-45deg);
    }
`

const Input = styled.input `
    display: block;
    width: 100%;
    border: 1px solid ${variables.SECONDARY_COLOR};
    box-sizing: border-box;
    border-radius: 8px;
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    padding: 17px 52px 17px 17px;
    outline: none;
`

const Container = styled.label `
    display: block;
    margin-bottom: 16px;
    ${Input} {
        border-color: ${props => props.type === 'error' ? variables.ERROR_COLOR : variables.SECONDARY_COLOR}
    }
    ${InputContainer} {
        &::after, &::before {
            display: ${props => props.type === 'error' ? 'block' : 'none'};
        }
    }
`

const Error = styled(Label) `
    color: ${variables.ERROR_COLOR};
    margin-top: 8px;
    margin-bottom: 0;
    text-transform: none;
`

export default {
    Container,
    Label,
    Input,
    InputContainer,
    Error
}