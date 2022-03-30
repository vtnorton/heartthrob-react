/* eslint-disable no-unused-labels */
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AnyData } from './AnyData'
import { AnyDataProps } from './AnyDataTypes'

const _primary: ComponentStory<typeof AnyData> = () => {
	const defaultstyle = {
		padding: '40px',
	}

	const props: AnyDataProps = {
		entityName: {
			singleName: 'entity',
		},
		onClick: () => { alert('Clicked.') },
	}

	return (
		<div style={defaultstyle}>
			<AnyData entityName={props.entityName} onClick={props.onClick} />
		</div>
	)
}
_primary.storyName = 'Basic usage of AnyData'

export default {
	title: 'AnyData',
	component: AnyData,
} as ComponentMeta<typeof AnyData>

export const Primary = _primary