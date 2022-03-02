declare namespace Cypress {
  export interface Chainable {
    getByTestId: (value: string) => Chainable<Element>
  }
}
