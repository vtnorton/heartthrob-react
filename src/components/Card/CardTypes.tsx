import { IIconProps } from '@fluentui/react/lib/Icon'
import { ActionButtonProps } from 'components/ActionButtons'

export interface CardProps {
	children: any
	title?: string
	acrylic?: boolean
	shadow?: string
	taskbar?: TaskbarProps
	actionButtons?: ActionButtonProps
}

export interface TaskbarProps {
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
