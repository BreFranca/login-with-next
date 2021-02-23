import styled from 'styled-components'

const Heading = styled.h2`
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    line-height: 1.2em;
    letter-spacing: 0em;
    font-weight: ${props => props.weight || '400'};
    color: ${props => props.color || '#383E71'};
    text-align: left;
    margin-bottom: 15px;
`

const Paragraph = styled.p`
    font-family: Montserrat;
    font-style: normal;
    line-height: 1.2em;
    letter-spacing: 0em;
    font-weight: ${props => props.weight || '400'};
    color: ${props => props.color || '#989FDB'};
    font-size: 18px;
    a {
        color: #9D25B0;
        text-decoration: underline;
    }
    text-align: ${props => props.align || 'left'}
`

const span = styled(Paragraph)`
    font-size: 14px;
`

export default {
    Heading,
    Paragraph,
    span
}