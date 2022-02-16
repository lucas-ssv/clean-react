import React from 'react'
import Styles from './error-styles.scss'

type Props = {
  error: string
  reload: () => void
}

export const Error: React.FC<Props> = ({ error, reload }: Props) => {
  return (
    <div className={Styles.errorWrap}>
      <span data-testid="error">{error}</span>
      <button data-testid="reload" type="button" onClick={reload}>Tentar novamente</button>
    </div>
  )
}
