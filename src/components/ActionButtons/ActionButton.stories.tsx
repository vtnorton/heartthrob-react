import { IIconProps } from '@fluentui/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ActionButton } from './ActionButton'
import { ActionButtonProps } from './ActionButtonTypes'

const defaultstyle = {
	padding: '40px',
}

const storiesHeader = storiesOf('ActionButton', module)

storiesHeader.add('Basic usage of ActionButton', () => {
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
})
