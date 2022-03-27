/* eslint-disable no-unused-vars */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { PasswordInput } from './PasswordInput'

const defaultstyle = {
  padding: '40px',
}

const _basic: ComponentStory<typeof PasswordInput> = () => {
  const [password, setPassword] = useState('')

  return (
    <div style={defaultstyle}>
      <PasswordInput onSubmitMessage={(e) => setPassword(e)} />

      <br />
      A senha é: {password}
    </div>
  )
}
_basic.storyName = 'Basic usage of PasswordInput'

export default {
  title: 'PasswordInput',
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>
export const Basic = _basic