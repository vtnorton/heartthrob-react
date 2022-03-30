import React from 'react'
import { IColumn, Persona, PersonaSize } from '@fluentui/react'
import { getIntials } from 'extensions/stringExtensions'

const PersonaMode = (columnItem: IColumn): IColumn => {
	columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
		return <Persona
			imageInitials={getIntials(item.firstName)}
			showInitialsUntilImageLoads
			hidePersonaDetails
			imageAlt={item.firstName}
			size={PersonaSize.size32} />
	}

	return columnItem
}

export default PersonaMode