import React from 'react'
import { DetailsList, DetailsListLayoutMode, SelectionMode } from '@fluentui/react'

import AnyDataComponent, { EntityName } from './../AnyData/AnyData'
import ColumnsDefinitions from './ColumnsDefinitions'
import { ISimplifiedColumn } from './DetailsListSimplifiedTypes'
import strings from 'infrastructure/localization'

interface Props {
	onNewItem: any
	items: any[]
	columns: ISimplifiedColumn[]
	entityName?: EntityName
}

const DetailsListSimplified = (props: Props): JSX.Element => {
	const DisplayList = () => {
		const _getKey = (item: any, index?: number): string => {
			return item.key
		}

		return <DetailsList
			items={props.items}
			columns={ColumnsDefinitions(props.columns)}
			getKey={_getKey}
			layoutMode={DetailsListLayoutMode.justified}
			selectionMode={SelectionMode.none}
			isHeaderVisible={true} />
	}

	// TODO: adicionar shimmer
	if (props.items === undefined)
		return <p>{strings.getString('loading')}</p>

	if (props.items?.length === 0)
		return <AnyDataComponent onClick={props.onNewItem} entityName={props.entityName ? props.entityName : { singleName: 'item' }} />

	// TODO: adicionar visão de erro
	return (
		<>
			{DisplayList()}
		</>
	)
}

export default DetailsListSimplified