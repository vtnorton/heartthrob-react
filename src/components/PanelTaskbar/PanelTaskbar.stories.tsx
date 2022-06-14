import { Panel, PanelType } from '@fluentui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'

import PanelTaskbar from './PanelTaskbar'

const defaultstyle = {
	padding: '40px',
}


const _basic: ComponentStory<typeof PanelTaskbar> = () => {
	const saveInformation = () => {
		alert('Saved')
	}

	const panelTaskbar = () => {
		return <PanelTaskbar onClick={saveInformation} isLoading={false} />
	}

	const panelContent = () => {
		return (
			<h1>Lorem ipsum</h1>
		)
	}

	return (
		<div style={defaultstyle}>
			<Panel
				isOpen={true}
				closeButtonAriaLabel='Fechar'
				type={PanelType.medium}
				isFooterAtBottom={true}
				onRenderFooter={panelTaskbar}>
				{panelContent()}
			</Panel>
		</div>
	)
}
_basic.storyName = 'Basic usage of taskbar inside @fluentui Panel'

export default {
	title: 'Fluent UI integration / PanelTaskbar',
	component: PanelTaskbar,
} as ComponentMeta<typeof PanelTaskbar>
export const Basic = _basic