import { atom } from 'recoil'

export const signUpState = atom({
  key: 'signUpState',
  default: {
    isLoading: false,
    isFormInvalid: true,
    name: '',
    nameError: '',
    email: '',
    emailError: 'Campo obrigatório',
    password: '',
    passwordError: 'Campo obrigatório',
    passwordConfirmation: '',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  }
})
