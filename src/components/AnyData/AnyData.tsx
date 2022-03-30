import { notInformedTextTreatment } from 'extensions/stringExtensions'
import strings from 'infrastructure/localization'
import React from 'react'

import './AnyData.scss'

interface Props {
	onClick?: any,
	entityName?: EntityName
}

const AnyDataComponent = (props: Props) => {
	const entityName = (): string => {
		if (props.entityName)
			return props.entityName?.singleName

		return notInformedTextTreatment('')
	}

	return (
		<div className='anydata'>
			<h6 className='text-center text-mid-black'>
				{strings.formatString(strings.anyDataTitle, entityName())}
			</h6>
			<p className='text-center text-light'>
				{strings.formatString(strings.anyDataDescription, entityName())}
				<a onClick={props.onClick}>
					{strings.getString('anyDataDescription2')}
				</a>.
			</p>
		</div>
	)
}

export interface EntityName {
	singleName: string,
}

export default AnyDataComponent