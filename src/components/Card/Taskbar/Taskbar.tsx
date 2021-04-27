/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import 'heartthrob'
import * as React from 'react'
import { TaskbarProps } from './TaskbarTypes'
import strings from '../../../infrastructure/localization'
import { ActionButton, DefaultButton, IIconProps, PrimaryButton } from '@fluentui/react'

const Taskbar = (props: TaskbarProps) => {
	const GetBack = () => {
		if (props.canGoBack) {
			const getBackIcon: IIconProps = { iconName: 'ChevronLeft' }
			return <ActionButton iconProps={getBackIcon} text={strings.getString('return')} />
		}
		return null
	}

	const GetDeleteButton = () => {
		const deleteIcon: IIconProps = { iconName: 'Delete' }
		const _deleteIcon = props.deleteIcon ? props.deleteIcon : deleteIcon
		const _deleteText = props.deleteButton ? props.deleteButton : strings.getString('delete')
		return (
			<DefaultButton onClick={props.deleteClickEvent} iconProps={_deleteIcon} text={_deleteText} />
		)
	}

	const GetEditButton = () => {
		const editIcon: IIconProps = { iconName: 'Edit' }
		const _editIcon = props.editIcon === null ? props.editIcon : editIcon
		const _editText = props.editButton ? props.editButton : strings.getString('edit')
		if (props.canEdit) {
			return <PrimaryButton onClick={props.editClickEvent} iconProps={_editIcon} text={_editText} />
		}
		return null
	}

	const GetMode = () => {
		switch (props.mode) {
			case 'create':
				const createIcon: IIconProps = { iconName: 'Add' }
				const _createIcon = props.createIcon ? props.createIcon : createIcon
				const _createText = props.createButton ? props.createButton : strings.getString('create')
				return (
					<PrimaryButton
						onClick={props.createClickEvent}
						iconProps={_createIcon}
						text={_createText}/>
				)
			case 'edit':
				const saveIcon: IIconProps = { iconName: 'Save' }
				const _saveIcon = props.saveIcon ? props.saveIcon : saveIcon
				const _saveText = props.saveButton ? props.saveButton : strings.getString('save')
				return (
					<>
						{GetDeleteButton()}
						<PrimaryButton onClick={props.saveClickEvent} iconProps={_saveIcon} text={_saveText} />
					</>
				)
			case 'details':
				return (
					<>
						{GetDeleteButton()}
						{GetEditButton()}
					</>
				)
			default:
				return ''
		}
	}

	const GetButtons = () => {
		return props.buttons
	}

	const GetLeftButtons = () => {
		return props.leftButtons
	}

	const GetActionButtons = () => {
		const buttons = props.mode ? GetMode() : GetButtons()
		return <div className='to-the-right'>{buttons}</div>
	}

	return (
		<div className='taskbar'>
			{GetBack()}
			{GetLeftButtons()}
			{GetActionButtons()}
		</div>
	)
}

export default Taskbar
