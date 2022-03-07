import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '../atoms/atoms'

type PrivateRouteProps = {
  children: ReactNode
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }: PrivateRouteProps): any => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  return getCurrentAccount()?.accessToken ? children : <Navigate to="/login" />
}
