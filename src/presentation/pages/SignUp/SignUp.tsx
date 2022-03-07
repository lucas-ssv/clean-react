import React, { FormEvent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { currentAccountState, Footer, LoginHeader } from '@/presentation/components'
import Styles from './signup-styles.scss'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount } from '@/domain/usecases'
import { FormStatus, Input, signUpState, SubmitButton } from './components'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

type Props = {
  validation: Validation
  addAccount: AddAccount
}

export const SignUp: React.FC<Props> = ({ validation, addAccount }: Props) => {
  const resetSignUpState = useResetRecoilState(signUpState)
  const { setCurrentAccount } = useRecoilValue(currentAccountState)
  const history = useNavigate()
  const [state, setState] = useRecoilState(signUpState)

  useEffect(() => resetSignUpState(), [])

  useEffect(() => {
    const { name, email, password, passwordConfirmation } = state
    const formData = {
      name,
      email,
      password,
      passwordConfirmation
    }
    const nameError = validation.validate('name', formData)
    const emailError = validation.validate('email', formData)
    const passwordError = validation.validate('password', formData)
    const passwordConfirmationError = validation.validate('passwordConfirmation', formData)

    setState(old => ({
      ...old,
      nameError,
      emailError,
      passwordError,
      passwordConfirmationError,
      isFormInvalid: !!nameError || !!emailError || !!passwordError || !!passwordConfirmationError
    }))
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) return
      setState(old => ({ ...old, isLoading: true }))
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
      setCurrentAccount(account)
      history('/')
    } catch (error) {
      setState(old => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  return (
    <div className={Styles.signupWrap}>
      <LoginHeader />
      <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
        <h2>Criar conta</h2>
        <Input type="text" name="name" placeholder="Digite seu nome" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
        <SubmitButton text="Cadastrar" />
        <Link data-testid="login-link" to="/login" className={Styles.link}>Voltar para login</Link>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}
