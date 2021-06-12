import * as React from 'react'
import { PrimaryButton } from '@fluentui/react'

import { LoadButtonProps } from './LoadButtonTypes'

const LoadButton = (props: LoadButtonProps): JSX.Element => {
	if (props.isLoading) {
		return (<h1>ojiaoiaj</h1>)
	}

	return (
		<>
			{props.children}
			<PrimaryButton
				disabled={props.disabled}
				text={props.text}
				onClick={props.onClick}
				iconProps={props.iconProps} />
		</>
	)
}

export { LoadButton }