import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../components'

type ResultType = () => void

export const useLogout = (): ResultType => {
  const history = useNavigate()
  const { setCurrentAccount } = useRecoilValue(currentAccountState)
  return (): void => {
    setCurrentAccount(undefined)
    history('/login', { replace: true })
  }
}
