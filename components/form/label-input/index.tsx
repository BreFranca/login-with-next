import React from 'react'

interface LabelInputProps {
    name: string
    onChange: (e: any) => void
    title?: string
    type: string
    placeholder?: string
    value: string
}

const LabelInput = (props: LabelInputProps) => {
    const {
        name,
        title
    } = props

    return (
        <label htmlFor={name}>
            {title}
            <input {...props} />
        </label>
    )
}

export default LabelInput