import { FormStatusBase } from '@/presentation/components'
import React from 'react'
import { useRecoilState } from 'recoil'
import { loginState } from '.'

export const FormStatus: React.FC = () => {
  const [state] = useRecoilState(loginState)

  return <FormStatusBase state={state} />
}
