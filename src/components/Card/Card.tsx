/* eslint-disable no-unused-vars */
import * as React from 'react'
import 'heartthrob'
import Acrylic from '../../effects/Acrylic/Acrylic'
import Shadow from '../../effects/Shadow/Shadow'
import { ITaskbar } from 'interfaces/ITaskbar'
import Taskbar from './Taskbar/Taskbar'

interface Props {
  children: any
  title?: string
  acrylic?: boolean
  shadow?: string
  taskbar?: ITaskbar
}

const Card = (props: Props) => {
  const cardTitle = () => {
    return props.title ? (
      <>
        <h4>{props.title}</h4>
        <hr />
      </>
    ) : null
  }

  const mountTaskbar = () => {
    if (!props.taskbar) return null

    return (
      <Taskbar
        canGoBack={props.taskbar.canGoBack}
        canEdit={props.taskbar.canEdit}
        buttons={props.taskbar.buttons}
        leftButtons={props.taskbar.leftButtons}
        mode={props.taskbar.mode}
        createButton={props.taskbar.createButton}
        deleteButton={props.taskbar.deleteButton}
        saveButton={props.taskbar.saveButton}
        editButton={props.taskbar.editButton}
        editIcon={props.taskbar.editIcon}
        saveIcon={props.taskbar.saveIcon}
        deleteIcon={props.taskbar.deleteIcon}
        deleteClickEvent={props.taskbar.deleteClickEvent}
        saveClickEvent={props.taskbar.saveClickEvent}
        editClickEvent={props.taskbar.editClickEvent}
        goBackUrl={props.taskbar.goBackUrl}
        createClickEvent={props.taskbar.createClickEvent}
        createIcon={props.taskbar.createIcon}
      />
    )
  }

  const mountCardHolder = () => {
    if (!props.taskbar || props.taskbar.mode === 'details') {
      return (
        <div>
          {cardTitle()}
          {props.children}
          {mountTaskbar()}
        </div>
      )
    }

    return (
      <form>
        {cardTitle()}
        {props.children}
        {mountTaskbar()}
      </form>
    )
  }

  return (
    <Shadow>
      <Acrylic main='card' acrylic={props.acrylic}>
        {mountCardHolder()}
      </Acrylic>
    </Shadow>
  )
}

export default Card
