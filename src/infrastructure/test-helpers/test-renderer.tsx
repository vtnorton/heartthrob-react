import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

const renderComponent = (ui: React.ReactElement) => {
	return {
		...render(ui),
	}
}

export * from '@testing-library/react'
export { renderComponent }
