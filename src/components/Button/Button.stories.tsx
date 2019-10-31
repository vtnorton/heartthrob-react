/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import * as React from 'react'
import Button from './Button'

var defaultstyle = {
	padding: '40px'
}

storiesOf('Button', module)
	.addDecorator(checkA11y)
	.add('Basic usage', () => {
		return (
			<div style={defaultstyle}>
				<Button />
			</div>
		)
	})
	.add('With icon', () => {
		return (
			<div style={defaultstyle}>
				<Button />
			</div>
		)
	}, {
		notes: 'A very simple example of addon notes',
	})
