import { getIntials, notInformedTextTreatment, removeSpecialCharacters } from './stringExtensions'

describe('Remove special characters', () => {
	it('should return string with no special characters', () => {
		const initial = 'víçãáê@'
		const final = 'vicaae@'

		const result = removeSpecialCharacters(initial)
		expect(result).toBe(final)
	})
})

describe('Get initials', () => {
	it('should return the first letter from the first word and the first letter of the last word', () => {
		const initial = 'Vitor T Norton'
		const final = 'VN'

		const result = getIntials(initial)

		expect(result).toBe(final)
	})

	it('should return the first letter twice when usign only one word', () => {
		const initial = 'Vitor'
		const final = 'VV'

		const result = getIntials(initial)

		expect(result).toBe(final)
	})

	it('should return the letters with uppercase', () => {
		const initial = 'Vitor'
		const final = 'vv'

		const result = getIntials(initial)

		expect(result).not.toBe(final)
	})

	describe('notInformadTreatment', () => {
		it('should return NotInformed text when no data is passed', () => {
			const values = [null, undefined, '']
			values.forEach(element => {
				const result = notInformedTextTreatment(element)
				expect(result).toBe('Não informado.')
			})
		})

		it('should return text when it is passed', () => {
			const value = 'Lorem ipsum dolor siet'
			const result = notInformedTextTreatment(value)
			
			expect(result).toBe(value)
		})
	})
})
