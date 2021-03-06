import React, { memo } from 'react'
import Styles from './footer-styles.scss'

const FooterComponent: React.FC = () => {
  return (
    <footer className={Styles.footer} />
  )
}

export const Footer = memo(FooterComponent)
