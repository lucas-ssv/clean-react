import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { Input } from './Input'
import faker from 'faker'

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <Input name={fieldName} state={{}} setState={null} />
  )
}

describe('InputComponent', () => {
  test('Should begin with readOnly', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
