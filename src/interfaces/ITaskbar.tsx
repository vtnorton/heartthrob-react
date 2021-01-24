import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface ITaskbar {
  buttons?: any
  canEdit?: boolean
  canGoBack?: boolean
  goBackUrl?: string
  createButton?: string
  createIcon?: IconProp
  createClickEvent?: any
  deleteButton?: string
  deleteIcon?: IconProp
  deleteClickEvent?: any
  editButton?: string
  editIcon?: IconProp
  editClickEvent?: any
  leftButtons?: any
  mode?: string
  saveButton?: string
  saveIcon?: IconProp
  saveClickEvent?: any
}
