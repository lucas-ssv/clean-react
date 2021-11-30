import { Spinner } from '../Spinner/Spinner'
import { FormContext } from '@/presentation/contexts/Form/form-context'
import Styles from './form-status-styles.scss'
import React, { useContext } from 'react'

export const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>Erro</span>}
    </div>
  )
}
