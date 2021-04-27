import * as React from 'react'
import { FormEvent, useState } from 'react'
import { TextField } from '@fluentui/react'

import 'heartthrob'
import { PassowrdInputProps } from './PasswordInputTypes'

const PasswordInput = (props: PassowrdInputProps): JSX.Element => {
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordMessageClass, setPasswordMessageClass] = useState('')
  const [passwordCheckMessage, setPasswordCheckMessage] = useState('')
  const [passwordCheckMessageClass, setPasswordCheckMessageClass] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const checkPasswordStrength = (typedPassword: string) => {
    let message = ''
    let capsCount: number,
      smallCount: number,
      numberCount: number,
      symbolCount: number

    if (!typedPassword) {
      setPasswordMessage('')
      return
    }

    setPasswordMessageClass('')
    if (typedPassword.length < 8) {
      setPasswordMessageClass('short')
      setPasswordMessage('A senha necessita ter pelo menos 8 caracteres.')
    } else {
      capsCount = (typedPassword.match(/[A-Z]/g) || []).length
      smallCount = (typedPassword.match(/[a-z]/g) || []).length
      numberCount = (typedPassword.match(/[0-9]/g) || []).length
      symbolCount = (typedPassword.match(/\W/g) || []).length

      if (capsCount < 1) {
        setPasswordMessageClass('weak')
        message = 'A senha precisa conter ao menos uma letra em maiúsculo.'
      } else if (smallCount < 1) {
        setPasswordMessageClass('weak')
        message = 'A senha precisa conter ao menos uma letra em minúsculo.'
      } else if (numberCount < 1) {
        setPasswordMessageClass('weak')
        message = 'A senha precisa conter ao menos um número.'
      } else if (symbolCount < 1) {
        setPasswordMessageClass('medium')
        message = 'A senha precisa conter ao menos um caracter especial.'
      } else {
        setPasswordMessageClass('strong')
        setPasswordMessage('Sua senha está forte.')
      }

      setPasswordMessage(message)
    }
  }

  const checkPasswordMatch = (
    typedPassword: string,
    typedConfirmPassword: string
  ) => {
    setPasswordCheckMessageClass('')

    if (!typedConfirmPassword) {
      setPasswordCheckMessage('')
      return
    }

    if (typedPassword === '') {
      setPasswordCheckMessage('Você ainda não digitou a senha para confirmar ela.')
      return
    }


    if (typedPassword !== typedConfirmPassword) {
      setPasswordCheckMessage('As senhas estão diferentes, por favor, tente novamente.')
    } else {
      setPasswordCheckMessageClass('strong')
      setPasswordCheckMessage('As senhas estão iguais.')
      return true
    }

    return false
  }

  const onPasswordChange = (element: FormEvent<HTMLTextAreaElement>) => {
    const value = (element.target as HTMLTextAreaElement).value
    setPassword(value)
    checkPasswordStrength(value)
    if (confirmPassword)
      checkPasswordMatch(value, confirmPassword)
  }

  const onConfirmPasswordChange = (element: FormEvent<HTMLTextAreaElement>) => {
    const value = (element.target as HTMLTextAreaElement).value
    setConfirmPassword(value)

    const doesItMatch = checkPasswordMatch(password, value)

    if (doesItMatch)
      props.onSubmitMessage(password)
  }

  return (
    <div className='row'>
      <div className='col-md-6 col-sm-6'>
        <TextField
          name='password'
          label='Senha'
          canRevealPassword
          type='password'
          onChange={onPasswordChange} />
        <span className={passwordMessage ? 'validator ' + passwordMessageClass : ''}>
          {passwordMessage}
        </span>
      </div>
      <div className='col-md-6 col-sm-6'>
        <TextField
          name='confirmPassword'
          label='Confirmar senha'
          canRevealPassword
          type='password'
          onChange={onConfirmPasswordChange} />
        <span className={passwordCheckMessage ? 'validator ' + passwordCheckMessageClass : ''}>
          {passwordCheckMessage}
        </span>
      </div>
    </div>
  )
}

export { PasswordInput }
