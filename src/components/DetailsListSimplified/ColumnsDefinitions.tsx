import { IColumn } from '@fluentui/react'

import { ColumnMode, ISimplifiedColumn } from './DetailsListSimplifiedTypes'
import PersonaMode from './ColumnMode/PersonaMode'
import ActionMode from './ColumnMode/ActionMode'
import DefaultMode from './ColumnMode/DefaultMode'
import ManagementInfoMode from './ColumnMode/ManagementInfoMode'


const ColumnsDefinitions = (columns: ISimplifiedColumn[]): IColumn[] => {
	const convertedColumns: Array<IColumn> = []

	columns.forEach(element => {
		const columnWidth = (isMaxWidth?: boolean): number => {
			if (element.mode === ColumnMode.Actions)
				return 94

			if (isMaxWidth)
				return 500

			return 90
		}

		const isLastItem = (): boolean => {
			if (columns[columns.length - 1].name === element.name)
				return true

			return false
		}

		const isResizable = (): boolean => {
			return element.mode === ColumnMode.Actions ? false : true
		}

		let columnItem: IColumn = {
			key: element.name,
			name: element.name,
			minWidth: columnWidth(),
			maxWidth: columnWidth(true),
			isPadded: true,
			fieldName: element.fieldName,
			isResizable: isResizable(),
			className: isLastItem() ? 'last-item-row' : '',
		}

		switch (element.mode) {
			case ColumnMode.Person:
				columnItem = PersonaMode(columnItem, element)
				break
			case ColumnMode.ManagementInfo:
				columnItem = ManagementInfoMode(columnItem, element)
				break
			case ColumnMode.Actions:
				columnItem = ActionMode(columnItem, element)
				break
			default:
				columnItem = DefaultMode(columnItem)
				break
		}

		convertedColumns.push(columnItem)
	})

	return convertedColumns
}

export default ColumnsDefinitions