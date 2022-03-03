import React, { InputHTMLAttributes } from 'react'
import Styles from './input-styles.scss'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  state: any
  setState: any
}

export const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
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
        onChange={e => { setState(old => ({ ...old, [e.target.name]: e.target.value })) }}
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
