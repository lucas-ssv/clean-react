import React, { memo } from 'react'
import { Logo } from '../Logo/Logo'
import Styles from './login-header-styles.scss'

const LoginHeaderComponent: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  )
}

export const LoginHeader = memo(LoginHeaderComponent)
