import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeLogin } from '@/main/factories/pages/Login/login-factory'
import { MakeSignUp } from '@/main/factories/pages/SignUp/signup-factory'
import { SurveyList } from '@/presentation/pages'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<MakeLogin />} />
        <Route path="/signup" element={<MakeSignUp />} />
        <Route path="/" element={<SurveyList />} />
      </Routes>
    </BrowserRouter>
  )
}
