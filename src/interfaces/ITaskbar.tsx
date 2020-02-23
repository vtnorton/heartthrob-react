import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ITaskbar {
    children?: any,
    canGoBack?: boolean,
    canEdit?: boolean,
    buttons?: any,
    mode?: string,
    createButton?: string,
    deleteButton?: string,
    saveButton?: string,
    editButton?: string,
    editIcon?: IconProp,
    saveIcon?: IconProp,
    deleteIcon?: IconProp,
    createIcon?: IconProp
}