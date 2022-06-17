/* eslint-disable no-unused-labels */
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ManagementInfo from '../ManagementInfo'
import { onlyCreatedIn, withUpdatedIn } from './ManagementInfoUtils'

const defaultstyle = {
	padding: '40px',
}

const _primary: ComponentStory<typeof ManagementInfo> = () => {
	return (
		<div style={defaultstyle}>
			<ManagementInfo item={onlyCreatedIn.item} />
		</div>
	)
}
const _withUpdatedInfo: ComponentStory<typeof ManagementInfo> = () => {
	return (
		<div style={defaultstyle}>
			<ManagementInfo item={withUpdatedIn.item} />
		</div>
	)
}

_primary.storyName = 'Basic usage of ManagementInfo'
_withUpdatedInfo.storyName = 'With updated info'

export default {
	title: 'ManagementInfo',
	component: ManagementInfo,
} as ComponentMeta<typeof ManagementInfo>

export const Primary = _primary
export const WithUpdatedInfo = _withUpdatedInfo