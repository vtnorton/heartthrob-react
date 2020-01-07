/* eslint-disable no-unused-vars */
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import 'heartthrob'

interface Props {
    children?: any,
    canGoBack?: boolean,
    buttons?: any,
    mode?: string
}

const Taskbar = (props: Props) => {
    const needClear = props.canGoBack // || props.leftButtons;

    const GetBack = () => {
        if (props.canGoBack) {
            return (<div className='left'>
                <a className='btn btn-link' href=''><FontAwesomeIcon icon={faChevronLeft} /> Return</a>
            </div>)
        }
        return null;
    }

    const Clear = () => {
        return (needClear) ?
            (<div className='clear'></div>) : null;
    }

    return (
        <div className='taskbar'>
            {GetBack()}
            {Clear()}
        </div>
    )
}

export default Taskbar
