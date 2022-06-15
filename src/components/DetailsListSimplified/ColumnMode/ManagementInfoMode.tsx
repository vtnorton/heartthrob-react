/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { IColumn } from '@fluentui/react'
import { createdByText, ManagementInfomations, updatedByText } from './../../../components/ManagementInfo'

const ManagementInfoMode = (columnItem: IColumn, element: any): IColumn => {
	columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
		const entityInfo: ManagementInfomations = item
		return (
			<>
				{createdByText(entityInfo)}
				{updatedByText(entityInfo)}
			</>
		)
	}

	return columnItem
}

export default ManagementInfoMode