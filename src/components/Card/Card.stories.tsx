/* eslint-disable no-unused-vars */
import { IIconProps } from '@fluentui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ActionButtonProps } from 'components/ActionButtons'
import * as React from 'react'

import { Card } from './Card'
import { TaskbarProps } from './CardTypes'
import { Taskbar } from './Taskbar/Taskbar'

const defaultstyle = {
	padding: '40px',
}

const taskbarBasic: TaskbarProps = {
	canGoBack: true, //boolean('Can get back from taskbar', true)
}

const taskbarCreate: TaskbarProps = {
	canGoBack: true,
	mode: 'create',
	createButton: 'Create button content',
}

const _basic: ComponentStory<typeof Card> = () => {
	return (
		<div style={defaultstyle}>
			<Card acrylic={true} title={'Hello world'}>
				Teste
			</Card>
		</div>
	)
}

const _withTaskBar: ComponentStory<typeof Card> = () => {
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
}

const _withActionButtons: ComponentStory<typeof Card> = () => {
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
}

const _withTaskbarCreateMode: ComponentStory<typeof Card> = () => {
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
}

const _withTaskbarEditMode: ComponentStory<typeof Card> = () => {
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
}

const _withTaskbarDetailsMode: ComponentStory<typeof Card> = () => {
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
}

_basic.storyName = 'Basic usage of Card'
_withTaskBar.storyName = 'With taskbar'
_withActionButtons.storyName = 'With action buttons'
_withTaskbarCreateMode.storyName = 'With taskbar on create mode'
_withTaskbarEditMode.storyName = 'With taskbar on edit mode'
_withTaskbarDetailsMode.storyName = 'With taskbar on details mode'

export default {
	title: 'Card',
	component: Card,
} as ComponentMeta<typeof Card>

export const Basic = _basic
export const WithActionButtons = _withActionButtons
export const WithTaskBar = _withTaskBar
export const WithTaskbarCreateMode = _withTaskbarCreateMode
export const WithTaskbarEditMode = _withTaskbarEditMode
export const WithTaskbarDetailsMode = _withTaskbarDetailsMode