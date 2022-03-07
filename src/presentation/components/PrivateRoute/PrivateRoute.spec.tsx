import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { ApiContext } from '@/presentation/contexts/Api/api-context'
import { mockAccountModel } from '@/domain/test'
import { SurveyList } from '@/presentation/pages'
import { PrivateRoute } from '..'
import { RecoilRoot } from 'recoil'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <RecoilRoot>
      <ApiContext.Provider value={{ getCurrentAccount: () => account }}>
        <Router navigator={history} navigationType={history.action} location={history.location}>
          <PrivateRoute>
            <SurveyList />
          </PrivateRoute>
        </Router>
      </ApiContext.Provider>
    </RecoilRoot>
  )
  return {
    history
  }
}

describe('PrivateRoute', () => {
  test('Should redirect to /login if token is empty', () => {
    const { history } = makeSut(null)
    expect(history.location.pathname).toBe('/login')
  })

  test('Should render components if token is not empty', () => {
    const { history } = makeSut()
    expect(history.location.pathname).toBe('/')
  })
})
