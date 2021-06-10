import { IIconProps } from '@fluentui/react'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { LoadButton } from './LoadButton'

const defaultstyle = {
	padding: '40px',
}

const storiesHeader = storiesOf('LoadButton', module)

storiesHeader.add('Basic usage of Header', () => {
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
})
