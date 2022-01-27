import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeLogin } from '@/main/factories/pages/Login/login-factory'
import { MakeSignUp } from '@/main/factories/pages/SignUp/signup-factory'
import { ApiContext } from '@/presentation/contexts/Api/api-context'
import { SurveyList } from '@/presentation/pages'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters/current-account-adapter'
import { PrivateRoute } from '@/presentation/components'

export const Router: React.FC = () => {
  return (
    <ApiContext.Provider value={{ setCurrentAccount: setCurrentAccountAdapter, getCurrentAccount: getCurrentAccountAdapter }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<MakeLogin />} />
          <Route path="/signup" element={<MakeSignUp />} />
          <Route path="/" element={
            <PrivateRoute>
              <SurveyList />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}
