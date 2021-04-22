import { IIconProps } from '@fluentui/react'

export interface MenuItemType {
  icon: IIconProps
  name: string
  location?: string
  action?: any // TODO: Descobrir
}

export interface HeaderProps {
  accountMenu: MenuItemType[]
  name: string
  systemName: string
  logo?: ImageBitmap
}
