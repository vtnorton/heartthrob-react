import { IIconProps } from '@fluentui/react'

export interface ITaskbar {
	buttons?: any
	canEdit?: boolean
	canGoBack?: boolean
	goBackUrl?: string
	createButton?: string
	createIcon?: IIconProps
	createClickEvent?: any
	deleteButton?: string
	deleteIcon?: IIconProps
	deleteClickEvent?: any
	editButton?: string
	editIcon?: IIconProps
	editClickEvent?: any
	leftButtons?: any
	mode?: string
	saveButton?: string
	saveIcon?: IIconProps
	saveClickEvent?: any
}
