import React, { InputHTMLAttributes, FocusEvent, useContext } from 'react'
import { FormContext } from '@/presentation/contexts/Form/form-context'
import Styles from './input-styles.scss'

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(FormContext)
  const error = state[`${props.name}Error`]
  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        {...props}
        placeholder=" "
        id={props.name}
        title={error}
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label
        data-testid={`${props.name}-label`}
        htmlFor={props.name}
        title={error}
      >{props.placeholder}
      </label>
    </div>
  )
}
