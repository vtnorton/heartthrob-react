/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import Button from './Button'

var defaultstyle = {
	padding: '40px'
}

const stories = storiesOf('Button and links', module);
stories.addDecorator(withKnobs);

stories.add('Basic usage', () => {
	return (
		<div style={defaultstyle}>
			<Button text={text('Button text', 'Lorem ipsum')} />
		</div>
	)
})

stories.add('With icon', () => {
	return (
		<div style={defaultstyle}>
			<Button text={text('Button text', 'Lorem ipsum')} icon={faSave} />
		</div>
	)
})