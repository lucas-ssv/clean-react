import { FormStatusBase } from '@/presentation/components'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { signUpState } from '.'

export const FormStatus: React.FC = () => {
  const state = useRecoilValue(signUpState)

  return <FormStatusBase state={state} />
}
