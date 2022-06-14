import { EntityName } from './../AnyData/AnyDataTypes'

export interface ISimplifiedColumn {
	name: string,
	fieldName?: string,
	entryName?: string,
	isIconOnly?: boolean,
	isSortedAndFilted?: boolean,
	mode?: ColumnMode,
	personaMode?: PersonaModeProps,
}

export enum ColumnMode {
	Person,
	Actions,
}

export interface PersonaModeProps {
	fullName: string,
	secondaryText?: string,
}

export interface DetailsListSimplifiedProps {
	onNewItem: any
	items: any[]
	columns: ISimplifiedColumn[]
	entityName?: EntityName
}