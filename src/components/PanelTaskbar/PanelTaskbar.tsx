import React from 'react'
import { IIconProps } from '@fluentui/react'

import { Taskbar } from './../Card/Taskbar/Taskbar'
import { LoadButton } from './../LoadButton/LoadButton'
import strings from './../../infrastructure/localization'
import { PanelTaskbarProps } from './PanelTaskbarTypes'

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