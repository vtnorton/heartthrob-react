import React, { FormEvent, useState } from 'react'
import { TextField } from '@fluentui/react/lib/TextField'

import 'heartthrob'
import strings from '../../infrastructure/localization'
import { PassowrdInputProps } from './PasswordInputTypes'

const PasswordInput = (props: PassowrdInputProps) => {
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
      setPasswordMessage(strings.getString('passwordMinLenght'))
    } else {
      capsCount = (typedPassword.match(/[A-Z]/g) || []).length
      smallCount = (typedPassword.match(/[a-z]/g) || []).length
      numberCount = (typedPassword.match(/[0-9]/g) || []).length
      symbolCount = (typedPassword.match(/\W/g) || []).length

      if (capsCount < 1) {
        setPasswordMessageClass('weak')
        message = strings.getString('passwordHaveUppercase')
      } else if (smallCount < 1) {
        setPasswordMessageClass('weak')
        message = strings.getString('passwordHaveLowercase')
      } else if (numberCount < 1) {
        setPasswordMessageClass('weak')
        message = strings.getString('passwordHaveNumber')
      } else if (symbolCount < 1) {
        setPasswordMessageClass('medium')
        message = strings.getString('passwordHaveSpecialChar')
      } else {
        setPasswordMessageClass('strong')
        setPasswordMessage(strings.getString('passwordStrong'))
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
      setPasswordCheckMessage(strings.getString('passwordMustMatch'))
      return
    }


    if (typedPassword !== typedConfirmPassword) {
      setPasswordCheckMessage(strings.getString('passwordIsDifferente'))
    } else {
      setPasswordCheckMessageClass('strong')
      setPasswordCheckMessage(strings.getString('passwordAreEqual'))
      return true
    }

    return false
  }

  const onPasswordChange = (element: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = (element.target as HTMLTextAreaElement).value
    setPassword(value)
    checkPasswordStrength(value)
    if (confirmPassword)
      checkPasswordMatch(value, confirmPassword)
  }

  const onConfirmPasswordChange = (element: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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
          label={strings.getString('password')}
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
          label={strings.getString('passwordConfirm')}
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
