import { Logo } from '..'
import Styles from './header-styles.scss'
import React, { FormEvent, memo, useContext } from 'react'
import { ApiContext } from '@/presentation/contexts/Api/api-context'
import { useLogout } from '@/presentation/hooks'

const HeaderComponent: React.FC = () => {
  const logout = useLogout()
  const { getCurrentAccount } = useContext(ApiContext)
  const buttonClick = (event: FormEvent): void => {
    event.preventDefault()
    logout()
  }
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span data-testid="username">{getCurrentAccount().name}</span>
          <a data-testid="logout" href="#" onClick={buttonClick}>sair</a>
        </div>
      </div>
    </header>
  )
}

export const Header = memo(HeaderComponent)
