import React, { InputHTMLAttributes, FocusEvent, useContext } from 'react'
import { FormContext } from '@/presentation/contexts/Form/form-context'
import Styles from './input-styles.scss'

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(FormContext)
  const error = state[`${props.name}Error`]
  return (
    <div className={Styles.inputWrap}>
      <input
        {...props}
        placeholder=" "
        id={props.name}
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label htmlFor={props.name}>{props.placeholder}</label>
      <span
        data-testid={`${props.name}-status`}
        title={error || 'tudo certo!'}
        className={Styles.status}>
        {error ? '🔴' : '🔵'}
      </span>
    </div>
  )
}
