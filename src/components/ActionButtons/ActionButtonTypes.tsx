import { IIconProps } from '@fluentui/react'

export interface ActionButtonProps {
	itens: Item[]
}

export interface Item {
	label: string,
	icon: IIconProps,
	onClick: any,
	primary?: boolean
}
