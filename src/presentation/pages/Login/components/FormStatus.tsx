import { FormStatusBase } from '@/presentation/components'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { loginState } from '.'

export const FormStatus: React.FC = () => {
  const state = useRecoilValue(loginState)

  return <FormStatusBase state={state} />
}
