import styled from 'styled-components'

const Layout = styled.div `
    display: flex;
    height: 100%;
    width: 100%;
`

const Form = styled.form `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FormFields = styled.div `
    margin: 43px 0 32px 0;
    width: 256px;
`

export default {
    Layout,
    Form,
    FormFields
}