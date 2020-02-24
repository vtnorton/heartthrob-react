/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import * as React from 'react'
import Card from './Card'
import Taskbar from './Taskbar/Taskbar'
import { ITaskbar } from 'interfaces/ITaskbar'

var defaultstyle = {
    padding: '40px'
}

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);

let taskbarBasic: ITaskbar = {
    canGoBack: true //boolean('Can get back from taskbar', true)
}

let taskbarCreate: ITaskbar = {
    canGoBack: true,
    mode: 'create',
    createButton: 'Create button content'
}

function deleteClickHandle(){
    alert('your item was deleted')
}

stories.add('Basic usage', () => {
    return (
        <div style={defaultstyle}>
            <Card acrylic={boolean('Use acrylic design', false)} title={text('Card title', 'Hello world')} >
                Teste
			</Card>
        </div>
    )
})

stories.add('With taskbar', () => {
    return (
        <div style={defaultstyle}>
            <Card acrylic={boolean('Use acrylic design', false)} title={text('Card title', 'Hello world')} taskbar={taskbarBasic} >
                <label>
                    Name
                    <input type='text' placeholder='Vitor N.' />
                </label>
            </Card>
        </div>
    )
})

stories.add('With taskbar on create mode', () => {
    return (
        <div style={defaultstyle}>
            <Card title={text('Card title', 'Hello world')} taskbar={taskbarCreate}>
                <label>
                    Name
                    <input type='text' placeholder='Vitor N.' />
                </label>
            </Card>
        </div>
    )
})

stories.add('With taskbar on edit mode', () => {
    return (
        <div style={defaultstyle}>
            <Card title={text('Card title', 'Hello world')} >
                <label>
                    Name
                    <input type='text' placeholder='Vitor N.' />
                </label>
                <Taskbar mode='edit' deleteButton={text('Delete button content', '')} saveButton={text('Save button content', '')} canGoBack={boolean('Can get back from taskbar', true)}></Taskbar>
            </Card>
        </div>
    )
})

stories.add('With taskbar on details mode', () => {
    return (
        <div style={defaultstyle}>
            <Card title={text('Card title', 'Hello world')} >
                <label>
                    Name
                    <input type='text' placeholder='Vitor N.' />
                </label>
                <Taskbar mode='details' deleteButton={text('Delete button content', '')} editButton={text('Edit button content', '')} canGoBack={boolean('Can get back from taskbar', true)} canEdit={boolean('Can edit content', true)}></Taskbar>
            </Card>
        </div>
    )
})
