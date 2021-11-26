import React from 'react'
import { Spinner } from '@/presentation/components/Spinner/Spinner'
import { LoginHeader as Header } from '@/presentation/components/Login-header/Login-header'
import { Footer } from '@/presentation/components/Footer/Footer'
import Styles from './login-styles.scss'
import { Input } from '@/presentation/components/Input/Input'

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
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}
