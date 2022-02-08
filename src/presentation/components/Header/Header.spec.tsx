import { Header } from '..'
import { fireEvent, render, screen } from '@testing-library/react'
import { ApiContext } from '@/presentation/contexts/Api/api-context'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import React from 'react'

describe('HeaderComponent', () => {
  test('Should call setCurrentAccount with null', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    const setCurrentAccountMock = jest.fn()
    render(
      <ApiContext.Provider value={{ setCurrentAccount: setCurrentAccountMock }}>
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      </ApiContext.Provider>
    )
    fireEvent.click(screen.getByTestId('logout'))
    expect(setCurrentAccountMock).toHaveBeenCalledWith(undefined)
    expect(history.location.pathname).toBe('/login')
  })
})
