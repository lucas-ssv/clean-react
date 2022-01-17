import { Method } from 'axios'

export const mockInvalidCredentialsError = (url: RegExp): void => {
  cy.intercept('POST', url, {
    statusCode: 401
  }).as('request')
}

export const mockEmailInUseError = (url: RegExp): void => {
  cy.intercept('POST', url, {
    statusCode: 403
  }).as('request')
}

export const mockUnexpectedError = (url: RegExp, method: Method): void => {
  cy.intercept(method, url, {
    statusCode: 400
  }).as('request')
}

export const mockOk = (url: RegExp, method: Method, body: any): void => {
  cy.intercept(method, url, {
    statusCode: 200,
    body
  }).as('request')
}
