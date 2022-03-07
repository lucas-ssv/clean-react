import { SubmitButtonBase } from '@/presentation/components'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { signUpState } from '.'

type Props = {
  text: string
}

export const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const state = useRecoilValue(signUpState)

  return <SubmitButtonBase text={text} state={state} />
}
