import styled from 'styled-components'

export const StyledButton = styled.button `
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    color: #FFFFFF;
    text-transform: uppercase;
    text-align: left;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    width: 100%;
    height: 48px;
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    margin-top: 24px;
    text-alight: center;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    &:focus {
        border: none;
        outline: none;
    }
`