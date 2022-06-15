import React from 'react'

import ManagementInfo from './ManagementInfo'
import { ManagementInfoProps } from './ManagementInfoTypes'
import { renderComponent } from './../../infrastructure/test-helpers/test-renderer'


const componentRender = () => {
	const date = new Date()
	const item: ManagementInfoProps = {
		item: {
			createdIn: date,
			createdBy: 'Vitor Norton',
			updatedIn: date,
			updatedBy: 'Vitor Norton',
		},
	}
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

	const renderResult = renderComponent(<ManagementInfo item={newItem.item} />)
	return {
		...renderResult,
	}
}

describe('ManagementInfo:', () => {
	it('should render', () => {
		const { getByText } = componentRender()
		expect(getByText('Management info')).toBeTruthy()
	})
})