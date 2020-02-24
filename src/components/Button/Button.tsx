/* eslint-disable no-unused-vars */
import * as React from 'react'
import 'heartthrob'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
	text: string,
	icon?: any,
	url?: string,
	className?: string,
	onClick?: any
}


const Button = (props: Props) => {
	const btnClass = props.className ? `btn ${props.className}` : 'btn'

	function onClickButton(event){
		props.onClick()
	}

	const GetButtonType = () => {
		if (props.url) {
			return (
				<a href={props.url} className={btnClass}>
					{GetIcon()}
					{props.text}
				</a>
			)
		}

		return (
			<button className={btnClass} onClick={onClickButton}>
				{GetIcon()}
				{props.text}
			</button>
		)
	}

	const GetIcon = () => {
		if (props.icon !== null) {
			return <FontAwesomeIcon icon={props.icon} />
		}

		return null
	}

	return GetButtonType()
}

export default Button
