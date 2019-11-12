/* eslint-disable no-unused-vars */
import * as React from 'react'
import 'heartthrob'



interface Props {
    children?: any,
    canGoBack?: boolean,
    leftButtons?: any,
    mode?: string
}

const Taskbar = (props: Props) => {
    const needClear = props.canGoBack // || props.leftButtons;

    const GetBack = () => {
        if (props.canGoBack) {
            return (<div className='left'>
                <a className='btn btn-link' href=''> Return</a>
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
