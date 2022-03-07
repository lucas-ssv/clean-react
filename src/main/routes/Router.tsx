import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeLogin, MakeSignUp, MakeSurveyList, MakeSurveyResult } from '@/main/factories/pages'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters/current-account-adapter'
import { currentAccountState, PrivateRoute } from '@/presentation/components'
import { RecoilRoot } from 'recoil'

export const Router: React.FC = () => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter
  }

  return (
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, state)}>
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
    </RecoilRoot>
  )
}
