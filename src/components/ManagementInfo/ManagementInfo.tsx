import React from 'react'

import { Card } from './../Card/index'
import { notInformedDateTreatment, notInformedTextTreatment } from '../../extensions/stringExtensions'
import strings from '../../infrastructure/localization'
import { ManagementInfomations, ManagementInfoProps } from './ManagementInfoTypes'

const createdByText = (props: ManagementInfomations) => {
	return <p>{strings.formatString(strings.managementCreated, notInformedDateTreatment(props.createdIn), notInformedTextTreatment(props.createdBy))}</p>
}

const updatedByText = (props: ManagementInfomations) => {
	if (props.createdIn !== props.updatedIn) {
		return (
			<p>{strings.formatString(strings.managementUpdated, notInformedDateTreatment(props.updatedIn), notInformedTextTreatment(props.updatedBy))}</p>
		)
	}
	return null
}

const ManagementInfo = (props: ManagementInfoProps) => {
	return (
		<Card title={strings.getString('managementInfo')}>
			{createdByText(props.item)}
			{updatedByText(props.item)}
		</Card>
	)
}

export { createdByText, updatedByText }
export default ManagementInfo