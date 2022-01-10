import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Input, FormStatus, Footer } from '@/presentation/components'
import { FormContext } from '@/presentation/contexts/Form/form-context'
import Styles from './signup-styles.scss'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount } from '@/domain/usecases'

type Props = {
  validation?: Validation
  addAccount?: AddAccount
}

export const SignUp: React.FC<Props> = ({ validation, addAccount }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: '',
    email: '',
    emailError: 'Campo obrigatório',
    password: '',
    passwordError: 'Campo obrigatório',
    passwordConfirmation: '',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
      passwordConfirmationError: validation.validate('passwordConfirmation', state.passwordConfirmation)
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.nameError || state.emailError || state.passwordError || state.passwordConfirmationError) return
      setState({ ...state, isLoading: true })
      await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Styles.signup}>
      <Header />
      <FormContext.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Criar conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <button
            data-testid="submit"
            disabled={!!state.nameError || !!state.emailError || !!state.passwordError || !!state.passwordConfirmationError}
            className={Styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span className={Styles.link}>Voltar para login</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}
