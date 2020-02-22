/* eslint-disable no-unused-vars */
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEraser, faPlus, faTrashAlt, faSave, faEdit } from '@fortawesome/free-solid-svg-icons'
import strings from '../../../infrastructure/localization'
import 'heartthrob'

interface Props {
    children?: any,
    canGoBack?: boolean,
    canEdit?: boolean,
    buttons?: any,
    mode?: string,
    createButton?: string,
    deleteButton?: string,
    saveButton?: string,
    editButton?: string,
}

const Taskbar = (props: Props) => {
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
        return (
            <button className='btn btn-danger'><FontAwesomeIcon icon={faTrashAlt} />
                {props.deleteButton ? props.deleteButton : strings.getString('delete')}
            </button>
        )
    }

    const GetEditButton = () => {
        if (props.canEdit) {
            return (<button className='btn btn-primary'><FontAwesomeIcon icon={faEdit} />
                {props.editButton ? props.editButton : strings.getString('edit')}
            </button>)
        }
        return null;
    }

    const GetMode = () => {
        switch (props.mode) {
            case 'create':
                return (
                    <>
                        <button className='btn btn-link'><FontAwesomeIcon icon={faEraser} />
                            {strings.getString('clean')}
                        </button>
                        <button className='btn btn-primary'><FontAwesomeIcon icon={faPlus} />
                            {props.createButton ? props.createButton : strings.getString('create')}
                        </button>
                    </>
                )
            case 'edit':
                return (
                    <>
                        {GetDeleteButton()}
                        <button className='btn btn-primary'><FontAwesomeIcon icon={faSave} />
                            {props.saveButton ? props.saveButton : strings.getString('save')}
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
