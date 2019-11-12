/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import * as React from 'react'
import Card from './Card'
import Taskbar from './Taskbar/Taskbar'


var defaultstyle = {
    padding: '40px'
}

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);

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
            <Card acrylic={boolean('Use acrylic design', false)} title={text('Card title', 'Hello world')} >
                <label>
                    Name
                    <input type='text' placeholder='Vitor N.' />
                </label>
                <Taskbar mode='up' canGoBack={boolean('Can get back from taskbar', true)}></Taskbar>
            </Card>
        </div>
    )
})
