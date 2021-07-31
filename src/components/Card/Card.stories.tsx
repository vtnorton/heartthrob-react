/* eslint-disable no-unused-vars */
import { IIconProps } from '@fluentui/react'
import { storiesOf } from '@storybook/react'
import { ActionButtonProps } from 'components/ActionButtons'
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

stories.add('With action buttons', () => {
	const deleteIcon: IIconProps = { iconName: 'Delete' }
	const createIcon: IIconProps = { iconName: 'Add' }
	const anotherIcon: IIconProps = { iconName: 'Play' }
	const clickDefault = () => {
		alert('teste')
	}

	const defaultProps: ActionButtonProps = {
		itens: [
			{ label: 'Sample', icon: createIcon, onClick: clickDefault },
			{ label: 'Sample', icon: anotherIcon, onClick: clickDefault },
			{ label: 'Primary', icon: deleteIcon, onClick: clickDefault, primary: true },
		],
	}

	return (
		<div style={defaultstyle}>
			<Card acrylic={false} title={'Hello world'} actionButtons={defaultProps} >
				<p>Lorem ipsum</p>
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