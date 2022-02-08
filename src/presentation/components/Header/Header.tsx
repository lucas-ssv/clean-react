import { Logo } from '..'
import Styles from './header-styles.scss'
import React, { FormEvent, memo, useContext } from 'react'
import { ApiContext } from '@/presentation/contexts/Api/api-context'
import { useNavigate } from 'react-router-dom'

const HeaderComponent: React.FC = () => {
  const history = useNavigate()
  const { setCurrentAccount, getCurrentAccount } = useContext(ApiContext)
  const logout = (event: FormEvent): void => {
    event.preventDefault()
    setCurrentAccount(undefined)
    history('/login')
  }
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span data-testid="username">{getCurrentAccount().name}</span>
          <a data-testid="logout" href="#" onClick={logout}>sair</a>
        </div>
      </div>
    </header>
  )
}

export const Header = memo(HeaderComponent)
