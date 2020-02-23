/* eslint-disable no-unused-vars */
import * as React from 'react'
import { ITaskbar } from '../../../interfaces/ITaskbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEraser, faPlus, faTrashAlt, faSave, faEdit } from '@fortawesome/free-solid-svg-icons'
import strings from '../../../infrastructure/localization'
import 'heartthrob'

const Taskbar = (props: ITaskbar) => {
    const needClear = props.canGoBack // || props.leftButtons;

    const GetBack = () => {
        if (props.canGoBack) {
            return (<div className='left'>
                <a className='btn btn-link' href=''><FontAwesomeIcon icon={faChevronLeft} /> {strings.getString('return')}</a>
            </div>)
        }
        return null;
    }

    const GetDeleteButton = () => {
        const _deleteIcon = (props.deleteIcon === null) ? props.deleteIcon : faTrashAlt
        const _deleteText = props.deleteButton ? props.deleteButton : strings.getString('delete')
        return (
            <button className='btn btn-danger'><FontAwesomeIcon icon={_deleteIcon} />
                {_deleteText}
            </button>
        )
    }

    const GetEditButton = () => {
        const _editIcon = (props.editIcon === null) ? props.editIcon : faEdit
        const _editText = props.editButton ? props.editButton : strings.getString('edit')
        if (props.canEdit) {
            return (<button className='btn btn-primary'><FontAwesomeIcon icon={_editIcon} />
                {_editText}
            </button>)
        }
        return null;
    }

    const GetMode = () => {
        switch (props.mode) {
            case 'create':
                const _createIcon = (props.createIcon === null) ? props.createIcon : faPlus
                const _createText = props.createButton ? props.createButton : strings.getString('create')
                return (
                    <>
                        <button className='btn btn-link'><FontAwesomeIcon icon={faEraser} />
                            {strings.getString('clean')}
                        </button>
                        <button className='btn btn-primary'><FontAwesomeIcon icon={_createIcon} />
                            {_createText}
                        </button>
                    </>
                )
            case 'edit':
                const _saveIcon = (props.saveIcon === null) ? props.saveIcon : faSave
                const _saveText = props.saveButton ? props.saveButton : strings.getString('save')
                return (
                    <>
                        {GetDeleteButton()}
                        <button className='btn btn-primary'><FontAwesomeIcon icon={_saveIcon} />
                            {_saveText}
                        </button>
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
        return ''
    }

    const GetActionButtons = () => {
        if (props.mode)
            return (
                <div className='right'>
                    {GetMode()}
                </div>
            )
        else
            return (
                <div className='right'>
                    {GetButtons()}
                </div>
            )
    }

    const Clear = () => {
        return (needClear) ?
            (<div className='clear'></div>) : null;
    }

    return (
        <div className='taskbar'>
            {GetBack()}
            {GetActionButtons()}
            {Clear()}
        </div>
    )
}

export default Taskbar
