import styled from 'styled-components'

export const BannerStyled = styled.div `
    width: ${props => props.type === 'middle' ? '56%' : '100%'};
    min-width: ${props => props.type === 'middle' ? '56%' : '100%'};
    background: ${props => `url('${props.image}')` || '#CECECE'} center center no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
    overflow: hidden;
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
        transform: rotate(-180deg);
    }
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
