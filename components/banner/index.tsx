import React from 'react'
import { BannerStyled } from './styles'

interface BannerProps {
    type: string
    image?: string
    background?: string
}

const Banner = (props) => (
    <BannerStyled {...props} />
)

export default Banner