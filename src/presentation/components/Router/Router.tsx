import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp } from '@/presentation/pages'

type Factory = {
  MakeLogin: React.FC
  MakeSignUp: React.FC
}

export const Router: React.FC<Factory> = ({ MakeLogin, MakeSignUp }: Factory) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<MakeLogin />} />
        <Route path="/signup" element={<MakeSignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
