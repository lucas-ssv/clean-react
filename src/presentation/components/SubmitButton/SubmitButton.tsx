import React, { useContext } from 'react'
import { FormContext } from '@/presentation/contexts/Form/form-context'

type Props = {
  text: string
}

export const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const { state } = useContext(FormContext)

  return (
    <button
      data-testid="submit"
      disabled={state.isFormInvalid}
      type="submit"
    >
      {text}
    </button>
  )
}
