import { Spinner } from '../Spinner/Spinner'
import { FormContext } from '@/presentation/contexts/Form/form-context'
import Styles from './form-status-styles.scss'
import React, { useContext } from 'react'

export const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && <span className={Styles.error}>{errorState.main}</span>}
    </div>
  )
}
