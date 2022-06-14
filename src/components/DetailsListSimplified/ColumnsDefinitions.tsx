/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { IColumn, IIconProps, PrimaryButton } from '@fluentui/react'

import strings from './../../infrastructure/localization'
import { notInformedTreatment } from './../../extensions/stringExtensions'

import PersonaMode from './ColumnsModes'
import { ColumnMode, ISimplifiedColumn } from './DetailsListSimplifiedTypes'


const ColumnsDefinitions = (columns: ISimplifiedColumn[]): IColumn[] => {
	const convertedColumns: Array<IColumn> = []

	columns.forEach(element => {
		const columnWidth = (isMaxWidth?: boolean): number => {
			if (element.iconName)
				return 10

			if (element.mode === ColumnMode.Actions)
				return 94

			if (element.mode === ColumnMode.Person)
				return 49

			if (isMaxWidth)
				return 500

			return 90
		}

		const isLastItem = (): boolean => {
			if (columns[columns.length - 1].name === element.name)
				return true

			return false
		}

		const isIconOnlyProperty = (): boolean => {
			if (!element.iconName)
				return false

			return element.iconName?.length > 0 ? true : false
		}

		const isResizable = (): boolean => {
			if (!element.iconName)
				return false

			return element.iconName?.length > 0 || element.mode === ColumnMode.Actions ? false : true
		}

		let columnItem: IColumn = {
			key: element.name,
			name: element.name,
			iconName: element.iconName,
			minWidth: columnWidth(),
			maxWidth: columnWidth(true),
			isPadded: true,
			//isSorted: element.mode === ColumnMode.Actions ? false : element.isSortedAndFilted,
			isIconOnly: isIconOnlyProperty(),
			isResizable: isResizable(),
			//sortAscendingAriaLabel: 'Ordeando de A a Z',
			//sortDescendingAriaLabel: 'Ordenado de Z a A',
		}

		if (element.fieldName)
			columnItem.fieldName = element.fieldName

		if (isLastItem())
			columnItem.className = 'last-item-row'

		switch (element.mode) {
			case ColumnMode.Person:
				columnItem = PersonaMode(columnItem)
				break
			case ColumnMode.Actions:
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
					const viewItem: IIconProps = { iconName: 'EntryView' }
					const title = columnItem.fieldName ? columnItem.fieldName : 0
					return <PrimaryButton href={`/${element.entryName}/${item[title]}`} text={strings.getString('view')} iconProps={viewItem} />
				}
				break
			default:
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
					const title = columnItem.fieldName ? columnItem.fieldName : 0
					return <p>{notInformedTreatment(item[title])}</p>
				}
				break
		}

		convertedColumns.push(columnItem)
	})

	return convertedColumns
}

export default ColumnsDefinitions