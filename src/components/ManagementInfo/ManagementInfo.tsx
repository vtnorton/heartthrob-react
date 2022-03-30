import React from 'react'

import { Card } from './../Card/index'
import { notInformedDateTreatment, notInformedTextTreatment } from '../../extensions/stringExtensions'
import strings from '../../infrastructure/localization'
import { ManagementInfoProps } from './ManagementInfoTypes'

const ManagementInfo = (props: ManagementInfoProps) => {
	const showUpdateInfo = () => {
		if (props.item.createdIn !== props.item.updatedIn) {
			return (
				<p>{strings.formatString(strings.managementUpdated, notInformedDateTreatment(props.item.updatedIn), notInformedTextTreatment(props.item.updatedBy))}</p>
			)
		}
		return null
	}

	return (
		<Card title={strings.getString('managementInfo')}>
			<p>{strings.formatString(strings.managementCreated, notInformedDateTreatment(props.item.createdIn), notInformedTextTreatment(props.item.createdBy))}</p>
			{showUpdateInfo()}
		</Card>
	)
}

export default ManagementInfo