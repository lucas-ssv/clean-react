import { Spinner } from '..'
import Styles from './loading-styles.scss'
import React from 'react'

export const Loading: React.FC = () => {
  return (
    <div className={Styles.loadingWrap}>
      <div className={Styles.loading}>
        <span>Aguarde...</span>
        <Spinner isNegative />
      </div>
    </div>
  )
}
