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