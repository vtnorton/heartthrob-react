import React from 'react'

import ManagementInfo from '../ManagementInfo'
import { ManagementInfoProps } from '../ManagementInfoTypes'
import { renderComponent } from '../../../infrastructure/test-helpers/test-renderer'
import { onlyCreatedIn } from './ManagementInfoUtils'



const componentRender = (itemToTest: ManagementInfoProps = onlyCreatedIn) => {
	const renderResult = renderComponent(<ManagementInfo item={itemToTest.item} />)
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