import * as React from 'react'
import { PrimaryButton } from '@fluentui/react/lib/Button'
import { Spinner } from '@fluentui/react/lib/components/Spinner/Spinner'
import { SpinnerSize } from '@fluentui/react/lib/components/Spinner/Spinner.types'

import { LoadButtonProps } from './LoadButtonTypes'

const LoadButton = (props: LoadButtonProps): JSX.Element => {
	if (props.isLoading) {
		return (
			<Spinner
				size={SpinnerSize.medium}
				label={props.loadingText}
				ariaLive='assertive'
				labelPosition='right' />
		)
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