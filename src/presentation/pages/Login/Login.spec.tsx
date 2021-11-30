import { Login } from '@/presentation/pages'
import React from 'react'
import { render } from '@testing-library/react'

describe('Login component', () => {
  test('Should not render spinner and error on start', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
