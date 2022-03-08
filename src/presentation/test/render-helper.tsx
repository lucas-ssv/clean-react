import React from 'react'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { MemoryHistory } from 'history'
import { mockAccountModel } from '@/domain/test'
import { RecoilRoot } from 'recoil'
import { currentAccountState } from '@/presentation/components'
import { AccountModel } from '@/domain/models'

type Params = {
  Page: React.FC
  history: MemoryHistory
  account?: AccountModel
}

type Result = {
  setCurrentAccountMock: (account: AccountModel) => void
}

export const renderWithHistory = ({ Page, history, account = mockAccountModel() }: Params): Result => {
  const setCurrentAccountMock = jest.fn()
  const mockedState = {
    setCurrentAccount: setCurrentAccountMock,
    getCurrentAccount: () => account
  }
  render(
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, mockedState)}>
      <Router navigator={history} navigationType={history.action} location={history.location}>
        <Page />
      </Router>
    </RecoilRoot>
  )
  return {
    setCurrentAccountMock
  }
}
