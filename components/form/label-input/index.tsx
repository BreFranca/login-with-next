import React from 'react'
import Styled from './styles'

type LabelInputProps = {
    name: string
    onChange?: (e: any) => void
    title?: string
    type: string
    placeholder?: string
    error?: string
}

const LabelInput = (props: LabelInputProps) => {
    const {
        name,
        title,
        error
    } = props

    return (
        <Styled.Container type={error && 'error'} htmlFor={name}>
            <Styled.Label>{title}</Styled.Label>
            <Styled.InputContainer>
                <Styled.Input id={name} {...props} />
            </Styled.InputContainer>
            {error && <Styled.Error>{error}</Styled.Error>}
        </Styled.Container>
    )
}

export default LabelInput