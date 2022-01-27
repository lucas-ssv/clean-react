import React, { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ApiContext } from '@/presentation/contexts/Api/api-context'

type PrivateRouteProps = {
  children?: ReactNode
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }: PrivateRouteProps): any => {
  const { getCurrentAccount } = useContext(ApiContext)
  return getCurrentAccount()?.accessToken ? children : <Navigate to="/login" />
}
