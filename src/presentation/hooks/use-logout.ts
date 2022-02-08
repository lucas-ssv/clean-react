import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiContext } from '../contexts/Api/api-context'

type ResultType = () => void

export const useLogout = (): ResultType => {
  const history = useNavigate()
  const { setCurrentAccount } = useContext(ApiContext)
  return (): void => {
    setCurrentAccount(undefined)
    history('/login', { replace: true })
  }
}
