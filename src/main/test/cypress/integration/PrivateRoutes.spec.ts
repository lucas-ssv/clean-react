import * as Helper from '../support/helpers'

describe('PrivateRoutes', () => {
  it('Should logout if SurveyList has no token', () => {
    cy.visit('')
    Helper.testUrl('/login')
  })
})
