import { Spinner } from '../Spinner/Spinner'
import { FormContext } from '@/presentation/contexts/Form/form-context'
import Styles from './form-status-styles.scss'
import React, { useContext } from 'react'

export const FormStatus: React.FC = () => {
  const { state } = useContext(FormContext)
  const { isLoading, mainError } = state

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span data-testid="main-error" className={Styles.error}>{mainError}</span>}
    </div>
  )
}
