import { EntityName } from './../AnyData/AnyDataTypes'

export interface ISimplifiedColumn {
	name: string,
	fieldName?: string,
	iconName?: string,
	entryName?: string,
	isIconOnly?: boolean,
	isSortedAndFilted?: boolean,
	mode?: ColumnMode,
}

export enum ColumnMode {
	Person,
	Actions,
}

export interface DetailsListSimplifiedProps {
	onNewItem: any
	items: any[]
	columns: ISimplifiedColumn[]
	entityName?: EntityName
}