import React from 'react'
import Styled from './styles'

interface TypographyProps {
    variant: string
    children: any
    color?: string
    weight?: string
    align?: string
}

interface VariantProps {
    component: string
    children?: any
    color?: string
    weight?: string
    align?: string
}

const Variant = (props: VariantProps) => {
    const {
        component,
        children
    } = props

    switch (component) {
        case 'heading':
            return <Styled.Heading {...props}>{children}</Styled.Heading>
        case 'span':
            return <Styled.span {...props}>{children}</Styled.span>
        default:
            return <Styled.Paragraph {...props}>{children}</Styled.Paragraph>
    }
}

const Typography = (props: TypographyProps) => {
    const {
        children,
        variant
    } = props
    return (
        <Variant component={variant} {...props}>{children}</Variant>
    )
}

export default Typography