import { Validation } from '../protocols/validation'

export class ValidationMock implements Validation {
  errorMessage: string

  validate (): string {
    return this.errorMessage
  }
}
