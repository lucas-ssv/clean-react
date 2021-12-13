import { InvalidFieldError } from '@/validation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'

describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const valueToCompare = 'any_value'
    const sut = new CompareFieldsValidation('any_field', valueToCompare)
    const error = sut.validate('another_field')
    expect(error).toEqual(new InvalidFieldError())
  })
})
