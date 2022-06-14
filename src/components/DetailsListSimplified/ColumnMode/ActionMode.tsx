import React from 'react'
import { IColumn, IIconProps, PrimaryButton } from '@fluentui/react'
import strings from './../../../infrastructure/localization'

const ActionMode = (columnItem: IColumn, element: any): IColumn => {
	columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
		const viewItem: IIconProps = { iconName: 'EntryView' }
		const title = columnItem.fieldName ? columnItem.fieldName : 0
		return <PrimaryButton
			href={`/${element.entryName}/${item[title]}`}
			text={strings.getString('view')}
			iconProps={viewItem} />
	}

	return columnItem
}

export default ActionMode