import React, { memo } from 'react'
import { Logo } from '..'
import Styles from './header-styles.scss'

const HeaderComponent: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span>Lucas</span>
          <a href="#">sair</a>
        </div>
      </div>
    </header>
  )
}

export const Header = memo(HeaderComponent)
