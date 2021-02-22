import React from 'react'

interface ButtonProps {
    children: any
    name?: string
    htmlType?: string
}

const Button = (props: ButtonProps) => {
    const {
        children
    } = props

    return (
        <button {...props}>{children}</button>
    )
}

export default Button
