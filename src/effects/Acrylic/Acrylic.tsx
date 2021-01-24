import * as React from 'react'

interface Props {
  children: any
  main?: string
  acrylic?: boolean
}

const AcrylicEffect = ({ children, main, acrylic }: Props) => {
  const acrylicClass = acrylic ? 'acrylic' : ''
  const mainClass = main ? main : ''

  const addClassesToChild = (mainClass: string) => {
    return (
      child: React.DetailedReactHTMLElement<
        {
          className: string
        },
        HTMLElement
      >,
    ) => {
      return React.cloneElement(child, { className: mainClass + ' ' + acrylicClass })
    }
  }

  const addClassesToChildren = ({
    children,
    mainClass,
  }: {
    children: {
      map: (
        arg0: (
          child: any,
        ) => React.DetailedReactHTMLElement<
          {
            className: string
          },
          HTMLElement
        >,
      ) => void
    }
    mainClass: string
  }) => {
    return children.map(addClassesToChild(mainClass))
  }

  return (
    <>
      {children.length > 1
        ? addClassesToChildren({ children, mainClass })
        : addClassesToChild(mainClass)(children)}
    </>
  )
}

export default AcrylicEffect
