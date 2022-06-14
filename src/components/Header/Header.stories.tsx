import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Header } from './Header'
import { HeaderProps, MenuItemType } from './HeaderTypes'

const defaultstyle = {
	padding: '40px',
}

const _basic: ComponentStory<typeof Header> = () => {
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
}
_basic.storyName = 'Basic usage of Header'

export default {
	title: 'Header',
	component: Header,
} as ComponentMeta<typeof Header>
export const Basic = _basic