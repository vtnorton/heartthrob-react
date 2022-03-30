import { IColumn, IIconProps, PrimaryButton } from '@fluentui/react'
import PersonaMode from './ColumnsModes'
import { notInformedTreatment } from 'heartthrob-react'

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

		let columnItem: IColumn = {
			key: element.name,
			name: element.name,
			iconName: element.iconName,
			minWidth: columnWidth(),
			maxWidth: columnWidth(true),
			isPadded: true,
			//isSorted: element.mode === ColumnMode.Actions ? false : element.isSortedAndFilted,
			isIconOnly: element.iconName?.length > 0 ? true : false,
			isResizable: element.iconName?.length > 0 || element.mode === ColumnMode.Actions ? false : true,
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
				columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
					const viewItem: IIconProps = { iconName: 'EntryView' }
					return <PrimaryButton href={`/${element.entryName}/${item[columnItem.fieldName]}`} text='Visualisar' iconProps={viewItem} />
				}
				break
			default:
				columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
					return <p>{notInformedTreatment(item[columnItem.fieldName])}</p>
				}
				break
		}

		convertedColumns.push(columnItem)
	})

	return convertedColumns
}

export default ColumnsDefinitions