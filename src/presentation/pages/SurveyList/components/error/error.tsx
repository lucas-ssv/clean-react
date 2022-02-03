import React, { useContext } from 'react'
import { SurveyContext } from '..'
import Styles from './error-styles.scss'

export const Error: React.FC = () => {
  const { state, setState } = useContext(SurveyContext)
  const reload = (): void => {
    setState({ surveys: [], error: '', reload: !state.reload })
  }

  return (
    <div className={Styles.errorWrap}>
      <span data-testid="error">{state.error}</span>
      <button data-testid="reload" type="button" onClick={reload}>Tentar novamente</button>
    </div>
  )
}
