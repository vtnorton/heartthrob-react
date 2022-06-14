import React from 'react'
import { IColumn, Persona, PersonaSize } from '@fluentui/react'
import { getIntials } from './../../extensions/stringExtensions'

const PersonaMode = (columnItem: IColumn): IColumn => {
	columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
		return <Persona
			imageInitials={getIntials(item.fullName)}
			showInitialsUntilImageLoads
			hidePersonaDetails
			imageAlt={item.fullName}
			size={PersonaSize.size32} />
	}

	return columnItem
}

export default PersonaMode