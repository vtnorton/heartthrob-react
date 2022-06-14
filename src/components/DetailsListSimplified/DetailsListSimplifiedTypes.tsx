/* eslint-disable @typescript-eslint/no-explicit-any */

import { ManagementInfomations } from './../../components/ManagementInfo'
import { EntityName } from './../AnyData/AnyDataTypes'

export interface ISimplifiedColumn {
	name: string,
	fieldName?: string,
	entryName?: string,
	isIconOnly?: boolean,
	isSortedAndFilted?: boolean,
	mode?: ColumnMode,
	personaMode?: PersonaModeProps,
	managementInfoMode?: ManagementInfomations,
}

export enum ColumnMode {
	Person,
	Actions,
	ManagementInfo
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