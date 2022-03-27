/* eslint-disable no-unused-labels */
import { IIconProps } from '@fluentui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { ActionButton } from './ActionButton'
import { ActionButtonProps } from './ActionButtonTypes'

const _primary: ComponentStory<typeof ActionButton> = () => {
	const defaultstyle = {
		padding: '40px',
	}
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
			<ActionButton props={defaultProps} />
		</div>
	)
}
_primary.storyName = 'Basic usage of ActionButton'

export default {
	title: 'ActionButton',
	component: ActionButton,
} as ComponentMeta<typeof ActionButton>

export const Primary = _primary