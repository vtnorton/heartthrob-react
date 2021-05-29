/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { useState } from 'react'
import { PasswordInput } from './PasswordInput'

const defaultstyle = {
  padding: '40px',
}

const stories = storiesOf('PasswordInput', module)

stories.add('Basic usage', () => {
  const [password, setPassword] = useState('')

  return (
    <div style={defaultstyle}>
      <PasswordInput onSubmitMessage={(e) => setPassword(e)} />

      <br />
			A senha é: {password}
    </div>
  )
})
