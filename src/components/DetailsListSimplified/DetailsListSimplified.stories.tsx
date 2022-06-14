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
	job?: string,
	bio: string
}

const _basic: ComponentStory<typeof DetailsListSimplified> = () => {
	initializeIcons()

	const itens: Client[] = [
		{ id: 1, fullName: 'John Doe', job: 'Consultant', bio: 'Snackwave helvetica lumbersexual vaporware organic. Art party helvetica schlitz bicycle rights.' },
		{ id: 2, fullName: 'Dustin Herrison', job: 'Consultant', bio: 'Mixtape meggings fingerstache, waistcoat flannel knausgaard vaporware.' },
		{ id: 3, fullName: 'Mike Mitchel', job: 'Consultant', bio: 'Schlitz single-origin coffee live-edge iPhone meh waistcoat vice butcher whatever snackwave pickled cronut lomo mlkshk. ' },
	]
	const columns: ISimplifiedColumn[] = [
		{
			name: 'Persona',
			isSortedAndFilted: false,
			mode: ColumnMode.Person,
			personaMode: {
				fullName: 'fullName',
				secondaryText: 'job',
			},
		},
		{
			name: 'Biografia',
			fieldName: 'bio',
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