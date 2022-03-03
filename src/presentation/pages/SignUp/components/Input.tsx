import { InputBase } from '@/presentation/components'
import React from 'react'
import { useRecoilState } from 'recoil'
import { signUpState } from '.'

type Props = {
  type: string
  name: string
  placeholder: string
}

export const Input: React.FC<Props> = ({ type, name, placeholder }: Props) => {
  const [state, setState] = useRecoilState(signUpState)

  return (
    <InputBase
      type={type}
      name={name}
      placeholder={placeholder}
      state={state}
      setState={setState}
    />
  )
}
