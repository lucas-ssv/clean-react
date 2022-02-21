import React from 'react'
import { render, screen } from '@testing-library/react'
import { SurveyResult } from '..'
import { ApiContext } from '@/presentation/contexts/Api/api-context'
import { mockAccountModel } from '@/domain/test'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('SurveyResultComponent', () => {
  test('Should present correct initial state', () => {
    const history = createMemoryHistory()
    render(
      <ApiContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: () => mockAccountModel() }}>
        <Router location={history.location} navigator={history}>
          <SurveyResult />
        </Router>
      </ApiContext.Provider>
    )
    const surveyResult = screen.getByTestId('survey-result')
    expect(surveyResult.childElementCount).toBe(0)
    expect(screen.queryByTestId('error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
  })
})
