import * as Helper from '../utils/helpers'

describe('PrivateRoutes', () => {
  it('Should logout if SurveyList has no token', () => {
    cy.visit('')
    Helper.testUrl('/login')
  })

  it('Should logout if survey-result has no token', () => {
    cy.visit('/surveys/any_id')
    Helper.testUrl('/login')
  })
})
