import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Header } from './Header'
import { HeaderProps, MenuItemType } from './HeaderTypes'

const defaultstyle = {
	padding: '40px',
}

const storiesHeader = storiesOf('Header', module)

storiesHeader.add('Basic usage of Header', () => {
	const accountMenu: MenuItemType[] = [{ name: 'Logout', icon: { iconName: 'SignOut' } }]

	const headerOptions: HeaderProps = {
		systemName: 'heartthrob-react',
		name: 'Vitor Norton',
		accountMenu: accountMenu,
	}

	return (
		<div style={defaultstyle}>
			<Header props={headerOptions} />
		</div>
	)
})
