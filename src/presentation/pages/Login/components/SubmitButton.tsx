import { SubmitButtonBase } from '@/presentation/components'
import React from 'react'
import { useRecoilState } from 'recoil'
import { loginState } from '.'

type Props = {
  text: string
}

export const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const [state, setState] = useRecoilState(loginState)

  return <SubmitButtonBase text={text} state={state} />
}
