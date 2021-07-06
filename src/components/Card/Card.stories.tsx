/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Card } from './Card'
import { TaskbarProps } from './CardTypes'
import { Taskbar } from './Taskbar/Taskbar'

const defaultstyle = {
	padding: '40px',
}

const stories = storiesOf('Card', module)

const taskbarBasic: TaskbarProps = {
	canGoBack: true, //boolean('Can get back from taskbar', true)
}

const taskbarCreate: TaskbarProps = {
	canGoBack: true,
	mode: 'create',
	createButton: 'Create button content',
}

stories.add('Basic usage', () => {
	return (
		<div style={defaultstyle}>
			<Card acrylic={true} title={'Hello world'}>
				Teste
			</Card>
		</div>
	)
})

stories.add('With taskbar', () => {
	return (
		<div style={defaultstyle}>
			<Card acrylic={false} title={'Hello world'} taskbar={taskbarBasic}>
				<label>
					Name
					<input type='text' placeholder='Vitor N.' />
				</label>
			</Card>
		</div>
	)
})

stories.add('With taskbar on create mode', () => {
	return (
		<div style={defaultstyle}>
			<Card title={'Hello world'} taskbar={taskbarCreate}>
				<label>
					Name
					<input type='text' placeholder='Vitor N.' />
				</label>
			</Card>
		</div>
	)
})

stories.add('With taskbar on edit mode', () => {
	return (
		<div style={defaultstyle}>
			<Card title={'Hello world'}>
				<label>
					Name
					<input type='text' placeholder='Vitor N.' />
				</label>
				<Taskbar
					mode='edit'
					deleteButton={''}
					saveButton={''}
					canGoBack={true}></Taskbar>
			</Card>
		</div>
	)
})

stories.add('With taskbar on details mode', () => {
	return (
		<div style={defaultstyle}>
			<Card title={'Hello world'}>
				<label>
					Name
					<input type='text' placeholder='Vitor N.' />
				</label>
				<Taskbar
					mode='details'
					deleteButton={''}
					editButton={''}
					canGoBack={true}
					canEdit={true}></Taskbar>
			</Card>
		</div>
	)
})
