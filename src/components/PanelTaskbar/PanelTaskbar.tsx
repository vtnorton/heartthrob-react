import React from 'react'
import { IIconProps } from '@fluentui/react'

import { Taskbar } from 'components/Card/Taskbar/Taskbar'
import { LoadButton } from 'components/LoadButton'
import strings from 'infrastructure/localization'

interface PanelTaskbarProps {
	onClick: any,
	isLoading: boolean
}

const PanelTaskbar = (props: PanelTaskbarProps) => {
	const taskbarButton = () => {
		const saveInfoIcon: IIconProps = { iconName: 'Save' }
		return <LoadButton
			loadingText={strings.getString('saving')}
			isLoading={props.isLoading}
			text={strings.getString('save')}
			iconProps={saveInfoIcon}
			onClick={props.onClick} />
	}

	return <Taskbar buttons={taskbarButton()} />
}

export default PanelTaskbar