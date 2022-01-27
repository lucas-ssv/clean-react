import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { PrivateRoute } from './PrivateRoute'

describe('PrivateRoute', () => {
  test('Should redirect to /login if token is empty', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    render(
      <Router navigator={history} navigationType={history.action} location={history.location}>
        <PrivateRoute />
      </Router>
    )
    expect(history.location.pathname).toBe('/login')
  })
})