import { IIconProps } from '@fluentui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { LoadButton } from './LoadButton'

const defaultstyle = {
	padding: '40px',
}

const _basic: ComponentStory<typeof LoadButton> = () => {
	const deleteIcon: IIconProps = { iconName: 'Delete' }
	const deleteItem = () => {
		alert('deleted')
	}

	return (
		<div style={defaultstyle}>
			<LoadButton
				isLoading={false}
				iconProps={deleteIcon}
				text='Deletar'
				loadingText='Deletando...'
				onClick={deleteItem} />
		</div>
	)
}
_basic.storyName = 'Basic usage of LoadButton'

export default {
	title: 'LoadButton',
	component: LoadButton,
} as ComponentMeta<typeof LoadButton>

export const Basic = _basic