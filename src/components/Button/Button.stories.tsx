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
			<Button text={text('Button primary text', 'Lorem ipsum')} className='btn-primary' /> <br />
			<Button text='Basic button' /> <br />
			<Button text='Lesser button' className='btn-lesser' /> <br />
			<Button text='Danger button' className='btn-danger' />
		</div>
	)
})

stories.add('With icon', () => {
	return (
		<div style={defaultstyle}>
			<Button text={text('Button text', 'Lorem ipsum')} icon={faSave} className='btn-primary' /> <br />
			<Button text='Basic button' icon={faSave} /> <br />
			<Button text='Lesser button' className='btn-lesser' icon={faSave} /> <br />
			<Button text='Danger button' className='btn-danger' icon={faSave} />
		</div>
	)
})

stories.add('Usign it as a link', () => {
	return (
		<div style={defaultstyle}>
			<Button text={text('Button text', 'Lorem ipsum')} url={text('Button text', 'https://vtnorton.com')} icon={faSave} />
		</div>
	)
})