import { createMemoryHistory, MemoryHistory } from 'history'
import { mockAccountModel } from '@/domain/test'
import { PrivateRoute } from '..'
import { renderWithHistory } from '@/presentation/test'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  renderWithHistory({
    history,
    Page: () => PrivateRoute({ children: '' }),
    account
  })
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
