import { initializeIcons } from '@fluentui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import DetailsListSimplified from './DetailsListSimplified'
import { ColumnMode, ISimplifiedColumn } from './DetailsListSimplifiedTypes'

const defaultstyle = {
	padding: '40px',
}

interface Client {
	id: number,
	fullName?: string,
}

const _basic: ComponentStory<typeof DetailsListSimplified> = () => {
	initializeIcons()

	const itens: Client[] = [
		{ id: 1, fullName: 'John Doe' },
		{ id: 2, fullName: 'Dustin Herrison' },
		{ id: 3, fullName: 'Mike Mitchel' },
	]
	const columns: ISimplifiedColumn[] = [
		{
			name: 'Avatar',
			iconName: 'Emoji2',
			isSortedAndFilted: false,
			mode: ColumnMode.Person,
		},
		{
			name: 'Nome',
			isSortedAndFilted: true,
			fieldName: 'fullName',
		},
		{
			name: 'Opções',
			mode: ColumnMode.Actions,
			fieldName: 'id',
			entryName: 'clients',
		},
	]

	return (
		<div style={defaultstyle}>
			<DetailsListSimplified
				onNewItem={() => alert('New item')}
				items={itens}
				columns={columns} />
		</div>
	)
}
_basic.storyName = 'Basic usage of taskbar inside @fluentui Panel'

export default {
	title: 'Fluent UI integration / DetailsListSimplified',
	component: DetailsListSimplified,
} as ComponentMeta<typeof DetailsListSimplified>
export const Basic = _basic