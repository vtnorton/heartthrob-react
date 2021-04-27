import * as React from 'react'

import {
  Icon,
  Persona,
  IPersonaSharedProps,
  initializeIcons,
} from '@fluentui/react'

import 'heartthrob'
import { HeaderProps, MenuItemType } from './HeaderTypes'
import { getIntials } from './../../extensions/stringExtensions'

const Header = ({ props }: { props: HeaderProps }): JSX.Element => {
  initializeIcons()

  function constructAccountMenu(name: string, accountMenu: MenuItemType[]) {
    const userProfile: IPersonaSharedProps = {
      imageInitials: getIntials(name),
      text: name,
      showInitialsUntilImageLoads: true,
    }

    const menuContent = (item: MenuItemType) => {
      return (
        <>
          <Icon iconName={item.icon.iconName} />
          {item.name}
        </>
      )
    }
    const clickableItem = (item: MenuItemType) => {
      if (item.action !== undefined)
        return <a onClick={item.action}>{menuContent(item)}</a>

      return <a href={item.location}>{menuContent(item)}</a>
    }

    return (
      <li>
        <Persona {...userProfile} coinSize={35} />
        <ul className='menu dark right'>
          {accountMenu.map((item, key) => (
            <li key={key}>{clickableItem(item)}</li>
          ))}
        </ul>
      </li>
    )
  }

  function renderLogo(systemName: string, logo?: ImageBitmap) {
    const logoAsImage = () => {
      const altImage = `Logo ${systemName}`
      return <img src='~/images/logo-white.png' alt={altImage} />
    }

    const logoAsString = () => {
      return <h1>{systemName.trim()}</h1>
    }

    const selectLogo = () => {
      if (logo === undefined)
        return logoAsString()

      return logoAsImage()
    }

    return (
      <div className='logo'>
        <a href='/'>{selectLogo()}</a>
      </div>
    )
  }

  return (
    <header className='acrylic header'>
      {renderLogo(props.systemName, props.logo)}
      <div className='line'></div>
      <div className='right'>
        <ul>{constructAccountMenu(props.name, props.accountMenu)}</ul>
      </div>
    </header>
  )
}

export { Header }
