import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Input } from './Input'
import { FormContext } from '@/presentation/contexts/Form/form-context'

const makeSut = (): RenderResult => {
  return render(
    <FormContext.Provider value={{ state: {} }}>
      <Input name="field" />
    </FormContext.Provider>
  )
}

describe('InputComponent', () => {
  test('Should begin with readOnly', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
