import { render, screen } from '@testing-library/react'
import { Calendar } from '..'
import React from 'react'

const makeSut = (date: Date): void => {
  render(<Calendar date={date} />)
}

describe('CalendarComponent', () => {
  test('Should render with correct values', () => {
    makeSut(new Date('2022-01-31T00:00:00'))
    expect(screen.getByTestId('day')).toHaveTextContent('31')
    expect(screen.getByTestId('month')).toHaveTextContent('jan')
    expect(screen.getByTestId('year')).toHaveTextContent('2022')
  })

  test('Should render with correct values', () => {
    makeSut(new Date('2021-05-03T00:00:00'))
    expect(screen.getByTestId('day')).toHaveTextContent('03')
    expect(screen.getByTestId('month')).toHaveTextContent('mai')
    expect(screen.getByTestId('year')).toHaveTextContent('2021')
  })
})
