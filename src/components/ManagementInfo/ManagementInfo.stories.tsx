/* eslint-disable no-unused-labels */
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ManagementInfo from './ManagementInfo'
import { ManagementInfoProps } from './ManagementInfoTypes'

const date = new Date()
const item: ManagementInfoProps = {
	item: {
		createdIn: date,
		createdBy: 'Vitor Norton',
		updatedIn: date,
		updatedBy: 'Vitor Norton',
	},
}
const defaultstyle = {
	padding: '40px',
}

const _primary: ComponentStory<typeof ManagementInfo> = () => {
	return (
		<div style={defaultstyle}>
			<ManagementInfo item={item.item} />
		</div>
	)
}
const _withUpdatedInfo: ComponentStory<typeof ManagementInfo> = () => {
	const newUpdatedIn = new Date(item.item.createdIn.getTime() + (1000 * 60 * 60 * 24))
	const newUpdatedBy = item.item.updatedBy = 'Christine Daee'
	const newItem: ManagementInfoProps = {
		item: {
			createdIn: item.item.createdIn,
			createdBy: item.item.createdBy,
			updatedIn: newUpdatedIn,
			updatedBy: newUpdatedBy,
		},
	}

	return (
		<div style={defaultstyle}>
			<ManagementInfo item={newItem.item} />
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