/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { IColumn, Persona, PersonaSize } from '@fluentui/react'
import { PersonaModeProps } from '../DetailsListSimplifiedTypes'

const PersonaMode = (columnItem: IColumn, element: any): IColumn => {
	columnItem.onRender = (item?: any, index?: number, column?: IColumn) => {
		const personaModeProps: PersonaModeProps = element.personaMode
		const fullName = item[personaModeProps.fullName]

		let secondaryText = undefined
		if (personaModeProps.secondaryText)
			secondaryText = item[personaModeProps.secondaryText]

		return <Persona
			showInitialsUntilImageLoads
			hidePersonaDetails={false}
			text={fullName}
			secondaryText={secondaryText}
			imageAlt={fullName}
			size={PersonaSize.size40} />
	}

	return columnItem
}

export default PersonaMode