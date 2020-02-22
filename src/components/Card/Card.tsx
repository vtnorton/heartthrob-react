/* eslint-disable no-unused-vars */
import * as React from 'react'
import 'heartthrob'
import Acrylic from '../../effects/Acrylic/Acrylic'
import Shadow from '../../effects/Shadow/Shadow'


interface Props {
    children: any,
    title?: string,
    acrylic?: boolean,
    shadow?: string
}

const Card = (props: Props) => {

    const cardTitle = () => {
        return (props.title) ?
            (<>
                <h4>{props.title}</h4>
                <hr />
            </>) : null;
    };

    return (
        <Shadow >
            <Acrylic main='card' acrylic={props.acrylic}>
                <div>
                    {cardTitle()}
                    {props.children}
                </div>
            </Acrylic>
        </Shadow>
    )
}

export default Card
