import * as React from 'react'

const HeartthrobClasses = ({ children, mainClass, acrylic }) => {
    const acrylicClass = acrylic ? 'acrylic' : ''; //espaços desnecessários
    const classes = `${acrylicClass} no-shadown`;

    const addClassesToChild = (mainClass: string) => {
        return (child: React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>) => {
            return React.cloneElement(child, { className: mainClass + ' ' + classes });
        };
    }

    const addClassesToChildren = ({ children, mainClass }: {
        children: {
            map: (arg0: (child: any) => React.DetailedReactHTMLElement<{
                className: string;
            }, HTMLElement>) => void;
        }; mainClass: string;
    }) => {
        return children.map(addClassesToChild(mainClass));
    }

    return <>
        {children.length > 1 ? addClassesToChildren({ children, mainClass }) : addClassesToChild(mainClass)(children)}
    </>;
}

export default HeartthrobClasses
