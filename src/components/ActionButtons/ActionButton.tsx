import * as React from 'react'
import { Icon, initializeIcons } from '@fluentui/react'

import { ActionButtonProps, Item } from './ActionButtonTypes'

import 'heartthrob'

const ActionButton = ({ props }: { props: ActionButtonProps }): JSX.Element => {
	if (!props.itens)
		return <></>

	initializeIcons()

	let primaryShouldCollapse = false
	const renderButton = (item: Item, key: React.Key): JSX.Element => {
		const [hover, setHover] = React.useState(false)
		const classes = (): string => {
			if (item.primary)
				return !primaryShouldCollapse ? 'btn btn-primary expanded' : 'btn btn-primary'

			if (hover) {
				primaryShouldCollapse = true
				return 'btn expanded'
			}

			return 'btn'
		}
		const shouldShowLabel = (): string => {
			if (item.primary && !primaryShouldCollapse)
				return item.label

			if (hover)
				return item.label

			return ''
		}

		return (
			<a
				key={key}
				onClick={item.onClick}
				className={classes()}
				onMouseOver={() => setHover(true)}
				onMouseOut={() => setHover(false)}>
				<Icon iconName={item.icon.iconName} /> {shouldShowLabel()}
			</a>)
	}

	return (
		<div className='btn-action'>
			{props.itens.map((item, key) => renderButton(item, key))}
		</div>
	)
}

export { ActionButton }
