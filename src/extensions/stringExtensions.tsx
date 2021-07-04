export const removeSpecialCharacters = (text: string): string => {
	if (text)
		return text
			.toLowerCase()
			.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
			.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
			.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
			.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
			.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
			.replace(new RegExp('[Ç]', 'gi'), 'c')
	return ''
}

export const getIntials = (value: string): string => {
	value = removeSpecialCharacters(value)
		.replace(/\W*(\w)\w*/g, '$1')
		.toUpperCase()
		.trim()
	return value[0] + value[value.length - 1]
}

export const notInformedDateTreatment = (date: Date | null | undefined): string => {
	if (date === undefined || date?.toString() === '0001-01-01T00:00:00')
		return 'Não informado.'

	return new Date(date as Date).toLocaleDateString()
}

export const notInformedTextTreatment = (text: string | null | undefined): string => {
	if (text === null || text === '' || text === undefined)
		return 'Não informado.'

	return text
}

export const notInformedTreatment = (item: any) => {
	if (item instanceof Date)
		return notInformedDateTreatment(item)

	return notInformedTextTreatment(item)
}