import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeLogin, MakeSignUp, MakeSurveyList, MakeSurveyResult } from '@/main/factories/pages'
import { ApiContext } from '@/presentation/contexts/Api/api-context'
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
              <MakeSurveyList />
            </PrivateRoute>
          } />
          <Route path="/surveys/:id" element={
            <PrivateRoute>
              <MakeSurveyResult />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}
