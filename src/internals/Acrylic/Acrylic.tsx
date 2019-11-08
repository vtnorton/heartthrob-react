import * as React from 'react'

interface Props {
    children: string,
    mainClass: string,
    acrylic: boolean
}

const HeartthrobProps = ({ children, mainClass, acrylic }) => {
    const acrylicClass = acrylic ? 'acrylic' : '';

    const addClassesToChild = (mainClass: string) => {
        return (child: React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>) => {
            return React.cloneElement(child, { className: mainClass + ' ' + acrylicClass });
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

export default HeartthrobProps
