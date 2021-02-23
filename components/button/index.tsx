import React from 'react'
import { StyledButton } from './styles'

type ButtonProps = {
    children: any
    name?: string
    htmlType?: string
}

const Button = (props: ButtonProps) => {
    const {
        children
    } = props

    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}

export default Button
