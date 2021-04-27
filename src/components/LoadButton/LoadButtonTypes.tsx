import { IIconProps } from '@fluentui/react'
import { MouseEventHandler } from 'react'

export interface LoadButtonProps {
	isLoading: boolean,
	iconProps: IIconProps,
	onClick: MouseEventHandler<any>,
	text: string,
	loadingText: string,
	children?: JSX.Element,
	disabled?: boolean
}