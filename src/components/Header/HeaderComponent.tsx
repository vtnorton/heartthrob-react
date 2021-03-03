import React from 'react'
import 'heartthrob'
import jwt_decode from 'jwt-decode'
import { Icon, Persona, IPersonaSharedProps } from '@fluentui/react'

import { MenuItemType } from './HeaderComponentTypes'
import './HeaderComponent.scss'
import { getIntials } from 'extensions/stringExtensions'

function constructAccountMenu(token: string, accountMenu: MenuItemType[]) {
	const decodedToken: any = jwt_decode(token) //TODO: criar interface para token
	const name = decodedToken.unique_name[2]

	const userProfile: IPersonaSharedProps = {
		imageInitials: getIntials(name),
		text: name,
		showInitialsUntilImageLoads: true,
	}

	const menuContent = (item: MenuItemType) => {
		return (
			<>
				<Icon iconName={item.icon.iconName} />
				{item.name}
			</>
		)
	}
	const clickableItem = (item: MenuItemType) => {
		if (item.action !== undefined) return <a onClick={item.action}>{menuContent(item)}</a>

		return <a href={item.location}>{menuContent(item)}</a>
	}

	return (
		<li>
			<Persona {...userProfile} coinSize={35} />
			<ul className='menu dark right'>
				{accountMenu.map((item, key) => (
					<li key={key}>{clickableItem(item)}</li>
				))}
			</ul>
		</li>
	)
}

const HeaderComponent = ({ token, accountMenu }: { token: string; accountMenu: MenuItemType[] }) => {
	return (
		<header className='acrylic header'>
			<div className='logo'>
				<a href='/'>
					<img src='~/images/logo-white.png' alt='Logo da aplicação' />
				</a>
			</div>
			<div className='line'></div>
			<div className='right'>
				<ul>{constructAccountMenu(token, accountMenu)}</ul>
			</div>
		</header>
	)
}

export default HeaderComponent
