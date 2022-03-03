import React from 'react'

type Props = {
  text: string
  state: any
}

export const SubmitButton: React.FC<Props> = ({ text, state }: Props) => {
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
