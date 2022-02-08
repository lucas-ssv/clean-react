import { AccessDeniedError } from '@/domain/errors'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiContext } from '../contexts/Api/api-context'

type CallbackType = (error: Error) => void
type ResultType = CallbackType

export const useErrorHandler = (callback: CallbackType): ResultType => {
  const history = useNavigate()
  const { setCurrentAccount } = useContext(ApiContext)
  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      setCurrentAccount(undefined)
      history('/login')
    } else {
      callback(error)
    }
  }
}
