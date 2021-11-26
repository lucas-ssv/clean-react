import React from 'react'
import { LoginHeader as Header } from '@/presentation/components/Login-header/Login-header'
import { Footer } from '@/presentation/components/Footer/Footer'
import Styles from './login-styles.scss'
import { Input } from '@/presentation/components/Input/Input'
import { FormStatus } from '@/presentation/components/Form-status/Form-status'

export const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}
