/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { IColumn } from '@fluentui/react'
import { notInformedTreatment } from './../../../extensions/stringExtensions'

const DefaultMode = (columnItem: IColumn): IColumn => {
	columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
		const title = columnItem.fieldName ? columnItem.fieldName : 0
		return <p>{notInformedTreatment(item[title])}</p>
	}

	return columnItem
}

export default DefaultMode