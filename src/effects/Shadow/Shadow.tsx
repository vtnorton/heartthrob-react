import * as React from 'react'

interface Props {
  children?: any
  main?: string
  shadow?: string
}

const ShadowEffect = ({ children, main, shadow }: Props) => {
  const mainClass = main ? main : ''

  const getShadowClass = () => {
    if (shadow) {
      return shadow
    } else {
      return 'shadow'
    }
  }

  const addClassesToChild = (mainClass: string) => {
    return (
      child: React.DetailedReactHTMLElement<
        {
          className: string
        },
        HTMLElement
      >,
    ) => {
      return React.cloneElement(child, { className: mainClass + ' ' + getShadowClass() })
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

export default ShadowEffect
