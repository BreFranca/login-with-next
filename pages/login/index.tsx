import React, { useState } from 'react'
import { LabelInput, Button } from '../../components'

interface CredentialsProps {
    email: string
    password: string
}

const Login = () => {
    const [credentials, setCredentials] = useState<CredentialsProps | undefined>({ email: '', password: '' })

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(credentials)
    }

    return (
        <form onSubmit={handleSubmit}>
            <LabelInput
                title='E-mail'
                name='email'
                onChange={handleChange}
                placeholder='user.name@mail.com'
                type='email'
                value={credentials.email}
            />
            <LabelInput
                title='Senha'
                name='password'
                onChange={handleChange}
                placeholder='********'
                type='password'
                value={credentials.password}
            />
            <Button>Entrar</Button>
        </form>
    )
}

export default Login