import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/main/routes/Router'
import '@/presentation/styles/global.scss'

ReactDOM.render(
  <Router />,
  document.getElementById('main')
)
