import { Logo } from '..'
import Styles from './header-styles.scss'
import React, { FormEvent, memo } from 'react'
import { useLogout } from '@/presentation/hooks'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../atoms/atoms'

const HeaderComponent: React.FC = () => {
  const logout = useLogout()
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
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
