/* eslint-disable no-unused-vars */
import 'heartthrob'
import * as React from 'react'
import { ITaskbar } from '../../../interfaces/ITaskbar'
import strings from '../../../infrastructure/localization'
import { DefaultButton, PrimaryButton } from '@fluentui/react'

const Taskbar = (props: ITaskbar) => {
  const needClear = props.canGoBack || props.leftButtons

  const GetBack = () => {
    if (props.canGoBack) {
      // TODO: Needs to become a link
      return (
        <div className='left'>
          <DefaultButton
            // url={props.goBackUrl}
            // icon={faChevronLeft}
            text={strings.getString('return')}
          />
        </div>
      )
    }
    return null
  }

  const GetDeleteButton = () => {
    // const _deleteIcon = props.deleteIcon === null ? props.deleteIcon : faTrashAlt
    const _deleteText = props.deleteButton ? props.deleteButton : strings.getString('delete')
    return (
      <PrimaryButton
        onClick={props.deleteClickEvent}
        // icon={_deleteIcon}
        text={_deleteText}
      />
    )
  }

  const GetEditButton = () => {
    // const _editIcon = props.editIcon === null ? props.editIcon : faEdit
    const _editText = props.editButton ? props.editButton : strings.getString('edit')
    if (props.canEdit) {
      return (
        <PrimaryButton
          onClick={props.editClickEvent}
          // icon={_editIcon}
          text={_editText}
        />
      )
    }
    return null
  }

  const GetMode = () => {
    switch (props.mode) {
      case 'create':
        // const _createIcon = props.createIcon === null ? props.createIcon : faPlus
        const _createText = props.createButton ? props.createButton : strings.getString('create')
        return (
          <PrimaryButton
            onClick={props.createClickEvent}
            // icon={_createIcon} // TODO: Colocar ícone
            text={_createText}
          />
        )
      case 'edit':
        // const _saveIcon = props.saveIcon === null ? props.saveIcon : faSave
        const _saveText = props.saveButton ? props.saveButton : strings.getString('save')
        return (
          <>
            {GetDeleteButton()}
            <PrimaryButton
              onClick={props.saveClickEvent}
              // icon={_saveIcon} // TODO: Colocar ícone
              text={_saveText}
            />
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
    return <div className='left'>{props.leftButtons}</div>
  }

  const GetActionButtons = () => {
    if (props.mode) return <div className='right'>{GetMode()}</div>
    else return <div className='right'>{GetButtons()}</div>
  }

  const Clear = () => {
    return needClear ? <div className='clear'></div> : null
  }

  return (
    <div className='taskbar'>
      {GetBack()}
      {GetLeftButtons()}
      {GetActionButtons()}
      {Clear()}
    </div>
  )
}

export default Taskbar
