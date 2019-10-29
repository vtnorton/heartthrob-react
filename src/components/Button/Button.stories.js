/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Button from './Button'

storiesOf('Button', module)
	.add('Basic', () => {
		return (
			<Button />
		)
	})
	.add('With icon', () => {
		return (
			<Button />
		)
	})
