import * as Helper from '../utils/helpers'

describe('PrivateRoutes', () => {
  it('Should logout if SurveyList has no token', () => {
    cy.visit('')
    Helper.testUrl('/login')
  })
})
