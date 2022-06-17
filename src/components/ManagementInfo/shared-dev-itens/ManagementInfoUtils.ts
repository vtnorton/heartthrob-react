import { ManagementInfoProps } from './../ManagementInfoTypes'

const date = new Date()

export const onlyCreatedIn: ManagementInfoProps = {
	item: {
		createdIn: date,
		createdBy: 'Vitor Norton',
		updatedIn: date,
		updatedBy: 'Vitor Norton',
	},
}

const newUpdatedIn = new Date(onlyCreatedIn.item.createdIn.getTime() + (1000 * 60 * 60 * 24))
const newUpdatedBy = onlyCreatedIn.item.updatedBy = 'Christine Daee'

export const withUpdatedIn: ManagementInfoProps = {
	item: {
		createdIn: onlyCreatedIn.item.createdIn,
		createdBy: onlyCreatedIn.item.createdBy,
		updatedIn: newUpdatedIn,
		updatedBy: newUpdatedBy,
	},
}