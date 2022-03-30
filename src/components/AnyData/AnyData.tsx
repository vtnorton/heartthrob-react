import React from 'react'

import './AnyData.scss'

interface Props {
	onClick?: any,
	entityName?: EntityName
}

const AnyDataComponent = (props: Props) => {
	return (
		<div className='anydata'>
			<h6 className='text-center text-mid-black'>Nenhum {props.entityName?.singleName} cadastrado 😓</h6>
			<p className='text-center text-light'>Nenhum {props.entityName?.singleName} foi cadastrado no sistema ainda, <a onClick={props.onClick}>cadastre um novo</a>.</p>
		</div>
	)
}

export interface EntityName {
	singleName: string,
}

export default AnyDataComponent