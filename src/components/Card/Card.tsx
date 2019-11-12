/* eslint-disable no-unused-vars */
import * as React from 'react'
import 'heartthrob'
import Acrylic from '../../internals/Acrylic/Acrylic'


interface Props {
    children: any,
    title?: string,
    acrylic?: boolean,
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
        <Acrylic mainClass='card' acrylic={props.acrylic}>
            <div>
                {cardTitle()}
                {props.children}
            </div>
        </Acrylic>
    )
}

export default Card
