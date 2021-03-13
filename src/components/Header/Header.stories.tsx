import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Header from './Header'
import { HeaderProps, MenuItemType } from './HeaderTypes'

const defaultstyle = {
	padding: '40px',
}

const storiesHeader = storiesOf('Header', module)

storiesHeader.add('Basic usage of Header', () => {
	const accountMenu: MenuItemType[] = [{ name: 'Logout', icon: { iconName: 'SignOut' } }]

	const headerOptions: HeaderProps = {
		systemName: 'heartthrob-react',
		token:
			'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyJtZUB2dG5vcnRvbi5jb20iLCJtZUB2dG5vcnRvbi5jb20iLCJtZUB2dG5vcnRvbi5jb20iXSwianRpIjoiMWExYTQwZjZkNzVmNDAzYWJmMDg4YjE4YzhkOWUyNzMiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE2MTU2NzE0NzcsImV4cCI6MTYxNTY3NTA3NywiaWF0IjoxNjE1NjcxNDc3LCJpc3MiOiJIRnVuZGFsbWVudGFscyIsImF1ZCI6IkhGdW5kYWxtZW50YWxzLXVzZXJzIn0.NYH6WMyNfuyTYWi0gtoAxGvoB2lGUdQtYz8tXRbL6o1zz0gUa9wtJrbdX7cF_NVids2BnCDufL-Jz2sv1Q_mkd1VAbv-0thFppMmNSju03MEdA3rkSphQWDJUq8rfVTdvc1JkMotuIkYS5BRoerNBYbkbkZDN3nU27x-km2D2BvGfq9SGDRlELJdSqS1UwXMS-JE2Brcz3wd4rnYVdEwfXjX4u8cRQHXPROkJIVJFdXF6aNjPC6bNCCyD4fQhDm2mLzdfNG45J_mGyvsOyypQ8sBg4Zh8PT7oTV2jTd4eIuoqc1U-VAZBbpx5JSQxWbc5GXUriCP7tDzfKmsk7LELw',
		accountMenu: accountMenu,
	}

	return (
		<div style={defaultstyle}>
			<Header props={headerOptions} />
		</div>
	)
})
