import React, { useState } from 'react'
import { LabelInput, Button, Banner, Typography } from '../../components'
import Styled from './styles'
import { validateEmail } from './functions'
import axios from 'axios'

type FieldProps = {
    field: string
    error: string
}

const Login = () => {
    const [email, setEmail] = useState<FieldProps>({ field: '', error: '' })
    const [password, setPassword] = useState<FieldProps>({ field: '', error: '' })
    const [loading, setLoading] = useState(false)
    
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail({
                error: e.target.value === '' ? 'Campo obrigatório' : '',
                field: e.target.value
            })
        } else {
            setPassword({
                error: e.target.value === '' ? 'Campo obrigatório' : '',
                field: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email.field || email.field === '') {
            setEmail({
                ...email,
                error: 'Campo obrigatório'
            })
            return
        } else if (!validateEmail(email.field)) {
            setEmail({
                ...email,
                error: 'Digite um e-mail válido'
            })
        }

        if (!password.field || password.field === '') {
            setPassword({
                ...password,
                error: 'Campo obrigatório'
            })
            return
        }

        axios.get('https://60340e30843b150017932168.mockapi.io/api/wiser-users/users', {
            params: {
                email: email.field,
                password: password.field
            }
        })
        .then((result) => {
            console.log(result)
        })
        .catch((e) => {
            console.warn(e)
        })

        console.log(email, password)
    }

    return (
        <Styled.Layout>
            <Banner
                type='middle'
                image='/media/banner.jpg'
            />
            <Styled.Form onSubmit={handleSubmit}>
                <Typography variant='heading'>Olá, seja <br />bem-vindo!</Typography>
                <Typography weight='600' variant='paragraph'>Para acessar a plataforma, <br />faça seu login.</Typography>
                <Styled.FormFields>
                    <LabelInput
                        title='E-mail'
                        name='email'
                        onChange={handleChange}
                        placeholder='user.name@mail.com'
                        type='text'
                        error={email.error}
                    />
                    <LabelInput
                        title='Senha'
                        name='password'
                        onChange={handleChange}
                        placeholder='********'
                        type='password'
                        error={password.error}
                    />
                    <Button>Entrar</Button>
                </Styled.FormFields>
                <Typography align='center' variant='span'>Esqueceu seu login ou senha? <br />Clique <a href='javascript:void(0)'>aqui</a></Typography>
            </Styled.Form>
        </Styled.Layout>
    )
}

export default Login