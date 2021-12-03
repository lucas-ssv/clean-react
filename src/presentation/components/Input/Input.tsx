import React, { InputHTMLAttributes, FocusEvent, useContext } from 'react'
import { FormContext } from '@/presentation/contexts/Form/form-context'
import Styles from './input-styles.scss'

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(FormContext)
  const error = state[`${props.name}Error`]

  const enableInput = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => {
    return error ? '🔴' : '🔵'
  }

  const getTitle = (): string => {
    return error || 'tudo certo!'
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange} />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  )
}
