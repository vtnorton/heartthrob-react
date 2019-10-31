/* eslint-disable no-unused-vars */
import * as React from 'react'
import 'heartthrob'
import HeartthrobClasses from '../Heartthrob-Classes'

interface Props {
    children: string,
    title?: string,
    acrylic?: boolean
    shadow?: number
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
        <HeartthrobClasses mainClass='card' acrylic={props.acrylic}>
            <div>
                {cardTitle()}
                {props.children}
            </div>
        </HeartthrobClasses>
    )
}

export default Card
