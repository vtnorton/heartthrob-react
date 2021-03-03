export const removeSpecialCharacters = (text: string): string => {
	return text
		.toLowerCase()
		.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
		.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
		.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
		.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
		.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
		.replace(new RegExp('[Ç]', 'gi'), 'c')
}

export const getIntials = (value: string): string => {
	value = removeSpecialCharacters(value)
		.replace(/\W*(\w)\w*/g, '$1')
		.toUpperCase()
		.trim()
	return value[0] + value[value.length - 1]
}
